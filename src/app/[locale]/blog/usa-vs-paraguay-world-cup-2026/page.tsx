import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "usa-vs-paraguay-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "USA vs Paraguay World Cup 2026 Odds, Preview & Betting Tips",
  description:
    "USA vs Paraguay kicks off Group D at the 2026 World Cup on June 12 at MetLife Stadium. Best odds, expert betting tip and match preview. USA favoured at 1.75.",
  alternates: {
    canonical: postUrl("en"),
    languages: Object.fromEntries(locales.map((l) => [l, postUrl(l)])),
  },
  openGraph: {
    title: "USA vs Paraguay World Cup 2026 Odds & Preview",
    description: "USA 1.75 · Draw 3.60 · Paraguay 4.80. Group D opener — June 12, MetLife Stadium. Expert tip: USA to Win.",
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
      name: "What are the odds for USA vs Paraguay at the 2026 World Cup?",
      acceptedAnswer: { "@type": "Answer", text: "The best odds for USA vs Paraguay are: USA to Win 1.75 (Betsson), Draw 3.60, Paraguay to Win 4.80. The USA are strong home favourites at MetLife Stadium." },
    },
    {
      "@type": "Question",
      name: "When is USA vs Paraguay at World Cup 2026?",
      acceptedAnswer: { "@type": "Answer", text: "USA vs Paraguay is played on June 12, 2026 at 21:00 ET at MetLife Stadium in East Rutherford, New Jersey. This is a Group D match at the 2026 FIFA World Cup." },
    },
    {
      "@type": "Question",
      name: "What group are USA and Paraguay in at World Cup 2026?",
      acceptedAnswer: { "@type": "Answer", text: "USA and Paraguay are both in Group D at the 2026 World Cup alongside Australia and Türkiye. The USA are strong favourites to top the group as home co-hosts." },
    },
    {
      "@type": "Question",
      name: "What is the best bet for USA vs Paraguay?",
      acceptedAnswer: { "@type": "Answer", text: "Our expert tip is USA to Win at 1.75 with Betsson. The USA are home co-hosts at MetLife — the same stadium that hosts the Final on July 19 — with Pulisic, McKennie and a full-strength squad. Paraguay are CONMEBOL outsiders with limited World Cup pedigree." },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "USA vs Paraguay World Cup 2026 Odds, Preview & Betting Tips",
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "WorldCupBet26", url: base },
  publisher: { "@type": "Organization", name: "WorldCupBet26", url: base },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function USAVsParaguayPage() {
  return (
    <>
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem", color: "var(--foreground)" }}>

        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.25rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>USA vs Paraguay</span>
        </nav>

        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>MATCH PREVIEW</span>
            <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 GROUP D OPENER</span>
            <span style={{ fontSize: "12px", color: "var(--muted)", alignSelf: "center" }}>Updated: May 31, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.75rem" }}>
            USA vs Paraguay World Cup 2026 — Odds, Preview & Betting Tips
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6 }}>
            The United States make their home World Cup debut on <strong style={{ color: "var(--foreground)" }}>June 12</strong> at MetLife Stadium — the same arena hosting the Final on July 19.
            Christian Pulisic, Weston McKennie and 82,500 fans set the stage. Here&apos;s everything you need to bet smart on Group D&apos;s biggest game.
          </p>
        </div>

        {/* Odds hero */}
        <div style={{ background: "linear-gradient(135deg, #040c18, #071525)", borderRadius: "16px", padding: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px", letterSpacing: "0.06em" }}>
            GROUP D · JUNE 12, 2026 · 21:00 ET · METLIFE STADIUM, NEW JERSEY
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(16px,5vw,60px)", marginBottom: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "64px" }}>🇺🇸</div>
              <div style={{ fontWeight: 900, fontSize: "22px", marginTop: "8px" }}>USA</div>
              <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "36px" }}>1.75</div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>to win</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "var(--muted)", fontSize: "12px", fontWeight: 700 }}>DRAW</div>
              <div style={{ fontWeight: 900, fontSize: "28px", color: "var(--foreground)", margin: "4px 0" }}>3.60</div>
              <div style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 800 }}>VS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "64px" }}>🇵🇾</div>
              <div style={{ fontWeight: 900, fontSize: "22px", marginTop: "8px" }}>Paraguay</div>
              <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "36px" }}>4.80</div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>to win</div>
            </div>
          </div>
          <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
            style={{ background: "var(--accent)", color: "#040c18", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none", display: "inline-block" }}>
            🏆 Bet at Betsson — Up to €100 Bonus
          </a>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ · T&Cs Apply · Gamble Responsibly</p>
        </div>

        {/* Odds table */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>USA vs Paraguay — Odds Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  {["Bookmaker", "USA", "Draw", "Paraguay", "Bet"].map(h => (
                    <th key={h} style={{ padding: "12px 14px", textAlign: h === "Bookmaker" ? "left" : "center", fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--card-border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Betsson ★", usa: "1.75", draw: "3.60", py: "4.80", url: BETSSON_URL, best: true },
                  { name: "1xBet ★",   usa: "1.77", draw: "3.55", py: "4.75", url: ONEXBET_URL, best: false },
                  { name: "Bet365",    usa: "1.72", draw: "3.60", py: "4.85", url: "https://bet365.com", best: false },
                  { name: "Betway",    usa: "1.70", draw: "3.65", py: "4.90", url: "https://betway.com", best: false },
                ].map(row => (
                  <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "14px", fontWeight: 700 }}>{row.name}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 800, fontSize: "18px", color: "var(--accent)" }}>{row.usa}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 700, color: "var(--muted)" }}>{row.draw}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 800, fontSize: "18px", color: "var(--accent)" }}>{row.py}</td>
                    <td style={{ padding: "14px", textAlign: "center" }}>
                      <a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={row.name.split(" ")[0]}
                        style={{ background: row.best ? "var(--accent)" : "rgba(255,255,255,0.07)", color: row.best ? "#040c18" : "var(--muted)", padding: "7px 14px", borderRadius: "6px", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
                        {row.best ? "Bet →" : "View"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert tip */}
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ background: "rgba(0,208,132,0.08)", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", marginBottom: "6px" }}>EXPERT BETTING TIP</div>
            <div style={{ fontSize: "24px", fontWeight: 900, color: "var(--foreground)", marginBottom: "8px" }}>
              ✅ USA to Win — <span style={{ color: "var(--accent)" }}>1.75 @ Betsson</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              The USA open their home World Cup against a Paraguay side that has never progressed past the Round of 16 at any World Cup.
              MetLife Stadium — capacity 82,500 — will be a cauldron of American support. Pulisic (AC Milan), McKennie (Juventus) and
              Tyler Adams (Bournemouth) give the USMNT quality at every level. The USA won the 2024 CONCACAF Nations League and are
              peaking at the right time. At 1.75, USA win is our confident Group D tip.
            </p>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
              style={{ display: "inline-block", marginTop: "1rem", background: "var(--accent)", color: "#040c18", padding: "11px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Bet USA @ 1.75 →
            </a>
          </div>
        </section>

        {/* Preview */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Match Preview</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { heading: "USA — A Nation Ready for Its Moment", body: "The 2026 World Cup is the culmination of decades of investment in American soccer. The US Soccer Federation has developed a remarkable generation of talent — most of whom play in Europe's top leagues. Pulisic is AC Milan's most creative midfielder, McKennie starts for Juventus, and Gio Reyna (Borussia Dortmund) offers explosive quality off the bench. The team is coached by Mauricio Pochettino, who brings Premier League and Champions League experience. Playing at MetLife — where the Final will also be held — gives the USA a rare home advantage that could carry them deep into the tournament." },
              { heading: "Paraguay — The CONMEBOL Underdogs", body: "Paraguay qualified for the 2026 World Cup as CONMEBOL's 5th-placed team, edging through a competitive qualifying campaign. Their squad is built around defensive discipline and physical intensity — a compact 4-4-2 that makes them difficult to break down. However, individual quality is limited compared to the USA. Paraguay have never progressed beyond the quarter-finals at a World Cup (2010) and their record against CONCACAF hosts is poor. Expect a defensive setup designed to frustrate the USA and capitalise on any mistakes." },
              { heading: "MetLife Stadium — The Final Venue", body: "There is a beautiful symmetry to the USA's opening match being at MetLife Stadium — the same venue that will host the World Cup Final on July 19. The stadium holds 82,500 for World Cup fixtures. Located in East Rutherford, New Jersey, it serves the New York metropolitan area — one of the most sports-passionate markets in the world. The USA will have enormous home support and the electric atmosphere of a sold-out MetLife will be a significant advantage." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1.25rem" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{s.heading}</h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>USA vs Paraguay FAQ</h2>
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

        <section>
          <div style={{ background: "linear-gradient(135deg,#1a2f1a,#0d1f2d)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "14px", padding: "1.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "6px" }}>BACK USA NOW — BEST ODDS AT BETSSON</div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
                style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                🏆 Bet USA @ 1.75 →
              </a>
              <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="1xBet"
                style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                🎯 Also at 1xBet →
              </a>
            </div>
            <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ · Gamble Responsibly · T&Cs Apply</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/world-cup-2026-matches/usa-vs-paraguay", label: "⚽ Full Match Preview" },
              { href: "/world-cup-2026-groups", label: "📋 Group D Draw" },
              { href: "/blog/world-cup-2026-betting-tips", label: "💡 All Betting Tips" },
              { href: "/world-cup-2026-odds/usa", label: "🇺🇸 USA Tournament Odds" },
              { href: "/blog/mexico-vs-south-africa-world-cup-2026", label: "🇲🇽 Mexico Opening Match" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
