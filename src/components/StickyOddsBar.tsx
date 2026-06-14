"use client";

import { useGeo } from '@/hooks/useGeo';

const AFFILIATE_BOOKMAKERS = [
  { name: "Betsson", logo: "🏆", home: "1.65", draw: "3.70", away: "5.50", url: "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/", isAffiliate: true },
  { name: "1xBet",   logo: "🎯", home: "1.67", draw: "3.65", away: "5.40", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97", isAffiliate: true },
];

export default function StickyOddsBar() {
  const { is1xBetRestricted, loading: geoLoading } = useGeo();

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
            🇲🇽 Mexico vs South Africa 🇿🇦
          </span>
          <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap" }}>· Jun 11</span>
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
              href={bk.name === '1xBet' && !geoLoading && is1xBetRestricted
                ? '/access-1xbet'
                : bk.url}
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
              {bk.name === '1xBet' && !geoLoading && is1xBetRestricted
                ? 'VPN guide →'
                : bk.name === '1xBet' ? 'Bet with 1xBet →' : 'Bet →'}
            </a>
          </div>
        ))}

        <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap", marginLeft: "auto", paddingLeft: "16px", flexShrink: 0 }}>
          18+ · T&amp;Cs apply
        </span>
      </div>

      {/* Geo-aware disclaimer — shown only while loading or when visitor is in a restricted country.
          Visitors in non-restricted countries see a green confirmation instead of a VPN warning. */}
      {!geoLoading && (
        <div style={{
          background: is1xBetRestricted ? "rgba(255,107,107,0.08)" : "rgba(0,208,132,0.06)",
          borderTop: is1xBetRestricted ? "1px solid rgba(255,107,107,0.2)" : "1px solid rgba(0,208,132,0.15)",
          padding: "8px 20px",
          fontSize: "10px",
          color: is1xBetRestricted ? "var(--muted-light)" : "#00d084",
          textAlign: "center",
        }}>
          {is1xBetRestricted ? (
            <>
              ⚠️ 1xBet requires a VPN in your region.{" "}
              <a href="/access-1xbet" style={{ color: "#ff6b6b", textDecoration: "underline" }}>
                How to access 1xBet →
              </a>
            </>
          ) : (
            <>✅ Both Betsson &amp; 1xBet are available in your region — no VPN needed.</>
          )}
        </div>
      )}
    </div>
  );
}
