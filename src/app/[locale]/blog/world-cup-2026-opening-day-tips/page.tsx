import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "world-cup-2026-opening-day-tips";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Opening Day Betting Tips — June 11 Best Bets",
  description:
    "World Cup 2026 opens June 11, 2026. Our expert betting tips for opening day: Mexico vs South Africa plus all Group A fixtures. Best odds, value bets and analysis.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "World Cup 2026 Opening Day Betting Tips — June 11",
    description: "Expert tips for the 2026 World Cup opening day. Mexico vs South Africa (1.65), USA vs Paraguay (1.75) and more. Updated odds from Betsson and 1xBet.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og.png`, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does the 2026 World Cup start?",
      acceptedAnswer: { "@type": "Answer", text: "The 2026 FIFA World Cup starts on June 11, 2026 with Mexico vs South Africa at the Estadio Azteca at 15:00 ET. The tournament runs until the Final on July 19 at MetLife Stadium." },
    },
    {
      "@type": "Question",
      name: "What is the best bet for World Cup 2026 opening day?",
      acceptedAnswer: { "@type": "Answer", text: "Our top pick for opening day is Mexico to Win at 1.65 (Betsson). Mexico are World Cup co-hosts playing at the Estadio Azteca in Mexico City against South Africa. Home nations win 72% of World Cup opening matches." },
    },
    {
      "@type": "Question",
      name: "What matches are played on June 11, 2026?",
      acceptedAnswer: { "@type": "Answer", text: "June 11, 2026 features Group A's opening games: Mexico vs South Africa at 15:00 ET at the Estadio Azteca (the tournament opener), and South Korea vs Czechia at 22:00 ET." },
    },
  ],
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const openingDayTips = [
  {
    match: "Mexico vs South Africa",
    time: "15:00 ET · Jun 11",
    group: "Group A — Opening Match",
    homeFlag: "🇲🇽",
    awayFlag: "🇿🇦",
    tip: "Mexico to Win",
    odds: "1.65",
    book: "Betsson",
    confidence: "HIGH",
    analysis: "Mexico are co-hosts at the iconic Estadio Azteca. The home crowd effect at the Azteca is unmatched in world football. South Africa have limited World Cup experience and face a Mexico side that has prepared specifically for this tournament for 4 years. The safest bet of the opening day.",
    url: BETSSON_URL,
  },
  {
    match: "South Korea vs Czechia",
    time: "22:00 ET · Jun 11",
    group: "Group A",
    homeFlag: "🇰🇷",
    awayFlag: "🇨🇿",
    tip: "Both Teams to Score",
    odds: "1.85",
    book: "Betsson",
    confidence: "MED",
    analysis: "South Korea and Czechia are both technically strong sides who play progressive, attacking football. Son Heung-min leads South Korea while Patrik Schick (Bayer Leverkusen) gives Czechia a world-class striker. Both teams attack when they can — BTTS has landed in 7 of their last 10 international games combined.",
    url: BETSSON_URL,
  },
  {
    match: "Canada vs Bosnia & Herzeg.",
    time: "15:00 ET · Jun 12",
    group: "Group B",
    homeFlag: "🇨🇦",
    awayFlag: "🇧🇦",
    tip: "Canada to Win",
    odds: "1.80",
    book: "Betsson",
    confidence: "HIGH",
    analysis: "Canada open their home World Cup at BMO Field in Toronto. Alphonso Davies (Bayern Munich), Jonathan David (Lille) and a squad full of European talent give Canada massive home-advantage upside. Bosnia are making their World Cup debut and will struggle against Canada's pace.",
    url: BETSSON_URL,
  },
  {
    match: "USA vs Paraguay",
    time: "21:00 ET · Jun 12",
    group: "Group D",
    homeFlag: "🇺🇸",
    awayFlag: "🇵🇾",
    tip: "USA to Win",
    odds: "1.75",
    book: "Betsson",
    confidence: "HIGH",
    analysis: "The USA open at MetLife Stadium — the venue of the Final — with 82,500 fans behind them. Pulisic, McKennie and Adams lead an MLS-polished squad that won the 2024 CONCACAF Nations League. Paraguay qualified 5th in CONMEBOL and are significant underdogs.",
    url: BETSSON_URL,
  },
  {
    match: "Argentina vs Austria",
    time: "18:00 ET · Jun 13",
    group: "Group J",
    homeFlag: "🇦🇷",
    awayFlag: "🇦🇹",
    tip: "Argentina -1.5 Asian Handicap",
    odds: "2.15",
    book: "1xBet",
    confidence: "HIGH",
    analysis: "The reigning champions open at SoFi Stadium in LA against a solid but outclassed Austria side. Messi, Álvarez and De Paul make Argentina tournament favourites. Argentina should win by 2+ goals — the Asian handicap at 2.15 beats the outright at 1.50 for value.",
    url: ONEXBET_URL,
  },
];

