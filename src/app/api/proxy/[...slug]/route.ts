/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * SIMPLE PROXY: Routes through with header spoofing
 * Works with Service Worker for complete geo-bypass
 */

async function fetchWithSpoofing(url: string): Promise<Response | null> {
  try {
    console.log('[PROXY] Fetching:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'DNT': '1',
      },
      credentials: 'omit',
    });

    if (response.ok) {
      const html = await response.text();
      return new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });
    }

    return null;
  } catch (error: unknown) {
    console.error('[PROXY] Error:', error);
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

    const response = await fetchWithSpoofing(targetUrl);

    if (!response) {
      return NextResponse.json(
        { error: 'Could not fetch content' },
        { status: 503 }
      );
    }

    return response;

  } catch (error: unknown) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
