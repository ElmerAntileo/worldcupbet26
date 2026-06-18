import type { Metadata } from "next";
import Link from "next/link";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "canada-vs-qatar-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Canada vs Qatar World Cup 2026 Odds, Preview & Betting Tips",
  description: "Canada vs Qatar at the 2026 FIFA World Cup — June 18 at BC Place, Vancouver. Canada are heavy favourites at 1.29. Full odds, expert betting tips and match preview.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Canada vs Qatar World Cup 2026 Odds & Preview",
    description: "Canada 1.29 · Draw 5.50 · Qatar 9.00. Group B match at BC Place Vancouver — June 18. Expert tip: Canada to Win to Nil.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada vs Qatar World Cup 2026 Odds & Betting Tips",
    description: "Canada 1.29 heavy favourites at BC Place Vancouver. Full preview and best bets for Group B.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the odds for Canada vs Qatar at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Best odds: Canada to Win 1.29 (Betsson), Draw 5.50, Qatar to Win 9.00. Canada are overwhelming favourites as co-hosts playing in Vancouver." } },
    { "@type": "Question", name: "When is Canada vs Qatar at the 2026 World Cup?", acceptedAnswer: { "@type": "Answer", text: "Canada vs Qatar is played on June 18, 2026 at 18:00 ET (00:00 CET June 19) at BC Place, Vancouver, Canada." } },
    { "@type": "Question", name: "What is the best bet for Canada vs Qatar?", acceptedAnswer: { "@type": "Answer", text: "Our top tip is Canada to Win to Nil at approximately 2.00. Qatar&apos;s defence has been poor and Canada&apos;s attack at home is formidable. Qatar failed to score at the 2022 World Cup." } },
    { "@type": "Question", name: "Which group are Canada and Qatar in at World Cup 2026?", acceptedAnswer: { "@type": "Answer", text: "Canada and Qatar are in Group B. This match is played at BC Place, Vancouver on June 18." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canada vs Qatar World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "WorldCupBet26" },
  publisher: { "@type": "Organization", name: "WorldCupBet26", logo: { "@type": "ImageObject", url: `${base}/logo.png` } },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function CanadaVsQatar() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 20px 60px", color: "#e8f0f8", fontFamily: "system-ui,sans-serif" }}>
        <nav style={{ fontSize: "13px", color: "#7a9bbf", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#7a9bbf", textDecoration: "none" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#7a9bbf", textDecoration: "none" }}>Blog</Link>{" › "}
          <span style={{ color: "#aac8e8" }}>Canada vs Qatar</span>
        </nav>

        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(0,208,132,0.15)", color: "#00d084", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,208,132,0.3)" }}>⚽ GROUP B</span>
          <span style={{ background: "rgba(255,107,107,0.12)", color: "#ff6b6b", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,107,107,0.3)" }}>🔴 LIVE TODAY</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#aac8e8", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>THU 18 JUN 2026 · 00:00 CET</span>
        </div>

        <h1 style={{ fontSize: "clamp(26px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "12px", color: "#ffffff" }}>
          Canada vs Qatar World Cup 2026: Odds, Preview & Best Bets
        </h1>
        <p style={{ fontSize: "17px", color: "#aac8e8", lineHeight: 1.7, marginBottom: "32px" }}>
          Canada host Qatar at BC Place in Vancouver in a Group B clash. Canada are overwhelming favourites on home soil while Qatar look to improve on a difficult 2022 World Cup campaign where they became the first host nation to be eliminated in the group stage.
        </p>

        <div style={{ background: "rgba(13,31,56,0.9)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#00d084", marginBottom: "18px", letterSpacing: "0.04em" }}>📊 BEST ODDS — CANADA VS QATAR</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            {[
              { label: "Canada Win (1)", odds: "1.29", bk: "Betsson" },
              { label: "Draw (X)", odds: "5.50", bk: "Betsson" },
              { label: "Qatar Win (2)", odds: "9.00", bk: "Betsson" },
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
          Canada are one of the stories of this World Cup — a nation qualifying for their first World Cup since 1986 and now co-hosting the 2026 edition. BC Place in Vancouver will be packed with passionate Canadian supporters roaring behind Alphonso Davies and Jonathan David. This is a must-win match for Canada&apos;s Group B ambitions.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#c8d8e8", marginBottom: "32px" }}>
          Qatar arrive in Vancouver having struggled at the 2022 World Cup, where they became the first host nation eliminated in the group stage. They&apos;ve improved since then but still face an enormous challenge against a motivated Canada side playing at home. Qatar&apos;s best hope lies in a disciplined defensive display and counter-attacking on the break.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>Expert Betting Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
          {[
            { tip: "Canada to Win", odds: "1.29", conf: "HIGH", reason: "Home advantage, superior squad, must-win mentality. The value is in the Asian Handicap or correct score markets.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Canada to Win to Nil", odds: "2.00", conf: "VALUE", reason: "Qatar failed to score at the 2022 World Cup and their attack remains limited. Canada&apos;s defence is organised.", bk: "Betsson", url: BETSSON_URL },
            { tip: "Canada -1.5 Asian Handicap", odds: "2.10", conf: "MEDIUM", reason: "Canada should win comfortably at home. The handicap offers much better value than a straight win.", bk: "1xBet", url: ONEXBET_URL },
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
          <p style={{ fontSize: "11px", color: "#4a6a8a", marginTop: "14px" }}>18+ · Gambling can be addictive. Play responsibly. T&Cs apply.</p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>Key Stats</h2>
        <ul style={{ fontSize: "15px", color: "#c8d8e8", lineHeight: 2, paddingLeft: "20px", marginBottom: "32px" }}>
          <li>Canada qualified top of CONCACAF — won 8, drew 4, lost 2</li>
          <li>Qatar scored only 1 goal at the 2022 World Cup group stage</li>
          <li>Alphonso Davies scored 14 goals in qualifying — Canada&apos;s all-time top scorer</li>
          <li>Jonathan David is one of Europe&apos;s top scorers — 30+ club goals this season</li>
          <li>Canada have won 5 of 7 home matches in 2025–2026 (D1 L1)</li>
        </ul>

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
            { label: "Mexico vs South Korea", href: "/blog/mexico-vs-south-korea-world-cup-2026" },
            { label: "Czechia vs South Africa", href: "/blog/czechia-vs-south-africa-world-cup-2026" },
            { label: "Switzerland vs Bosnia-Hz", href: "/blog/switzerland-vs-bosnia-herzegovina-world-cup-2026" },
            { label: "Top Favourites to Win", href: "/blog/top-favorites-to-win" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#aac8e8", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </article>
    </>
  );
}
