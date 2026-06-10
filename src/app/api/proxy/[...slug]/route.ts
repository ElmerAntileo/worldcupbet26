import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * WORKING GEO-BYPASS: Tor Network Integration
 * Uses Tor network to completely hide IP and location
 * Routes requests through multiple exit nodes
 * Bookmakers cannot block Tor
 */

async function fetchThroughTor(url: string): Promise<string | null> {
  try {
    console.log('[TOR] Fetching through Tor network:', url);

    // Use torify to route curl through Tor
    // torify makes all network traffic go through Tor SOCKS proxy
    const command = `torify curl -s -m 20 -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "${url}" 2>&1`;

    const { stdout, stderr } = await execAsync(command);

    if (stderr && stderr.includes('error')) {
      console.log('[TOR] Stderr:', stderr);
      return null;
    }

    const html = stdout;

    // Check if we got a valid response (not blocked)
    if (html && html.length > 1000 && !html.includes('404')) {
      console.log('[✅ TOR SUCCESS] Fetched', html.length, 'bytes through Tor');
      return html;
    }

    return null;
  } catch (error: unknown) {
    console.log('[TOR] Error:', error);
    return null;
  }
}

// Fallback: Try direct fetch
async function fetchDirect(url: string): Promise<string | null> {
  try {
    console.log('[DIRECT] Fallback fetch');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      credentials: 'omit',
    });

    if (response.ok) {
      return await response.text();
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

    // Try Tor first - most reliable for geo-bypass
    let html = await fetchThroughTor(targetUrl);

    // Fallback to direct
    if (!html) {
      html = await fetchDirect(targetUrl);
    }

    if (!html) {
      return NextResponse.json(
        { error: 'Could not fetch content' },
        { status: 503 }
      );
    }

    // Inject base URL for relative links
    if (html.includes('</head>')) {
      html = html.replace('</head>', `<base href="${new URL(targetUrl).origin}/"></head>`);
    }

    console.log('[✅ SUCCESS] Serving', html.length, 'bytes');

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Bypass-Method': 'Tor',
      },
    });

  } catch (error: unknown) {
    console.error('[PROXY] Fatal error:', error);
    return NextResponse.json(
      { error: 'Proxy error', details: String(error) },
      { status: 500 }
    );
  }
}
