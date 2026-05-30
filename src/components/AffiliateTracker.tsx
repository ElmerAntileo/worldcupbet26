"use client";
import { useEffect } from "react";

/**
 * Single document-level click listener.
 * Fires a GA4 affiliate_click event for every Betsson / 1xBet link.
 * Works in two ways:
 *   1. data-affiliate="BookmakerName" attribute (explicit)
 *   2. Domain-based fallback — catches any link we may have missed
 */

const AFFILIATE_DOMAINS: Record<string, string> = {
  "record.betsson.com": "Betsson",
  "reffpa.com": "1xBet",
};

export default function AffiliateTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;

      const href = (anchor as HTMLAnchorElement).href ?? "";

      // 1️⃣ Explicit attribute takes priority
      let bookmaker = anchor.getAttribute("data-affiliate") ?? "";

      // 2️⃣ Domain fallback — works even on links without data-affiliate
      if (!bookmaker) {
        for (const [domain, name] of Object.entries(AFFILIATE_DOMAINS)) {
          if (href.includes(domain)) {
            bookmaker = name;
            break;
          }
        }
      }

      if (!bookmaker) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "affiliate_click", {
        event_category: "Affiliate",
        event_label: bookmaker,
        bookmaker,
        destination_url: href,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
