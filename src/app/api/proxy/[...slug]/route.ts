/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * ADVANCED GEO-BLOCKING BYPASS PROXY
 * Routes through CORS proxy with JavaScript support + header spoofing
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

    console.log('[PROXY] Bypassing geo-block for:', targetUrl);

    // Strategy 1: Try direct fetch with aggressive geo-spoofing headers
    console.log('[PROXY] Strategy 1: Direct fetch with header spoofing');
    let response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'no-cache',
        // Aggressive geo-location spoofing
        'CF-IPCountry': 'US',
        'CF-Connecting-IP': '8.8.8.8',
        'X-Forwarded-For': '8.8.8.8,8.8.4.4',
        'X-Real-IP': '8.8.8.8',
        'X-Client-IP': '8.8.8.8',
        'X-Original-IP': '8.8.8.8',
      },
      redirect: 'manual', // Handle redirects manually
    });

    console.log('[PROXY] Strategy 1 response:', response.status);

    // If it's a redirect, follow it
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const redirectUrl = response.headers.get('location');
      if (redirectUrl) {
        console.log('[PROXY] Following redirect to:', redirectUrl);
        response = await fetch(redirectUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'CF-IPCountry': 'US',
            'X-Forwarded-For': '8.8.8.8',
            'X-Real-IP': '8.8.8.8',
          },
          redirect: 'follow',
        });
      }
    }

    const html = await response.text();

    // Check if response contains error/block messages
    if (html.includes('Access denied') || html.includes('blocked') || html.includes('not available')) {
      console.log('[PROXY] Response contains blocking message, trying alternative...');

      // Strategy 2: Route through cors.eu.org proxy
      console.log('[PROXY] Strategy 2: Using cors.eu.org proxy');
      const corsProxyUrl = `https://cors.eu.org/?${encodeURIComponent(targetUrl)}`;
      const corsResponse = await fetch(corsProxyUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121.0.0.0 Safari/537.36',
        },
      });

      if (corsResponse.ok) {
        const corsHtml = await corsResponse.text();
        return new NextResponse(corsHtml, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store',
          },
        });
      }
    }

    return new NextResponse(html, {
      status: response.status,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
      },
    });

  } catch (error: unknown) {
    console.error('[PROXY] Fatal error:', error);
    return new NextResponse(
      `<html><body><h1>Proxy Error</h1><p>${String(error)}</p></body></html>`,
      {
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }
}
