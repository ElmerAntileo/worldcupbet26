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
    ? `${base}/blog/world-cup-2026-group-of-death`
    : `${base}/${l}/blog/world-cup-2026-group-of-death`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params;
  return {
    title: "World Cup 2026 Group of Death — Groups C & D Betting Preview",
    description:
      "Brazil vs Argentina in Group C and Germany vs France in Group D — the two Group of Death clashes of World Cup 2026. Full betting preview, odds, team analysis and top picks.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Group of Death — Groups C & D Betting Preview",
      description: "Brazil vs Argentina in Group C and Germany vs France in Group D. Full betting preview, odds, team analysis and top picks.",
      url: postUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
      images: [{ url: "https://www.worldcupbet26.com/og-group-death.jpg", width: 1200, height: 630, alt: "World Cup 2026 Group of Death" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "World Cup 2026 Group of Death — Groups C & D Betting Preview",
      description: "Brazil vs Argentina vs Germany vs France — the toughest groups at World Cup 2026. Full analysis & top bets.",
      images: ["https://www.worldcupbet26.com/og-group-death.jpg"],
    },
  };
}

const groupCTeams = [
  {
    name: "Brazil",
    flag: "🇧🇷",
    odds: "6.50",
    rank: 3,
    titles: 5,
    coach: "Dorival Júnior",
    keyPlayer: "Vinícius Jr.",
    keyPlayerRole: "LW / SS",
    form: "W W W D W",
    strength: "Electric attacking trio (Vini Jr., Rodrygo, Endrick). Solid back four. Veteran keeper in Alisson.",
    weakness: "Central midfield options less creative since Neymar decline. Sometimes struggle to break low blocks.",
    groupOdds: { win: "1.48", second: "2.90", third: "8.00" },
    tip: "Brazil to top Group C",
    tipOdds: "1.48",
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
    odds: "8.00",
    rank: 1,
    titles: 3,
    coach: "Lionel Scaloni",
    keyPlayer: "Lionel Messi",
    keyPlayerRole: "CAM / SS",
    form: "W W D W W",
    strength: "Reigning world champions. Messi in potentially his last World Cup — motivation at peak. Organised, hard to beat structure.",
    weakness: "An aging squad reliant on Messi. Without him at 100%, Argentina become a different team.",
    groupOdds: { win: "2.10", second: "2.20", third: "5.00" },
    tip: "Argentina to reach the Final",
    tipOdds: "3.50",
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
    odds: "90.00",
    rank: 28,
    titles: 0,
    coach: "Sebastián Beccacece",
    keyPlayer: "Moisés Caicedo",
    keyPlayerRole: "CDM",
    form: "W D L W D",
    strength: "Compact defensive unit. Caicedo is world-class at midfield disruption. Strong South American qualifying form.",
    weakness: "Attack is one-dimensional without pace on the counter. Facing Brazil + Argentina in the same group is brutal.",
    groupOdds: { win: "15.00", second: "12.00", third: "4.50" },
    tip: "Ecuador as 3rd-place qualifier value",
    tipOdds: "4.50",
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    odds: "200.00",
    rank: 56,
    titles: 0,
    coach: "Roberto Mancini",
    keyPlayer: "Salem Al-Dawsari",
    keyPlayerRole: "LW",
    form: "W L W W D",
    strength: "Disciplined defensive unit. Al-Dawsari can cause trouble on the break. The 2022 shock win over Argentina showed they can compete.",
    weakness: "Quality gap against Brazil and Argentina is enormous. Rely entirely on backs-to-the-wall defending.",
    groupOdds: { win: "45.00", second: "35.00", third: "9.00" },
    tip: "Avoid — too big a quality gap",
    tipOdds: "—",
  },
];

