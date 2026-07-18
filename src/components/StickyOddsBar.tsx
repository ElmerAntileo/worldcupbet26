"use client";

import { useGeo } from '@/hooks/useGeo';
import { BLOCKED_COUNTRIES_BETSSON, BETWAY_PRIORITY_COUNTRIES } from '@/lib/geoConstants';

const BETSSON_ROW = 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/';
const BETSSON_DE  = 'https://www.betsson.com/de/sport?affcode=AE3051334481&utm_medium=Affiliate&utm_source=10700602';
const ONEXBET_URL = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const BETWAY_URL  = '/api/redirect/betway';

// FINAL: Spain vs Argentina — Jul 19
const SF2_HOME = "1.70"; const SF2_DRAW = "3.50"; const SF2_AWAY = "2.20";

const oddsBoxStyle = {
  background: "rgba(13,31,56,0.8)",
  border: "1px solid rgba(0,208,132,0.2)",
  borderRadius: "5px",
  padding: "2px 8px",
  fontSize: "12px",
  fontWeight: 800,
  color: "var(--accent)",
  minWidth: "40px",
  textAlign: "center" as const,
  fontVariantNumeric: "tabular-nums" as const,
};

export default function StickyOddsBar() {
  const { countryCode } = useGeo();
  const betssonBlocked = countryCode !== null && (BLOCKED_COUNTRIES_BETSSON as readonly string[]).includes(countryCode);
  const betwayPriority = countryCode !== null && (BETWAY_PRIORITY_COUNTRIES as readonly string[]).includes(countryCode);
  const betssonUrl = countryCode === 'DE' ? BETSSON_DE : BETSSON_ROW;

  const primaryUrl = betwayPriority ? BETWAY_URL : betssonBlocked ? ONEXBET_URL : betssonUrl;
  const primaryName = betwayPriority ? "Betway" : betssonBlocked ? "1xBet" : "Betsson";
  const primaryLogo = betwayPriority ? "⚡" : betssonBlocked ? "🎯" : "🏆";

  return (
    <div style={{
      background: "rgba(4,10,20,0.97)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,208,132,0.18)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0",
        height: "46px",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>

        {/* FINAL label */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingRight: "16px", borderRight: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <span style={{ width: "7px", height: "7px", background: "#f0a500", borderRadius: "50%", display: "inline-block", animation: "pulse 1.5s infinite", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#f0a500", letterSpacing: "0.08em" }}>🏆 FINAL</span>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted-light)", whiteSpace: "nowrap" }}>
            🇪🇸 Spain vs Argentina 🇦🇷
          </span>
          <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap" }}>· Jul 19 · 15:00 ET · MetLife Stadium</span>
        </div>

        {/* Final odds + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 16px", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--foreground)", whiteSpace: "nowrap" }}>
            {primaryLogo} {primaryName}<span style={{ color: "#ff6b6b", marginLeft: "2px" }}>*</span>
          </span>
          {[{ label: "🇪🇸", val: SF2_HOME }, { label: "X", val: SF2_DRAW }, { label: "🇦🇷", val: SF2_AWAY }].map((o) => (
            <div key={o.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "var(--muted)", fontWeight: 700, lineHeight: 1, letterSpacing: "0.05em" }}>{o.label}</div>
              <div style={oddsBoxStyle}>{o.val}</div>
            </div>
          ))}
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={primaryName}
            style={{ background: "linear-gradient(135deg,#f0a500,#d4900a)", color: "#040c18", padding: "4px 12px", borderRadius: "6px", fontWeight: 800, fontSize: "11px", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(240,165,0,0.3)" }}>
            Bet the Final →
          </a>
        </div>

        <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap", marginLeft: "auto", paddingLeft: "16px", flexShrink: 0 }}>
          18+ · T&amp;Cs apply
        </span>
      </div>

    </div>
  );
}
