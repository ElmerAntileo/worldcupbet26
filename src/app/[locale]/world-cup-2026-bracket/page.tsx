import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

function pageUrl(l: string) {
  return l === "en"
    ? `${base}/world-cup-2026-bracket`
    : `${base}/${l}/world-cup-2026-bracket`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Bracket & Knockout Odds — Full Tournament Path",
  description:
    "World Cup 2026 knockout bracket with betting odds for every round. See projected paths for France, Brazil, England and all 48 teams from Round of 32 to the Final on July 19.",
  alternates: {
    canonical: pageUrl("en"),
    languages: Object.fromEntries(locales.map((l) => [l, pageUrl(l)])),
  },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";

// Tournament Winner Odds — used across bracket
const contenders = [
  { name: "France",      flag: "🇫🇷", odds: "6.00",  group: "D", form: "A+", tier: 1 },
  { name: "Brazil",      flag: "🇧🇷", odds: "6.50",  group: "C", form: "A+", tier: 1 },
  { name: "Spain",       flag: "🇪🇸", odds: "7.00",  group: "F", form: "A",  tier: 1 },
  { name: "England",     flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", odds: "7.50",  group: "E", form: "A",  tier: 1 },
  { name: "Argentina",   flag: "🇦🇷", odds: "8.00",  group: "C", form: "A",  tier: 1 },
  { name: "Germany",     flag: "🇩🇪", odds: "10.00", group: "D", form: "B+", tier: 2 },
  { name: "Portugal",    flag: "🇵🇹", odds: "12.00", group: "G", form: "B+", tier: 2 },
  { name: "Netherlands", flag: "🇳🇱", odds: "14.00", group: "H", form: "B",  tier: 2 },
  { name: "Belgium",     flag: "🇧🇪", odds: "18.00", group: "—", form: "B",  tier: 2 },
  { name: "USA",         flag: "🇺🇸", odds: "20.00", group: "B", form: "B",  tier: 3 },
  { name: "Morocco",     flag: "🇲🇦", odds: "25.00", group: "G", form: "B",  tier: 3 },
  { name: "Croatia",     flag: "🇭🇷", odds: "30.00", group: "F", form: "B-", tier: 3 },
  { name: "Mexico",      flag: "🇲🇽", odds: "35.00", group: "A", form: "C+", tier: 3 },
  { name: "Japan",       flag: "🇯🇵", odds: "40.00", group: "D", form: "C+", tier: 3 },
];

const stages = [
  {
    stage: "Group Stage",
    dates: "Jun 11 – Jul 2",
    teams: "48 teams",
    desc: "12 groups of 4. Top 2 from each group + 8 best 3rd-place finishers advance to the Round of 32.",
    tipIcon: "📊",
    tip: "Group winner odds and BTTS bets offer best value early in the tournament.",
  },
  {
    stage: "Round of 32",
    dates: "Jul 4 – Jul 7",
    teams: "32 teams",
    desc: "First knockout round. 16 matches played across USA, Canada and Mexico host venues.",
    tipIcon: "⚡",
    tip: "Heavy favourites often win comfortably here — look for Asian Handicap -1.5 on top seeds.",
  },
  {
    stage: "Round of 16",
    dates: "Jul 10 – Jul 13",
    teams: "16 teams",
    desc: "Potential clashes between group winners and 3rd-place qualifiers. Expect upsets.",
    tipIcon: "🎯",
    tip: "First real test for favourites. Over 2.5 goals lands in 62% of R16 matches historically.",
  },
  {
    stage: "Quarter-Finals",
    dates: "Jul 17 – Jul 18",
    teams: "8 teams",
    desc: "Elite 8 clashes at the biggest venues. High-tension, low-scoring affairs typical.",
    tipIcon: "🏟️",
    tip: "Under 2.5 goals has hit in 70% of World Cup QFs since 2010. Fade the over here.",
  },
  {
    stage: "Semi-Finals",
    dates: "Jul 14 – Jul 15",
    teams: "4 teams",
    desc: "The two semi-finals decide who meets in the final. Often played at neutral mega-venues.",
    tipIcon: "🔥",
    tip: "Draw/extra time is more likely — check double chance markets and both-teams-to-score.",
  },
  {
    stage: "3rd Place Play-Off",
    dates: "Jul 18",
    teams: "2 teams",
    desc: "Consolation match. Teams often experiment with lineups after the exhaustion of the semis.",
    tipIcon: "🥉",
    tip: "High-scoring matches historically (avg 2.9 goals). Over 2.5 goals is excellent value.",
  },
  {
    stage: "FINAL",
    dates: "Jul 19, 2026",
    teams: "2 teams",
    desc: "The World Cup 2026 Final at MetLife Stadium, East Rutherford, NJ. Capacity 82,500.",
    tipIcon: "🏆",
    tip: "Lock in outright winner bets now before France and Brazil odds shorten further.",
  },
];

const projectedFinal = [
  { team: "France", flag: "🇫🇷", odds: "6.00", path: "Group D → R32 → R16 → QF → SF → Final", color: "#1d4ed8" },
  { team: "Brazil", flag: "🇧🇷", odds: "6.50", path: "Group C → R32 → R16 → QF → SF → Final", color: "#16a34a" },
];

const bracketFaqs = [
  {
    q: "How does the World Cup 2026 bracket work?",
    a: "The 2026 FIFA World Cup has 48 teams split into 12 groups of 4. The top 2 from each group plus the 8 best third-place finishers (32 teams total) advance to the knockout stage. The knockout rounds are: Round of 32, Round of 16, Quarter-finals, Semi-finals, Third Place Play-off, and the Final on July 19, 2026.",
  },
  {
    q: "Who are the favourites to win the World Cup 2026 bracket?",
    a: "France (6.00), Brazil (6.50) and Spain (7.00) are the three shortest-priced tournament winner bets as of May 2026. England (7.50) and Argentina (8.00) complete the top 5. Germany at 10.00 is the standout dark horse value bet.",
  },
  {
    q: "When is the World Cup 2026 Final?",
    a: "The FIFA World Cup 2026 Final is on Sunday, July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey. The stadium holds 82,500 fans and is one of the largest in North America.",
  },
  {
    q: "How many teams qualify from each group to the knockout bracket?",
    a: "In 2026, the top 2 teams from each of the 12 groups automatically qualify for the Round of 32. In addition, the 8 best-performing third-place teams also advance, creating a 32-team knockout bracket — a new format introduced specifically for this expanded tournament.",
  },
  {
    q: "What is the best bet on the World Cup 2026 bracket right now?",
    a: "For outright value, Germany at 10.00 stands out — a four-time champion with a rebuilt squad and an easier projected draw in Group D. For in-tournament bets, backing top-seed tournament favourites on Asian Handicap -1.5 in the Round of 32 offers consistent value.",
  },
  {
    q: "Which bracket section is hardest — the Group of Death?",
    a: "Group C (Brazil + Argentina + Ecuador) and Group D (Germany + France + Japan) are widely considered the toughest groups in the 2026 bracket. Both groups guarantee that at least one top-6 world-ranked team finishes 3rd and must rely on a best-of-third-place spot to advance.",
  },
];

const bracketFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bracketFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "World Cup 2026 Bracket", item: `${base}/world-cup-2026-bracket` },
  ],
};

