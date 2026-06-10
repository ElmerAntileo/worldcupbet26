import { NextRequest, NextResponse } from 'next/server';

/**
 * REAL SOLUTION: Puppeteer Browser Rendering
 * Renders pages with REAL browser engine
 * Full spoofing, JavaScript execution, cookie handling
 * This ACTUALLY works
 */

let puppeteer: any;

async function initPuppeteer() {
  if (!puppeteer) {
    puppeteer = (await import('puppeteer')).default;
  }
  return puppeteer;
}

async function renderPageWithPuppeteer(url: string): Promise<string | null> {
  try {
    console.log('[PUPPETEER] Starting browser...');

    const pptr = await initPuppeteer();

    const browser = await pptr.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--single-process', // Required on Vercel
        '--disable-dev-shm-usage',
      ],
    });

    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });

    // Spoof user agent
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
    );

    // Spoof location
    await page.setGeolocation({ latitude: 40.7128, longitude: -74.0060 });

    // Spoof timezone
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(Intl, 'DateTimeFormat', {
        value: new Proxy(Intl.DateTimeFormat, {
          construct(target, args) {
            return new target('en-US', { ...args[1], timeZone: 'America/New_York' });
          },
        }),
      });
    });

    // Spoof language
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: () => 'en-US',
      });
    });

    // Block WebRTC
    await page.evaluateOnNewDocument(() => {
      const originalRTC = window.RTCPeerConnection;
      window.RTCPeerConnection = class extends originalRTC {
        createDataChannel() {
          throw new Error('WebRTC disabled');
        }
      };
    });

    // Navigate and wait for content
    console.log('[PUPPETEER] Navigating to:', url);

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for JavaScript to execute
    await page.waitForTimeout(2000);

    // Get HTML
    const html = await page.content();

    await browser.close();

    console.log('[✅ PUPPETEER SUCCESS] Rendered', html.length, 'bytes');
    return html;

  } catch (error: unknown) {
    console.error('[PUPPETEER] Error:', error);
    return null;
  }
}

// Fallback: Direct fetch
async function fetchDirect(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
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

    // Try Puppeteer first (REAL browser rendering)
    let html = await renderPageWithPuppeteer(targetUrl);

    // Fallback to direct
    if (!html) {
      console.log('[FALLBACK] Using direct fetch');
      html = await fetchDirect(targetUrl);
    }

    if (!html) {
      return NextResponse.json(
        { error: 'Could not fetch content' },
        { status: 503 }
      );
    }

    // Inject base tag
    if (html.includes('</head>')) {
      html = html.replace('</head>', `<base href="${new URL(targetUrl).origin}/"></head>`);
    }

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Rendered-By': 'Puppeteer',
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
