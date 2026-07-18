import { OG_IMAGE } from "@/lib/og";
import { Link } from "@/i18n/navigation";
import Script from "next/script";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];
const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

function postUrl(l: string) {
  return l === "en"
    ? `${base}/blog/world-cup-2026-schedule`
    : `${base}/${l}/blog/world-cup-2026-schedule`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "World Cup 2026 Schedule & Fixtures — Group Stage to Final",
    description:
      "Complete World Cup 2026 schedule: group stage dates, knockout round fixtures and the Final on July 19, 2026. Plus betting odds and tips for every stage.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Schedule & Fixtures — Group Stage to Final",
      description:
        "Full 2026 FIFA World Cup schedule with dates, venues and betting odds for every stage — from the June 11 opener to the July 19 Final.",
      type: "article",
      url: postUrl(locale),
      publishedTime: "2026-05-29T00:00:00Z",
      modifiedTime: "2026-05-29T00:00:00Z",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "World Cup 2026 Schedule — All Dates & Betting Odds",
      description: "June 11 to July 19 — full fixture list with odds for every stage.",
      images: [OG_IMAGE.url],
    },
  };
}

const stages = [
  {
    name: "Group Stage",
    dates: "June 11 – June 27, 2026",
    matches: 72,
    desc: "48 teams split into 12 groups of four. Each team plays 3 matches. Top 2 from each group (24 teams) plus the 8 best third-placed teams advance to the Round of 32. With 72 group matches, this is the richest betting stage — Over/Under 2.5 goals and BTTS markets offer excellent value.",
    bettingTip: "Back Over 2.5 goals in matches involving Brazil, France and Germany in the group stage. These sides have averaged 3.1 goals per game in recent international qualifiers.",
    odds: "1.65",
    market: "Over 2.5 Goals — key group stage matches",
    icon: "⚽",
    color: "#00d084",
  },
  {
    name: "Round of 32",
    dates: "June 29 – July 2, 2026",
    matches: 16,
    desc: "The new knockout stage introduced in 2026. 32 teams play single-leg ties — the winners advance to the Round of 16. Expect upsets here as tired group stage runners-up face fresh third-placed qualifiers. Asian Handicap markets are ideal for this round given the mixed quality of opponents.",
    bettingTip: "Target Asian Handicap -1.0 on the top three seeds (Brazil, Argentina, France) in their Round of 32 ties. They have been drawn against group stage third-placed qualifiers.",
    odds: "1.80",
    market: "Asian Handicap -1.0 — top 3 seeds",
    icon: "🏟️",
    color: "#a78bfa",
  },
  {
    name: "Round of 16",
    dates: "July 4 – July 6, 2026",
    matches: 8,
    desc: "The classic knockout bracket. Eight ties between the 16 best remaining teams. This round historically produces the most dramatic matches — think Germany vs England or Brazil vs Argentina potential clashes. Match Result and Both Teams to Score markets are most popular.",
    bettingTip: "BTTS (Both Teams to Score) has landed in 62% of Round of 16 matches at the last three World Cups. Back it at around 1.85–2.00 odds in competitive-looking ties.",
    odds: "1.95",
    market: "BTTS Yes — competitive Round of 16 ties",
    icon: "⚡",
    color: "#ffd700",
  },
  {
    name: "Quarter-Finals",
    dates: "July 9 – July 11, 2026",
    matches: 4,
    desc: "Four matches between the eight remaining teams. At this stage, all remaining teams are genuine contenders. Goal markets tighten as defensive discipline increases. Under 2.5 goals and Draw/Extra Time No Bet can offer value when big nations meet.",
    bettingTip: "Quarter-finals average only 1.9 goals per match at recent World Cups. Under 2.5 goals at 1.65–1.75 has been a consistent performer in the last two tournaments.",
    odds: "1.70",
    market: "Under 2.5 Goals — quarter-final clashes",
    icon: "🎯",
    color: "#f97316",
  },
  {
    name: "Semi-Finals",
    dates: "July 14 – July 15, 2026",
    matches: 2,
    desc: "Two matches at MetLife Stadium (NJ) and SoFi Stadium (LA). At this stage the bookmakers have refined the market significantly — but value can still be found in match handicaps and first scorer markets on the less-heralded remaining teams.",
    bettingTip: "First goal scorer markets open up value at this stage. Back the standout striker of whichever dark horse reaches the semi-final — unexpected finalists tend to run through tournaments in scoring form.",
    odds: "varies",
    market: "First Goal Scorer — dark horse striker",
    icon: "🔥",
    color: "#ef4444",
  },
  {
    name: "Third Place & Final",
    dates: "July 18–19, 2026 — MetLife Stadium, NJ",
    matches: 2,
    desc: "The third-place match on July 18 is often overlooked — but it regularly sees 3–4 goals as both eliminated semi-finalists attack freely with nothing to lose. The Final on July 19 at MetLife Stadium, East Rutherford, New Jersey is the marquee event of 2026.",
    bettingTip: "The Third Place match has averaged 3.4 goals across the last four World Cups. Over 2.5 goals at 1.65 is one of the best bets across the entire tournament historically.",
    odds: "1.65",
    market: "Over 2.5 Goals — Third Place match",
    icon: "🏆",
    color: "#FFD700",
  },
];

