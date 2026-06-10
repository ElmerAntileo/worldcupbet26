/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

/**
 * GEO-BYPASS PROXY
 * Routes through free proxy services to bypass geo-blocking
 * Used for affiliate links that are geo-restricted
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

    console.log('[GEO-BYPASS] Bypassing geo-block for:', targetUrl);

    // Strategy 1: Try AllOrigins free CORS proxy
    console.log('[GEO-BYPASS] Strategy 1: Using AllOrigins proxy...');
    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}&raw=true`;
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (response.ok) {
        const html = await response.text();
        console.log('[GEO-BYPASS] ✅ AllOrigins SUCCESS');
        return new NextResponse(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache',
            'X-Bypass-Method': 'allorigins',
          },
        });
      }
    } catch (e) {
      console.log('[GEO-BYPASS] AllOrigins failed, trying next...');
    }

    // Strategy 2: Try direct fetch with aggressive header spoofing for multiple regions
    console.log('[GEO-BYPASS] Strategy 2: Multi-region header spoofing...');
    const regions = [
      { ip: '1.1.1.1', country: 'US' },
      { ip: '8.8.8.8', country: 'US' },
      { ip: '208.67.222.222', country: 'US' },
    ];

    for (const region of regions) {
      try {
        const response = await fetch(targetUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'CF-IPCountry': region.country,
            'CF-Connecting-IP': region.ip,
            'X-Forwarded-For': region.ip,
            'X-Real-IP': region.ip,
            'X-Client-IP': region.ip,
            'True-Client-IP': region.ip,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
          },
          redirect: 'follow',
        });

        if (response.ok) {
          const html = await response.text();
          console.log(`[GEO-BYPASS] ✅ Direct fetch SUCCESS with region: ${region.country}`);
          return new NextResponse(html, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache',
              'X-Bypass-Method': 'direct-headers',
              'X-Region': region.country,
            },
          });
        }
      } catch (e) {
        console.log(`[GEO-BYPASS] Region ${region.country} failed`);
      }
    }

    // Strategy 3: Return meta-refresh redirect (client-side, unblockable)
    console.log('[GEO-BYPASS] Strategy 3: Client-side meta-refresh...');
    const safeUrl = targetUrl.replace(/"/g, '&quot;');
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=${safeUrl}">
<script>
  // Multiple redirect methods
  window.location.href = "${safeUrl}";
  window.location.replace("${safeUrl}");
  if(window.top !== window.self) {
    window.top.location.href = "${safeUrl}";
  }
</script>
</head>
<body>
<p>Redirecting to affiliate page...</p>
<p>If not redirected, <a href="${safeUrl}" target="_blank">click here</a></p>
</body>
</html>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache',
          'X-Bypass-Method': 'client-redirect',
        },
      }
    );
  } catch (error) {
    console.error('[GEO-BYPASS] ERROR:', error);
    return NextResponse.json(
      { error: 'Geo-bypass failed', details: String(error) },
      { status: 500 }
    );
  }
}
