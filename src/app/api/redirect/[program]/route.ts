import { NextRequest, NextResponse } from 'next/server';

// Default affiliate links (can be overridden via admin panel)
// NOTE: Betsson blocked - doesn't support UK/US/Canada/Ireland
// Using global alternatives instead
const DEFAULT_AFFILIATE_LINKS: Record<string, string> = {
  '1xbet': 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
  'betsson': 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/',
  'betway': 'https://betway.com/bwp/bet10get60?s=sp52697', // ROW fallback (World Cup landing)
  'pinnacle': 'https://www.pinnacle.com',
  'betfair': 'https://www.betfair.com/exchange/football',
  'intertops': 'https://www.intertops.com',
  'betano': 'https://betano.com',
  'alfaleads': 'https://alfaleads.com',
  'clickdealer': 'https://clickdealer.com',
  'pmaff': 'https://pmaff.com',
};

// German market: betsson.com/de with affiliate tracking via affcode parameter
// Germany is our #1 Betsson traffic source (36% of clicks) but converts 0 on the ROW English link
const BETSSON_DE = 'https://www.betsson.com/de/sport?affcode=AE3051334481&utm_medium=Affiliate&utm_source=10700602';

// Betway geo-specific links via Super Partners (sp52697)
const BETWAY_LINKS: Record<string, string> = {
  GB: 'https://betway.com/bwp/bet10get60?s=sp52697',          // UK — World Cup landing
  ES: 'https://betway.es/bwp/sports-welcome/es-es/?s=sp52697',  // Spain — local license
  DE: 'https://betway.de/bwp/sports-100-welcome-bonus/de-de/?s=sp52697', // Germany
  CA: 'https://betway.ca/bwp/welcome-sports-on-300-50/en-ca/?s=sp52697', // Canada (Ontario)
  MX: 'https://betway.mx/bwp/sports-welcome-2022-1/es-mx/?s=sp52697',    // Mexico
};

// Note: The actual proxy services are defined in /api/proxy/[...slug]/route.ts
// This endpoint routes through the advanced multi-layer proxy system

export async function GET(
  request: NextRequest,
  { params }: { params: { program: string } }
) {
  try {
    const program = params.program.toLowerCase();

    // GEO-based routing: serve German Betsson page for DE users
    const geo = request.cookies.get('geo')?.value?.toUpperCase() ?? '';
    let affiliateLink = DEFAULT_AFFILIATE_LINKS[program];
    if (program === 'betsson' && geo === 'DE') {
      affiliateLink = BETSSON_DE;
    }
    if (program === 'betway' && BETWAY_LINKS[geo]) {
      affiliateLink = BETWAY_LINKS[geo];
    }

    if (!affiliateLink) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      );
    }

    // Get user info for tracking
    const referer = request.headers.get('referer') || 'direct';
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

    // Log conversion event to console (will be picked up by GA4)
    console.log(`[AFFILIATE_CLICK] Program: ${program}, IP: ${ip}, Referer: ${referer}`);

    const finalUrl = affiliateLink;

    // CRITICAL: Send GA4 event before redirect
    // This ensures conversion is tracked even if user doesn't complete signup
    // Send to GA4 via fetch (non-blocking)
    fetch('https://www.google-analytics.com/collect', {
      method: 'POST',
      body: new URLSearchParams({
        v: '1',
        tid: 'G-PHCT4V7XB8', // Your GA4 ID
        cid: ip, // Client ID
        t: 'event',
        ec: 'affiliate',
        ea: 'click',
        el: program,
      }),
    }).catch(err => console.error('GA4 tracking failed:', err));

    // Redirect user to affiliate link
    return NextResponse.redirect(finalUrl, {
      status: 307, // Temporary redirect
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('[REDIRECT] Unhandled error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}

// Optional: GET stats endpoint (for admin dashboard)
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.action === 'get_stats') {
    // This would connect to your analytics dashboard
    return NextResponse.json({
      message: 'Stats tracking enabled',
      programs: Object.keys(DEFAULT_AFFILIATE_LINKS),
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
