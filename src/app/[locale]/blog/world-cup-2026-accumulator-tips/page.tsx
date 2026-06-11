import { Link } from "@/i18n/navigation";
import Script from "next/script";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];
const BETSSON_URL = "/choose-betting";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

function postUrl(l: string) {
  return l === "en"
    ? `${base}/blog/world-cup-2026-accumulator-tips`
    : `${base}/${l}/blog/world-cup-2026-accumulator-tips`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params;
  return {
    title: "World Cup 2026 Accumulator Tips — Best Accas & Odds Boosts",
    description:
      "5 expert World Cup 2026 accumulator tips with boosted odds. Pre-tournament outright accas, group stage match-day accas, and BTTS builders — all with odds and stake guidance.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Accumulator Tips — Best Accas & Odds Boosts",
      description: "5 expert World Cup 2026 accumulator tips with boosted odds. Pre-tournament outright accas, group stage match-day accas, and BTTS builders.",
      url: postUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
      images: [{ url: "https://www.worldcupbet26.com/og-accas.jpg", width: 1200, height: 630, alt: "World Cup 2026 Accumulator Tips" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "World Cup 2026 Accumulator Tips — Best Accas & Odds Boosts",
      description: "5 expert World Cup 2026 accumulators with odds up to 250x. Built with data, not hope.",
      images: ["https://www.worldcupbet26.com/og-accas.jpg"],
    },
  };
}

const accumulators = [
  {
    id: 1,
    title: "Pre-Tournament Outright Accumulator",
    subtitle: "Lock in before the group stage starts (June 11)",
    odds: "8.40",
    risk: "Low",
    type: "Pre-tournament",
    legs: [
      { sel: "France to reach the Final", odds: "2.20", tip: "France the most complete squad — advanced to every WC Final they&apos;ve entered as hosts of that era." },
      { sel: "England to reach the Semi-Finals", odds: "2.10", tip: "Strong draw — Group E is winnable, and England have squad depth to go deep." },
      { sel: "Brazil to reach the Quarter-Finals", odds: "1.80", tip: "Extremely safe — Brazil have exited before the QFs only twice in 22 tournaments." },
    ],
    analysis: "This three-leg stage-based accumulator targets easily achievable milestones rather than outright winners, giving strong implied probability (~26% reach at combined 8.40 odds) while still offering meaningful returns. Ideal for a pre-tournament bet placed before June 11.",
    stake: "1–2 units",
    book: "Betsson",
    bookUrl: BETSSON_URL,
  },
  {
    id: 2,
    title: "Group Stage Day 1 Accumulator — June 11–12",
    subtitle: "Opening fixtures with safe favourites",
    odds: "7.15",
    risk: "Low-Medium",
    type: "Match-day",
    legs: [
      { sel: "Mexico to win vs South Africa (Group A)", odds: "1.65", tip: "Mexico on home soil at Estadio Azteca — 87,000 fans for the tournament&apos;s very first match. South Africa are significant underdogs." },
      { sel: "USA to win vs Paraguay (Group D)", odds: "1.75", tip: "USA at MetLife Stadium with a home crowd of 82,500+. Paraguay qualified as outsiders and face a much stronger host nation." },
      { sel: "Canada to win vs Bosnia &amp; Herzegovina (Group B)", odds: "1.80", tip: "Canada&apos;s first ever home World Cup — Davies, Jonathan David and Buchanan lead a golden generation at BMO Field, Toronto." },
    ],
    analysis: "A three-leg opening weekend accumulator using the three host-nation openers. Mexico, USA and Canada all play their first group games as co-hosts with massive home crowd advantages. Each leg has strong implied probability individually (61%, 57%, 56%) combining to roughly 19% — giving 7.15+ odds that represent excellent opening-day value.",
    stake: "0.5–1 units",
    book: "Betsson",
    bookUrl: BETSSON_URL,
  },
  {
    id: 3,
    title: "\"Group of Death\" BTTS Accumulator — Group C & D",
    subtitle: "Brazil, Argentina, Germany and France all score",
    odds: "11.20",
    risk: "Medium",
    type: "BTTS special",
    legs: [
      { sel: "BTTS — Brazil vs Argentina (Jun 26)", odds: "1.68", tip: "The most anticipated group match in history. Both teams have elite attack and neither defends deep — goals are certain." },
      { sel: "BTTS — Germany vs France (Jun 24)", odds: "1.72", tip: "Two-time finalists meet in the group stage. France attack with Mbappé vs Germany&apos;s rebuilt defence — expect goals from both." },
      { sel: "BTTS — USA vs Mexico (Jun 22)", odds: "1.80", tip: "CONCACAF rivalry at AT&T Stadium Dallas — Mexico have scored in their last 14 consecutive World Cup matches." },
      { sel: "Argentina to score 2+ vs Brazil", odds: "2.50", tip: "Messi&apos;s farewell tournament likely, Argentina come in as reigning world champions with fire in the belly." },
    ],
    analysis: "A four-leg BTTS-focused accumulator targeting the three biggest group-stage clashes in June. BTTS has historically hit in 58% of all World Cup matches and 71% of clashes between top-10 ranked nations. The Argentina 2+ goals selection adds a boost on a high-confidence pick.",
    stake: "0.5 units",
    book: "1xBet",
    bookUrl: ONEXBET_URL,
  },
  {
    id: 4,
    title: "Round of 32 Favourites Acca",
    subtitle: "Top seeds to beat lower-ranked opponents comfortably (July 4–7)",
    odds: "9.60",
    risk: "Low-Medium",
    type: "Knockout round",
    legs: [
      { sel: "France to beat Round of 32 opponent by 2+ goals", odds: "1.95", tip: "France likely face a 3rd-place qualifier in R32 — massive quality gap expected." },
      { sel: "Brazil to beat Round of 32 opponent", odds: "1.50", tip: "Brazil should top Group C comfortably — their R32 draw will be a winnable fixture." },
      { sel: "England to beat Round of 32 opponent", odds: "1.55", tip: "England as Group E favourites should face a manageable R32 draw." },
      { sel: "Spain to beat Round of 32 opponent", odds: "1.60", tip: "2024 European Champions with arguably the best midfield in the world — R32 is a formality." },
    ],
    analysis: "This four-team acca targets the Round of 32 — where top-seeded group winners (expected to be France, Brazil, England, Spain) face 3rd-place finishers. The quality gap at this stage is historically large, giving individual win probabilities of 65–75% per leg.",
    stake: "1 unit",
    book: "Betsson",
    bookUrl: BETSSON_URL,
  },
  {
    id: 5,
    title: "Dark Horse Double — Germany & Morocco",
    subtitle: "Value outright bets combined into a double",
    odds: "250.00",
    risk: "High (each-way recommended)",
    type: "Outright value",
    legs: [
      { sel: "Germany to win World Cup 2026", odds: "10.00", tip: "Germany at 10.00 is massive value. A rebuilt squad under a new coach, an easier projected draw in Group D, and history of winning on big occasions." },
      { sel: "Morocco to reach the Semi-Finals", odds: "25.00", tip: "Morocco at 2022 became the first African team to reach a World Cup SF. They have the defensive structure, the supporters, and the continental pride to do it again." },
    ],
    analysis: "A high-risk, high-reward outright double combining two value picks. Germany at 10.00 for the tournament and Morocco to reach the semi-finals at 25.00 combines to give 250.00 on a small stake. Treat this as a fun long-shot acca rather than a core bet — but the individual value in both legs is genuine.",
    stake: "0.25 units",
    book: "1xBet",
    bookUrl: ONEXBET_URL,
  },
];

const accaFaqs = [
  {
    q: "What is a World Cup accumulator bet?",
    a: "A World Cup accumulator (or acca) combines two or more selections into a single bet where all legs must win. The odds multiply together, giving much higher potential returns than betting each selection individually. For example, four 1.80 selections combine to give a 10.50 accumulator — turning a $10 stake into $105 profit if all four win.",
  },
  {
    q: "What are the best World Cup 2026 accumulator tips?",
    a: "The best World Cup accas for 2026 are: (1) Pre-tournament stage-based accas on France/England/Brazil to reach specific rounds, (2) Group of Death BTTS accas on Brazil vs Argentina and Germany vs France, and (3) Round of 32 favourites acca backing the four top seeds. All five of our recommended accas above are backed by statistical analysis.",
  },
  {
    q: "Which bookmaker is best for World Cup accumulator odds?",
    a: "Betsson and 1xBet both offer excellent accumulator odds for World Cup 2026. Betsson has slightly higher margin-free odds on match results and BTTS markets, while 1xBet offers more exotic legs and the widest range of acca boosters. We recommend placing short accas (2–3 legs) at Betsson and longer speculative accas at 1xBet.",
  },
  {
    q: "How much should I stake on World Cup accumulators?",
    a: "Professional bettors typically limit accumulator stakes to 1–5% of their total bankroll per acca. For a $200 bankroll, that means maximum $10 per acca. Our recommended stakes in each tip above follow a tiered system: 1–2 units for low-risk accas, 0.5 units for medium-risk, and 0.25 units for long-shot specials. Never chase losses with larger accumulator stakes.",
  },
  {
    q: "What is the most profitable World Cup accumulator strategy?",
    a: "The most profitable strategy is to focus on 2–3 leg accas where you have high confidence in each individual selection rather than chasing huge odds with 8+ leg shots. Research shows that 2-leg accas placed at odds over 3.00 yield the best long-term returns. Combine BTTS with correct outcome (e.g., Home Win + BTTS = Yes) for value double-result markets.",
  },
];

const accaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: accaFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "World Cup 2026 Accumulator Tips — Best Accas & Odds Boosts",
  description: "5 expert World Cup 2026 accumulator tips with boosted odds from Betsson and 1xBet.",
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", url: base },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
    { "@type": "ListItem", position: 3, name: "World Cup 2026 Accumulator Tips", item: `${base}/blog/world-cup-2026-accumulator-tips` },
  ],
};

