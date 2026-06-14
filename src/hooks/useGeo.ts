'use client';

import { useEffect, useState } from 'react';
import { RESTRICTED_COUNTRIES_1XBET } from '@/lib/geoConstants';

const CACHE_KEY = 'wcb26_geo';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface GeoState {
  countryCode: string | null;
  is1xBetRestricted: boolean;
  loading: boolean;
}

/**
 * Detect the visitor's ISO country code.
 *
 * Primary:  api.country.is — Cloudflare CDN, free, no rate limit, ~10ms
 * Fallback: ipapi.co       — free but capped at 1,000 req/day
 *
 * Returns null only if both APIs fail. The caller treats null as "restricted"
 * (conservative: better to warn an unrestricted user than to silently miss a
 * restricted one like Germany or France).
 */
async function detectCountry(): Promise<string | null> {
  try {
    const r = await fetch('https://api.country.is/', { cache: 'no-store' });
    const data = (await r.json()) as { country?: string };
    if (data.country) return data.country;
  } catch { /* fall through to backup */ }

  try {
    const r = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    const data = (await r.json()) as { country_code?: string };
    if (data.country_code) return data.country_code;
  } catch { /* both failed */ }

  return null;
}

export function useGeo(): GeoState {
  const [state, setState] = useState<GeoState>({
    countryCode: null,
    is1xBetRestricted: false, // optimistic while loading — bar stays hidden until resolved
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
            // null means both APIs failed on a prior visit → conservative: treat as restricted
            is1xBetRestricted: countryCode === null
              ? true
              : RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
            loading: false,
          });
          return;
        }
      }
    } catch { /* sessionStorage unavailable (private-browsing edge-cases) */ }

    // 2. Fetch live
    detectCountry().then((countryCode) => {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ countryCode, ts: Date.now() }));
      } catch { /* ignore */ }

      setState({
        countryCode,
        // Conservative fallback: if both APIs failed (null) → assume restricted.
        // It is far better to show a VPN warning to a visitor who doesn't need one
        // than to incorrectly tell Germany / France they're good when they're not.
        is1xBetRestricted: countryCode === null
          ? true
          : RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
        loading: false,
      });
    });
  }, []);

  return state;
}
