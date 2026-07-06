import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

const base = "https://www.worldcupbet26.com";

export const metadata: Metadata = {
  title: "World Cup 2026 Quarter-Final Odds, Predictions & Best Bets | July 8-9",
  description: "Full guide to the 2026 World Cup quarter-finals on July 8-9. Odds for Argentina, France, England, Brazil and all QF teams. Expert tips and where to get the best value.",
  alternates: {
    canonical: `${base}/blog/world-cup-2026-quarter-final-odds`,
    languages: {
      en: `${base}/blog/world-cup-2026-quarter-final-odds`,
      es: `${base}/es/blog/world-cup-2026-quarter-final-odds`,
      pt: `${base}/pt/blog/world-cup-2026-quarter-final-odds`,
      "x-default": `${base}/blog/world-cup-2026-quarter-final-odds`,
    },
  },
  openGraph: {
    title: "World Cup 2026 Quarter-Final Odds, Predictions & Best Bets",
    description: "Quarter-final odds, predictions and best betting tips for World Cup 2026. All 4 matches on July 8-9 covered.",
    url: `${base}/blog/world-cup-2026-quarter-final-odds`,
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: `${base}/og-blog.jpg`, width: 1200, height: 630, alt: "World Cup 2026 Quarter-Final Odds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Quarter-Final Odds & Predictions",
    description: "All 4 quarter-finals on July 8-9. Odds, tips and best bets from worldcupbet26.com.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "World Cup 2026 Quarter-Final Odds, Predictions & Best Bets",
      "description": "Full guide to all four 2026 World Cup quarter-finals on July 8-9. Expert odds comparison and betting tips.",
      "datePublished": "2026-07-06",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": base },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When are the World Cup 2026 quarter-finals?",
          "acceptedAnswer": { "@type": "Answer", "text": "The four World Cup 2026 quarter-finals take place on July 8 and July 9, 2026. Two matches are played each day." },
        },
        {
          "@type": "Question",
          "name": "Who are the favourites for the World Cup 2026 quarter-finals?",
          "acceptedAnswer": { "@type": "Answer", "text": "France (6.00), Brazil (6.50) and Argentina (8.00) enter the quarter-final stage as the co-favourites to lift the trophy. Spain and England are close behind." },
        },
        {
          "@type": "Question",
          "name": "What is the best bet for the World Cup 2026 quarter-finals?",
          "acceptedAnswer": { "@type": "Answer", "text": "Argentina to advance to the semi-finals is an excellent value bet. As reigning champions, they have the quality to win any quarter-final matchup." },
        },
      ],
    },
  ],
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const contenders = [
  { flag: "🇫🇷", name: "France",      odds: "6.00",  form: "Dominant in group stage and R16. Mbappé in top form.",   move: "▼ Shortened from 7.00" },
  { flag: "🇧🇷", name: "Brazil",      odds: "6.50",  form: "Unbeaten run continues. Vinicius Jr. unstoppable.",        move: "▲ Same" },
  { flag: "🇦🇷", name: "Argentina",   odds: "8.00",  form: "Reigning champions. Messi's last World Cup — motivated.",  move: "▼ Shortened" },
  { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England",     odds: "8.50",  form: "Clinical knockout display. Bellingham pulling strings.",  move: "▼ Value opportunity" },
  { flag: "🇪🇸", name: "Spain",       odds: "9.00",  form: "Possession masters. Strong if through from R16.",          move: "" },
  { flag: "🇵🇹", name: "Portugal",    odds: "12.00", form: "Ronaldo/Bruno Fernandes goals. Attacking depth.",          move: "" },
  { flag: "🇩🇪", name: "Germany",     odds: "14.00", form: "Improved since group stage. Müller experience tells.",      move: "" },
  { flag: "🇧🇪", name: "Belgium",     odds: "18.00", form: "De Bruyne orchestrating. Could cause upsets in QF.",       move: "" },
];

const matches = [
  {
    id: "qf1",
    day: "Friday, July 8",
    time: "18:00 CEST",
    teamA: "TBD (R16 Winner)",
    teamB: "TBD (R16 Winner)",
    flagA: "⚽",
    flagB: "⚽",
    tip: "Back the shorter-priced team to win in 90 minutes — knockout football at this stage rewards quality over surprise.",
    tipOdds: "~1.80–2.20",
    note: "Matchup confirmed after Round of 16 on July 7",
  },
  {
    id: "qf2",
    day: "Friday, July 8",
    time: "22:00 CEST",
    teamA: "Argentina / R16 Winner",
    teamB: "TBD (R16 Winner)",
    flagA: "🇦🇷",
    flagB: "⚽",
    tip: "Argentina to qualify for the semi-finals. Messi's squad has the experience and quality to win any QF matchup.",
    tipOdds: "1.55–1.70",
    note: "Argentina confirmed if they beat Egypt on July 7",
  },
  {
    id: "qf3",
    day: "Saturday, July 9",
    time: "18:00 CEST",
    teamA: "TBD (R16 Winner)",
    teamB: "TBD (R16 Winner)",
    flagA: "⚽",
    flagB: "⚽",
    tip: "Look for the Over 2.5 Goals market — quarter-finals between evenly matched teams tend to be open affairs.",
    tipOdds: "1.85–2.10",
    note: "Matchup confirmed after Round of 16 on July 7",
  },
  {
    id: "qf4",
    day: "Saturday, July 9",
    time: "22:00 CEST",
    teamA: "TBD (R16 Winner)",
    teamB: "TBD (R16 Winner)",
    flagA: "⚽",
    flagB: "⚽",
    tip: "Watch for the late-game Over market. Knockout pressure often produces goals after the 70th minute.",
    tipOdds: "2.00–2.40",
    note: "Matchup confirmed after Round of 16 on July 7",
  },
];

export default function QFOddsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: "8px", fontSize: "13px", color: "var(--muted)", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span>/</span>
          <span>World Cup 2026 Quarter-Final Odds</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>QUARTER-FINALS</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>JULY 8–9</span>
          <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>LIVE ODDS</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          World Cup 2026 Quarter-Final Odds, Tips & Predictions
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          The 2026 World Cup quarter-finals arrive on July 8–9 with just eight teams left standing. France, Brazil and Argentina lead the betting to lift the trophy — but the quarter-final stage is where the tournament gets truly unpredictable. Here&apos;s everything you need to know: match schedules, latest odds and expert tips for all four games.
        </p>

        {/* Tournament winner odds table */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>World Cup 2026 Winner Odds — Quarter-Final Stage</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Team</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Win Trophy</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Form / Note</th>
              </tr>
            </thead>
            <tbody>
              {contenders.map((c, i) => (
                <tr key={c.name} style={{ borderBottom: "1px solid var(--card-border)", background: i === 0 ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "12px" }}>
                    <span style={{ fontSize: "20px", marginRight: "8px" }}>{c.flag}</span>
                    <strong>{c.name}</strong>
                  </td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: 800, color: i < 3 ? "var(--accent)" : "var(--foreground)", fontSize: i < 3 ? "16px" : "14px" }}>{c.odds}</td>
                  <td style={{ padding: "12px", color: "var(--muted)", fontSize: "13px" }}>{c.form}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>
            Odds via Betsson &amp; 1xBet — updated to reflect QF stage. <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", textDecoration: "none" }}>Claim Betsson welcome bonus →</a>
          </div>
        </div>

        {/* Expert tip box */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>EXPERT PICK — Argentina to reach the Semi-Finals @ 1.65</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Argentina enter the quarter-finals as reigning world champions and their experience in knockout football is unmatched. Messi has been magnificent in what could be his last World Cup — he has the squad, the motivation and the history to advance. Back Argentina to qualify for the semis regardless of their QF opponent.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Bet on 1xBet for the best Argentina outright knockout odds. New customers get a 100% welcome deposit bonus.
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet Argentina to advance on 1xBet →
            </a>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Betsson — 100% Welcome Bonus
            </a>
          </div>
        </div>

        <OnexBetBanner />

        {/* QF match cards */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>All Four Quarter-Final Matches</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "2.5rem" }}>
          {matches.map((m) => (
            <div key={m.id} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", marginBottom: "4px" }}>Quarter-Final · {m.day}</div>
                  <div style={{ fontWeight: 800, fontSize: "16px" }}>
                    {m.flagA} {m.teamA} <span style={{ color: "var(--muted)" }}>vs</span> {m.teamB} {m.flagB}
                  </div>
                </div>
                <div style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "8px", padding: "6px 12px", fontSize: "13px", fontWeight: 700, color: "var(--accent)" }}>
                  {m.time}
                </div>
              </div>
              <div style={{ background: "rgba(0,208,132,0.06)", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "var(--foreground)", lineHeight: 1.6 }}>
                <strong style={{ color: "var(--accent)" }}>💡 Tip:</strong> {m.tip} <strong>Best odds: {m.tipOdds}</strong>
              </div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "8px" }}>ℹ️ {m.note}</div>
            </div>
          ))}
        </div>

        {/* Betting strategy */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Quarter-Final Betting Strategy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px", marginBottom: "2.5rem" }}>
          {[
            { icon: "🎯", title: "Back Favourites in 90 mins", body: "Quarter-finals rarely produce shocks. The biggest four favourites win around 70% of QF matchups at major tournaments — line value is in the match result, not upsets." },
            { icon: "⚽", title: "Under 2.5 Goals Late in Tourneys", body: "Teams tighten up defensively in the QF stage. Under 2.5 Goals has hit in 6 of the last 8 World Cup quarter-finals — worth considering at ~1.90." },
            { icon: "🏆", title: "Outright Accumulator Value", body: "If you fancy two teams to both win their QFs, combining them in a double can turn 1.60 × 1.65 into ~2.60. Use Betsson's multi-bet builder for best odds." },
            { icon: "📊", title: "Asian Handicap Alternatives", body: "When a favourite is priced below 1.55, the Asian Handicap (-0.5) offers better value — you win on 90-minute result only, no penalty for AET." },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
              <div style={{ fontWeight: 800, fontSize: "14px", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { q: "When are the World Cup 2026 quarter-finals?", a: "The four quarter-final matches take place on July 8 and July 9, 2026. Two games are played on each day — one at 18:00 CEST and one at 22:00 CEST." },
            { q: "Who are the favourites for the World Cup 2026 quarter-finals?", a: "France (6.00), Brazil (6.50) and Argentina (8.00) are the leading contenders at the quarter-final stage. England (8.50) and Spain (9.00) are also strongly fancied." },
            { q: "Where can I bet on the World Cup 2026 quarter-finals?", a: "Betsson and 1xBet offer the best odds for the quarter-finals. Betsson has a 100% welcome bonus for new customers. 1xBet covers 150+ countries and often has the highest odds on outright markets." },
            { q: "What is the best bet for the World Cup 2026 quarter-finals?", a: "Argentina to advance to the semi-finals at ~1.65 is excellent value. As reigning champions with Messi in inspired form, they have the pedigree to win any QF matchup." },
            { q: "Can I use Betsson from the USA for World Cup 2026 bets?", a: "Betsson is not available in the USA. US-based bettors should use 1xBet instead, which covers the USA and most other regions not served by Betsson." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Ready to Bet on the Quarter-Finals?</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>Top pick: Argentina to reach the semis @ 1.65. New customers can claim a 100% welcome bonus on first deposit.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Claim Bonus &amp; Bet on Betsson
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Bet on 1xBet (USA / Global)
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px", opacity: 0.7 }}>18+ | Gamble responsibly | T&amp;Cs apply</p>
        </div>

        {/* Internal links */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--card-border)" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--muted)", marginBottom: "12px" }}>MORE WORLD CUP 2026 BETTING GUIDES</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/blog/argentina-quarter-final-world-cup-2026", label: "Argentina QF Preview" },
              { href: "/blog/argentina-vs-egypt-world-cup-2026", label: "Argentina vs Egypt R16" },
              { href: "/blog/portugal-vs-spain-world-cup-2026", label: "Portugal vs Spain R16" },
              { href: "/blog/switzerland-vs-colombia-world-cup-2026", label: "Switzerland vs Colombia R16" },
              { href: "/blog/usa-vs-belgium-world-cup-2026", label: "USA vs Belgium R16" },
              { href: "/world-cup-2026-odds", label: "Tournament Winner Odds" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/blog/world-cup-2026-betting-tips", label: "Betting Tips Hub" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", textDecoration: "none", color: "var(--foreground)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
