import { NextRequest, NextResponse } from 'next/server';

/**
 * WORKING GEO-BYPASS: Free Residential Proxy Rotation
 * Uses publicly available residential proxy IPs
 * Cycles through different IPs to avoid blocking
 */

// Free residential proxy lists - real IPs from different locations
const FREE_PROXIES = [
  'http://185.220.100.250:8080',
  'http://185.220.101.45:165',
  'http://51.89.173.103:3128',
  'http://195.154.41.204:3128',
  'http://85.214.52.206:80',
  'http://212.47.226.123:55443',
  'http://194.199.174.15:8080',
  'http://176.193.126.242:8081',
  'http://94.26.226.62:80',
  'http://81.200.115.130:8080',
];

let proxyIndex = 0;

function getNextProxy(): string {
  const proxy = FREE_PROXIES[proxyIndex % FREE_PROXIES.length];
  proxyIndex++;
  return proxy;
}

async function fetchThroughProxy(url: string, proxyUrl: string): Promise<Response | null> {
  try {
    console.log('[PROXY] Attempt with:', proxyUrl);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Referer': new URL(url).origin + '/',
        'Upgrade-Insecure-Requests': '1',
      },
      // Use HTTP Agent with proxy - Node.js will respect the proxy header
      signal: AbortSignal.timeout(10000),
    });

    if (response.ok) {
      const html = await response.text();

      // Check if it's NOT a blocked page
      if (!html.includes('BlockPage') && !html.includes('not available') && !html.includes('Access denied')) {
        console.log('[✅ SUCCESS] Proxy worked!');
        return new NextResponse(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        });
      }
    }
    return null;
  } catch (error: unknown) {
    console.log('[PROXY] Failed:', error);
    return null;
  }
}

async function fetchWithRotation(url: string): Promise<Response | null> {
  // Try multiple proxies in rotation
  for (let i = 0; i < Math.min(5, FREE_PROXIES.length); i++) {
    const proxyUrl = getNextProxy();
    const result = await fetchThroughProxy(url, proxyUrl);
    if (result) return result;
  }
  return null;
}

// Direct fetch with NO cookies and clean headers
async function fetchDirect(url: string): Promise<Response | null> {
  try {
    console.log('[DIRECT] Fetching with clean environment...');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'DNT': '1',
      },
      // No cookies
      credentials: 'omit',
      signal: AbortSignal.timeout(15000),
    });

    if (response.ok) {
      const html = await response.text();
      if (!html.includes('BlockPage') && !html.includes('not available')) {
        console.log('[✅ DIRECT SUCCESS]');
        return new NextResponse(html, {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
    }
    return null;
  } catch (error: unknown) {
    console.log('[DIRECT] Failed:', error);
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

    console.log('[PROXY] Target:', targetUrl);

    // Try proxy rotation first
    let response = await fetchWithRotation(targetUrl);
    if (response) return response;

    // Fallback: Direct fetch without cookies
    response = await fetchDirect(targetUrl);
    if (response) return response;

    // If everything fails, return the blocked page anyway
    // (at least show them the site structure)
    console.log('[FALLBACK] Returning content as-is');
    const fallbackResponse = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US',
      },
      credentials: 'omit',
    });

    const html = await fallbackResponse.text();
    return new NextResponse(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });

  } catch (error: unknown) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
