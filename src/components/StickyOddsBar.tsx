"use client";

import { useGeo } from '@/hooks/useGeo';
import { BLOCKED_COUNTRIES_BETSSON, BETWAY_PRIORITY_COUNTRIES } from '@/lib/geoConstants';

const BETSSON_ROW = 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/';
const BETSSON_DE  = 'https://www.betsson.com/de/sport?affcode=AE3051334481&utm_medium=Affiliate&utm_source=10700602';
const ONEXBET_URL = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const BETWAY_URL  = '/api/redirect/betway';

// France vs England QF odds — Jul 8
const QF_HOME = "1.80"; const QF_DRAW = "3.80"; const QF_AWAY = "4.20";

export default function StickyOddsBar() {
  const { countryCode } = useGeo();
  const betssonBlocked = countryCode !== null && (BLOCKED_COUNTRIES_BETSSON as readonly string[]).includes(countryCode);
  const betwayPriority = countryCode !== null && (BETWAY_PRIORITY_COUNTRIES as readonly string[]).includes(countryCode);
  const betssonUrl = countryCode === 'DE' ? BETSSON_DE : BETSSON_ROW;

  const AFFILIATE_BOOKMAKERS = betwayPriority
    ? [{ name: "Betway", logo: "⚡", home: QF_HOME, draw: QF_DRAW, away: QF_AWAY, url: BETWAY_URL, isAffiliate: true }]
    : betssonBlocked
    ? [{ name: "1xBet", logo: "🎯", home: QF_HOME, draw: QF_DRAW, away: QF_AWAY, url: ONEXBET_URL, isAffiliate: true }]
    : [
        { name: "Betsson", logo: "🏆", home: QF_HOME, draw: QF_DRAW, away: QF_AWAY, url: betssonUrl, isAffiliate: true },
        { name: "1xBet",   logo: "🎯", home: "1.85", draw: "3.75", away: "4.10",   url: ONEXBET_URL, isAffiliate: true },
      ];

  return (
    <div style={{
      background: "rgba(4,10,20,0.97)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,208,132,0.18)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0",
        height: "46px",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>

        {/* Match label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          paddingRight: "16px",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}>
          <span style={{
            width: "7px", height: "7px",
            background: "var(--hot)",
            borderRadius: "50%",
            display: "inline-block",
            animation: "pulse 1.5s infinite",
            flexShrink: 0,
          }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--hot)", letterSpacing: "0.08em" }}>LIVE</span>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted-light)", whiteSpace: "nowrap" }}>
            🇫🇷 France vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿
          </span>
          <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap" }}>· QF · Jul 8 · 21:00 CEST</span>
        </div>

        {/* Affiliate bookmakers (both with CTA buttons) */}
        {AFFILIATE_BOOKMAKERS.map((bk, i) => (
          <div key={bk.name} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 16px",
            borderRight: i < AFFILIATE_BOOKMAKERS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            flexShrink: 0,
          }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--foreground)", whiteSpace: "nowrap" }}>
              {bk.logo} {bk.name}<span style={{ color: "#ff6b6b", marginLeft: "2px" }}>*</span>
            </span>
            {[
              { label: "1", val: bk.home },
              { label: "X", val: bk.draw },
              { label: "2", val: bk.away },
            ].map((o) => (
              <div key={o.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "9px", color: "var(--muted)", fontWeight: 700, lineHeight: 1, letterSpacing: "0.05em" }}>{o.label}</div>
                <div style={{
                  background: "rgba(13,31,56,0.8)",
                  border: "1px solid rgba(0,208,132,0.2)",
                  borderRadius: "5px",
                  padding: "2px 8px",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "var(--accent)",
                  minWidth: "40px",
                  textAlign: "center",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {o.val}
                </div>
              </div>
            ))}
            <a
              href={bk.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              data-affiliate={bk.name}
              style={{
                background: "linear-gradient(135deg, #00d084, #00b870)",
                color: "#040c18",
                padding: "4px 12px",
                borderRadius: "6px",
                fontWeight: 800,
                fontSize: "11px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,208,132,0.25)",
              }}
            >
              {bk.name === '1xBet' ? 'Bet with 1xBet →' : bk.name === 'Betway' ? 'Bet with Betway →' : 'Bet →'}
            </a>
          </div>
        ))}

        <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap", marginLeft: "auto", paddingLeft: "16px", flexShrink: 0 }}>
          18+ · T&amp;Cs apply
        </span>
      </div>

    </div>
  );
}
