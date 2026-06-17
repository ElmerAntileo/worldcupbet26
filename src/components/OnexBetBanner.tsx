"use client";

const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function OnexBetBanner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <a
        href={ONEXBET_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "728px",
          background: "linear-gradient(135deg, #1a3a6e 0%, #0d2147 60%, #1a3a6e 100%)",
          border: "1px solid rgba(255,200,0,0.4)",
          borderRadius: "10px",
          padding: "14px 20px",
          textDecoration: "none",
          gap: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <div style={{
            background: "#ffd700",
            color: "#0d2147",
            fontWeight: 900,
            fontSize: "15px",
            padding: "6px 10px",
            borderRadius: "6px",
            letterSpacing: "-0.5px",
          }}>
            1X<span style={{ color: "#0d2147" }}>BET</span>
          </div>
        </div>

        {/* Promo text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#ffd700", fontWeight: 800, fontSize: "clamp(12px, 2.5vw, 15px)", lineHeight: 1.2, marginBottom: "2px" }}>
            100% Welcome Bonus up to €100
          </div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(10px, 2vw, 12px)", lineHeight: 1.3 }}>
            200+ World Cup markets · Best live odds · Instant payout
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "#ffd700",
          color: "#0d2147",
          fontWeight: 900,
          fontSize: "clamp(11px, 2vw, 13px)",
          padding: "10px 16px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          BET NOW →
        </div>
      </a>
    </div>
  );
}
