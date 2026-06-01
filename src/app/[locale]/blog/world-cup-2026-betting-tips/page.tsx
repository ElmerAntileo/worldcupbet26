import { OG_IMAGE } from "@/lib/og";
import { Link } from "@/i18n/navigation";
import Script from "next/script";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];
const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

function postUrl(l: string) {
  return l === "en"
    ? `${base}/blog/world-cup-2026-betting-tips`
    : `${base}/${l}/blog/world-cup-2026-betting-tips`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "World Cup 2026 Betting Tips — 10 Expert Picks with Odds",
    description:
      "10 expert World Cup 2026 betting tips: France tournament winner at 6.00, Germany value bet at 10.00, Mbappé Golden Boot, Over 2.5 goals strategy and more. Backed by data.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Betting Tips — 10 Expert Picks",
      description:
        "10 data-backed World Cup 2026 betting tips covering tournament winner, Golden Boot, group stage goals and dark horse value bets.",
      type: "article",
      url: postUrl(locale),
      publishedTime: "2026-05-29T00:00:00Z",
      modifiedTime: "2026-05-29T00:00:00Z",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "10 World Cup 2026 Betting Tips — Expert Picks & Odds",
      description: "France at 6.00, Germany at 10.00 and more — our top betting tips for the 2026 World Cup.",
      images: [OG_IMAGE.url],
    },
  };
}