const groupDTeams = [
  {
    name: "France",
    flag: "🇫🇷",
    odds: "6.00",
    rank: 2,
    titles: 2,
    coach: "Didier Deschamps",
    keyPlayer: "Kylian Mbappé",
    keyPlayerRole: "CF / SS",
    form: "W W W W D",
    strength: "Mbappé in his prime at 27. Deep squad with elite options at every position. Two-time World Cup winners within recent memory.",
    weakness: "Strong reliance on Mbappé — when he is off-form, France can be flat. Defending set pieces is an occasional vulnerability.",
    groupOdds: { win: "1.60", second: "2.40", third: "10.00" },
    tip: "France to win Group D",
    tipOdds: "1.60",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    odds: "10.00",
    rank: 13,
    titles: 4,
    coach: "Julian Nagelsmann",
    keyPlayer: "Florian Wirtz",
    keyPlayerRole: "CAM",
    form: "W W D W W",
    strength: "Rebuilt under Nagelsmann with a young, dynamic squad. Wirtz is one of the best players in Europe. Strong togetherness after Euro 2024 momentum.",
    weakness: "Defensive injury concerns. Historically underperform at World Cups after hosting (eliminated at group stage in 2018, 2022 R16).",
    groupOdds: { win: "2.20", second: "2.50", third: "6.00" },
    tip: "Germany value to reach QF",
    tipOdds: "2.10",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    odds: "40.00",
    rank: 19,
    titles: 0,
    coach: "Hajime Moriyasu",
    keyPlayer: "Takefusa Kubo",
    keyPlayerRole: "RW / SS",
    form: "W W L W W",
    strength: "Beat both Germany AND Spain at 2022 to top their group. Discipline, organization and tactical intelligence are elite. Kubo is a world-class wide player.",
    weakness: "Physicality in knockout stages. Historically struggle against top-5 world sides beyond the group stage.",
    groupOdds: { win: "6.00", second: "5.00", third: "4.00" },
    tip: "Japan to shock Germany — value play",
    tipOdds: "5.10",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    odds: "150.00",
    rank: 24,
    titles: 0,
    coach: "Tony Popovic",
    keyPlayer: "Mathew Ryan",
    keyPlayerRole: "GK",
    form: "W L W D W",
    strength: "Veteran goalkeeper in Mathew Ryan is world-class. Strong team spirit. Reached R16 in 2022.",
    weakness: "Attack lacks depth. Playing in Group D against France and Germany is an enormous task.",
    groupOdds: { win: "25.00", second: "20.00", third: "8.00" },
    tip: "Avoid — back Japan instead for 3rd",
    tipOdds: "—",
  },
];

const keyMatches = [
  {
    group: "C",
    home: "Brazil", homeFlag: "🇧🇷", homeOdds: "2.35",
    away: "Argentina", awayFlag: "🇦🇷", awayOdds: "3.05",
    date: "Jun 26", draw: "3.15",
    preview: "The match the world has been waiting for. Brazil vs Argentina in the group stage for the first time since 1982. Messi's likely final World Cup showdown against Vinícius Jr. in his prime. Expect a war.",
    bestBet: "BTTS — Both Teams to Score",
    bestBetOdds: "1.68",
    href: "/world-cup-2026-matches/brazil-vs-argentina",
  },
  {
    group: "D",
    home: "Germany", homeFlag: "🇩🇪", homeOdds: "2.75",
    away: "France", awayFlag: "🇫🇷", awayOdds: "2.65",
    date: "Jun 24", draw: "3.25",
    preview: "Two four-time (combined) World Cup winners in the same group. Germany under Nagelsmann vs Deschamps' experienced France side. Wirtz vs Mbappé is the battle within the battle.",
    bestBet: "Draw at Half-Time",
    bestBetOdds: "2.10",
    href: "/world-cup-2026-matches/germany-vs-france",
  },
  {
    group: "D",
    home: "Germany", homeFlag: "🇩🇪", homeOdds: "1.78",
    away: "Japan", awayFlag: "🇯🇵", awayOdds: "5.10",
    date: "Jun 14", draw: "3.65",
    preview: "A 2022 World Cup rematch. Japan shocked Germany 2–1 two years ago — can they do it again? Value is on Japan at 5.10 given their tactical discipline and ability to hold their shape under pressure.",
    bestBet: "Japan — Double Chance (Draw or Win)",
    bestBetOdds: "3.20",
    href: "/world-cup-2026-matches/germany-vs-japan",
  },
];

