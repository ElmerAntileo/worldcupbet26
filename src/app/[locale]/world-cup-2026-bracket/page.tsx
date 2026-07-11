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
  title: "World Cup 2026 Bracket — Semi-Finals & Knockout Odds Updated",
  description:
    "World Cup 2026 semi-final bracket: France vs Spain (Jul 14) and SF2 TBC (Jul 15). France 3.50 · Spain 3.50 · Argentina 4.00 · England 5.00. Live odds updated.",
  alternates: {
    canonical: pageUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(l)])), "x-default": pageUrl("en") },
  },
  openGraph: {
    title: "World Cup 2026 Bracket — Semi-Finals & Final Odds",
    description: "Semi-final bracket set: France vs Spain · SF2 TBC. France 3.50 · Spain 3.50 · Argentina 4.00 · England 5.00 · Norway 8.00 · Switzerland 20.00.",
    url: pageUrl("en"),
    siteName: "WorldCupBet26",
    type: "website",
    images: [{ url: "https://www.worldcupbet26.com/og-bracket.jpg", width: 1200, height: 630, alt: "World Cup 2026 Knockout Bracket" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Bracket & Knockout Odds",
    description: "Full knockout bracket with betting odds for France, Brazil, England and all 48 teams. Updated daily.",
    images: ["https://www.worldcupbet26.com/og-bracket.jpg"],
  },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";

// Tournament Winner Odds — Semi-Final stage, Jul 11 2026
const contenders = [
  { name: "France",      flag: "🇫🇷", odds: "3.50", group: "SF1", form: "A+", tier: 1 },
  { name: "Spain",       flag: "🇪🇸", odds: "3.50", group: "SF1", form: "A+", tier: 1 },
  { name: "Argentina",   flag: "🇦🇷", odds: "4.00", group: "QF4", form: "A",  tier: 1 },
  { name: "England",     flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", odds: "5.00", group: "QF3", form: "A",  tier: 1 },
  { name: "Norway",      flag: "🇳🇴", odds: "8.00", group: "QF3", form: "A",  tier: 2 },
  { name: "Switzerland", flag: "🇨🇭", odds: "20.00", group: "QF4", form: "B+", tier: 2 },
];

const stages = [
  {
    stage: "Group Stage",
    dates: "Jun 11 – Jul 2",
    teams: "48 teams → 32",
    desc: "COMPLETE. 12 groups of 4 played out. France, Spain, Norway, England, Argentina and Switzerland all advanced.",
    tipIcon: "✅",
    tip: "Group stage is done — focus on semi-final and outright winner markets now.",
  },
  {
    stage: "Round of 32 & R16",
    dates: "Jul 4 – Jul 8",
    teams: "32 → 8 teams",
    desc: "COMPLETE. Eight teams survive into the Quarter-Finals. Norway's run is the story of the tournament.",
    tipIcon: "✅",
    tip: "Both rounds complete. All Quarter-Final results are in.",
  },
  {
    stage: "Quarter-Finals",
    dates: "Jul 9 – Jul 12",
    teams: "8 → 4 teams",
    desc: "UNDERWAY. France beat Morocco 2-0 · Spain beat Belgium 2-1 · Norway vs England TONIGHT · Argentina vs Switzerland Jul 12.",
    tipIcon: "🏟️",
    tip: "Two QFs still to play. Norway vs England at 17:00 ET and Argentina vs Switzerland Jul 12 21:00 ET.",
  },
  {
    stage: "Semi-Finals",
    dates: "Jul 14 – Jul 15",
    teams: "4 teams",
    desc: "Semi-Final 1: France vs Spain confirmed for Jul 14 at MetLife Stadium. SF2 TBC after QF3/QF4 complete.",
    tipIcon: "🔥",
    tip: "France vs Spain is the bet of the tournament. Spain 2.10 / France 1.80 — lean France at home form.",
  },
  {
    stage: "3rd Place Play-Off",
    dates: "Jul 18",
    teams: "2 teams",
    desc: "Consolation match for the two semi-final losers.",
    tipIcon: "🥉",
    tip: "High-scoring matches historically (avg 2.9 goals). Over 2.5 goals is excellent value.",
  },
  {
    stage: "FINAL",
    dates: "Jul 19, 2026",
    teams: "2 teams",
    desc: "The World Cup 2026 Final at MetLife Stadium, East Rutherford, NJ. Capacity 82,500.",
    tipIcon: "🏆",
    tip: "France 3.50 and Spain 3.50 co-favourites. Lock in outright bets before the SF odds shift.",
  },
];

const projectedFinal = [
  { team: "France",  flag: "🇫🇷", odds: "3.50", path: "Group → R32 → R16 → QF (beat Morocco 2-0) → SF vs Spain (Jul 14)", color: "#1d4ed8" },
  { team: "Spain",   flag: "🇪🇸", odds: "3.50", path: "Group → R32 → R16 → QF (beat Belgium 2-1) → SF vs France (Jul 14)", color: "#ef4444" },
];

const bracketFaqs = [
  {
    q: "What stage is the World Cup 2026 bracket at now?",
    a: "As of July 11, 2026, the tournament is in the Quarter-Finals. France beat Morocco 2-0 and Spain beat Belgium 2-1. Norway vs England plays tonight (Jul 11) and Argentina vs Switzerland is on Jul 12. Semi-finals are Jul 14 and 15, with the Final on July 19 at MetLife Stadium.",
  },
  {
    q: "Who are the favourites to win the World Cup 2026?",
    a: "France (3.50) and Spain (3.50) are joint favourites as of July 11, both through to the semi-finals. Argentina (4.00) and England (5.00) are next, though both still have a Quarter-Final to play. Norway (8.00) are the tournament's biggest surprise package.",
  },
  {
    q: "When is the World Cup 2026 Semi-Final?",
    a: "Semi-Final 1 is on Monday July 14, 2026 at MetLife Stadium in New Jersey — France vs Spain. Semi-Final 2 is on Tuesday July 15 at AT&T Stadium in Dallas, between the winners of Norway vs England and Argentina vs Switzerland.",
  },
  {
    q: "When is the World Cup 2026 Final?",
    a: "The FIFA World Cup 2026 Final is on Sunday, July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey. The stadium holds 82,500 fans.",
  },
  {
    q: "What is the best bet on the World Cup 2026 bracket right now?",
    a: "The value bet at this stage is Norway to win the tournament at 8.00 — Erling Haaland has 7 goals in 5 games and the team has beaten bigger favourites at every turn. If you want safer ground, Spain each-way at 3.50 looks excellent value given Yamal's form.",
  },
  {
    q: "How does the World Cup 2026 bracket work?",
    a: "The 2026 FIFA World Cup started with 48 teams in 12 groups of 4. The top 2 from each group plus the 8 best third-place finishers (32 teams) advanced to the knockout stage. The knockout rounds are: Round of 32, Round of 16, Quarter-finals (underway now), Semi-finals, Third Place Play-off, and the Final on July 19, 2026.",
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
