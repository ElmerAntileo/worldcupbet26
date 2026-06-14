'use client';

import { useEffect, useState } from 'react';
import { RESTRICTED_COUNTRIES_1XBET } from '@/lib/geoConstants';

// v2 — busts any stale cache from the previous ipapi.co-only implementation
const CACHE_KEY = 'wcb26_geo_v2';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface GeoState {
  countryCode: string | null;
  is1xBetRestricted: boolean;
  loading: boolean;
}

/**
 * Detect the visitor's ISO country code.
 *
 * Primary:   /api/detect-country — reads Vercel's x-vercel-ip-country header
 *            server-side. No rate limits, no external dependency, authoritative.
 * Fallback1: api.country.is     — Cloudflare CDN, free, no rate limit
 * Fallback2: ipapi.co           — free but capped at 1,000 req/day
 *
 * Returns null only if all three sources fail. null is treated as restricted
 * (conservative: better to warn an unrestricted user than to miss Germany/France).
 */
async function detectCountry(): Promise<string | null> {
  // 1. Our own server endpoint — uses Vercel edge geo, most reliable
  try {
    const r = await fetch('/api/detect-country', { cache: 'no-store' });
    const data = (await r.json()) as { country?: string | null };
    if (data.country) return data.country.toUpperCase();
  } catch { /* fall through */ }

  // 2. Cloudflare-backed external API
  try {
    const r = await fetch('https://api.country.is/', { cache: 'no-store' });
    const data = (await r.json()) as { country?: string };
    if (data.country) return data.country;
  } catch { /* fall through */ }

  // 3. Last resort
  try {
    const r = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    const data = (await r.json()) as { country_code?: string };
    if (data.country_code) return data.country_code;
  } catch { /* all failed */ }

  return null;
}

export function useGeo(): GeoState {
  const [state, setState] = useState<GeoState>({
    countryCode: null,
    is1xBetRestricted: false, // optimistic while loading — disclaimer hidden until resolved
    loading: true,
  });

  useEffect(() => {
    // 1. Check sessionStorage cache (24-hour TTL)
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const { countryCode, ts } = JSON.parse(raw) as { countryCode: string | null; ts: number };
        if (Date.now() - ts < CACHE_TTL_MS) {
          setState({
            countryCode,
            is1xBetRestricted: countryCode === null
              ? true
              : RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
            loading: false,
          });
          return;
        }
      }
    } catch { /* sessionStorage unavailable */ }

    // 2. Fetch live (server-side primary, two external fallbacks)
    detectCountry().then((countryCode) => {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ countryCode, ts: Date.now() }));
      } catch { /* ignore */ }

      setState({
        countryCode,
        // Conservative: null (all sources failed) → treat as restricted
        is1xBetRestricted: countryCode === null
          ? true
          : RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
        loading: false,
      });
    });
  }, []);

  return state;
}
