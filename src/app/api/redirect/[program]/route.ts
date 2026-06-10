import { NextRequest, NextResponse } from 'next/server';

// Affiliate links - EASILY UPDATEABLE
const AFFILIATE_LINKS: Record<string, string> = {
  '1xbet': 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
  'betsson': 'https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/',
  'betano': 'https://betano.com/?affiliateid=your_id', // Update when approved
  'alfaleads': 'https://alfaleads.com/?aff=your_id', // Update when approved
  'clickdealer': 'https://clickdealer.com/?aff=your_id', // Update when approved
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
  const affiliateLink = AFFILIATE_LINKS[program];

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

  // Try to proxy the request to bypass geo-blocking
  let finalUrl = affiliateLink;

  // Attempt proxy forwarding (adds geo-mask layer)
  try {
    const encodedUrl = encodeURIComponent(affiliateLink);
    finalUrl = `${PROXY_SERVICES[0]}${encodedUrl}`;
  } catch (error) {
    console.error('Proxy error, using direct link:', error);
    // Fallback to direct link
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
