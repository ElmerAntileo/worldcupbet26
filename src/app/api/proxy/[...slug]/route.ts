/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * GEO-BLOCKING BYPASS PROXY
 * Fetches content with spoofed headers to bypass IP-based geo-blocking
 */

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const targetUrl = decodeURIComponent(params.slug.join('/'));

    if (!targetUrl || !targetUrl.startsWith('http')) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    console.log('[PROXY] Fetching:', targetUrl);

    // Aggressive headers to bypass geo-blocking
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0',
        // Geo-location headers
        'CF-IPCountry': 'US',
        'CF-Connecting-IP': '8.8.8.8',
        'X-Forwarded-For': '8.8.8.8',
        'X-Real-IP': '8.8.8.8',
      },
      redirect: 'follow',
    });

    const html = await response.text();

    return new NextResponse(html, {
      status: response.status,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
      },
    });

  } catch (error: unknown) {
    console.error('[PROXY] Error:', error);
    return new NextResponse('Proxy error: ' + String(error), {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
