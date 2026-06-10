"use client";
import { useEffect } from "react";

/**
 * Enhanced Affiliate Redirect Tracker
 * - Intercepts affiliate link clicks
 * - Routes through /api/redirect/[program]
 * - Tracks GA4 events
 * - Enables geo-blocking bypass via proxy
 */

const AFFILIATE_PROGRAM_PATTERNS = {
  '1xbet': ['reffpa.com', '1xbet', '1x.partners'],
  'betsson': ['record.betsson.com', 'betsson', 'betssongroupaffiliates'],
  'betano': ['betano.com', 'betano'],
  'alfaleads': ['alfaleads.com', 'alfaleads'],
  'clickdealer': ['clickdealer.com', 'clickdealer'],
};

export default function AffiliateRedirectTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;

      const href = (anchor as HTMLAnchorElement).href ?? "";

      // Detect which program this link is for
      let program = anchor.getAttribute("data-affiliate");

      if (!program) {
        // Auto-detect from URL
        for (const [prog, patterns] of Object.entries(AFFILIATE_PROGRAM_PATTERNS)) {
          if (patterns.some(p => href.includes(p))) {
            program = prog;
            break;
          }
        }
      }

      if (!program) return;

      // Prevent default and redirect through our proxy system
      e.preventDefault();

      // Track the click in GA4
      if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag !== 'undefined') {
        const gtag = (window as unknown as Record<string, (arg1: string, arg2: string, arg3: Record<string, string>) => void>).gtag;
        gtag("event", "affiliate_click", {
          event_category: "Affiliate",
          event_label: program,
          bookmaker: program,
          destination_url: href,
          page_path: window.location.pathname,
        });
      }

      // Log to console for debugging
      console.log(`[AFFILIATE] Clicking ${program} link:`, href);

      // Redirect through our proxy API
      const redirectUrl = `/api/redirect/${program}?original=${encodeURIComponent(href)}`;

      // Use a small delay to ensure GA4 event is recorded
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
