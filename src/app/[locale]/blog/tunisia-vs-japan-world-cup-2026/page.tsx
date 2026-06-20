import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "tunisia-vs-japan-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Tunisia vs Japan World Cup 2026 Odds, Preview & Betting Tips — Match 1000",
  description: "Tunisia vs Japan at the 2026 FIFA World Cup — June 20 at Estadio BBVA, Monterrey. The 1000th match in World Cup history! Japan favoured at 1.67. Full odds and expert tips.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Tunisia vs Japan World Cup 2026 — Match 1000! Odds & Preview",
    description: "🏆 The 1000th FIFA World Cup match! Tunisia 5.50 · Draw 3.50 · Japan 1.67. Group F — June 20 at Estadio BBVA, Monterrey. Japan favourites after Tunisia sacked their manager.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og-tunisia-japan.png`, width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tunisia vs Japan — The 1000th World Cup Match! Odds & Tips",
    description: "Japan 1.67 favourites for historic match #1000 at Estadio BBVA Monterrey. Full preview and best bets for Group F.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the odds for Tunisia vs Japan at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Best odds: Japan to Win 1.67 (Betsson), Draw 3.50, Tunisia to Win 5.50. Japan are favourites after Tunisia lost 5-1 to Sweden and sacked their manager ahead of this match." } },
    { "@type": "Question", name: "When is Tunisia vs Japan at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Tunisia vs Japan is played on June 20, 2026 at midnight ET (06:00 CET June 21) at Estadio BBVA in Monterrey, Mexico. It is the 1000th match in FIFA World Cup history." } },
    { "@type": "Question", name: "Why is Tunisia vs Japan a historic match?", acceptedAnswer: { "@type": "Answer", text: "Tunisia vs Japan at the 2026 FIFA World Cup is officially the 1000th match played in World Cup history, making it one of the most significant occasions in the tournament&apos;s history regardless of the result." } },
    { "@type": "Question", name: "What is the best bet for Tunisia vs Japan?", acceptedAnswer: { "@type": "Answer", text: "Our top tip is Japan to Win at 1.67. The Samurai Blue drew 2-2 with Netherlands and have the technical quality and tactical discipline to dominate a Tunisia side in disarray after their 5-1 loss to Sweden and managerial sacking." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tunisia vs Japan World Cup 2026 Odds, Preview & Betting Tips — The 1000th World Cup Match",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function TunisiaVsJapan() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>{" › "}
          <span style={{ color: "#aac8e8" }}>Tunisia vs Japan</span>
        </nav>
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)" }}>⚽ GROUP F</span>
          <span style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(251,191,36,0.3)" }}>⭐ MATCH #1000</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>SAT 20 JUN · 00:00 ET / SUN 06:00 CET</span>
        </div>
        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Tunisia vs Japan World Cup 2026: Odds, Preview & Best Bets — The 1000th Match
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          History will be made at Estadio BBVA in Monterrey — Tunisia vs Japan is the official 1000th match in FIFA World Cup history. But Tunisia arrive in chaos: sacked their manager after a 5-1 thrashing by Sweden, while Japan impressed in a 2-2 draw with Netherlands. This is a must-win for both — but Japan enter as clear favourites.
        </p>
        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — TUNISIA VS JAPAN</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Tunisia Win (1)", odds: "5.50", bk: "Betsson" },
              { label: "Draw (X)", odds: "3.50", bk: "Betsson" },
              { label: "Japan Win (2)", odds: "1.67", bk: "Betsson" },
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
          Japan&apos;s 2-2 draw with the Netherlands was an outstanding result. The Samurai Blue showed tactical intelligence, technical quality and relentless pressing throughout. Takumi Minamino, Junya Ito and Daichi Kamada can hurt any defence, and Japan are one of Asia&apos;s most complete sides at this tournament.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          Tunisia arrived with ambitions but their 5-1 loss to Sweden was catastrophic. The dismissal of their manager in the aftermath has created chaos within the camp. An unsettled squad, low confidence, and facing a hungry Japan side in the 1000th World Cup match — this is a monumental task for the Eagles of Carthage.
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Japan to Win", odds: "1.67", conf: "HIGH", reason: "Japan are in excellent form, tactically superior and face a Tunisia side in total disarray after their 5-1 loss and managerial sacking. Bet on Japan to advance.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Japan Win & Under 3.5 Goals", odds: "1.80", conf: "VALUE", reason: "Japan are disciplined and won&apos;t expose themselves defensively. They will win efficiently rather than in a high-scoring thriller. Expect a controlled 2-0 or 2-1.", bk: "1xBet", url: ONEXBET_URL },
            { tip: "Japan to Score First", odds: "1.55", conf: "HIGH", reason: "Japan pressed high and scored in the first half against Netherlands. Tunisia&apos;s defensive confidence is shattered. Japan will take the game by the scruff of the neck early.", bk: "Betsson", url: BETSSON_URL },
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
            { label: "Ecuador vs Curacao", href: "/blog/ecuador-vs-curacao-world-cup-2026" },
            { label: "World Cup Predictions", href: "/blog/world-cup-2026-predictions" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#aac8e8", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </article>
    </>
  );
}
