import { OG_IMAGE } from "@/lib/og";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
function pageUrl(l: string) {
  return l === "en" ? `${base}/world-cup-2026-groups` : `${base}/${l}/world-cup-2026-groups`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Groups — All 12 Groups, Teams & Odds",
  description:
    "Complete World Cup 2026 group stage draw. All 12 groups, 48 teams, match schedule and group winner betting odds. USA, Canada & Mexico host Jun 11–Jul 19, 2026.",
  alternates: {
    canonical: pageUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(l)])), "x-default": pageUrl("en") },
  },
  openGraph: {
    title: "World Cup 2026 Groups — All 12 Groups, Teams & Odds",
    description:
      "All 12 World Cup 2026 groups with teams, schedule and group winner betting odds. Updated odds from top bookmakers.",
    type: "website",
      images: [OG_IMAGE],
  },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const groups = [
  {
    id: "A",
    teams: [
      { name: "Mexico",       flag: "🇲🇽", toWin: "1.80", qualified: "84%" },
      { name: "South Korea",  flag: "🇰🇷", toWin: "4.00", qualified: "58%" },
      { name: "Czechia",      flag: "🇨🇿", toWin: "5.50", qualified: "44%" },
      { name: "South Africa", flag: "🇿🇦", toWin: "9.00", qualified: "28%" },
    ],
    topPick: "Mexico (home advantage, opening match Jun 11)",
    venue: "Estadio Azteca, Mexico City",
  },
  {
    id: "B",
    teams: [
      { name: "Canada",             flag: "🇨🇦", toWin: "1.90", qualified: "82%" },
      { name: "Switzerland",        flag: "🇨🇭", toWin: "3.50", qualified: "62%" },
      { name: "Bosnia & Herzeg.",   flag: "🇧🇦", toWin: "5.00", qualified: "44%" },
      { name: "Qatar",              flag: "🇶🇦", toWin: "14.00", qualified: "20%" },
    ],
    topPick: "Canada (host advantage, Alphonso Davies at peak)",
    venue: "BMO Field, Toronto / BC Place, Vancouver",
  },
  {
    id: "C",
    teams: [
      { name: "Brazil",   flag: "🇧🇷", toWin: "1.45", qualified: "90%" },
      { name: "Morocco",  flag: "🇲🇦", toWin: "4.00", qualified: "60%" },
      { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", toWin: "7.00", qualified: "36%" },
      { name: "Haiti",    flag: "🇭🇹", toWin: "20.00", qualified: "14%" },
    ],
    topPick: "Brazil (strong favourites, Morocco the threat)",
    venue: "Hard Rock Stadium, Miami",
  },
  {
    id: "D",
    teams: [
      { name: "USA",       flag: "🇺🇸", toWin: "1.75", qualified: "85%" },
      { name: "Türkiye",   flag: "🇹🇷", toWin: "3.80", qualified: "58%" },
      { name: "Australia", flag: "🇦🇺", toWin: "6.00", qualified: "38%" },
      { name: "Paraguay",  flag: "🇵🇾", toWin: "7.00", qualified: "32%" },
    ],
    topPick: "USA (host advantage, opening match Jun 12)",
    venue: "MetLife Stadium, New York",
  },
  {
    id: "E",
    teams: [
      { name: "Germany",     flag: "🇩🇪", toWin: "1.50", qualified: "88%" },
      { name: "Ecuador",     flag: "🇪🇨", toWin: "4.50", qualified: "55%" },
      { name: "Ivory Coast", flag: "🇨🇮", toWin: "6.50", qualified: "38%" },
      { name: "Curaçao",     flag: "🇨🇼", toWin: "28.00", qualified: "10%" },
    ],
    topPick: "Germany (clear favourites — Wirtz & Musiala)",
    venue: "AT&T Stadium, Dallas",
  },
  {
    id: "F",
    teams: [
      { name: "Netherlands", flag: "🇳🇱", toWin: "1.65", qualified: "87%" },
      { name: "Japan",       flag: "🇯🇵", toWin: "3.50", qualified: "60%" },
      { name: "Sweden",      flag: "🇸🇪", toWin: "5.00", qualified: "44%" },
      { name: "Tunisia",     flag: "🇹🇳", toWin: "9.00", qualified: "26%" },
    ],
    topPick: "Netherlands (Van Dijk-led, strong group draw)",
    venue: "Rose Bowl, Los Angeles",
  },
  {
    id: "G",
    teams: [
      { name: "Belgium",     flag: "🇧🇪", toWin: "1.75", qualified: "85%" },
      { name: "Egypt",       flag: "🇪🇬", toWin: "4.50", qualified: "56%" },
      { name: "Iran",        flag: "🇮🇷", toWin: "6.00", qualified: "40%" },
      { name: "New Zealand", flag: "🇳🇿", toWin: "15.00", qualified: "18%" },
    ],
    topPick: "Belgium (prime opportunity before golden gen fades)",
    venue: "SoFi Stadium, Los Angeles",
  },
  {
    id: "H",
    teams: [
      { name: "Spain",        flag: "🇪🇸", toWin: "1.40", qualified: "92%" },
      { name: "Uruguay",      flag: "🇺🇾", toWin: "3.50", qualified: "62%" },
      { name: "Saudi Arabia", flag: "🇸🇦", toWin: "8.00", qualified: "30%" },
      { name: "Cape Verde",   flag: "🇨🇻", toWin: "18.00", qualified: "16%" },
    ],
    topPick: "Spain (tournament favourites, easiest group draw)",
    venue: "Arrowhead Stadium, Kansas City",
  },
  {
    id: "I",
    teams: [
      { name: "France",  flag: "🇫🇷", toWin: "1.45", qualified: "90%" },
      { name: "Senegal", flag: "🇸🇳", toWin: "3.80", qualified: "60%" },
      { name: "Norway",  flag: "🇳🇴", toWin: "5.50", qualified: "42%" },
      { name: "Iraq",    flag: "🇮🇶", toWin: "22.00", qualified: "12%" },
    ],
    topPick: "France (Mbappé-led, should cruise this group)",
    venue: "Levi's Stadium, San Francisco",
  },
  {
    id: "J",
    teams: [
      { name: "Argentina", flag: "🇦🇷", toWin: "1.40", qualified: "92%" },
      { name: "Austria",   flag: "🇦🇹", toWin: "4.50", qualified: "55%" },
      { name: "Algeria",   flag: "🇩🇿", toWin: "6.00", qualified: "38%" },
      { name: "Jordan",    flag: "🇯🇴", toWin: "18.00", qualified: "15%" },
    ],
    topPick: "Argentina (reigning champions, expected to dominate)",
    venue: "Empower Field, Denver",
  },
  {
    id: "K",
    teams: [
      { name: "Portugal",  flag: "🇵🇹", toWin: "1.50", qualified: "88%" },
      { name: "Colombia",  flag: "🇨🇴", toWin: "3.50", qualified: "62%" },
      { name: "DR Congo",  flag: "🇨🇩", toWin: "10.00", qualified: "28%" },
      { name: "Uzbekistan",flag: "🇺🇿", toWin: "12.00", qualified: "22%" },
    ],
    topPick: "Portugal (Ronaldo or not — squad depth is real)",
    venue: "NRG Stadium, Houston",
  },
  {
    id: "L",
    teams: [
      { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", toWin: "1.45", qualified: "90%" },
      { name: "Croatia", flag: "🇭🇷", toWin: "4.50", qualified: "55%" },
      { name: "Ghana",   flag: "🇬🇭", toWin: "7.50", qualified: "34%" },
      { name: "Panama",  flag: "🇵🇦", toWin: "15.00", qualified: "20%" },
    ],
    topPick: "England (Kane & Bellingham — strong group favourites)",
    venue: "Gillette Stadium, Boston",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "FIFA World Cup 2026",
  startDate: "2026-06-11",
  endDate: "2026-07-19",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/2026_FIFA_World_Cup.svg/800px-2026_FIFA_World_Cup.svg.png",
  description:
    "The 2026 FIFA World Cup hosted across the United States, Canada and Mexico. 48 teams, 12 groups, 104 matches.",
  location: {
    "@type": "Place",
    name: "USA, Canada & Mexico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York, Los Angeles, Dallas, Miami, and 12 other host cities",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "FIFA",
    url: "https://www.fifa.com",
  },
  offers: {
    "@type": "Offer",
    name: "World Cup 2026 Betting Odds Comparison",
    url: "https://www.worldcupbet26.com/matches",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
  url: "https://www.worldcupbet26.com/world-cup-2026-groups",
};

const cardStyle: React.CSSProperties = {
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
  borderRadius: "12px",
  overflow: "hidden",
};

const thStyle: React.CSSProperties = {
  padding: "10px 14px",
  fontSize: "11px",
  fontWeight: 700,
  color: "var(--muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textAlign: "left",
  borderBottom: "1px solid var(--card-border)",
  background: "rgba(255,255,255,0.02)",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 14px",
  fontSize: "14px",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};

export default function GroupsPage() {
  return (
    <>
      <Script
        id="ld-groups"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

        {/* HEADER */}
        <section style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
          borderBottom: "1px solid var(--card-border)",
          padding: "40px 20px 36px",
        }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)",
              borderRadius: "20px", padding: "5px 14px", marginBottom: "16px",
              fontSize: "12px", color: "var(--accent)", fontWeight: 600,
            }}>
              <span style={{ width: "7px", height: "7px", background: "var(--accent)", borderRadius: "50%", display: "inline-block" }} />
              STARTS JUN 11, 2026 — 17 DAYS AWAY
            </div>
            <h1 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, marginBottom: "12px", lineHeight: 1.2 }}>
              World Cup 2026 Groups
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "620px", lineHeight: 1.6, marginBottom: "24px" }}>
              All 12 groups for the 2026 FIFA World Cup — teams, match venues, and group winner betting odds.
              The expanded 48-team format means 3 teams qualify from each group (top 2 + 8 best third-placed).
            </p>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { val: "48", label: "Teams" },
                { val: "12", label: "Groups" },
                { val: "104", label: "Matches" },
                { val: "16", label: "Host Cities" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--accent)" }}>{s.val}</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMAT EXPLAINER */}
        <section style={{ padding: "32px 20px 0", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            ...cardStyle,
            padding: "20px 24px",
            display: "flex", gap: "32px", flexWrap: "wrap",
            borderLeft: "4px solid var(--accent)",
          }}>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>FORMAT</div>
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
                48 teams in 12 groups of 4. Top 2 from each group qualify automatically.
                The 8 best third-placed teams also advance — giving 32 teams in the Round of 32.
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>HOSTS</div>
              <div style={{ fontSize: "14px", color: "var(--muted)" }}>🇺🇸 USA (11 venues) · 🇨🇦 Canada (2) · 🇲🇽 Mexico (3)</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>DATES</div>
              <div style={{ fontSize: "14px", color: "var(--muted)" }}>Jun 11 – Jul 19, 2026</div>
            </div>
          </div>
        </section>

        {/* GROUPS GRID */}
        <section style={{ padding: "32px 20px 60px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
              gap: "16px",
            }}>
              {groups.map(g => (
                <div key={g.id} style={cardStyle}>
                  {/* Group header */}
                  <div style={{
                    padding: "14px 18px",
                    background: "linear-gradient(90deg, rgba(0,208,132,0.08), transparent)",
                    borderBottom: "1px solid var(--card-border)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        background: "var(--accent)", color: "#000",
                        fontWeight: 900, fontSize: "13px",
                        padding: "3px 10px", borderRadius: "6px",
                      }}>GROUP {g.id}</span>
                      <span style={{ fontSize: "12px", color: "var(--muted)" }}>📍 {g.venue}</span>
                    </div>
                  </div>

                  {/* Teams table */}
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Team</th>
                        <th style={{ ...thStyle, textAlign: "center" }}>Win Group</th>
                        <th style={{ ...thStyle, textAlign: "center" }}>Qualify %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {g.teams.map((t, i) => (
                        <tr key={t.name} style={{ opacity: t.name === "TBD" || t.name.startsWith("TBD") ? 0.5 : 1 }}>
                          <td style={tdStyle}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              {i === 0 && <span style={{ fontSize: "10px", background: "rgba(255,215,0,0.15)", color: "#ffd700", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "3px", padding: "1px 5px", fontWeight: 700 }}>FAV</span>}
                              <span style={{ fontSize: "18px" }}>{t.flag}</span>
                              <span style={{ fontWeight: 600, fontSize: "14px" }}>{t.name}</span>
                            </div>
                          </td>
                          <td style={{ ...tdStyle, textAlign: "center", color: "var(--accent)", fontWeight: 700 }}>{t.toWin}</td>
                          <td style={{ ...tdStyle, textAlign: "center", color: "var(--muted)" }}>{t.qualified}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Tip */}
                  <div style={{
                    padding: "10px 18px",
                    background: "rgba(255,255,255,0.02)",
                    borderTop: "1px solid var(--card-border)",
                    fontSize: "12px", color: "var(--muted)",
                  }}>
                    💡 <strong style={{ color: "var(--foreground)" }}>Tip:</strong> {g.topPick}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              marginTop: "40px",
              background: "linear-gradient(135deg, #1a2f1a, #0d1f2d)",
              border: "1px solid rgba(0,208,132,0.3)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>BEST ODDS FOR WORLD CUP 2026</div>
              <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, marginBottom: "12px" }}>
                Bet on Group Winners Now — Odds Dropping Fast
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>
                Group winner odds shorten as the tournament approaches. Lock in value now with our top-rated bookmakers.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href={BETSSON_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    background: "var(--accent)", color: "#000",
                    padding: "14px 28px", borderRadius: "8px",
                    fontWeight: 800, fontSize: "15px", textDecoration: "none",
                    display: "inline-block",
                  }}
                 data-affiliate="Betsson">
                  🏆 Bet at Betsson — Up to €100 Bonus
                </a>
                <a
                  href={ONEXBET_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    background: "transparent",
                    border: "2px solid var(--accent)",
                    color: "var(--accent)",
                    padding: "14px 28px", borderRadius: "8px",
                    fontWeight: 800, fontSize: "15px", textDecoration: "none",
                    display: "inline-block",
                  }}
                 data-affiliate="1xBet">
                  🎯 Bet at 1xBet — 100% First Deposit
                </a>
              </div>
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "14px" }}>18+ | Gamble Responsibly | T&Cs Apply</p>
            </div>

            {/* Internal links */}
            <div style={{ marginTop: "32px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { href: "/matches", label: "⚽ Live Match Odds" },
                { href: "/blog/group-stage-preview", label: "📊 Group Stage Preview" },
                { href: "/blog/top-favorites-to-win", label: "🏆 Tournament Favorites" },
                { href: "/blog/best-value-bets", label: "💰 Best Value Bets" },
                { href: "/blog/golden-boot-odds-2026", label: "👟 Golden Boot Odds" },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    background: "var(--accent-dim)", border: "1px solid var(--border-accent)",
                    color: "var(--accent)", padding: "8px 16px", borderRadius: "8px",
                    fontSize: "13px", fontWeight: 600, textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section style={{ padding: "20px", background: "#1a1a2e", borderTop: "1px solid var(--card-border)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <p style={{ color: "var(--muted)", fontSize: "12px", margin: 0 }}>
              Odds are indicative and subject to change. Qualification percentages are model estimates.
              Always check the bookmaker&apos;s site for the latest odds. 18+ only. Gamble responsibly.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
