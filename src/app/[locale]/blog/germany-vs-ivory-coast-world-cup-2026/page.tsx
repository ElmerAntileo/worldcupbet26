import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "germany-vs-ivory-coast-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Germany vs Ivory Coast World Cup 2026 Odds, Preview & Betting Tips",
  description: "Germany vs Ivory Coast at the 2026 FIFA World Cup — June 20 at BMO Field, Toronto. Germany favoured at 1.53 after thrashing Curacao 7-1. Full odds and expert betting tips.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Germany vs Ivory Coast World Cup 2026 Odds & Preview",
    description: "Germany 1.53 · Draw 4.60 · Ivory Coast 5.50. Group E — June 20 at BMO Field, Toronto. Top-of-group clash — both teams won their openers.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og-germany-ivory-coast.png`, width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany vs Ivory Coast World Cup 2026 Odds & Tips",
    description: "Germany 1.53 favourites at BMO Field Toronto. Top-of-group clash in Group E — both teams won matchday 1.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the odds for Germany vs Ivory Coast at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Best odds: Germany to Win 1.53 (Betsson), Draw 4.60, Ivory Coast to Win 5.50. Germany are strong favourites after their 7-1 demolition of Curacao, though Ivory Coast impressed in edging Ecuador 1-0." } },
    { "@type": "Question", name: "When is Germany vs Ivory Coast at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Germany vs Ivory Coast is played on June 20, 2026 at 22:00 CET (4:00 PM ET) at BMO Field in Toronto, Canada." } },
    { "@type": "Question", name: "What is the best bet for Germany vs Ivory Coast?", acceptedAnswer: { "@type": "Answer", text: "Our top tip is Germany to Win at 1.53. The Germans were electric in their opening 7-1 win — Jamal Musiala, Florian Wirtz and Leroy Sane are in devastating form and Ivory Coast will struggle to contain them for 90 minutes." } },
    { "@type": "Question", name: "Which group are Germany and Ivory Coast in at World Cup 2026?", acceptedAnswer: { "@type": "Answer", text: "Germany and Ivory Coast are in Group E alongside Ecuador and Curacao. Both Germany and Ivory Coast won their opening matches, making this a top-of-group clash. The winner is almost certain to advance to the knockout stage." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Germany vs Ivory Coast World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function GermanyVsIvoryCoast() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>{" › "}
          <span style={{ color: "#aac8e8" }}>Germany vs Ivory Coast</span>
        </nav>
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)" }}>⚽ GROUP E</span>
          <span style={{ background: "rgba(255,107,107,0.12)", color: "#ff6b6b", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,107,107,0.3)" }}>🔴 TONIGHT</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>SAT 20 JUN 2026 · 22:00 CET</span>
        </div>
        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Germany vs Ivory Coast World Cup 2026: Odds, Preview & Best Bets
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          The biggest match of the day — Germany take on Ivory Coast at BMO Field in Toronto in a top-of-Group-E clash. Germany were sensational in their 7-1 opening demolition of Curacao while the Ivory Coast edged Ecuador 1-0 in a disciplined display. Both teams are unbeaten and the winner takes pole position in the group.
        </p>
        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — GERMANY VS IVORY COAST</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Germany Win (1)", odds: "1.53", bk: "Betsson" },
              { label: "Draw (X)", odds: "4.60", bk: "Betsson" },
              { label: "Ivory Coast Win (2)", odds: "5.50", bk: "Betsson" },
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
          Germany look terrifying in this tournament. Jamal Musiala and Florian Wirtz are arguably the two most exciting young players in world football, and the combination of their creativity with Leroy Sane&apos;s pace and Kai Havertz&apos;s intelligence gives Julian Nagelsmann endless attacking options. The 7-1 win over Curacao was a statement of intent.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          Ivory Coast are no pushovers. The Elephants are ranked among Africa&apos;s finest sides and their disciplined 1-0 win over Ecuador showed tactical maturity. Sebastien Haller leads a well-organised attack, and they will look to frustrate Germany and threaten on the counter. However, containing Musiala and Wirtz for 90 minutes is an enormous ask.
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Germany to Win", odds: "1.53", conf: "HIGH", reason: "Germany were electric against Curacao — 7 goals, relentless pressing and outstanding individual quality. Ivory Coast are organised but outclassed in attack vs defence.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Germany Win & Over 2.5 Goals", odds: "1.70", conf: "VALUE", reason: "Germany are a high-scoring machine right now. Even against tighter opposition, Musiala and Wirtz will create chances. Ivory Coast will threaten on the break too.", bk: "1xBet", url: ONEXBET_URL },
            { tip: "Jamal Musiala to Score Anytime", odds: "2.10", conf: "MEDIUM", reason: "Musiala was the standout player in matchday 1 and is in the form of his life. He loves high-pressure tournament football and has scored in 4 of his last 5 Germany appearances.", bk: "Betsson", url: BETSSON_URL },
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
            { label: "Netherlands vs Sweden", href: "/blog/netherlands-vs-sweden-world-cup-2026" },
            { label: "Ecuador vs Curacao", href: "/blog/ecuador-vs-curacao-world-cup-2026" },
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
