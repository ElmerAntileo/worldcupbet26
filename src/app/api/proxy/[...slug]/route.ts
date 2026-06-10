import { NextRequest, NextResponse } from 'next/server';

/**
 * WORKING GEO-BLOCKING BYPASS PROXY
 * Fetches content with spoofed headers to bypass geo-blocks
 */

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
];

const LANGUAGES = ['en-US,en;q=0.9', 'en-GB,en;q=0.9', 'en-CA,en;q=0.9', 'en-IE,en;q=0.9'];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
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

    console.log('[PROXY] Fetching:', targetUrl);

    // Fetch with spoofed headers to bypass geo-blocking
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': getRandom(USER_AGENTS),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': getRandom(LANGUAGES),
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Referer': new URL(targetUrl).origin + '/',
        'Upgrade-Insecure-Requests': '1',
      },
      redirect: 'follow',
    });

    // Check if HTML - inject base tag for relative links
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      let html = await response.text();
      const baseUrl = new URL(targetUrl).origin;
      const proxyBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.worldcupbet26.com';

      // Inject <base> tag to handle relative URLs + intercept script
      const injectScript = `<base href="${baseUrl}/">
<script>
(function() {
  const proxyBase = '${proxyBase}/api/proxy/';

  // Intercept fetch
  const origFetch = window.fetch;
  window.fetch = function(url, ...args) {
    if (typeof url === 'string' && url.startsWith('http') && !url.includes('${proxyBase}')) {
      url = proxyBase + encodeURIComponent(url);
    }
    return origFetch.call(this, url, ...args);
  };

  // Intercept XHR
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    if (typeof url === 'string' && url.startsWith('http') && !url.includes('${proxyBase}')) {
      url = proxyBase + encodeURIComponent(url);
    }
    return origOpen.call(this, method, url, ...args);
  };
})();
</script>`;

      // Inject after <head> or at start of body
      if (html.includes('</head>')) {
        html = html.replace('</head>', injectScript + '</head>');
      } else if (html.includes('<body')) {
        html = html.replace(/(<body[^>]*>)/i, '$1' + injectScript);
      } else {
        html = injectScript + html;
      }

      return new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Proxy': 'active',
        },
      });
    }

    // For non-HTML (images, JS, CSS, etc), return as-is
    return new NextResponse(await response.arrayBuffer(), {
      status: response.status,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error) {
    console.error('[PROXY] Error:', error);
    return NextResponse.json(
      { error: 'Proxy failed', details: String(error) },
      { status: 500 }
    );
  }
}
