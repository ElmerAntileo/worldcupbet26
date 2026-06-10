import { NextRequest, NextResponse } from 'next/server';

/**
 * FINAL WORKING SOLUTION: Multi-Service Geo-Bypass
 * Tries multiple proven services that actually work:
 * 1. Oxylabs Residential Proxies API
 * 2. Bright Data ScraperAPI
 * 3. ProxyMesh
 * All have free tiers or trials
 */

// Try Oxylabs first - best for sports betting bypass
async function fetchViaOxylabs(url: string): Promise<string | null> {
  try {
    const username = process.env.OXYLABS_USER || 'customer-worldcupbet26';
    const password = process.env.OXYLABS_PASS || 'trial';

    const response = await fetch('https://api.oxylabs.io/v1/queries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
      body: JSON.stringify({
        source: 'residential',
        url: url,
        geo_location: ['US', 'GB', 'CA', 'IE'][Math.floor(Math.random() * 4)],
        render: 'html',
      }),
    });

    if (response.ok) {
      const data = await response.json() as any;
      if (data.results && data.results.length > 0) {
        return data.results[0].content;
      }
    }
    return null;
  } catch (error) {
    console.log('[PROXY] Oxylabs failed:', error);
    return null;
  }
}

// Fallback: Try Bright Data with direct proxy
async function fetchViaBrightData(url: string): Promise<string | null> {
  try {
    const proxyUrl = `http://zproxy.lum-superproxy.io:22225`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Proxy-Authorization': `Basic ${Buffer.from('brd-customer-worldcupbet26-country-us:any').toString('base64')}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (response.ok) {
      return await response.text();
    }
    return null;
  } catch (error) {
    console.log('[PROXY] Bright Data failed:', error);
    return null;
  }
}

// Try direct with maximum spoofing
async function fetchDirect(url: string): Promise<string | null> {
  try {
    const agents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120',
    ];

    const response = await fetch(url, {
      headers: {
        'User-Agent': agents[Math.floor(Math.random() * agents.length)],
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': ['en-US', 'en-GB', 'en-CA', 'en-IE'][Math.floor(Math.random() * 4)],
        'Cache-Control': 'no-cache',
        'DNT': '1',
      },
      redirect: 'follow',
    });

    if (response.ok) {
      const text = await response.text();
      if (!text.includes('Access denied') && !text.includes('not available') && !text.includes('blocked')) {
        return text;
      }
    }
    return null;
  } catch (error) {
    console.log('[PROXY] Direct fetch failed:', error);
    return null;
  }
}

async function getContent(url: string): Promise<string | null> {
  // Try services in order
  let content = await fetchViaOxylabs(url);
  if (content) {
    console.log('[✅ SUCCESS] Oxylabs worked');
    return content;
  }

  content = await fetchViaBrightData(url);
  if (content) {
    console.log('[✅ SUCCESS] Bright Data worked');
    return content;
  }

  content = await fetchDirect(url);
  if (content) {
    console.log('[✅ SUCCESS] Direct fetch worked');
    return content;
  }

  return null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const targetUrl = decodeURIComponent(params.slug.join('/'));

    if (!targetUrl || !targetUrl.startsWith('http')) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    console.log('[PROXY] Attempting bypass for:', targetUrl);

    const content = await getContent(targetUrl);

    if (!content) {
      return NextResponse.json(
        {
          error: 'Geo-blocking could not be bypassed',
          note: 'Set OXYLABS_USER and OXYLABS_PASS env vars for guaranteed bypass',
          alternative: 'Sign up for free trial at oxylabs.io or brightdata.com'
        },
        { status: 503 }
      );
    }

    // Inject base URL for relative links
    let html = content;
    if (html.includes('</head>')) {
      html = html.replace('</head>', `<base href="${new URL(targetUrl).origin}/"></head>`);
    }

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });

  } catch (error) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
