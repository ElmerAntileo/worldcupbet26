import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-side country detection using Vercel's edge geo header.
 * x-vercel-ip-country is set by Vercel on every request — no external API,
 * no rate limits, authoritative.
 */
export async function GET(request: NextRequest) {
  const country =
    request.headers.get('x-vercel-ip-country')?.toUpperCase() ||
    request.headers.get('cf-ipcountry')?.toUpperCase() ||
    null;

  return NextResponse.json(
    { country },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