const keyDates = [
  { date: "June 11", event: "Opening match — Group Stage begins", icon: "🚀" },
  { date: "June 27", event: "Group Stage concludes — all 72 matches complete", icon: "✅" },
  { date: "June 29", event: "Round of 32 begins", icon: "⚡" },
  { date: "July 2", event: "Round of 32 complete — 16 teams remain", icon: "🎯" },
  { date: "July 4–6", event: "Round of 16", icon: "🏟️" },
  { date: "July 9–11", event: "Quarter-Finals", icon: "🔥" },
  { date: "July 14–15", event: "Semi-Finals (MetLife NJ + SoFi LA)", icon: "🌟" },
  { date: "July 18", event: "Third Place Match", icon: "🥉" },
  { date: "July 19", event: "🏆 FINAL — MetLife Stadium, New Jersey", icon: "🏆" },
];

const scheduleFaqs = [
  {
    q: "When does the 2026 World Cup start and end?",
    a: "The 2026 FIFA World Cup runs from June 11 to July 19, 2026. The opening match is on June 11 and the Final is on July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey.",
  },
  {
    q: "How many matches are in the 2026 World Cup?",
    a: "The 2026 FIFA World Cup has a total of 104 matches. This includes 72 group stage matches, 16 Round of 32 matches, 8 Round of 16 matches, 4 quarter-finals, 2 semi-finals, the third-place match and the Final.",
  },
  {
    q: "What is the new Round of 32 in World Cup 2026?",
    a: "The Round of 32 is a new knockout stage introduced for the expanded 2026 World Cup (48 teams, up from 32). The 32 qualifiers from the group stage (top 2 from each group + 8 best third-placed teams) play single-leg ties. The 16 winners then enter the traditional Round of 16.",
  },
  {
    q: "Where is the 2026 World Cup Final being held?",
    a: "The 2026 FIFA World Cup Final is scheduled for July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey, USA. MetLife Stadium has a capacity of over 82,500 and is home to the NFL's New York Giants and New York Jets.",
  },
  {
    q: "What is the best bet for the World Cup 2026 group stage?",
    a: "Over 2.5 goals in matches involving Brazil, France and Germany offers strong value in the group stage. These top nations attack freely knowing they need points, averaging over 3 goals per game in recent qualifiers. Odds of 1.65 for Over 2.5 represent good value.",
  },
  {
    q: "Which bookmaker has the best World Cup schedule betting markets?",
    a: "Betsson and 1xBet offer the deepest match betting markets for the 2026 World Cup, covering all 104 matches including group stage, Round of 32, and knockout rounds. Both bookmakers offer live in-play betting for all World Cup matches.",
  },
];

const scheduleFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: scheduleFaqs.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
    { "@type": "ListItem", position: 3, name: "World Cup 2026 Schedule", item: `${base}/blog/world-cup-2026-schedule` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "World Cup 2026 Schedule & Fixtures — Group Stage to Final",
  description: "Complete 2026 FIFA World Cup schedule with group stage dates, knockout rounds, host venues and betting tips for every stage.",
  url: `${base}/blog/world-cup-2026-schedule`,
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "WorldCupBet26", url: base },
  publisher: { "@type": "Organization", name: "WorldCupBet26", url: base, logo: { "@type": "ImageObject", url: `${base}/favicon.ico` } },
  image: OG_IMAGE.url,
};

