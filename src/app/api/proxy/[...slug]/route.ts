import { NextRequest, NextResponse } from 'next/server';

/**
 * ADVANCED GEO-BLOCKING BYPASS PROXY
 * Uses multiple free proxy services with smart failover
 * Masks IP location, user agents, and headers
 */

// Multiple free CORS proxy services (fallback chain)
const FREE_PROXY_SERVICES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://thingproxy.freeboard.io/fetch/${url}`,
  (url: string) => `https://corsanywhere.herokuapp.com/${url}`,
];

// Rotating user agents to avoid detection
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
];

// Fake country locations (US, UK, Canada, Ireland)
const FAKE_LOCATIONS = [
  'US', 'GB', 'CA', 'IE'
];

function getRandomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function getRandomLocation(): string {
  return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)];
}

async function fetchWithProxy(url: string, attempt: number = 0): Promise<Response> {
  if (attempt >= FREE_PROXY_SERVICES.length) {
    // All proxies failed, return direct link
    console.log('[PROXY] All proxies exhausted, returning direct redirect');
    return NextResponse.redirect(url, { status: 307 });
  }

  const proxyService = FREE_PROXY_SERVICES[attempt];
  const proxyUrl = proxyService(url);

  try {
    const response = await fetch(proxyUrl, {
      headers: {
        'User-Agent': getRandomUserAgent(),
        'X-Forwarded-For': `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
        'X-Forwarded-Proto': 'https',
        'X-Forwarded-Host': new URL(url).hostname,
        'CF-IPCountry': getRandomLocation(),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
      },
      timeout: 10000,
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Proxy returned ${response.status}`);
    }

    return response;
  } catch (error) {
    console.log(`[PROXY] Attempt ${attempt + 1} failed:`, error);
    // Try next proxy service
    return fetchWithProxy(url, attempt + 1);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    // Extract the target URL from slug
    const targetUrl = decodeURIComponent(params.slug.join('/'));

    if (!targetUrl || !targetUrl.startsWith('http')) {
      return NextResponse.json(
        { error: 'Invalid URL' },
        { status: 400 }
      );
    }

    console.log('[PROXY] Forwarding request to:', targetUrl);

    // Try to fetch through proxy services
    const response = await fetchWithProxy(targetUrl);

    // Log successful proxy
    console.log('[PROXY] Successfully proxied to:', targetUrl);

    return response;
  } catch (error) {
    console.error('[PROXY] Error:', error);
    return NextResponse.json(
      { error: 'Proxy failed' },
      { status: 500 }
    );
  }
}
