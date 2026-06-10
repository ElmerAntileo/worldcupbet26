/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * ULTIMATE GEO-BLOCKING BYPASS PROXY
 * Multi-strategy approach with aggressive geo-spoofing, redirect handling,
 * HTML injection, and fallback mechanisms
 */

const US_HEADERS = {
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
  'Sec-Fetch-User': '?1',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0',
  // AGGRESSIVE geo-spoofing - multiple IP headers
  'CF-IPCountry': 'US',
  'CF-Connecting-IP': '1.1.1.1',
  'X-Forwarded-For': '1.1.1.1, 1.1.1.1',
  'X-Forwarded-Proto': 'https',
  'X-Real-IP': '1.1.1.1',
  'X-Client-IP': '1.1.1.1',
  'X-Original-IP': '1.1.1.1',
  'X-Originating-IP': '1.1.1.1',
  'True-Client-IP': '1.1.1.1',
  'HTTP-CF-Connecting-IP': '1.1.1.1',
  'HTTP-X-Forwarded-For': '1.1.1.1',
  'CF-Visitor': '{"scheme":"https"}',
};

async function fetchWithSpoofing(url: string, followRedirects = true): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: US_HEADERS,
      redirect: followRedirects ? 'follow' : 'manual',
      // Simulate real browser behavior
    });
    return response;
  } catch (error) {
    console.error('[PROXY] Fetch error:', error);
    throw error;
  }
}

function injectRedirectScript(html: string, targetUrl: string): string {
  // Inject aggressive redirect script if page seems blocked
  if (html.includes('access') || html.includes('blocked') || html.includes('restricted')) {
    const script = `
      <script>
        (function() {
          try {
            // Force redirect to target URL
            window.location.replace('${targetUrl.replace(/'/g, "\\'")}');
            window.location.href = '${targetUrl.replace(/'/g, "\\'")}';
            top.location.href = '${targetUrl.replace(/'/g, "\\'")}';
            setTimeout(() => { window.location = '${targetUrl.replace(/'/g, "\\'")}'; }, 100);
          } catch(e) {
            console.log('Redirect:', '${targetUrl.replace(/'/g, "\\'")}');
          }
        })();
      </script>
    `;
    return html.replace('</head>', script + '</head>');
  }
  return html;
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

    console.log('[PROXY] ULTIMATE bypass for:', targetUrl);

    // STRATEGY 1: Direct fetch with all spoofing headers
    console.log('[PROXY] ▶️ STRATEGY 1: Direct fetch with ultra-aggressive spoofing');
    try {
      const response = await fetchWithSpoofing(targetUrl, true);
      let html = await response.text();

      // If successful (2xx), return it
      if (response.ok) {
        console.log('[PROXY] ✅ STRATEGY 1 SUCCESS (HTTP', response.status + ')');
        // Inject redirect script as backup
        html = injectRedirectScript(html, targetUrl);
        return new NextResponse(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'X-Proxy-Method': 'direct-fetch',
          },
        });
      }

      // If blocked (4xx/5xx), try fallback
      console.log('[PROXY] ❌ STRATEGY 1 blocked (HTTP', response.status + ')');
    } catch (e) {
      console.error('[PROXY] STRATEGY 1 error:', e);
    }

    // STRATEGY 2: Try multiple IP addresses
    console.log('[PROXY] ▶️ STRATEGY 2: Trying multiple IP addresses');
    const ips = ['1.1.1.1', '8.8.8.8', '208.67.222.222', '9.9.9.9', '140.82.112.1'];
    for (const ip of ips) {
      try {
        const customHeaders = { ...US_HEADERS };
        customHeaders['CF-Connecting-IP'] = ip;
        customHeaders['X-Forwarded-For'] = ip;
        customHeaders['X-Real-IP'] = ip;
        customHeaders['True-Client-IP'] = ip;

        const response = await fetch(targetUrl, {
          method: 'GET',
          headers: customHeaders,
          redirect: 'follow',
        });

        if (response.ok) {
          let html = await response.text();
          html = injectRedirectScript(html, targetUrl);
          console.log('[PROXY] ✅ STRATEGY 2 SUCCESS with IP', ip);
          return new NextResponse(html, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache, no-store',
              'X-Proxy-IP': ip,
            },
          });
        }
      } catch (e) {
        console.log('[PROXY] IP', ip, 'failed');
      }
    }

    // STRATEGY 3: Inject meta refresh redirect
    console.log('[PROXY] ▶️ STRATEGY 3: Meta refresh redirect');
    const metaRedirect = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url='${targetUrl}'">
        <title>Redirecting...</title>
        <script>
          window.location.href = '${targetUrl}';
        </script>
      </head>
      <body>
        <p>Redirecting to betting site...</p>
        <p><a href="${targetUrl}">Click here if not redirected</a></p>
      </body>
      </html>
    `;
    console.log('[PROXY] ✅ STRATEGY 3: Returning meta redirect');
    return new NextResponse(metaRedirect, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
        'X-Proxy-Method': 'meta-redirect',
      },
    });

  } catch (error: unknown) {
    console.error('[PROXY] FATAL ERROR:', error);
    // Return fallback redirect even on error
    const fallbackUrl = decodeURIComponent(params.slug.join('/'));
    return new NextResponse(
      `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url='${fallbackUrl}'"><script>window.location='${fallbackUrl}';</script></head><body>Redirecting...</body></html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }
}
