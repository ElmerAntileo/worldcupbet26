import { NextRequest, NextResponse } from 'next/server';

/**
 * Country Detection API
 * Detects user's country and returns appropriate redirect strategy
 */

const BLOCKED_COUNTRIES = {
  betsson: ['DE', 'SE', 'FI', 'ES', 'IS'], // Countries where Betsson is blocked
  xbet: ['DE', 'SE', 'FI', 'ES', 'IS', 'FR', 'NL', 'GB'], // Countries with VPN detection
};

export async function GET(request: NextRequest) {
  try {
    // Get country from Cloudflare header (Vercel/Edge)
    let country = request.headers.get('cf-ipcountry') || 'US';

    // Fallback: Try to get from request IP
    if (!country || country === 'T1') {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                 request.headers.get('x-real-ip') ||
                 'unknown';

      // Basic country detection from IP header patterns
      if (ip.includes('127.0.0.1') || ip.includes('localhost')) {
        country = 'DE'; // Assume Germany for testing
      }
    }

    const isBetssonBlocked = BLOCKED_COUNTRIES.betsson.includes(country);
    const isXBetBlocked = BLOCKED_COUNTRIES.xbet.includes(country);

    return NextResponse.json({
      country,
      isBetssonBlocked,
      isXBetBlocked,
      strategy: {
        betsson: isBetssonBlocked ? 'offer-alternatives' : 'direct',
        xbet: isXBetBlocked ? 'offer-alternatives' : 'direct',
      },
    });
  } catch (error) {
    console.error('[COUNTRY-DETECT] Error:', error);
    // Default to offering alternatives on error (safer)
    return NextResponse.json({
      country: 'UNKNOWN',
      isBetssonBlocked: true,
      isXBetBlocked: true,
      strategy: { betsson: 'offer-alternatives', xbet: 'offer-alternatives' },
    });
  }
}
