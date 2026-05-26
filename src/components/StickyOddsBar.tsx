"use client";

const TOP_BOOKMAKERS = [
  { name: "Bet365",  logo: "⚽", home: "2.10", draw: "3.40", away: "3.20", url: "https://bet365.com",                                                              isAffiliate: false },
  { name: "1xBet",   logo: "🏆", home: "2.15", draw: "3.35", away: "3.25", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97",                      isAffiliate: true  },
  { name: "Betway",  logo: "🏆", home: "2.05", draw: "3.45", away: "3.10", url: "https://betway.com",                                                               isAffiliate: false },
];

export default function StickyOddsBar() {
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
            🇺🇸 USA vs Mexico 🇲🇽
          </span>
          <span style={{ fontSize: "10px", color: "var(--muted)", whiteSpace: "nowrap" }}>· Jun 22</span>
        </div>

        {/* Bookmaker odds */}
        {TOP_BOOKMAKERS.map((bk, i) => (
          <div key={bk.name} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 16px",
            borderRight: i < TOP_BOOKMAKERS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            flexShrink: 0,
          }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--foreground)", whiteSpace: "nowrap" }}>
              {bk.logo} {bk.name}
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
              rel={`noopener noreferrer nofollow${bk.isAffiliate ? " sponsored" : ""}`}
              data-affiliate={bk.isAffiliate ? bk.name : undefined}
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
              Bet →
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
