import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "mexico-vs-south-korea-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Mexico vs South Korea World Cup 2026 Odds, Preview & Betting Tips",
  description:
    "Mexico vs South Korea at the 2026 FIFA World Cup — June 18 at Estadio Akron, Guadalajara. Full odds comparison, expert betting tip and match preview. Mexico favoured at 1.95.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Mexico vs South Korea World Cup 2026 Odds & Preview",
    description: "Mexico 1.95 · Draw 3.30 · South Korea 3.80. Group A match — June 18, Estadio Akron Guadalajara. Expert tip: Mexico to Win & Both Teams to Score.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico vs South Korea World Cup 2026 Odds & Betting Tips",
    description: "Mexico 1.95 to win at Estadio Akron. Full odds, preview and betting tips for this Group A clash.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the odds for Mexico vs South Korea at the 2026 World Cup?",
      acceptedAnswer: { "@type": "Answer", text: "Best odds: Mexico to Win 1.95 (Betsson), Draw 3.30, South Korea to Win 3.80. Mexico are strong favourites as World Cup co-hosts playing in Guadalajara." },
    },
    {
      "@type": "Question",
      name: "When is Mexico vs South Korea at the 2026 World Cup?",
      acceptedAnswer: { "@type": "Answer", text: "Mexico vs South Korea is played on June 18, 2026 at 21:00 local time (03:00 CET / 9:00 PM ET) at Estadio Akron in Guadalajara, Mexico." },
    },
    {
      "@type": "Question",
      name: "What is the best bet for Mexico vs South Korea?",
      acceptedAnswer: { "@type": "Answer", text: "Our top tip is Mexico to Win & Both Teams to Score at approximately 2.80 with Betsson. Mexico have dangerous attacking options but South Korea&apos;s Son Heung-min can threaten on the counter." },
    },
    {
      "@type": "Question",
      name: "Which group are Mexico and South Korea in at World Cup 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Mexico and South Korea are in Group A alongside South Africa and Czechia. This match is played June 18 at Estadio Akron, Guadalajara." },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mexico vs South Korea World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function MexicoVsSouthKorea() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>
          {" › "}
          <span style={{ color: "#aac8e8" }}>Mexico vs South Korea</span>
        </nav>

        {/* Badge */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)", letterSpacing: "0.06em" }}>⚽ GROUP A</span>
          <span style={{ background: "rgba(255,107,107,0.12)", color: "#ff6b6b", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,107,107,0.3)" }}>🔴 LIVE TODAY</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>THU 18 JUN 2026 · 03:00 CET</span>
        </div>

        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Mexico vs South Korea World Cup 2026: Odds, Preview & Best Bets
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          Mexico face South Korea in a crucial Group A clash at Estadio Akron, Guadalajara on June 18. Co-hosts Mexico need points to advance while South Korea&apos;s Son Heung-min provides a constant threat on the counter.
        </p>

        {/* Odds table */}
        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — MEXICO VS SOUTH KOREA</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Mexico Win (1)", odds: "1.95", bk: "Betsson" },
              { label: "Draw (X)", odds: "3.30", bk: "Betsson" },
              { label: "South Korea Win (2)", odds: "3.80", bk: "Betsson" },
            ].map((o) => (
              <div key={o.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontSize: "11px", color: "#7a9bbf", fontWeight: 600, marginBottom: "6px" }}>{o.label}</div>
                <div style={{ fontSize: "28px", fontWeight: 900, color: "#00d084", lineHeight: 1 }}>{o.odds}</div>
                <div style={{ fontSize: "11px", color: "#4a6a8a", marginTop: "4px" }}>{o.bk}</div>
              </div>
            ))}
          </div>
          <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "block", background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", fontWeight: 900, fontSize: "15px", padding: "14px", borderRadius: "10px", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 20px rgba(0,208,132,0.35)" }}>
            🎁 Claim 100% Welcome Bonus at Betsson →
          </a>
          <p style={{ fontSize: "11px", color: "#4a6a8a", textAlign: "center", margin: "10px 0 0" }}>18+ · T&Cs apply · Gamble responsibly · Odds subject to change</p>
        </div>

        <OnexBetBanner variant="leaderboard" />

        {/* Match preview */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "14px", marginTop: "36px" }}>Match Preview</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "16px" }}>
          Mexico enter this match having drawn their opening Group A encounter. With the World Cup being held on home soil, El Tri carry enormous expectation from 100,000+ passionate fans throughout the tournament. Estadio Akron in Guadalajara is one of the most electric atmospheres in world football.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "16px" }}>
          South Korea arrive with qualification momentum and Son Heung-min leading the attack. The Tottenham forward is one of the most dangerous players in this tournament and has the pace to exploit Mexico on the counter-attack. South Korea have historically punched above their weight at World Cups and should not be underestimated.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          This match kicks off at 03:00 CET (9:00 PM ET / 21:00 local time). Both teams need a result, making this a high-stakes encounter with attacking intent from both sides.
        </p>

        {/* Best bets */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Mexico to Win", odds: "1.95", conf: "HIGH", reason: "Home advantage, must-win match, strong squad depth. Betsson offers the best price.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Mexico Win & Both Teams Score", odds: "2.80", conf: "VALUE", reason: "Son Heung-min will create chances. Mexico likely to score 2+ at home but South Korea dangerous.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Over 2.5 Goals", odds: "2.10", conf: "MEDIUM", reason: "Both teams need points. Open game expected. Four goals wouldn&apos;t be a surprise.", bk: "1xBet", url: ONEXBET_URL },
          ].map((b) => (
            <div key={b.tip} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#ffffff" }}>{b.tip}</div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ background: b.conf === "HIGH" ? "rgba(0,208,132,0.15)" : b.conf === "VALUE" ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.08)", color: b.conf === "HIGH" ? "#00d084" : b.conf === "VALUE" ? "#fbbf24" : "#aaa", fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "5px" }}>{b.conf}</span>
                  <span style={{ fontSize: "22px", fontWeight: 900, color: "#00d084" }}>{b.odds}</span>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#8aabb8", lineHeight: 1.6, margin: "0 0 12px" }}>{b.reason}</p>
              <a href={b.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ fontSize: "13px", fontWeight: 700, color: "#00d084", textDecoration: "none" }}>Bet at {b.bk} →</a>
            </div>
          ))}
        </div>

        {/* Key facts */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>Key Stats & Head-to-Head</h2>
        <ul style={{ fontSize: "15px", color: "#c8d8e8", lineHeight: 2, paddingLeft: "20px", marginBottom: "32px" }}>
          <li>Mexico are unbeaten in 8 of their last 10 home World Cup matches</li>
          <li>South Korea won 4 of 6 qualifying matches, conceding just 5 goals</li>
          <li>Son Heung-min has scored in 3 of South Korea&apos;s last 5 major tournament matches</li>
          <li>Mexico have scored in every Group A match at a home World Cup since 1986</li>
          <li>Previous World Cup meeting: Mexico 2–1 South Korea (2010, Group B)</li>
        </ul>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.10),rgba(0,180,110,0.04))", border: "2px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "28px", textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#00d084", letterSpacing: "2px", marginBottom: "10px" }}>🎁 EXCLUSIVE WELCOME OFFER</div>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff", marginBottom: "6px" }}>100% Bonus up to €100</div>
          <div style={{ fontSize: "15px", color: "#aac8e8", marginBottom: "20px" }}>New customers only · No promo code needed · 60 seconds to register</div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", fontWeight: 900, fontSize: "15px", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 16px rgba(0,208,132,0.4)" }}>
              🏆 Claim at Betsson →
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", color: "#fff", fontWeight: 900, fontSize: "15px", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 16px rgba(59,130,246,0.4)" }}>
              🎯 Claim at 1xBet →
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "#4a6a8a", marginTop: "14px" }}>18+ · Gambling can be addictive. Please play responsibly. T&Cs apply.</p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "16px 18px" }}>
              <summary style={{ fontSize: "15px", fontWeight: 700, color: "#e8f0f8", cursor: "pointer", listStyle: "none" }}>
                {faq.name}
              </summary>
              <p style={{ fontSize: "14px", color: "#8aabb8", lineHeight: 1.7, marginTop: "10px", marginBottom: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        {/* Related */}
        <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>More World Cup Betting</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "Czechia vs South Africa", href: "/blog/czechia-vs-south-africa-world-cup-2026" },
            { label: "Canada vs Qatar", href: "/blog/canada-vs-qatar-world-cup-2026" },
            { label: "Switzerland vs Bosnia-Hz", href: "/blog/switzerland-vs-bosnia-herzegovina-world-cup-2026" },
            { label: "World Cup 2026 Predictions", href: "/blog/world-cup-2026-predictions" },
            { label: "Top Favourites to Win", href: "/blog/top-favorites-to-win" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#aac8e8", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
