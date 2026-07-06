import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

const base = "https://www.worldcupbet26.com";
const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export const metadata: Metadata = {
  title: "USA Quarter-Final World Cup 2026 — Odds, Tips & Prediction | Host Nation",
  description: "Can the USA reach the World Cup semi-finals on home soil? Full quarter-final preview with odds at Betsson and 1xBet, expert betting tips and USMNT prediction for July 2026.",
  alternates: {
    canonical: `${base}/blog/usa-quarter-final-world-cup-2026`,
    languages: {
      en: `${base}/blog/usa-quarter-final-world-cup-2026`,
      es: `${base}/es/blog/usa-quarter-final-world-cup-2026`,
      "x-default": `${base}/blog/usa-quarter-final-world-cup-2026`,
    },
  },
  openGraph: {
    title: "USA Quarter-Final World Cup 2026 — Odds & Prediction",
    description: "The USMNT quarter-final on home soil. Can the USA reach the semis? Full betting preview and best odds.",
    url: `${base}/blog/usa-quarter-final-world-cup-2026`,
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: `${base}/og-blog.jpg`, width: 1200, height: 630, alt: "USA Quarter-Final World Cup 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA World Cup 2026 Quarter-Final Odds & Tips",
    description: "USMNT QF preview — home soil advantage, best odds and expert tips at WorldCupBet26.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "USA Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
      "description": "Preview of the USA's quarter-final at the 2026 World Cup. Can the USMNT reach the semis on home soil?",
      "datePublished": "2026-07-07",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": base },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the USA's quarter-final at the 2026 World Cup?",
          "acceptedAnswer": { "@type": "Answer", "text": "The USA's quarter-final, if they advance from the Round of 16, would take place on July 8 or 9, 2026. Exact date and opponent confirmed after the R16 result." },
        },
        {
          "@type": "Question",
          "name": "What are the odds for the USA to win the World Cup 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "The USA are priced at around 25.00–30.00 to win the 2026 World Cup outright. As host nation with home crowd support, they offer significant value as a dark horse." },
        },
        {
          "@type": "Question",
          "name": "Can the USA win the World Cup on home soil in 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "It would be a major upset, but host nations have won the World Cup on five occasions (Uruguay 1930, Italy 1934, England 1966, West Germany 1974, France 1998, Argentina 1978). The USA at 25.00+ represents long-shot value for believers." },
        },
      ],
    },
  ],
};