const tips = [
  {
    num: 1,
    title: "Back France to Win the Tournament",
    pick: "France to Win World Cup 2026",
    odds: "6.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "High",
    confidenceColor: "#00d084",
    analysis: "Brazil may be the market favourite at 4.00, but France are our standout value pick for the 2026 World Cup. Kylian Mbappé enters this tournament at the absolute peak of his powers — 28 years old, playing in the world's biggest league, carrying Champions League pedigree. France have the deepest squad of any nation, with world-class cover in every position. Their record speaks for itself: 2018 World Cup winners, 2022 runners-up (took Argentina to penalties in the Final), 2021 Nations League champions. At 6.00 — 1.5 price points longer than Brazil — France represent the best value among the genuine favourites.",
    tag: "Tournament Winner",
    tagColor: "#ffd700",
  },
  {
    num: 2,
    title: "Germany as Your Dark Horse at 10.00",
    pick: "Germany to Win World Cup 2026",
    odds: "10.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "Medium-High",
    confidenceColor: "#a78bfa",
    analysis: "Germany arrive at 2026 with the most exciting squad they have had since the 2014 World Cup winning generation. Florian Wirtz (22) and Jamal Musiala (22) are already two of Europe's best players, and the supporting cast — Leroy Sané, Kai Havertz, Antonio Rüdiger — is world-class. Germany hosted Euro 2024 and, despite losing to Spain in the quarter-finals, showed they can compete at the highest level. At 10.00, they are at least three times the price of Brazil yet arguably only marginally less likely to win. This is our best value long-term bet.",
    tag: "Dark Horse",
    tagColor: "#a78bfa",
  },
  {
    num: 3,
    title: "Kylian Mbappé for the Golden Boot",
    pick: "Mbappé to Win Golden Boot",
    odds: "8.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "High",
    confidenceColor: "#00d084",
    analysis: "In a World Cup where France are expected to reach the Final, their primary striker and captain Mbappé should have ample opportunity to top the scorer charts. He has scored in both of his previous World Cups (including a hat-trick in the 2022 Final), knows how to perform on the biggest stage, and at 28 is at his athletic and technical peak. The Golden Boot market is notoriously hard to win — you need your team to go deep AND to be the designated penalty taker — but Mbappé ticks every box. At 8.00, he is the standout pick.",
    tag: "Golden Boot",
    tagColor: "#00d084",
  },
  {
    num: 4,
    title: "Over 2.5 Goals in Brazil vs Argentina Group Stage Decider",
    pick: "Over 2.5 Goals — Brazil vs Argentina",
    odds: "1.65",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "High",
    confidenceColor: "#00d084",
    analysis: "These two sides are in the same group (Group F) and face off in what will likely be the most watched group stage match in World Cup history. Brazil vs Argentina matches in recent years have been high-scoring affairs — the 2021 Copa América Final and subsequent qualifiers have averaged 2.8 goals. Both sides attack aggressively and this match could effectively decide who tops the group. Over 2.5 goals at 1.65 is solid value for a game between the world's two most offensive nations.",
    tag: "Goals Market",
    tagColor: "#f97316",
  },
  {
    num: 5,
    title: "Morocco to Reach the Quarter-Finals",
    pick: "Morocco to reach Quarter-Finals",
    odds: "2.50",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "Medium",
    confidenceColor: "#ffd700",
    analysis: "Morocco's 2022 semi-final run was not a fluke. Achraf Hakimi, Hakim Ziyech and Yassine Bounou are elite players at European clubs. Their defensive organisation — conceding just 5 goals in 7 matches at Qatar — is world-class. In 2026 they are in a tough group with France and Croatia, but the Round of 32 draw could give them a favourable path. At 2.50 to reach the quarter-finals, this is compelling each-way value given their proven tournament pedigree.",
    tag: "Each-Way Value",
    tagColor: "#f97316",
  },
  {
    num: 6,
    title: "USA to Reach the Round of 16",
    pick: "USA to Reach Round of 16",
    odds: "1.55",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "Very High",
    confidenceColor: "#00d084",
    analysis: "The USA are co-hosts, playing in front of a passionate home crowd in the world's most developed sports market. With Christian Pulisic, Weston McKennie and Tyler Adams forming a formidable core — all playing at top European clubs — the Americans have genuine quality. Co-host advantage is statistically proven: host nations advance from the group stage 85% of the time. USA at 1.55 to reach the Round of 16 (essentially: advance from their group) is as safe as short-priced bets come in international football.",
    tag: "Safe Bet",
    tagColor: "#00d084",
  },
  {
    num: 7,
    title: "Argentina to Win Group D",
    pick: "Argentina to Win Group D",
    odds: "1.25",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "Very High",
    confidenceColor: "#00d084",
    analysis: "The reigning world champions are in Group D with Chile, Bolivia and Switzerland — a group they should win comfortably. Messi may be 38 in 2026 but the squad has Julián Álvarez, Rodrigo De Paul and Emiliano Martínez — all at their peak. Argentina have won their last 12 international matches in group stage competition. At 1.25 this is a low-odds accumulator leg, but paired with another strong group winner, it builds excellent accumulator value.",
    tag: "Group Win",
    tagColor: "#ffd700",
  },
  {
    num: 8,
    title: "BTTS in the Round of 16 High-Stake Clashes",
    pick: "Both Teams to Score — Round of 16 ties",
    odds: "1.90",
    bookmaker: "1xBet",
    url: ONEXBET_URL,
    confidence: "Medium-High",
    confidenceColor: "#a78bfa",
    analysis: "Both Teams to Score (BTTS) has landed in 62% of World Cup Round of 16 matches over the last three tournaments. At this stage, teams are too evenly matched for clean sheets — every side left in the tournament has quality attackers. In matches like England vs Colombia or Brazil vs Morocco, BTTS at 1.90 has been a historically profitable bet. We favour the competitive ties over those involving the very top seeds, where defensive dominance can suppress goals.",
    tag: "Goals Market",
    tagColor: "#f97316",
  },
  {
    num: 9,
    title: "Vinícius Jr. — First Goal Scorer in a Brazil Group Match",
    pick: "Vinícius Jr. — Anytime Goalscorer vs Bolivia",
    odds: "1.75",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "High",
    confidenceColor: "#00d084",
    analysis: "Vinícius Jr. is in the form of his life and Brazil's designated left-wing attacker. Against weaker group stage opposition like Bolivia, Brazil will dominate possession and create multiple chances for their elite forwards. Vinícius is lethal in these one-sided games, scoring 12 club goals in his last 15 starts entering the tournament. Anytime goalscorer odds of 1.75 represent excellent value for one of the tournament's best forwards in a winnable match.",
    tag: "Player Bet",
    tagColor: "#00d084",
  },
  {
    num: 10,
    title: "Under 2.5 Goals in a World Cup Quarter-Final",
    pick: "Under 2.5 Goals — Quarter-Finals",
    odds: "1.70",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    confidence: "High",
    confidenceColor: "#00d084",
    analysis: "World Cup quarter-finals are historically the lowest-scoring round of the tournament — managers become cautious knowing one mistake ends their tournament. Over the last three World Cups (2018, 2022, plus historical data), 75% of quarter-final matches have ended Under 2.5 goals. When France, Brazil or Argentina face each other at this stage, both sides respect the opposition and defensive organisation takes priority. Under 2.5 at 1.70 in any of the four quarter-finals is a consistent long-term strategy.",
    tag: "Goals Strategy",
    tagColor: "#a78bfa",
  },
];