const groupFaqs = [
  {
    q: "Which is the Group of Death at World Cup 2026?",
    a: "Both Group C and Group D qualify as the Groups of Death at the 2026 World Cup. Group C features Brazil (#3 ranked), Argentina (#1 ranked) and Ecuador in the same pool — guaranteeing that at least one top-3 world side finishes 3rd. Group D has France (#2) and Germany (#13), who are both widely expected to win the tournament, in a brutal head-to-head group.",
  },
  {
    q: "Who will win Group C — Brazil or Argentina?",
    a: "Brazil are slight favourites to win Group C at 1.48, with Argentina at 2.10 to top the group. Most likely outcome is Brazil 1st, Argentina 2nd, with both advancing comfortably to the Round of 32. Ecuador at 4.50 to be best 3rd-place finisher is excellent value given the difficulty of their group.",
  },
  {
    q: "Who will win Group D — France or Germany?",
    a: "France are favourites to win Group D at 1.60, with Germany second at 2.20. Japan at 6.00 to win the group is the standout long-shot — they have beaten both Germany and Spain at the last World Cup, proving their group-stage record is historically strong. The most likely outcome is France 1st, Germany 2nd.",
  },
  {
    q: "What are the best bets for the Group of Death matches?",
    a: "The three best bets in Groups C and D are: (1) BTTS — Brazil vs Argentina at 1.68 (both elite attacking sides need points), (2) Draw at Half-Time in Germany vs France at 2.10 (both cautious coaches in big matches), and (3) Japan — Double Chance at 3.20 vs Germany given Japan's proven track record of shocking European giants.",
  },
  {
    q: "Can Ecuador or Japan qualify from the Group of Death?",
    a: "Ecuador have a realistic path to qualifying as either 2nd or best 3rd-place finisher — they hold strong home form in South American qualification and have a compact defensive structure that can absorb pressure. Japan are arguably the most dangerous 'underdog' at the tournament and have a strong case to finish 2nd in Group D behind France. Neither outcome is far-fetched.",
  },
  {
    q: "How does the expanded 48-team format affect the Group of Death?",
    a: "In 2026 with 12 groups of 4, the top 2 from each group advance automatically PLUS the 8 best 3rd-place finishers. This means even 3rd-place finishers from Groups C and D — like Ecuador or Japan — have a realistic chance of progressing via the best-third-place route. This makes the 'Group of Death' slightly less deadly than in previous 32-team tournaments.",
  },
];

const groupFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groupFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "World Cup 2026 Group of Death — Groups C & D Full Preview",
  description: "Full betting preview of Groups C and D at the 2026 FIFA World Cup featuring Brazil, Argentina, France and Germany.",
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
    { "@type": "ListItem", position: 3, name: "World Cup 2026 Group of Death", item: `${base}/blog/world-cup-2026-group-of-death` },
  ],
};

function TeamCard({ t }: { t: typeof groupCTeams[0] }) {
  return (
    <div className="card" style={{ padding: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "36px" }}>{t.flag}</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: "17px" }}>{t.name}</div>
            <div style={{ color: "var(--muted)", fontSize: "12px" }}>Rank #{t.rank} · {t.titles} title{t.titles !== 1 ? "s" : ""}</div>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ color: "var(--muted)", fontSize: "11px" }}>Win odds</div>
          <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "22px" }}>{t.odds}</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px", marginBottom: "10px" }}>
        <div><span style={{ color: "var(--muted)" }}>Coach: </span><span style={{ fontWeight: 600 }}>{t.coach}</span></div>
        <div><span style={{ color: "var(--muted)" }}>Key player: </span><span style={{ fontWeight: 600 }}>{t.keyPlayer}</span></div>
        <div><span style={{ color: "var(--muted)" }}>Form: </span><span style={{ fontWeight: 600, fontFamily: "monospace" }}>{t.form}</span></div>
        <div><span style={{ color: "var(--muted)" }}>Group win: </span><span style={{ color: "var(--accent)", fontWeight: 700 }}>{t.groupOdds.win}</span></div>
      </div>
      <div style={{ fontSize: "12px", color: "var(--muted)", background: "rgba(0,208,132,0.04)", borderLeft: "3px solid rgba(0,208,132,0.3)", padding: "8px 10px", borderRadius: "0 4px 4px 0", marginBottom: "8px", lineHeight: 1.5 }}>
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>✅ Strength: </span>{t.strength}
      </div>
      <div style={{ fontSize: "12px", color: "var(--muted)", background: "rgba(239,68,68,0.04)", borderLeft: "3px solid rgba(239,68,68,0.3)", padding: "8px 10px", borderRadius: "0 4px 4px 0", marginBottom: "10px", lineHeight: 1.5 }}>
        <span style={{ color: "#ef4444", fontWeight: 700 }}>⚠️ Weakness: </span>{t.weakness}
      </div>
      {t.tipOdds !== "—" && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,208,132,0.08)", borderRadius: "6px", padding: "8px 12px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)" }}>💡 Bet tip: {t.tip}</span>
          <span style={{ color: "var(--accent)", fontWeight: 900, fontSize: "16px" }}>{t.tipOdds}</span>
        </div>
      )}
    </div>
  );
}

