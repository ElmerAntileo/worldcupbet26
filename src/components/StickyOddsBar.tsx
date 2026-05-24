"use client";

// Top 3 bookmakers with odds for the marquee match: USA vs Mexico (Jun 22)
const TOP_BOOKMAKERS = [
  {
    name: "Bet365",
    logo: "⚽",
    home: "2.10",
    draw: "3.40",
    away: "3.20",
    url: "https://bet365.com",
    isAffiliate: false,
  },
  {
    name: "1xBet",
    logo: "🏆",
    home: "2.15",
    draw: "3.35",
    away: "3.25",
    url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97",
    isAffiliate: true,
  },
  {
    name: "Betway",
    logo: "🏆",
    home: "2.05",
    draw: "3.45",
    away: "3.10",
    url: "https://betway.com",
    isAffiliate: false,
  },
];

const MATCH_LABEL = "🇺🇸 USA vs Mexico 🇲🇽  ·  Jun 22";

export default function StickyOddsBar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "#0a0f18",
        borderBottom: "1px solid rgba(0,208,132,0.25)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: "44px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Live pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(0,208,132,0.1)",
            border: "1px solid rgba(0,208,132,0.3)",
            borderRadius: "20px",
            padding: "2px 10px",
            fontSize: "10px",
            color: "var(--accent)",
            fontWeight: 700,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "var(--accent)",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          LIVE ODDS
        </div>

        {/* Match label */}
        <span
          style={{
            fontSize: "11px",
            color: "var(--muted)",
            fontWeight: 600,
            whiteSpace: "nowrap",
            flexShrink: 0,
            paddingRight: "6px",
            borderRight: "1px solid var(--card-border)",
          }}
        >
          {MATCH_LABEL}
        </span>

        {/* Bookmaker cells */}
        {TOP_BOOKMAKERS.map((bk) => (
          <div
            key={bk.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "0 12px",
              borderRight: "1px solid var(--card-border)",
              flexShrink: 0,
            }}
          >
            {/* Name */}
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--foreground)",
                whiteSpace: "nowrap",
              }}
            >
              {bk.logo} {bk.name}
            </span>

            {/* Odds chips */}
            {[
              { label: "1", val: bk.home },
              { label: "X", val: bk.draw },
              { label: "2", val: bk.away },
            ].map((o) => (
              <div key={o.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "var(--muted)",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {o.label}
                </div>
                <div
                  style={{
                    background: "#1e2430",
                    border: "1px solid var(--card-border)",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    minWidth: "38px",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {o.val}
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href={bk.url}
              target="_blank"
              rel={`noopener noreferrer nofollow${bk.isAffiliate ? " sponsored" : ""}`}
              style={{
                background: "var(--accent)",
                color: "#000",
                padding: "4px 10px",
                borderRadius: "5px",
                fontWeight: 700,
                fontSize: "11px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Bet →
            </a>
          </div>
        ))}

        {/* Disclaimer */}
        <span
          style={{
            fontSize: "10px",
            color: "var(--muted)",
            whiteSpace: "nowrap",
            marginLeft: "auto",
            flexShrink: 0,
          }}
        >
          18+ · T&amp;Cs apply
        </span>
      </div>
    </div>
  );
}
