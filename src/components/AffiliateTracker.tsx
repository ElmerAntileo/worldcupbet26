"use client";
import { useEffect } from "react";

/**
 * Attaches a single document-level click listener.
 * Any <a data-affiliate="BookmakerName"> fires a GA4 affiliate_click event.
 * Works across all server and client components — no per-link changes needed.
 */
export default function AffiliateTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as Element).closest("a[data-affiliate]");
      if (!target) return;
      const bookmaker = target.getAttribute("data-affiliate") ?? "unknown";
      const page = window.location.pathname;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "affiliate_click", {
        bookmaker,
        page,
        event_category: "affiliate",
        event_label: bookmaker,
      });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