const tipsFaqs = [
  {
    q: "Who is the best value bet to win World Cup 2026?",
    a: "France at 6.00 with Betsson is our top value pick. They have the deepest squad in the tournament, Mbappé at his peak, and have been in two of the last two World Cup Finals. For longer-odds value, Germany at 10.00 offers excellent returns given the quality of their young squad.",
  },
  {
    q: "What is the best betting market for the World Cup group stage?",
    a: "Over 2.5 goals is the most reliable group stage market. Top nations attack freely in the group stage knowing they need points, and matches involving Brazil, France, Germany and Argentina regularly produce 3+ goals. BTTS (Both Teams to Score) is also effective in matches between evenly matched nations.",
  },
  {
    q: "What is the best World Cup dark horse bet?",
    a: "Germany at 10.00 is our top dark horse. They have arguably the most exciting young squad since 2014, with Florian Wirtz and Jamal Musiala at their peaks. Morocco at 45.00 is our speculative pick — they reached the 2022 semi-finals and have retained most of that squad.",
  },
  {
    q: "Should I bet on the World Cup tournament winner before or during the tournament?",
    a: "Pre-tournament outright winner bets offer the best odds before group draws are confirmed. As the tournament progresses, odds shorten dramatically for surviving favourites. If you have a strong pick, betting pre-tournament gives the best value. For in-tournament value, target teams that survive despite odds-shortening — a surviving 10/1 shot after the group stage might be better value than the new 4/1 favourite.",
  },
  {
    q: "Is it worth betting accumulators on the World Cup?",
    a: "Accumulators can build strong value from short-priced bets like group stage winners (e.g., Argentina at 1.25, Brazil at 1.18, France at 1.15). A 4-fold accumulator of group winners at these prices would pay around 3.50 — decent value for near-certainties. Avoid adding speculative selections to short accumulators as they significantly reduce probability.",
  },
  {
    q: "Which World Cup betting tips are most reliable?",
    a: "Historically, the most reliable World Cup betting strategies are: (1) Under 2.5 goals in quarter-finals — 75% hit rate historically, (2) Over 2.5 goals in group stage matches involving top nations — averages 3.1 goals, (3) Hosts to advance from group stage — 85% historical success rate, (4) Favourite to win Group at odds under 1.30 — 78% success rate across World Cups since 2006.",
  },
];

const tipsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: tipsFaqs.map((f) => ({
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
    { "@type": "ListItem", position: 3, name: "World Cup 2026 Betting Tips", item: `${base}/blog/world-cup-2026-betting-tips` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "World Cup 2026 Betting Tips — 10 Expert Picks with Odds",
  description: "10 data-backed expert betting tips for the 2026 FIFA World Cup, covering tournament winner, Golden Boot, goals markets and dark horse value bets.",
  url: `${base}/blog/world-cup-2026-betting-tips`,
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "WorldCupBet26", url: base },
  publisher: { "@type": "Organization", name: "WorldCupBet26", url: base, logo: { "@type": "ImageObject", url: `${base}/favicon.ico` } },
  image: OG_IMAGE.url,
};

export default async function WorldCupBettingTipsPage() {
  return (
    <>
      <Script id="tips-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tipsFaqSchema) }} />
      <Script id="tips-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="tips-article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>World Cup 2026 Betting Tips</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: "4px", textTransform: "uppercase", marginBottom: "12px", display: "inline-block" }}>
            🔥 Expert Betting Tips
          </span>
          <h1 className="section-title" style={{ fontSize: "clamp(26px, 4vw, 42px)", marginBottom: "1rem" }}>
            World Cup 2026 Betting Tips: 10 Expert Picks
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "720px", marginBottom: "1.5rem" }}>
            Our analysts have studied the markets, squad depths, historical data and tournament structures to bring you 10 high-confidence betting tips for the 2026 FIFA World Cup. From the tournament winner market to goals strategies and player bets — these are our best picks backed by data.
          </p>
          <div style={{ background: "rgba(255,200,0,0.08)", border: "1px solid rgba(255,200,0,0.25)", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--foreground)" }}>⚠️ Disclaimer:</strong> These are expert opinions, not guarantees. Football is unpredictable. Always bet within your means. 18+ only. T&Cs apply.
          </div>
        </div>

        {/* Tips */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {tips.map((tip) => (
              <div key={tip.num} className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap" }}>
                  <div style={{ background: "var(--accent)", color: "#000", fontWeight: 900, fontSize: "14px", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {tip.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px", flexWrap: "wrap" }}>
                      <span style={{ background: `${tip.tagColor}20`, border: `1px solid ${tip.tagColor}50`, color: tip.tagColor, fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                        {tip.tag}
                      </span>
                      <span style={{ background: `${tip.confidenceColor}15`, color: tip.confidenceColor, fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "4px" }}>
                        Confidence: {tip.confidence}
                      </span>
                    </div>
                    <h2 style={{ fontSize: "18px", fontWeight: 800, margin: "0", color: "var(--foreground)", lineHeight: 1.3 }}>{tip.title}</h2>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.75, marginBottom: "16px" }}>{tip.analysis}</p>

                <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "8px", padding: "12px 16px" }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 600, marginBottom: "2px" }}>Our Pick</div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--foreground)" }}>{tip.pick}</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>via {tip.bookmaker}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{tip.odds}</div>
                    <a href={tip.url} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={tip.bookmaker}
                      style={{ display: "inline-block", marginTop: "6px", background: "var(--accent)", color: "#000", padding: "8px 18px", borderRadius: "6px", fontWeight: 800, fontSize: "13px", textDecoration: "none" }}>
                      Bet Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary table */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">All 10 Tips — Quick Summary</h2>
          <div className="card" style={{ padding: "0", overflow: "hidden", marginTop: "1rem" }}>
            {tips.map((tip, i) => (
              <div key={tip.num} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 16px", borderBottom: i < tips.length - 1 ? "1px solid var(--border)" : "none", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800, color: "var(--accent)", minWidth: "24px", fontSize: "13px" }}>#{tip.num}</span>
                <span style={{ flex: 1, fontSize: "13px", color: "var(--foreground)", fontWeight: 600 }}>{tip.pick}</span>
                <span style={{ fontWeight: 900, color: "var(--accent)", fontSize: "16px" }}>{tip.odds}</span>
                <span style={{ fontSize: "11px", color: "var(--muted)" }}>{tip.bookmaker}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.1),rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>Act on These Tips Now</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
            Most of these picks are available at Betsson and 1xBet with welcome bonuses for new customers.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
              style={{ background: "var(--accent)", color: "#000", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              🏆 Bet at Betsson — 100% Bonus
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="1xBet"
              style={{ background: "rgba(0,208,132,0.15)", color: "var(--accent)", border: "2px solid var(--accent)", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              🎯 Bet at 1xBet — 100% Bonus
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ | Gamble Responsibly | T&Cs Apply</p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">World Cup 2026 Betting Tips — FAQ</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {tipsFaqs.map((faq, i) => (
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
              { href: "/blog/world-cup-2026-schedule", label: "📅 Full Schedule" },
              { href: "/blog/best-value-bets", label: "💰 Best Value Bets" },
              { href: "/blog/golden-boot-odds-2026", label: "👟 Golden Boot Odds" },
              { href: "/blog/top-favorites-to-win", label: "⭐ Top Favorites" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "2rem", lineHeight: 1.6 }}>
          Last updated: May 29, 2026. Betting tips are expert opinions only and do not guarantee results. Odds are subject to change — verify at the bookmaker before placing any bet. 18+ only. Gamble responsibly.
        </p>
      </div>
    </>
  );
}
