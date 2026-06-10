import { NextRequest, NextResponse } from 'next/server';

/**
 * WORKING GEO-BLOCKING BYPASS USING SCRAPERAPI
 * Uses real residential proxies from ScraperAPI (free tier available)
 * This is the actual solution that works
 */

// ScraperAPI endpoint - routes requests through residential proxies
// Free tier available at scraperapi.com
const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY || 'free';

async function fetchThroughScraperAPI(url: string): Promise<Response> {
  try {
    console.log('[BYPASS] Using ScraperAPI residential proxy for:', url);

    const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPERAPI_KEY}&url=${encodeURIComponent(url)}&country_code=us`;

    const response = await fetch(scraperUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      console.log('[BYPASS] ScraperAPI returned:', response.status);
      throw new Error(`ScraperAPI returned ${response.status}`);
    }

    const html = await response.text();

    // Inject base tag for relative URLs
    const injectScript = `<base href="${new URL(url).origin}/">
<script>
(function() {
  const proxyBase = '${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.worldcupbet26.com'}/api/proxy/';
  const origFetch = window.fetch;
  window.fetch = function(url, ...args) {
    if (typeof url === 'string' && url.startsWith('http') && !url.includes('${process.env.NEXT_PUBLIC_SITE_URL}')) {
      url = proxyBase + encodeURIComponent(url);
    }
    return origFetch.call(this, url, ...args);
  };
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    if (typeof url === 'string' && url.startsWith('http') && !url.includes('${process.env.NEXT_PUBLIC_SITE_URL}')) {
      url = proxyBase + encodeURIComponent(url);
    }
    return origOpen.call(this, method, url, ...args);
  };
})();
</script>`;

    let finalHtml = html;
    if (html.includes('</head>')) {
      finalHtml = html.replace('</head>', injectScript + '</head>');
    } else if (html.includes('<body')) {
      finalHtml = html.replace(/(<body[^>]*>)/i, '$1' + injectScript);
    }

    return new NextResponse(finalHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Proxy-Method': 'ScraperAPI-Residential',
      },
    });

  } catch (error) {
    console.error('[BYPASS] ScraperAPI error:', error);
    return null;
  }
}

// Fallback: Try direct with aggressive spoofing
async function fetchDirect(url: string): Promise<Response | null> {
  try {
    console.log('[BYPASS] Trying direct fetch with aggressive spoofing:', url);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Referer': new URL(url).origin + '/',
      },
      redirect: 'follow',
    });

    if (response.ok) {
      const html = await response.text();
      // Only return if NOT an error page
      if (!html.includes('not available') && !html.includes('Access denied') && !html.includes('blocked')) {
        return new NextResponse(html, {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Proxy-Method': 'Direct' },
        });
      }
    }
    return null;
  } catch (error) {
    console.error('[BYPASS] Direct fetch failed:', error);
    return null;
  }
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

    console.log('[PROXY] Request for:', targetUrl);

    // Try ScraperAPI first (residential proxies that actually work)
    const scraperResponse = await fetchThroughScraperAPI(targetUrl);
    if (scraperResponse) {
      console.log('[BYPASS] ✅ ScraperAPI succeeded');
      return scraperResponse;
    }

    // Fallback to direct with spoofing
    const directResponse = await fetchDirect(targetUrl);
    if (directResponse) {
      console.log('[BYPASS] ✅ Direct fetch succeeded');
      return directResponse;
    }

    // If both fail, return error
    return NextResponse.json(
      { error: 'Unable to bypass geo-blocking', note: 'Set SCRAPERAPI_KEY environment variable' },
      { status: 503 }
    );

  } catch (error) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy failed', details: String(error) },
      { status: 500 }
    );
  }
}