export default function OpeningDayTipsPage() {
  return (
    <>
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem", color: "var(--foreground)" }}>

        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.25rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Opening Day Tips</span>
        </nav>

        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 LIVE TIPS</span>
            <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>JUNE 11–13</span>
            <span style={{ fontSize: "12px", color: "var(--muted)", alignSelf: "center" }}>Updated: May 31, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.75rem" }}>
            World Cup 2026 Opening Day Betting Tips — 5 Best Bets for June 11–13
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6 }}>
            The 2026 FIFA World Cup is <strong style={{ color: "var(--foreground)" }}>11 days away</strong>.
            Our analysts have identified the 5 best bets across opening day fixtures — from Mexico at the Azteca to Argentina at SoFi.
            Odds from Betsson and 1xBet, updated daily.
          </p>
        </div>

        {/* Tips cards */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1.25rem" }}>5 Best Opening Bets — Ranked by Confidence</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {openingDayTips.map((tip, i) => (
              <div key={i} style={{ background: "var(--card-bg)", border: i === 0 ? "2px solid rgba(0,208,132,0.4)" : "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "22px" }}>{tip.homeFlag}</span>
                      <span style={{ fontWeight: 700, fontSize: "14px" }}>{tip.match}</span>
                      <span style={{ fontSize: "22px" }}>{tip.awayFlag}</span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", fontSize: "12px", color: "var(--muted)" }}>
                      <span>🕐 {tip.time}</span>
                      <span>·</span>
                      <span style={{ color: "var(--accent)", fontWeight: 600 }}>{tip.group}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      background: tip.confidence === "HIGH" ? "rgba(0,208,132,0.15)" : "rgba(255,193,7,0.15)",
                      border: `1px solid ${tip.confidence === "HIGH" ? "rgba(0,208,132,0.4)" : "rgba(255,193,7,0.4)"}`,
                      color: tip.confidence === "HIGH" ? "var(--accent)" : "#ffc107",
                      fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "4px",
                    }}>
                      {tip.confidence} CONFIDENCE
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                  <div style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "8px", padding: "8px 16px" }}>
                    <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: 700, letterSpacing: "0.06em" }}>OUR TIP</div>
                    <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--foreground)" }}>{tip.tip}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{tip.odds}</div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>{tip.book}</div>
                  </div>
                  <a href={tip.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                    data-affiliate={tip.book}
                    style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none" }}>
                    Bet Now →
                  </a>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>{tip.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accumulator suggestion */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Opening Weekend Accumulator — 3-Fold @ ~5.20</h2>
          <div style={{ background: "rgba(0,208,132,0.07)", border: "2px solid rgba(0,208,132,0.3)", borderRadius: "14px", padding: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1rem" }}>
              {[
                { pick: "Mexico to Win", odds: "1.65", match: "🇲🇽 Mexico vs South Africa 🇿🇦" },
                { pick: "Canada to Win", odds: "1.80", match: "🇨🇦 Canada vs Bosnia 🇧🇦" },
                { pick: "USA to Win",    odds: "1.75", match: "🇺🇸 USA vs Paraguay 🇵🇾" },
              ].map((leg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "13px" }}>{leg.match}</div>
                    <div style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600 }}>✅ {leg.pick}</div>
                  </div>
                  <div style={{ fontWeight: 900, fontSize: "22px", color: "var(--accent)" }}>{leg.odds}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: "rgba(0,208,132,0.12)", borderRadius: "8px", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700 }}>3-Fold Accumulator</div>
              <div style={{ fontWeight: 900, fontSize: "24px", color: "var(--accent)" }}>~5.20</div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.65, marginBottom: "1rem" }}>
              Three co-host nations (Mexico, Canada, USA) all open at home in the first two days.
              Host nations have a historic advantage in tournament openers. A €10 accumulator on all three
              to win returns ~€52. Place each leg individually or as a treble at Betsson.
            </p>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
              style={{ background: "var(--accent)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
              🏆 Place Accumulator at Betsson →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Opening Day FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", overflow: "hidden" }}>
                <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 600, fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span>{item.name}</span>
                  <span style={{ color: "var(--accent)", fontSize: "18px", fontWeight: 800, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "0 18px 14px", color: "var(--muted)", fontSize: "13px", lineHeight: 1.75, borderTop: "1px solid var(--card-border)" }}>
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { href: "/blog/mexico-vs-south-africa-world-cup-2026", label: "🇲🇽 Mexico vs South Africa Preview" },
            { href: "/blog/usa-vs-paraguay-world-cup-2026", label: "🇺🇸 USA vs Paraguay Preview" },
            { href: "/world-cup-2026-matches", label: "⚽ All Match Previews" },
            { href: "/blog/world-cup-2026-accumulator-tips", label: "📊 Accumulator Tips" },
            { href: "/world-cup-2026-groups", label: "📋 All Groups" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
