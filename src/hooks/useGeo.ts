'use client';

import { useEffect, useState } from 'react';
import { RESTRICTED_COUNTRIES_1XBET } from '@/lib/geoConstants';

/**
 * Geo-detection hook — uses ipapi.co (free, no API key required) to identify
 * the visitor's country code on first render, then caches the result in
 * sessionStorage so subsequent page loads within the same session are instant.
 *
 * Default while loading: is1xBetRestricted = false (optimistic — avoids
 * showing a VPN warning to non-restricted visitors during the brief fetch).
 * If ipapi.co fails, we keep the optimistic default rather than punishing
 * visitors with an incorrect warning.
 *
 * Cache TTL: 24 hours (stored as a timestamp alongside the country code).
 */

const CACHE_KEY = 'wcb26_geo';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface GeoState {
  countryCode: string | null;
  is1xBetRestricted: boolean;
  loading: boolean;
}

export function useGeo(): GeoState {
  const [state, setState] = useState<GeoState>({
    countryCode: null,
    is1xBetRestricted: false, // optimistic default while fetching
    loading: true,
  });

  useEffect(() => {
    // 1. Check sessionStorage cache to avoid re-fetching on every page
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const { countryCode, ts } = JSON.parse(raw) as { countryCode: string; ts: number };
        if (Date.now() - ts < CACHE_TTL_MS) {
          setState({
            countryCode,
            is1xBetRestricted: RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
            loading: false,
          });
          return;
        }
      }
    } catch {
      // sessionStorage unavailable (private browsing edge-cases) — fall through
    }

    // 2. Fetch country from ipapi.co — free tier, no API key, ~50ms typical latency
    fetch('https://ipapi.co/json/', { cache: 'no-store' })
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        const countryCode = data.country_code ?? null;

        // Cache for 24 hours so repeat visits don't re-fetch
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ countryCode, ts: Date.now() }));
        } catch { /* ignore */ }

        setState({
          countryCode,
          is1xBetRestricted: RESTRICTED_COUNTRIES_1XBET.includes(countryCode as never),
          loading: false,
        });
      })
      .catch(() => {
        // Network error or ipapi.co down — optimistic default (no VPN warning)
        // to avoid falsely discouraging visitors in non-restricted countries
        setState({ countryCode: null, is1xBetRestricted: false, loading: false });
      });
  }, []);

  return state;
}
