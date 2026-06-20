import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "ecuador-vs-curacao-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Ecuador vs Curacao World Cup 2026 Odds, Preview & Betting Tips",
  description: "Ecuador vs Curacao at the 2026 FIFA World Cup — June 20 at Arrowhead Stadium, Kansas City. Ecuador heavy favourites at 1.18. Both teams lost their openers. Full odds and tips.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Ecuador vs Curacao World Cup 2026 Odds & Preview",
    description: "Ecuador 1.18 · Draw 7.00 · Curacao 13.00. Group E — June 20 at Arrowhead Stadium, Kansas City. Ecuador must bounce back after losing to Ivory Coast.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og-ecuador-curacao.png`, width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecuador vs Curacao World Cup 2026 Odds & Tips",
    description: "Ecuador 1.18 heavy favourites at Arrowhead Stadium. Must-win Group E clash — best bets and full preview.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the odds for Ecuador vs Curacao at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Best odds: Ecuador to Win 1.18 (Betsson), Draw 7.00, Curacao to Win 13.00. Ecuador are overwhelming favourites and desperately need 3 points after their opening defeat to Ivory Coast." } },
    { "@type": "Question", name: "When is Ecuador vs Curacao at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Ecuador vs Curacao is played on June 20, 2026 at 20:00 ET (02:00 CET June 21) at Arrowhead Stadium in Kansas City, Missouri." } },
    { "@type": "Question", name: "What is the best bet for Ecuador vs Curacao?", acceptedAnswer: { "@type": "Answer", text: "Our top tip is Ecuador to Win & Over 2.5 Goals at around 1.55. Ecuador need goals to improve their goal difference in Group E. Curacao conceded 7 against Germany and will struggle to contain Ecuador&apos;s attack for 90 minutes." } },
    { "@type": "Question", name: "Which group are Ecuador and Curacao in at World Cup 2026?", acceptedAnswer: { "@type": "Answer", text: "Ecuador and Curacao are in Group E alongside Germany and Ivory Coast. Both Ecuador and Curacao lost their opening matches and desperately need a win to keep qualification hopes alive." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ecuador vs Curacao World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function EcuadorVsCuracao() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>{" › "}
          <span style={{ color: "#aac8e8" }}>Ecuador vs Curacao</span>
        </nav>
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)" }}>⚽ GROUP E</span>
          <span style={{ background: "rgba(100,149,237,0.12)", color: "#90b8f0", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(100,149,237,0.3)" }}>🌙 02:00 CET</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>SAT 20 JUN · 20:00 ET / SUN 02:00 CET</span>
        </div>
        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Ecuador vs Curacao World Cup 2026: Odds, Preview & Best Bets
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          Ecuador face debutants Curacao in a must-win Group E encounter at Arrowhead Stadium. Both teams lost their openers — Ecuador narrowly to Ivory Coast and Curacao heavily (7-1) to Germany — meaning this is effectively an elimination match for both sides.
        </p>
        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — ECUADOR VS CURACAO</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Ecuador Win (1)", odds: "1.18", bk: "Betsson" },
              { label: "Draw (X)", odds: "7.00", bk: "Betsson" },
              { label: "Curacao Win (2)", odds: "13.00", bk: "Betsson" },
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
          <p style={{ fontSize: "11px", color: "#4a6a8a", textAlign: "center", margin: "10px 0 0" }}>18+ · T&Cs apply · Odds subject to change</p>
        </div>
        <OnexBetBanner variant="leaderboard" />
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "14px", marginTop: "36px" }}>Match Preview</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "16px" }}>
          Ecuador are desperate. A narrow 1-0 loss to Ivory Coast in their opener leaves them needing points urgently, and they face a Curacao side who have had their confidence shattered by Germany&apos;s 7-1 onslaught. Enner Valencia leads Ecuador&apos;s attack and is one of CONMEBOL&apos;s most reliable goalscorers in tournament football.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          Curacao are making their World Cup debut and the 7-1 loss to Germany was a brutal initiation. However, they qualified through CONCACAF on merit and have individual quality — several players compete in European leagues. Ecuador should win, but Curacao will not simply roll over.
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Ecuador to Win", odds: "1.18", conf: "HIGH", reason: "Ecuador are far superior in squad quality. They need 3 points to stay alive in Group E and will come out with maximum intensity against a demoralised Curacao side.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Ecuador Win & Over 2.5 Goals", odds: "1.55", conf: "VALUE", reason: "Ecuador need to score goals to improve their goal difference. Curacao conceded 7 against Germany — the defensive vulnerabilities are clear and Ecuador will exploit them.", bk: "1xBet", url: ONEXBET_URL },
            { tip: "Ecuador Win to Nil", odds: "1.50", conf: "HIGH", reason: "Curacao failed to score against Germany and face a physical Ecuador side. A clean sheet for La Tri is highly likely given Curacao&apos;s attacking limitations.", bk: "Betsson", url: BETSSON_URL },
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
        <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.10),rgba(0,180,110,0.04))", border: "2px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "28px", textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#00d084", letterSpacing: "2px", marginBottom: "10px" }}>🎁 EXCLUSIVE WELCOME OFFER</div>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff", marginBottom: "6px" }}>100% Bonus up to €100</div>
          <div style={{ fontSize: "15px", color: "#aac8e8", marginBottom: "20px" }}>New customers only · No promo code needed</div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", fontWeight: 900, fontSize: "15px", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 16px rgba(0,208,132,0.4)" }}>🏆 Claim at Betsson →</a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", color: "#fff", fontWeight: 900, fontSize: "15px", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 16px rgba(59,130,246,0.4)" }}>🎯 Claim at 1xBet →</a>
          </div>
          <p style={{ fontSize: "11px", color: "#4a6a8a", marginTop: "14px" }}>18+ · Play responsibly. T&Cs apply.</p>
        </div>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "16px 18px" }}>
              <summary style={{ fontSize: "15px", fontWeight: 700, color: "#e8f0f8", cursor: "pointer", listStyle: "none" }}>{faq.name}</summary>
              <p style={{ fontSize: "14px", color: "#8aabb8", lineHeight: 1.7, marginTop: "10px", marginBottom: 0 }}>{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
        <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>More World Cup Betting</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "Germany vs Ivory Coast", href: "/blog/germany-vs-ivory-coast-world-cup-2026" },
            { label: "Netherlands vs Sweden", href: "/blog/netherlands-vs-sweden-world-cup-2026" },
            { label: "Tunisia vs Japan", href: "/blog/tunisia-vs-japan-world-cup-2026" },
            { label: "World Cup Predictions", href: "/blog/world-cup-2026-predictions" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#aac8e8", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </article>
    </>
  );
}