const riskColor = (r: string) =>
  r === "Low" ? "rgba(0,208,132,0.15)" : r.startsWith("Low") ? "rgba(255,215,0,0.1)" : r === "Medium" ? "rgba(255,165,0,0.1)" : "rgba(239,68,68,0.1)";
const riskBorder = (r: string) =>
  r === "Low" ? "rgba(0,208,132,0.4)" : r.startsWith("Low") ? "rgba(255,215,0,0.35)" : r === "Medium" ? "rgba(255,165,0,0.4)" : "rgba(239,68,68,0.4)";
const riskText = (r: string) =>
  r === "Low" ? "var(--accent)" : r.startsWith("Low") ? "#ffd700" : r === "Medium" ? "#f97316" : "#ef4444";

export default function AccumulatorTipsPage() {
  return (
    <>
      <Script id="acca-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(accaFaqSchema) }} />
      <Script id="acca-article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="acca-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>ACCUMULATOR TIPS</span>
            <span style={{ background: "rgba(255,68,68,0.1)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 UPDATED MAY 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 1rem" }}>
            World Cup 2026 Accumulator Tips — 5 Best Accas with Odds
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
            Five expertly built World Cup 2026 accumulator bets covering pre-tournament outrights, group stage match-day BTTS accas, Round of 32 favourites and a dark horse long-shot double. All backed by statistical analysis with stake guidance included.
          </p>
        </div>

        {/* Quick stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { v: "5", l: "Accumulator Tips" },
            { v: "17", l: "Total Legs" },
            { v: "250x", l: "Max Combined Odds" },
            { v: "Jun 11", l: "Tournament Starts" },
          ].map((s) => (
            <div key={s.l} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "8px", padding: "10px 14px", textAlign: "center" }}>
              <div style={{ fontWeight: 900, color: "var(--accent)", fontSize: "22px" }}>{s.v}</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Accumulator Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {accumulators.map((acca) => (
            <div key={acca.id} className="card" style={{ padding: "1.5rem" }}>
              {/* Card header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "1rem" }}>
                <div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                    <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>#{acca.id} — {acca.type.toUpperCase()}</span>
                    <span style={{ background: riskColor(acca.risk), border: `1px solid ${riskBorder(acca.risk)}`, color: riskText(acca.risk), fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>RISK: {acca.risk.toUpperCase()}</span>
                  </div>
                  <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, lineHeight: 1.3 }}>{acca.title}</h2>
                  <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "12px" }}>{acca.subtitle}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ color: "var(--muted)", fontSize: "11px", fontWeight: 600 }}>Combined Odds</div>
                  <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "32px", lineHeight: 1 }}>{acca.odds}</div>
                  <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "2px" }}>Stake: {acca.stake}</div>
                </div>
              </div>

              {/* Legs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "1rem" }}>
                {acca.legs.map((leg, i) => (
                  <div key={i} style={{ background: "rgba(0,208,132,0.04)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "6px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "3px" }}>{leg.sel}</div>
                      <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: leg.tip }} />
                    </div>
                    <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "18px", flexShrink: 0 }}>{leg.odds}</div>
                  </div>
                ))}
              </div>

              {/* Analysis */}
              <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "12px 16px", marginBottom: "1rem", fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 700, color: "var(--foreground)" }}>📊 Analysis: </span>{acca.analysis}
              </div>

              {/* CTA */}
              <a
                href={acca.bookUrl}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                data-affiliate={acca.book}
                style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "11px 24px", borderRadius: "6px", fontWeight: 800, fontSize: "13px", textDecoration: "none" }}
              >
                Place Acca #{acca.id} at {acca.book} →
              </a>
            </div>
          ))}
        </div>

        {/* Summary table */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "1rem" }}>All 5 Accumulators at a Glance</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--card-bg)", borderBottom: "2px solid var(--card-border)" }}>
                  {["#", "Acca Type", "Legs", "Odds", "Risk", "Book"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {accumulators.map((a, i) => (
                  <tr key={a.id} style={{ borderBottom: "1px solid var(--card-border)", background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.1)" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "var(--accent)" }}>#{a.id}</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>{a.title.split("—")[0].trim()}</td>
                    <td style={{ padding: "10px 14px", color: "var(--muted)" }}>{a.legs.length} legs</td>
                    <td style={{ padding: "10px 14px", color: "var(--accent)", fontWeight: 700 }}>{a.odds}</td>
                    <td style={{ padding: "10px 14px" }}>
                      <span style={{ background: riskColor(a.risk), color: riskText(a.risk), padding: "2px 7px", borderRadius: "3px", fontSize: "11px", fontWeight: 700 }}>{a.risk}</span>
                    </td>
                    <td style={{ padding: "10px 14px", color: "var(--muted)" }}>{a.book}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "1rem" }}>Accumulator Betting FAQs</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "2.5rem" }}>
          {accaFaqs.map((f) => (
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
            { href: "/blog/world-cup-2026-betting-tips", label: "💡 10 Expert Picks" },
            { href: "/world-cup-2026-matches", label: "⚽ Match Previews" },
            { href: "/world-cup-2026-odds", label: "🏆 Winner Odds" },
            { href: "/blog/best-value-bets", label: "💎 Value Bets" },
            { href: "/blog/world-cup-2026-predictions", label: "🔮 Predictions" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1.5rem" }}>
          Odds from Betsson and 1xBet. Updated May 2026. 18+ | Gamble responsibly. Accumulator tips are for entertainment purposes — always bet within your means.
        </p>
      </div>
    </>
  );
}