export default function BracketPage() {
  return (
    <>
      <Script id="bracket-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bracketFaqSchema) }} />
      <Script id="bracket-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(24px,4vw,40px)" }}>
            World Cup 2026 Knockout Bracket & Betting Odds
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, maxWidth: "720px", marginTop: "0.75rem" }}>
            Full tournament bracket from the Round of 32 to the Final on July 19. Betting odds, projected paths and expert tips for every knockout round.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
            {[
              { v: "48", l: "Teams" },
              { v: "7", l: "Rounds" },
              { v: "Jul 4", l: "KO Starts" },
              { v: "Jul 19", l: "Final" },
            ].map((s) => (
              <div key={s.l} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                <div style={{ fontWeight: 900, color: "var(--accent)", fontSize: "20px" }}>{s.v}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projected Final Banner */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.05) 0%, rgba(0,208,132,0.12) 100%)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ fontWeight: 800, fontSize: "14px", color: "var(--accent)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>🏆 Projected Final — July 19, MetLife Stadium NJ</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {projectedFinal.map((t) => (
              <div key={t.team} style={{ textAlign: "center", flex: "0 0 auto" }}>
                <div style={{ fontSize: "48px" }}>{t.flag}</div>
                <div style={{ fontWeight: 800, fontSize: "18px" }}>{t.team}</div>
                <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "24px" }}>{t.odds}</div>
                <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "4px" }}>{t.path}</div>
              </div>
            )).reduce((acc: React.ReactNode[], el, i) => {
              if (i > 0) acc.push(<div key={`vs-${i}`} style={{ fontWeight: 900, fontSize: "24px", color: "var(--muted)" }}>VS</div>);
              acc.push(el);
              return acc;
            }, [])}
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <a
              href={BETSSON_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              data-affiliate="Betsson"
              style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}
            >
              Bet on Tournament Winner at Betsson →
            </a>
          </div>
        </div>

        {/* Tournament Stages */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Tournament Bracket — Stage by Stage</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
          {stages.map((s) => (
            <div key={s.stage} className="card" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ minWidth: "120px", flexShrink: 0 }}>
                <div style={{ background: s.stage === "FINAL" ? "var(--accent)" : "rgba(0,208,132,0.1)", border: `1px solid ${s.stage === "FINAL" ? "var(--accent)" : "rgba(0,208,132,0.3)"}`, color: s.stage === "FINAL" ? "#000" : "var(--accent)", borderRadius: "6px", padding: "3px 8px", fontSize: "10px", fontWeight: 700, marginBottom: "6px", display: "inline-block", textTransform: "uppercase" }}>
                  {s.stage}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "11px", fontWeight: 600 }}>{s.dates}</div>
                <div style={{ color: "var(--muted)", fontSize: "11px" }}>{s.teams}</div>
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <p style={{ margin: "0 0 8px", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</p>
                <div style={{ background: "rgba(0,208,132,0.06)", borderLeft: "3px solid var(--accent)", padding: "8px 12px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>{s.tipIcon} Betting tip: </span>{s.tip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tournament Winner Odds Grid */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>2026 World Cup Winner Odds — Full List</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "2.5rem" }}>
          {contenders.map((c) => (
            <div key={c.name} className="card" style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ fontSize: "28px", flexShrink: 0 }}>{c.flag}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                <div style={{ color: "var(--muted)", fontSize: "11px" }}>Group {c.group}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "18px" }}>{c.odds}</div>
                <div style={{ fontSize: "10px", background: c.tier === 1 ? "rgba(0,208,132,0.1)" : c.tier === 2 ? "rgba(255,215,0,0.1)" : "rgba(120,120,120,0.1)", color: c.tier === 1 ? "var(--accent)" : c.tier === 2 ? "#ffd700" : "var(--muted)", padding: "1px 5px", borderRadius: "3px", fontWeight: 600 }}>
                  {c.tier === 1 ? "⭐ FAVE" : c.tier === 2 ? "💎 VALUE" : "🐎 DARK HORSE"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Host Venues */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Knockout Round Host Venues</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { venue: "MetLife Stadium", city: "East Rutherford, NJ", capacity: "82,500", role: "🏆 FINAL" },
            { venue: "AT&T Stadium", city: "Dallas, TX", capacity: "80,000", role: "Semi-Final" },
            { venue: "Rose Bowl", city: "Pasadena, CA", capacity: "90,888", role: "Semi-Final" },
            { venue: "Hard Rock Stadium", city: "Miami, FL", capacity: "65,326", role: "Quarter-Final" },
            { venue: "Gillette Stadium", city: "Foxborough, MA", capacity: "65,878", role: "Quarter-Final" },
            { venue: "SoFi Stadium", city: "Los Angeles, CA", capacity: "70,240", role: "Quarter-Final" },
            { venue: "Lincoln Financial Field", city: "Philadelphia, PA", capacity: "69,176", role: "Round of 16" },
          ].map((v) => (
            <div key={v.venue} className="card" style={{ padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <div style={{ fontWeight: 700, fontSize: "13px" }}>{v.venue}</div>
                <span style={{ background: v.role.includes("FINAL") ? "rgba(255,215,0,0.15)" : "rgba(0,208,132,0.1)", border: `1px solid ${v.role.includes("FINAL") ? "rgba(255,215,0,0.3)" : "rgba(0,208,132,0.25)"}`, color: v.role.includes("FINAL") ? "#ffd700" : "var(--accent)", fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px", whiteSpace: "nowrap" }}>{v.role}</span>
              </div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>{v.city}</div>
              <div style={{ color: "var(--muted)", fontSize: "11px" }}>Cap: {v.capacity}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.05) 0%, rgba(0,208,132,0.1) 100%)", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "2rem", marginBottom: "2.5rem", textAlign: "center" }}>
          <div style={{ fontWeight: 800, fontSize: "20px", marginBottom: "8px" }}>Lock in Your World Cup Winner Bet Now</div>
          <p style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "480px", margin: "0 auto 1.25rem", lineHeight: 1.6 }}>
            Tournament winner odds will shorten dramatically once the group stage begins. France at 6.00 and Germany at 10.00 are our top picks — get them before they move.
          </p>
          <a
            href={BETSSON_URL}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            data-affiliate="Betsson"
            style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}
          >
            Bet Outright at Betsson — 100% Bonus
          </a>
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>18+ · New customers only · T&Cs apply · Gamble responsibly</div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "2.5rem" }}>
          {bracketFaqs.map((f) => (
            <details key={f.q} className="card" style={{ padding: "1rem 1.25rem" }}>
              <summary style={{ fontWeight: 700, fontSize: "14px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {f.q}
                <span style={{ color: "var(--accent)", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>+</span>
              </summary>
              <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: "13px", lineHeight: 1.7 }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* Internal links */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { href: "/world-cup-2026-odds", label: "🏆 Winner Odds" },
            { href: "/world-cup-2026-groups", label: "📋 Group Stage" },
            { href: "/world-cup-2026-matches", label: "⚽ Match Previews" },
            { href: "/blog/world-cup-2026-predictions", label: "🔮 Predictions" },
            { href: "/blog/world-cup-2026-betting-tips", label: "💡 Betting Tips" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1.5rem" }}>Odds from Betsson. Updated daily. 18+ | Gamble responsibly.</p>
      </div>
    </>
  );
}
