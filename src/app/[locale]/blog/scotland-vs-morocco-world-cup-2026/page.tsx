import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "scotland-vs-morocco-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Scotland vs Morocco World Cup 2026 Odds, Preview & Betting Tips",
  description: "Scotland vs Morocco at the 2026 FIFA World Cup — June 19 at Gillette Stadium, Boston. Morocco favoured at 1.70. Full odds comparison, match preview and expert betting tips.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Scotland vs Morocco World Cup 2026 Odds & Preview",
    description: "Morocco 1.70 · Draw 3.60 · Scotland 5.50. Group C — June 19 at Gillette Stadium, Boston. Morocco favourites after holding Brazil to a draw.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og-scotland-morocco.png`, width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scotland vs Morocco World Cup 2026 Odds & Tips",
    description: "Morocco 1.70 favourites at Gillette Stadium. Full preview and best bets for Group C.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the odds for Scotland vs Morocco at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Best odds: Morocco to Win 1.70 (Betsson), Draw 3.60, Scotland to Win 5.50. Morocco are favourites after impressing with a draw against Brazil in their opener." } },
    { "@type": "Question", name: "When is Scotland vs Morocco at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Scotland vs Morocco is played on June 19, 2026 at 18:00 ET (00:00 CET June 20) at Gillette Stadium in Foxborough, Massachusetts." } },
    { "@type": "Question", name: "What is the best bet for Scotland vs Morocco?", acceptedAnswer: { "@type": "Answer", text: "Our top tip is Morocco to Win at 1.70. Morocco held Brazil to a draw in their opener and are technically superior to Scotland across the pitch. They have Premier League, La Liga and Serie A quality throughout." } },
    { "@type": "Question", name: "Which group are Scotland and Morocco in at World Cup 2026?", acceptedAnswer: { "@type": "Answer", text: "Scotland and Morocco are in Group C alongside Brazil and Haiti. Scotland lead the group with 3 points after beating Haiti; Morocco sit second on 1 point after drawing with Brazil." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Scotland vs Morocco World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function ScotlandVsMorocco() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>{" › "}
          <span style={{ color: "#aac8e8" }}>Scotland vs Morocco</span>
        </nav>

        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)" }}>⚽ GROUP C</span>
          <span style={{ background: "rgba(255,107,107,0.12)", color: "#ff6b6b", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,107,107,0.3)" }}>🔴 LIVE TODAY</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>FRI 19 JUN 2026 · 18:00 ET / 00:00 CET</span>
        </div>

        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Scotland vs Morocco World Cup 2026: Odds, Preview & Best Bets
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          Scotland meet Morocco at Gillette Stadium in a pivotal Group C clash. Scotland lead the group with 3 points after beating Haiti, but Morocco are the favourites here after holding Brazil to a 1-1 draw in their opener — one of the most impressive results of the tournament&apos;s first round.
        </p>

        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — SCOTLAND VS MOROCCO</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Scotland Win (1)", odds: "5.50", bk: "Betsson" },
              { label: "Draw (X)", odds: "3.60", bk: "Betsson" },
              { label: "Morocco Win (2)", odds: "1.70", bk: "Betsson" },
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
          Scotland&apos;s opening win over Haiti was expected but gave Steve Clarke&apos;s side confidence and three valuable points. Scotland have Premier League quality in key areas — Andrew Robertson at left back, Scott McTominay in midfield and Che Adams leading the line. However, stepping up from Haiti to Morocco is an enormous challenge.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          Morocco are one of Africa&apos;s finest sides and their 1-1 draw against Brazil was no fluke. Achraf Hakimi, Hakim Ziyech and Youssef En-Nesyri give them attacking quality across all positions, and defensively they are one of the tournament&apos;s most organised units. Morocco reached the semi-finals of the 2022 World Cup and will be desperate to go even further here.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Morocco to Win", odds: "1.70", conf: "HIGH", reason: "Morocco held Brazil to a draw and have quality across every position. Scotland lack the experience to deal with Hakimi, Ziyech and En-Nesyri across 90 minutes.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Under 2.5 Goals", odds: "1.85", conf: "VALUE", reason: "Morocco are defensively disciplined and Scotland may prioritise not conceding. A tight, tactical encounter is expected between two well-organised sides.", bk: "1xBet", url: ONEXBET_URL },
            { tip: "Morocco to Win to Nil", odds: "2.80", conf: "MEDIUM", reason: "Scotland struggled to create chances against Haiti. Morocco&apos;s backline is one of the best in the tournament and can comfortably keep a clean sheet.", bk: "Betsson", url: BETSSON_URL },
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
            { label: "USA vs Australia", href: "/blog/usa-vs-australia-world-cup-2026" },
            { label: "Brazil vs Haiti", href: "/blog/brazil-vs-haiti-world-cup-2026" },
            { label: "Canada vs Qatar", href: "/blog/canada-vs-qatar-world-cup-2026" },
            { label: "World Cup Predictions", href: "/blog/world-cup-2026-predictions" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#aac8e8", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </article>
    </>
  );
}
