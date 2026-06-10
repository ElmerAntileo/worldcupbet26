/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * ADVANCED GEO-BLOCKING BYPASS PROXY
 * Uses multiple strategies:
 * 1. Header spoofing with geo-location headers
 * 2. CloudFlare bypass
 * 3. Free proxy services (cors-anywhere, allorigins)
 * 4. Direct fetch with aggressive headers
 */

// Free proxy services that can bypass geo-blocking
const FREE_PROXY_SERVICES = [
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/raw?url=',
];

async function fetchViaFreeProxy(url: string, proxyUrl: string): Promise<Response | null> {
  try {
    const fullUrl = proxyUrl + encodeURIComponent(url);
    console.log('[PROXY] Trying free proxy:', proxyUrl);

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (response.ok) {
      const html = await response.text();
      return new NextResponse(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
  } catch (error) {
    console.log('[PROXY] Free proxy failed:', error);
  }
  return null;
}

async function fetchWithAggresiveBypass(url: string): Promise<Response | null> {
  try {
    console.log('[PROXY] Attempting aggressive bypass for:', url);

    // Headers that make the request appear from US
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Cache-Control': 'max-age=0',
      // Geo-location headers to spoof US location
      'CF-IPCountry': 'US',
      'CF-Connecting-IP': '8.8.8.8', // Google DNS IP (US)
      'X-Forwarded-For': '8.8.8.8',
      'X-Real-IP': '8.8.8.8',
    };

    const response = await fetch(url, {
      method: 'GET',
      headers,
      redirect: 'follow',
    });

    console.log('[PROXY] Response status:', response.status);

    if (response.ok || response.status === 403) {
      const html = await response.text();
      return new NextResponse(html, {
        status: response.status,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store',
        },
      });
    }

    return null;
  } catch (error) {
    console.error('[PROXY] Aggressive bypass error:', error);
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

    console.log('[PROXY] Bypassing geo-blocking for:', targetUrl);

    // Strategy 1: Try aggressive bypass with spoofed headers
    let response = await fetchWithAggresiveBypass(targetUrl);
    if (response) {
      console.log('[PROXY] ✓ Success with aggressive bypass');
      return response;
    }

    // Strategy 2: Try free proxy services
    for (const proxyUrl of FREE_PROXY_SERVICES) {
      console.log('[PROXY] Trying free proxy service:', proxyUrl);
      response = await fetchViaFreeProxy(targetUrl, proxyUrl);
      if (response) {
        console.log('[PROXY] ✓ Success with proxy service:', proxyUrl);
        return response;
      }
    }

    // If all strategies fail, return the URL for client-side redirect
    console.log('[PROXY] All bypass strategies failed, returning redirect');
    return NextResponse.json(
      {
        success: false,
        message: 'Proxy bypass failed. Opening site directly.',
        redirectUrl: targetUrl,
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
