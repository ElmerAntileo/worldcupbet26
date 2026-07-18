import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const slug = "mexico-vs-south-africa-world-cup-2026";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export const metadata: Metadata = {
  title: "Mexico vs South Africa World Cup 2026 Odds, Preview & Betting Tips",
  description:
    "Mexico vs South Africa opens the 2026 FIFA World Cup on June 11 at the Estadio Azteca. Full odds comparison, expert betting tip and match preview. Mexico favoured at 1.65.",
  alternates: {
    canonical: postUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
  },
  openGraph: {
    title: "Mexico vs South Africa World Cup 2026 Odds & Preview",
    description: "Mexico 1.65 · Draw 3.70 · South Africa 5.50. Opening match of the 2026 FIFA World Cup — June 11, Estadio Azteca. Expert tip: Mexico to Win.",
    type: "article",
    url: postUrl("en"),
    images: [{ url: `${base}/og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico vs South Africa World Cup 2026 Odds & Betting Tips",
    description: "Mexico 1.65 to win the opening match at Estadio Azteca. Full preview and betting analysis.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the odds for Mexico vs South Africa at the 2026 World Cup?",
      acceptedAnswer: { "@type": "Answer", text: "The best odds for Mexico vs South Africa are: Mexico to Win 1.65 (Betsson), Draw 3.70, South Africa to Win 5.50. Mexico are heavy home favourites as co-hosts." },
    },
    {
      "@type": "Question",
      name: "When is Mexico vs South Africa at the 2026 World Cup?",
      acceptedAnswer: { "@type": "Answer", text: "Mexico vs South Africa is the opening match of the 2026 FIFA World Cup, played on June 11, 2026 at 15:00 ET (21:00 CET) at the Estadio Azteca, Mexico City." },
    },
    {
      "@type": "Question",
      name: "What is the best bet for Mexico vs South Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Our expert tip is Mexico to Win at 1.65 with Betsson. Mexico are World Cup co-hosts at the iconic Estadio Azteca with 87,500+ home fans. South Africa have never beaten a CONCACAF host nation at a World Cup." },
    },
    {
      "@type": "Question",
      name: "Which group are Mexico and South Africa in at World Cup 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Mexico and South Africa are both in Group A at the 2026 FIFA World Cup alongside South Korea and Czechia. This opening match is played at the Estadio Azteca on June 11." },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mexico vs South Africa World Cup 2026 Odds, Preview & Betting Tips",
  description: "Complete betting preview for Mexico vs South Africa, the opening match of the 2026 FIFA World Cup on June 11 at the Estadio Azteca.",
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "WorldCupBet26", url: base },
  publisher: { "@type": "Organization", name: "WorldCupBet26", url: base },
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function MexicoVsSouthAfricaPage() {
  return (
    <>
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem", color: "var(--foreground)" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.25rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Mexico vs South Africa</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>MATCH PREVIEW</span>
            <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 OPENING MATCH</span>
            <span style={{ fontSize: "12px", color: "var(--muted)", alignSelf: "center" }}>Updated: May 31, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Mexico vs South Africa World Cup 2026 — Odds, Preview & Betting Tips
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6 }}>
            The 2026 FIFA World Cup kicks off on <strong style={{ color: "var(--foreground)" }}>June 11</strong> at the iconic Estadio Azteca, Mexico City.
            Mexico, as co-hosts, open the tournament against South Africa in front of 87,500 passionate fans.
            Here are the best odds, our expert betting tip and everything you need to know.
          </p>
        </div>

        {/* Odds hero card */}
        <div style={{ background: "linear-gradient(135deg, #040c18, #071525)", borderRadius: "16px", padding: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px", letterSpacing: "0.06em" }}>
            GROUP A · JUNE 11, 2026 · 15:00 ET · ESTADIO AZTECA
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(16px,5vw,60px)", marginBottom: "1.5rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "64px" }}>🇲🇽</div>
              <div style={{ fontWeight: 900, fontSize: "22px", marginTop: "8px" }}>Mexico</div>
              <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "36px" }}>1.65</div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>to win</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "var(--muted)", fontSize: "12px", fontWeight: 700 }}>DRAW</div>
              <div style={{ fontWeight: 900, fontSize: "28px", color: "var(--foreground)", margin: "4px 0" }}>3.70</div>
              <div style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 800 }}>VS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "64px" }}>🇿🇦</div>
              <div style={{ fontWeight: 900, fontSize: "22px", marginTop: "8px" }}>South Africa</div>
              <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "36px" }}>5.50</div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>to win</div>
            </div>
          </div>
          <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
            style={{ background: "var(--accent)", color: "#040c18", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none", display: "inline-block" }}>
            🏆 Bet at Betsson — Up to €100 Bonus
          </a>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ · T&Cs Apply · Gamble Responsibly</p>
        </div>

        {/* Odds comparison table */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Mexico vs South Africa — Odds Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  {["Bookmaker", "Mexico", "Draw", "South Africa", "Bet"].map(h => (
                    <th key={h} style={{ padding: "12px 14px", textAlign: h === "Bookmaker" ? "left" : "center", fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--card-border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Betsson ★", mx: "1.65", draw: "3.70", sa: "5.50", url: BETSSON_URL, best: true },
                  { name: "1xBet ★",   mx: "1.67", draw: "3.65", sa: "5.40", url: ONEXBET_URL, best: false },
                  { name: "Bet365",    mx: "1.62", draw: "3.72", sa: "5.55", url: "https://bet365.com", best: false },
                  { name: "Betway",    mx: "1.60", draw: "3.75", sa: "5.60", url: "https://betway.com", best: false },
                ].map(row => (
                  <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "14px", fontWeight: 700 }}>{row.name}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 800, fontSize: "18px", color: "var(--accent)" }}>{row.mx}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 700, color: "var(--muted)" }}>{row.draw}</td>
                    <td style={{ padding: "14px", textAlign: "center", fontWeight: 800, fontSize: "18px", color: "var(--accent)" }}>{row.sa}</td>
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
          <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px" }}>★ affiliate partner · Odds updated daily · 18+ only</p>
        </section>

        {/* Expert tip */}
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ background: "rgba(0,208,132,0.08)", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", marginBottom: "6px" }}>EXPERT BETTING TIP</div>
            <div style={{ fontSize: "24px", fontWeight: 900, color: "var(--foreground)", marginBottom: "8px" }}>
              ✅ Mexico to Win — <span style={{ color: "var(--accent)" }}>1.65 @ Betsson</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Mexico at the Estadio Azteca on the tournament&apos;s opening day is one of the safest bets of the group stage.
              The Azteca crowd — 87,500 fans in full voice — is the most intimidating atmosphere in World Cup history.
              El Tri have won 9 of their last 12 home World Cup qualifiers. South Africa have never beaten a co-host
              nation at a World Cup and lack the quality to contain Mexico&apos;s attack for 90 minutes.
              At 1.65, Mexico win is excellent value for what should be a comfortable home victory.
            </p>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
              style={{ display: "inline-block", marginTop: "1rem", background: "var(--accent)", color: "#040c18", padding: "11px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Bet Mexico @ 1.65 →
            </a>
          </div>
        </section>

        <OnexBetBanner />

        {/* Match preview */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Match Preview</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { heading: "Mexico — Home Advantage & Tournament Pressure", body: "Mexico co-host the 2026 World Cup alongside the USA and Canada — a privilege they have been preparing for since the hosting rights were awarded in 2018. The Estadio Azteca, one of the most storied stadiums in football history (host of two World Cup Finals), will be at full capacity with Mexican fans creating an electric atmosphere. El Tri's squad is the strongest in a generation: Raúl Jiménez leads the line, Hirving 'Chucky' Lozano provides pace on the wing, and Edson Álvarez anchors a combative midfield. Mexico need to win Group A to secure a home crowd for as long as possible in this expanded 48-team format — motivation is sky high." },
              { heading: "South Africa — The Underdogs' Chance", body: "Bafana Bafana qualified for the 2026 World Cup with an impressive AFCON run but enter as the clear underdogs of Group A. The squad is built around Percy Tau's creativity and the defensive solidity of Siyanda Xulu. South Africa will almost certainly adopt a defensive approach — sitting in a deep block and hoping to nick a counter-attacking goal. Their World Cup record is limited (three appearances) and they have never progressed from the group stage as a guest nation (2010 was their home tournament). Against a Mexico side with enormous home advantage, South Africa face an extremely difficult opener." },
              { heading: "Key Stats & Head-to-Head", body: "Mexico and South Africa have met just twice in competitive football, with Mexico winning both. The Estadio Azteca has hosted 19 World Cup matches — Mexico's record at the venue is exceptional. In tournament openers, host nations have won 18 of the last 25 opening matches at the World Cup. The home team effect in the opening match of a World Cup is statistically significant — Mexico should capitalise." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1.25rem" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--foreground)" }}>{s.heading}</h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key facts */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Key Match Facts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: "10px" }}>
            {[
              "Estadio Azteca capacity: 87,523 — the largest World Cup 2026 venue",
              "Mexico are co-hosts — the first home World Cup since 1986",
              "The Azteca has hosted 2 World Cup Finals (1970, 1986)",
              "South Africa's World Cup record: W1 D3 L5 (3 appearances)",
              "Host nations win 72% of opening matches at the World Cup",
              "Mexico's Group A rivals: South Korea, Czechia, South Africa",
            ].map((fact, i) => (
              <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "12px 14px", display: "flex", gap: "8px" }}>
                <span style={{ color: "var(--accent)", fontWeight: 900, flexShrink: 0 }}>⚡</span>
                <span style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5 }}>{fact}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "1rem" }}>Mexico vs South Africa FAQ</h2>
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

        {/* CTA + internal links */}
        <section>
          <div style={{ background: "linear-gradient(135deg,#1a2f1a,#0d1f2d)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "14px", padding: "1.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "6px" }}>BACK MEXICO NOW — ODDS DROP ON JUNE 11</div>
            <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>Mexico 1.65 — Best Odds at Betsson</h3>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="Betsson"
                style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                🏆 Bet at Betsson →
              </a>
              <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate="1xBet"
                style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                🎯 Bet at 1xBet →
              </a>
            </div>
            <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ · Gamble Responsibly · T&Cs Apply</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/world-cup-2026-matches/mexico-vs-south-africa", label: "⚽ Full Match Preview" },
              { href: "/world-cup-2026-groups", label: "📋 Group A Draw" },
              { href: "/blog/world-cup-2026-betting-tips", label: "💡 All Betting Tips" },
              { href: "/blog/world-cup-2026-schedule", label: "📅 Full Schedule" },
              { href: "/world-cup-2026-odds/mexico", label: "🇲🇽 Mexico Tournament Odds" },
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
