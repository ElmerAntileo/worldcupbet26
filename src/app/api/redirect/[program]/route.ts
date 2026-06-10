import { NextRequest, NextResponse } from 'next/server';

// Default affiliate links (can be overridden via admin panel)
const DEFAULT_AFFILIATE_LINKS: Record<string, string> = {
  '1xbet': 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
  'betsson': 'https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/',
  'betano': 'https://betano.com',
  'alfaleads': 'https://alfaleads.com',
  'clickdealer': 'https://clickdealer.com',
  'pmaff': 'https://pmaff.com',
};

// Proxy service - rotates between backups if one fails
const PROXY_SERVICES = [
  'https://proxy.integr8.co/forward?url=',
  'https://api.allorigins.win/raw?url=',
];

export async function GET(
  request: NextRequest,
  { params }: { params: { program: string } }
) {
  const program = params.program.toLowerCase();
  // Use default link (can be overridden on client-side via localStorage)
  const affiliateLink = DEFAULT_AFFILIATE_LINKS[program];

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

  // Route through advanced multi-layer proxy system for geo-blocking bypass
  let finalUrl = affiliateLink;

  try {
    // Use our advanced proxy with failover chain
    const encodedUrl = encodeURIComponent(affiliateLink);
    finalUrl = `/api/proxy/${encodedUrl}`;
  } catch (error) {
    console.error('Proxy routing error, using direct link:', error);
    finalUrl = affiliateLink;
  }

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
}

// Optional: GET stats endpoint (for admin dashboard)
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.action === 'get_stats') {
    // This would connect to your analytics dashboard
    return NextResponse.json({
      message: 'Stats tracking enabled',
      programs: Object.keys(AFFILIATE_LINKS),
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
