"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "wcb26_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Slight delay so it doesn't flash on page load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    // Re-apply consent for GA4 on subsequent page loads
    if (saved === "accepted") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
    });
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
    // Remove GA4 cookies
    document.cookie = "_ga=; Max-Age=0; path=/";
    document.cookie = "_ga_PHCT4V7XB8=; Max-Age=0; path=/";
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(4,12,24,0.97)",
        borderTop: "1px solid rgba(0,208,132,0.25)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "14px 20px",
        boxShadow: "0 -4px 28px rgba(0,0,0,0.55)",
        animation: "slideUp 0.3s ease",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>

      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}>
        <span style={{ fontSize: "18px", flexShrink: 0 }}>🍪</span>

        <p style={{
          flex: 1,
          minWidth: "220px",
          color: "rgba(255,255,255,0.8)",
          fontSize: "13px",
          margin: 0,
          lineHeight: 1.55,
        }}>
          We use cookies to analyse traffic and improve your experience. No personal data is sold.{" "}
          <Link
            href="/privacy"
            style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
        </p>

        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.55)",
              padding: "8px 18px",
              borderRadius: "7px",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              background: "linear-gradient(135deg, #00d084, #00b870)",
              border: "none",
              color: "#040c18",
              padding: "8px 24px",
              borderRadius: "7px",
              fontWeight: 800,
              fontSize: "13px",
              cursor: "pointer",
              boxShadow: "0 3px 12px rgba(0,208,132,0.35)",
              transition: "all 0.15s",
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