export default function USAQFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: "8px", fontSize: "13px", color: "var(--muted)", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</Link>
          <span>/</span>
          <span>USA Quarter-Final World Cup 2026</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>QUARTER-FINAL</span>
          <span style={{ background: "rgba(179,25,66,0.12)", border: "1px solid rgba(179,25,66,0.3)", color: "#e04466", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>HOST NATION</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>JUL 8–9</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          USA Quarter-Final World Cup 2026 — Odds, Tips & Prediction
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          The USMNT have the chance to make history on home soil in 2026. Advancing to the quarter-finals would already be a massive moment — but a semi-final run at their own World Cup would be the greatest achievement in US soccer history. The crowd factor is real: host nations outperform their seeding in knockout football, and the US has played all their matches in front of raucous home support. Here&apos;s the full betting guide.
        </p>

        {/* Match card */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>🇺🇸</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>USA</div>
              <div style={{ color: "#e04466", fontSize: "12px", fontWeight: 700 }}>HOST NATION</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)", letterSpacing: "-1px" }}>VS</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Jul 8–9 · QF</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>⚽</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>QF Opponent</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Confirmed after R16</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" }}>
            <div style={{ background: "rgba(0,208,132,0.08)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)" }}>~2.40</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>USA to Advance</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>25.00</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Win Trophy</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>6.50</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Reach Final</div>
            </div>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center", fontSize: "11px", color: "var(--muted)" }}>
            Odds via 1xBet (best for US market) · <Link href="/world-cup-2026-odds" style={{ color: "var(--accent)", textDecoration: "none" }}>compare all markets</Link>
          </div>
        </div>

        {/* Expert tip */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>VALUE BET — USA to Reach the Semi-Finals @ 6.50 (Long Shot)</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            This is a long-shot value play, not a banker. The USA at 6.50 to reach the final is worth a small stake if you believe in the home crowd effect. Five host nations have won the World Cup outright — the home atmosphere is a genuine factor in knockout football. The USMNT has young talent (Reyna, Musah, Weah) capable of a giant-killing on their day.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            As the host nation with passionate support at every venue, USA represent the best tournament value bet at long odds. Even a conservative 1 unit stake gives significant upside at 6.50.
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet USA Long Shot on 1xBet →
            </a>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Betsson — 100% Welcome Bonus
            </a>
          </div>
        </div>

        {/* USMNT overview */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>USMNT at the 2026 World Cup — Squad & Form</h2>
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ fontSize: "36px" }}>🇺🇸</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px" }}>United States — USMNT</div>
              <div style={{ color: "#e04466", fontSize: "12px", fontWeight: 700 }}>Host Nation | Win Trophy: 25.00</div>
            </div>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: 2.1 }}>
            <li><strong style={{ color: "var(--foreground)" }}>Star man:</strong> Christian Pulisic — captain, creative spark and USA&apos;s most experienced player</li>
            <li><strong style={{ color: "var(--foreground)" }}>Rising star:</strong> Gio Reyna — when fit, one of the most technically gifted players in the squad</li>
            <li><strong style={{ color: "var(--foreground)" }}>Engine room:</strong> Weston McKennie, Yunus Musah — physical and combative in the middle</li>
            <li><strong style={{ color: "var(--foreground)" }}>Strikers:</strong> Folarin Balogun, Tim Weah — rapid and dangerous in transition</li>
            <li><strong style={{ color: "var(--foreground)" }}>Home advantage:</strong> Roared on by 70,000+ at MetLife, SoFi and AT&T Stadium — biggest factor</li>
            <li><strong style={{ color: "var(--foreground)" }}>Weakness:</strong> Limited experience in elite knockout football at this level</li>
          </ul>
        </div>

        <OnexBetBanner />

        {/* Host nation history */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Host Nation Advantage — The Numbers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", marginBottom: "2.5rem" }}>
          {[
            { icon: "🏆", stat: "6 of 22", label: "World Cups won by the host nation" },
            { icon: "📈", stat: "+1.5 positions", label: "Average overperformance vs seeding for hosts" },
            { icon: "🏟️", stat: "70,000+", label: "Home fans at each USA match" },
            { icon: "⚽", stat: "Best ever", label: "USMNT squad depth in history" },
          ].map(({ icon, stat, label }) => (
            <div key={label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "6px" }}>{icon}</div>
              <div style={{ fontWeight: 900, fontSize: "22px", color: "var(--accent)", marginBottom: "4px" }}>{stat}</div>
              <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Odds comparison */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>USA World Cup 2026 Odds Comparison</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Bookmaker</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Win Trophy</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Reach Final</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>QF Advance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "1xBet ★", trophy: "26.00", final: "6.80", advance: "2.45", best: true, url: ONEXBET_URL },
                { name: "Betsson", trophy: "25.00", final: "6.50", advance: "2.40", best: false, url: BETSSON_URL },
                { name: "Bet365", trophy: "20.00", final: "5.50", advance: "2.20", best: false, url: "#" },
                { name: "Betway", trophy: "18.00", final: "5.00", advance: "2.10", best: false, url: "#" },
              ].map((bk) => (
                <tr key={bk.name} style={{ borderBottom: "1px solid var(--card-border)", background: bk.best ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "12px" }}>
                    <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: bk.best ? "var(--accent)" : "var(--foreground)", fontWeight: bk.best ? 700 : 500, textDecoration: "none" }}>
                      {bk.name}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: bk.best ? 800 : 400, color: bk.best ? "var(--accent)" : "var(--foreground)", fontSize: bk.best ? "16px" : "14px" }}>{bk.trophy}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.final}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.advance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>Note: US bettors should use 1xBet — Betsson is not available in the USA.</div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { q: "When is the USA's quarter-final at the 2026 World Cup?", a: "If the USMNT advance from the Round of 16, their quarter-final would be July 8 or 9, 2026. The result of the USA vs Belgium R16 match determines whether they qualify for the QF." },
            { q: "What are the odds for the USA to win the 2026 World Cup?", a: "The USA are priced at approximately 25.00–26.00 to win the 2026 World Cup outright. As host nation, they have the crowd advantage, but they face significantly stronger opposition in the knockout rounds." },
            { q: "Can I bet on the USA World Cup from the US?", a: "US bettors cannot use Betsson (not available in the USA). 1xBet covers the US market — create an account and you can bet on USMNT at the best available odds." },
            { q: "Who will the USA play in the quarter-final?", a: "The USA's QF opponent depends on their R16 result and their bracket position. Possible opponents include one of the European powerhouses if the bracket aligns that way." },
            { q: "Has the USA ever reached the World Cup semi-finals?", a: "Yes — the USA reached the semi-finals in 1930, their first World Cup. A semi-final appearance in 2026 on home soil would be their greatest achievement in the modern era." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Bet on the USA at the World Cup 2026</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>US bettors: Use 1xBet — best odds, covers USA. European bettors: Betsson with 100% welcome bonus.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Bet USA on 1xBet (Best for US)
            </a>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Betsson — Claim 100% Bonus
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px", opacity: 0.7 }}>18+ | Gamble responsibly | T&amp;Cs apply</p>
        </div>

        {/* Internal links */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--card-border)" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--muted)", marginBottom: "12px" }}>MORE WORLD CUP 2026 BETTING GUIDES</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/blog/world-cup-2026-quarter-final-odds", label: "All QF Odds & Tips" },
              { href: "/blog/usa-vs-belgium-world-cup-2026", label: "USA vs Belgium R16" },
              { href: "/blog/france-quarter-final-world-cup-2026", label: "France QF Preview" },
              { href: "/blog/argentina-quarter-final-world-cup-2026", label: "Argentina QF Preview" },
              { href: "/world-cup-2026-odds", label: "Tournament Winner Odds" },
              { href: "/blog/best-value-bets", label: "Best Value Bets" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", textDecoration: "none", color: "var(--foreground)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
