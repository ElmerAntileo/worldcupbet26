import { NextRequest, NextResponse } from 'next/server';

/**
 * WORKING GEO-BLOCKING BYPASS PROXY
 * Server-side proxy that:
 * 1. Fetches content with spoofed headers (appears from allowed countries)
 * 2. Rewrites all links to route back through proxy
 * 3. Injects JavaScript to handle dynamic requests
 */

// Rotating user agents to appear as real users
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
];

// Fake allowed country accept-languages
const ACCEPT_LANGUAGES = [
  'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'en-CA,en;q=0.9',
  'en-IE,en;q=0.9',
];

function getRandomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function getRandomLanguage(): string {
  return ACCEPT_LANGUAGES[Math.floor(Math.random() * ACCEPT_LANGUAGES.length)];
}

function rewriteUrls(html: string, baseUrl: string): string {
  // Rewrite href attributes to route through proxy
  html = html.replace(/href=["'](?!(?:javascript|mailto|#|data:))/gi, (match) => {
    return match.replace(/href=["']/, 'href="' + process.env.NEXT_PUBLIC_SITE_URL + '/api/proxy/');
  });

  // Rewrite src attributes for images, scripts, etc
  html = html.replace(/src=["'](?!(?:javascript|data:))/gi, (match) => {
    return match.replace(/src=["']/, 'src="' + process.env.NEXT_PUBLIC_SITE_URL + '/api/proxy/');
  });

  // Inject script to intercept fetch/XHR requests
  const injectedScript = `
    <script>
    (function() {
      const proxyBase = '${process.env.NEXT_PUBLIC_SITE_URL}/api/proxy/';

      // Intercept fetch
      const originalFetch = window.fetch;
      window.fetch = function(...args) {
        let url = args[0];
        if (typeof url === 'string' && !url.startsWith('data:') && !url.startsWith('javascript:')) {
          url = proxyBase + encodeURIComponent(url);
          args[0] = url;
        }
        return originalFetch.apply(this, args);
      };

      // Intercept XMLHttpRequest
      const originalOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(method, url, ...rest) {
        if (typeof url === 'string' && !url.startsWith('data:') && !url.startsWith('javascript:')) {
          url = proxyBase + encodeURIComponent(url);
        }
        return originalOpen.call(this, method, url, ...rest);
      };
    })();
    </script>
  `;

  // Inject at end of <head> or start of <body>
  if (html.includes('</head>')) {
    html = html.replace('</head>', injectedScript + '</head>');
  } else if (html.includes('<body')) {
    html = html.replace(/(<body[^>]*>)/i, '$1' + injectedScript);
  }

  return html;
}

async function fetchWithSpoofedHeaders(url: string): Promise<Response> {
  try {
    console.log('[PROXY] Fetching with spoofed headers:', url);

    const response = await fetch(url, {
      headers: {
        'User-Agent': getRandomUserAgent(),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': getRandomLanguage(),
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Referer': new URL(url).origin + '/',
        'DNT': '1',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
      },
      redirect: 'follow',
      credentials: 'include',
    });

    if (!response.ok) {
      console.log(`[PROXY] Server returned ${response.status}`);
      return response;
    }

    // Check if response is HTML
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      let html = await response.text();

      // Rewrite all URLs to route through proxy
      html = rewriteUrls(html, url);

      // Return modified HTML
      return new NextResponse(html, {
        status: response.status,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Proxy': 'active',
        },
      });
    }

    // For non-HTML (images, CSS, JS, etc), return as-is
    return response;

  } catch (error) {
    console.error('[PROXY] Fetch error:', error);
    throw error;
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

    console.log('[PROXY] Request for:', targetUrl);

    // Fetch with spoofed headers to bypass geo-blocking
    const response = await fetchWithSpoofedHeaders(targetUrl);

    console.log('[PROXY] Successfully proxied:', targetUrl);
    return response;

  } catch (error) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