export default async function WorldCupSchedulePage() {
  return (
    <>
      <Script id="schedule-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleFaqSchema) }} />
      <Script id="schedule-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schedule-article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>World Cup 2026 Schedule</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: "4px", textTransform: "uppercase", marginBottom: "12px", display: "inline-block" }}>
            Schedule & Fixtures
          </span>
          <h1 className="section-title" style={{ fontSize: "clamp(26px, 4vw, 42px)", marginBottom: "1rem" }}>
            World Cup 2026 Schedule: Every Stage, Date & Betting Opportunity
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "720px", marginBottom: "1rem" }}>
            The 2026 FIFA World Cup runs from <strong style={{ color: "var(--foreground)" }}>June 11 to July 19, 2026</strong> — 39 days, 104 matches, 48 teams and the biggest single sporting event in history. Co-hosted by the <strong style={{ color: "var(--foreground)" }}>USA, Canada and Mexico</strong>, the tournament introduces a new Round of 32 knockout stage. Here&apos;s everything you need to know, including the best betting opportunities at each stage.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {[
              { icon: "📅", label: "Jun 11 – Jul 19, 2026" },
              { icon: "🏟️", label: "16 venues, 3 nations" },
              { icon: "⚽", label: "104 matches total" },
              { icon: "🌍", label: "48 teams" },
            ].map((s) => (
              <span key={s.label} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "6px", padding: "5px 12px", fontSize: "12px", fontWeight: 600, color: "var(--muted-light)" }}>
                {s.icon} {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Key Dates Timeline */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">Key 2026 World Cup Dates</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0" }}>
            {keyDates.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "12px 0", borderBottom: i < keyDates.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontSize: "18px", minWidth: "28px" }}>{d.icon}</span>
                <div>
                  <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "13px" }}>{d.date}</span>
                  <span style={{ color: "var(--muted)", fontSize: "13px", marginLeft: "8px" }}>{d.event}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stage-by-stage guide */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">Stage-by-Stage Betting Guide</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: "0.75rem 0 1.5rem" }}>
            Each stage of the 2026 World Cup has different betting dynamics. Here&apos;s our analysis of the best markets at every stage — from the group stage opener to the Final.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {stages.map((stage) => (
              <div key={stage.name} className="card" style={{ padding: "1.5rem", borderLeft: `3px solid ${stage.color}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 2px", color: stage.color }}>
                      {stage.icon} {stage.name}
                    </h3>
                    <div style={{ fontSize: "13px", color: "var(--muted)" }}>{stage.dates} · {stage.matches} matches</div>
                  </div>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "14px" }}>{stage.desc}</p>
                <div style={{ background: "rgba(0,208,132,0.07)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "8px", padding: "12px 16px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>💡 Betting Tip</div>
                  <p style={{ color: "var(--foreground)", fontSize: "13px", lineHeight: 1.6, margin: "0 0 8px" }}>{stage.bettingTip}</p>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 600 }}>Market: {stage.market}</span>
                    {stage.odds !== "varies" && (
                      <span style={{ background: "var(--accent)", color: "#000", fontWeight: 800, fontSize: "13px", padding: "2px 10px", borderRadius: "6px" }}>
                        ~{stage.odds}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Host venues */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">2026 World Cup Host Stadiums & Cities</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: "0.75rem 0 1.5rem" }}>
            The 2026 World Cup uses 16 stadiums across 16 cities in three countries. The Final is at MetLife Stadium (capacity 82,500) in New Jersey. The USA hosts 11 cities, Canada hosts 2 and Mexico hosts 3.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {[
              { country: "🇺🇸 USA", cities: ["New York/NJ — MetLife Stadium (FINAL)", "Los Angeles — SoFi Stadium", "Dallas — AT&T Stadium", "Miami — Hard Rock Stadium", "San Francisco — Levi's Stadium", "Seattle — Lumen Field", "Chicago — Soldier Field", "Boston — Gillette Stadium", "Kansas City — Arrowhead Stadium", "Houston — NRG Stadium", "Philadelphia — Lincoln Financial Field"] },
              { country: "🇨🇦 Canada", cities: ["Toronto — BMO Field", "Vancouver — BC Place"] },
              { country: "🇲🇽 Mexico", cities: ["Mexico City — Estadio Azteca", "Guadalajara — Estadio Akron", "Monterrey — Estadio BBVA"] },
            ].map((c) => (
              <div key={c.country} className="card" style={{ padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "var(--accent)", marginBottom: "10px", fontSize: "14px" }}>{c.country}</div>
                {c.cities.map((city) => (
                  <div key={city} style={{ fontSize: "13px", color: "var(--muted)", padding: "3px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    {city.includes("FINAL") ? <strong style={{ color: "var(--foreground)" }}>{city}</strong> : city}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.1),rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>Bet on Every Stage of World Cup 2026</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
            From the opening group stage match to the July 19 Final — Betsson and 1xBet cover all 104 World Cup 2026 matches with live in-play betting.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
              style={{ background: "var(--accent)", color: "#000", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Bet at Betsson →
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="1xBet"
              style={{ background: "rgba(0,208,132,0.15)", color: "var(--accent)", border: "2px solid var(--accent)", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Bet at 1xBet →
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ | Gamble Responsibly | T&Cs Apply</p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">World Cup 2026 Schedule — FAQ</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {scheduleFaqs.map((faq, i) => (
              <details key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 600, fontSize: "14px", color: "var(--foreground)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 800, fontSize: "18px", lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: "0 18px 14px", color: "var(--muted)", fontSize: "13px", lineHeight: 1.75, borderTop: "1px solid var(--border)" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>More World Cup 2026 Guides</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/world-cup-2026-odds", label: "🏆 Tournament Winner Odds" },
              { href: "/blog/world-cup-2026-predictions", label: "🔮 Expert Predictions" },
              { href: "/blog/best-value-bets", label: "💰 Best Value Bets" },
              { href: "/blog/golden-boot-odds-2026", label: "👟 Golden Boot Odds" },
              { href: "/blog/group-stage-preview", label: "📋 Group Stage Preview" },
              { href: "/matches", label: "⚽ Live Match Odds" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "2rem", lineHeight: 1.6 }}>
          Last updated: May 29, 2026. Betting odds and schedule information are subject to change. Always verify the latest information at the official FIFA website and bookmaker sites. 18+ only. Gamble responsibly.
        </p>
      </div>
    </>
  );
}