export default function GroupOfDeathPage() {
  return (
    <>
      <Script id="god-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(groupFaqSchema) }} />
      <Script id="god-article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="god-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>GROUP STAGE</span>
            <span style={{ background: "rgba(255,68,68,0.1)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 GROUPS C & D</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 1rem" }}>
            World Cup 2026 Group of Death — Groups C & D Full Betting Preview
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
            Group C (Brazil, Argentina, Ecuador, Saudi Arabia) and Group D (France, Germany, Japan, Australia) are the two most brutal groups in the 2026 World Cup draw. Full team analysis, match odds, best bets and predictions for every fixture.
          </p>
        </div>

        {/* === GROUP C === */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ background: "var(--accent)", color: "#000", fontWeight: 900, fontSize: "20px", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>C</div>
            <div>
              <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>Group C — Brazil 🇧🇷 vs Argentina 🇦🇷</h2>
              <div style={{ color: "var(--muted)", fontSize: "13px" }}>Brazil · Argentina · Ecuador · Saudi Arabia</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "12px" }}>
            {groupCTeams.map((t) => <TeamCard key={t.name} t={t} />)}
          </div>

          {/* Group C prediction */}
          <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "10px", padding: "1.25rem", marginTop: "1rem" }}>
            <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "8px" }}>🔮 Group C Prediction</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[{ pos: "1st", team: "Brazil 🇧🇷", odds: "1.48" }, { pos: "2nd", team: "Argentina 🇦🇷", odds: "2.10" }, { pos: "Best 3rd", team: "Ecuador 🇪🇨", odds: "4.50" }].map((r) => (
                <div key={r.pos} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "6px", padding: "8px 14px", textAlign: "center" }}>
                  <div style={{ color: "var(--muted)", fontSize: "11px" }}>{r.pos}</div>
                  <div style={{ fontWeight: 700, fontSize: "13px" }}>{r.team}</div>
                  <div style={{ color: "var(--accent)", fontWeight: 800, fontSize: "16px" }}>{r.odds}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === GROUP D === */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ background: "var(--accent)", color: "#000", fontWeight: 900, fontSize: "20px", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>D</div>
            <div>
              <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>Group D — France 🇫🇷 vs Germany 🇩🇪</h2>
              <div style={{ color: "var(--muted)", fontSize: "13px" }}>France · Germany · Japan · Australia</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "12px" }}>
            {groupDTeams.map((t) => <TeamCard key={t.name} t={t} />)}
          </div>

          {/* Group D prediction */}
          <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "10px", padding: "1.25rem", marginTop: "1rem" }}>
            <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "8px" }}>🔮 Group D Prediction</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[{ pos: "1st", team: "France 🇫🇷", odds: "1.60" }, { pos: "2nd", team: "Germany 🇩🇪", odds: "2.20" }, { pos: "Best 3rd", team: "Japan 🇯🇵", odds: "6.00" }].map((r) => (
                <div key={r.pos} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "6px", padding: "8px 14px", textAlign: "center" }}>
                  <div style={{ color: "var(--muted)", fontSize: "11px" }}>{r.pos}</div>
                  <div style={{ fontWeight: 700, fontSize: "13px" }}>{r.team}</div>
                  <div style={{ color: "var(--accent)", fontWeight: 800, fontSize: "16px" }}>{r.odds}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Match Previews */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Key Match Previews & Best Bets</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
          {keyMatches.map((m) => (
            <div key={m.href} className="card" style={{ padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>Group {m.group}</span>
                <span style={{ color: "var(--muted)", fontSize: "12px" }}>{m.date}</span>
                <span style={{ background: "rgba(255,68,68,0.1)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px" }}>🔥 KEY MATCH</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "28px" }}>{m.homeFlag}</span>
                  <div>
                    <div style={{ fontWeight: 700 }}>{m.home}</div>
                    <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "18px" }}>{m.homeOdds}</div>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--muted)", fontSize: "13px", fontWeight: 700 }}>Draw: {m.draw}</div>
                  <div style={{ color: "var(--muted)", fontWeight: 900, fontSize: "20px" }}>VS</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700 }}>{m.away}</div>
                    <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "18px" }}>{m.awayOdds}</div>
                  </div>
                  <span style={{ fontSize: "28px" }}>{m.awayFlag}</span>
                </div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6, margin: "0 0 10px" }}>{m.preview}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "6px", padding: "8px 12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: 700 }}>💡 Best Bet: {m.bestBet}</span>
                <span style={{ color: "var(--accent)", fontWeight: 900, fontSize: "17px" }}>{m.bestBetOdds}</span>
              </div>
              <Link href={m.href} style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                Full match preview & odds →
              </Link>
            </div>
          ))}
        </div>

        {/* Top 5 Group Stage Bets */}
        <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "1rem" }}>Top 5 Group of Death Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "2.5rem" }}>
          {[
            { tip: "BTTS — Brazil vs Argentina (Jun 26)", odds: "1.68", book: "Betsson", why: "Two all-time attacking powerhouses need points — no team in this match will sit back.", bookUrl: BETSSON_URL },
            { tip: "Germany to reach the Semi-Finals", odds: "3.50", book: "1xBet", why: "Value pick. Germany have a legitimate path via Group D 2nd place, and their squad is younger and hungrier than at any point since 2014.", bookUrl: ONEXBET_URL },
            { tip: "Japan Double Chance vs Germany", odds: "3.20", book: "Betsson", why: "Japan beat Germany in 2022. Same tactical setup. Nagelsmann's Germany are defensively brittle against deep-sitting counter-attack teams.", bookUrl: BETSSON_URL },
            { tip: "Ecuador to qualify (best 3rd place)", odds: "4.50", book: "1xBet", why: "Best value in the group. Even finishing 3rd behind Brazil and Argentina, Ecuador may qualify as best 3rd-place finisher in the expanded format.", bookUrl: ONEXBET_URL },
            { tip: "Messi to score anytime vs Brazil", odds: "2.80", book: "Betsson", why: "Messi's last World Cup. He scored at every major tournament in the 2020s. The motivation against Brazil in his likely final group match is unmatched.", bookUrl: BETSSON_URL },
          ].map((bet, i) => (
            <div key={i} className="card" style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "3px" }}>#{i + 1} {bet.tip}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{bet.why}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "22px" }}>{bet.odds}</div>
                  <div style={{ color: "var(--muted)", fontSize: "11px" }}>{bet.book}</div>
                </div>
                <a href={bet.bookUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={bet.book} style={{ background: "var(--accent)", color: "#000", padding: "8px 14px", borderRadius: "6px", fontWeight: 700, fontSize: "12px", textDecoration: "none", whiteSpace: "nowrap" }}>
                  Bet Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "1rem" }}>Group of Death FAQs</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "2.5rem" }}>
          {groupFaqs.map((f) => (
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
            { href: "/world-cup-2026-groups", label: "📋 All Groups" },
            { href: "/world-cup-2026-matches/brazil-vs-argentina", label: "🇧🇷 Brazil vs Argentina" },
            { href: "/world-cup-2026-matches/germany-vs-france", label: "🇩🇪 Germany vs France" },
            { href: "/blog/world-cup-2026-accumulator-tips", label: "🎯 Accumulator Tips" },
            { href: "/world-cup-2026-bracket", label: "🔱 Full Bracket" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1.5rem" }}>Odds from Betsson and 1xBet. Updated May 2026. 18+ | Gamble responsibly.</p>
      </div>
    </>
  );
}
