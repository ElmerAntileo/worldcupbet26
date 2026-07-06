import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

const base = "https://www.worldcupbet26.com";
const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export const metadata: Metadata = {
  title: "France Quarter-Final World Cup 2026 — Odds, Tips & Prediction | July 8",
  description: "France are the top favourites to win the 2026 World Cup at 6.00. Full quarter-final preview with Mbappé form guide, best odds at Betsson and 1xBet, and expert betting tips.",
  alternates: {
    canonical: `${base}/blog/france-quarter-final-world-cup-2026`,
    languages: {
      en: `${base}/blog/france-quarter-final-world-cup-2026`,
      es: `${base}/es/blog/france-quarter-final-world-cup-2026`,
      fr: `${base}/fr/blog/france-quarter-final-world-cup-2026`,
      "x-default": `${base}/blog/france-quarter-final-world-cup-2026`,
    },
  },
  openGraph: {
    title: "France Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
    description: "France enter the quarter-finals as the #1 tournament favourites at 6.00. Can Mbappé lead Les Bleus to the title?",
    url: `${base}/blog/france-quarter-final-world-cup-2026`,
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: `${base}/og-blog.jpg`, width: 1200, height: 630, alt: "France Quarter-Final World Cup 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "France Quarter-Final World Cup 2026 Odds & Tips",
    description: "France QF preview — tournament favourites at 6.00. Best odds and expert tips at WorldCupBet26.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "France Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
      "description": "Full preview of France's quarter-final at the 2026 World Cup. Odds comparison, Mbappé form guide and expert betting tips.",
      "datePublished": "2026-07-07",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": base },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is France's quarter-final at the 2026 World Cup?",
          "acceptedAnswer": { "@type": "Answer", "text": "France play their quarter-final on July 8 or July 9, 2026, depending on their position in the bracket. Exact timing confirmed after the Round of 16 results." },
        },
        {
          "@type": "Question",
          "name": "What are the odds for France to win the World Cup 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "France are the outright tournament favourites at 6.00. They are ahead of Brazil (6.50) and Argentina (8.00) in the winner market." },
        },
        {
          "@type": "Question",
          "name": "What is the best bet for France's World Cup quarter-final?",
          "acceptedAnswer": { "@type": "Answer", "text": "France to qualify for the semi-finals is the standout value bet at approximately 1.55–1.65. As tournament favourites with the best squad depth, they are expected to advance from any quarter-final matchup." },
        },
      ],
    },
  ],
};

export default function FranceQFPage() {
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
          <span>France Quarter-Final World Cup 2026</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>QUARTER-FINAL</span>
          <span style={{ background: "rgba(0,68,255,0.12)", border: "1px solid rgba(0,68,255,0.3)", color: "#4488ff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>#1 FAVOURITES</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>JUL 8–9</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          France Quarter-Final World Cup 2026 — Odds, Tips & Prediction
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          France enter the 2026 World Cup quarter-finals as the outright tournament favourites at 6.00. Les Bleus boast arguably the deepest squad of any nation — Mbappé, Griezmann, Dembélé and a midfield that can dominate any opponent. History says France are dangerous from the last eight onwards: they won the trophy from exactly this position in 2018. Here is why they are the standout value play to win this World Cup.
        </p>

        {/* Match card */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>🇫🇷</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>France</div>
              <div style={{ color: "#4488ff", fontSize: "12px", fontWeight: 700 }}>TOURNAMENT FAVOURITES</div>
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
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)" }}>~1.58</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>France to Advance</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>6.00</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Win Trophy</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>2.10</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Reach Final</div>
            </div>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center", fontSize: "11px", color: "var(--muted)" }}>
            Odds via Betsson &amp; 1xBet · <Link href="/world-cup-2026-odds" style={{ color: "var(--accent)", textDecoration: "none" }}>compare all markets</Link>
          </div>
        </div>

        {/* Expert tip */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>EXPERT TIP — France to Win the World Cup 2026 @ 6.00</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            France are the deepest squad in this tournament. When Mbappé, Dembélé and Griezmann are all fit — which they have been for the knockout rounds — this attack is unmatched. Their 2018 triumph showed France&apos;s ability to absorb pressure and win ugly when needed. At 6.00 on Betsson, they represent the best risk-adjusted outright bet in the tournament.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Back France Win the World Cup on Betsson and claim a 100% welcome bonus on your first deposit. Or use 1xBet for potentially higher outright odds.
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet France @ 6.00 on Betsson →
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              1xBet — Global + Best Odds
            </a>
          </div>
        </div>

        {/* Squad overview */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>France at the 2026 World Cup — Why They Are Favourites</h2>
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ fontSize: "36px" }}>🇫🇷</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px" }}>France — Les Bleus</div>
              <div style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 700 }}>Tournament Favourites | Win Trophy: 6.00</div>
            </div>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: 2.1 }}>
            <li><strong style={{ color: "var(--foreground)" }}>Star man:</strong> Kylian Mbappé — highest-profile player at the tournament, lethal finisher</li>
            <li><strong style={{ color: "var(--foreground)" }}>Creative engine:</strong> Antoine Griezmann — assists, set-pieces and relentless pressing</li>
            <li><strong style={{ color: "var(--foreground)" }}>Wide threat:</strong> Ousmane Dembélé — direct, unpredictable and in excellent club form</li>
            <li><strong style={{ color: "var(--foreground)" }}>Midfield:</strong> Camavinga, Tchouaméni — tenacious ball-winners protect the back line</li>
            <li><strong style={{ color: "var(--foreground)" }}>Defence:</strong> Upamecano, Konaté — physically dominant, excellent in the air</li>
            <li><strong style={{ color: "var(--foreground)" }}>WC pedigree:</strong> Won 2018 World Cup. Lost 2022 Final on penalties — motivated for redemption</li>
          </ul>
        </div>

        <OnexBetBanner />

        {/* Odds comparison */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>France World Cup 2026 Odds Comparison</h2>
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
                { name: "1xBet ★", trophy: "6.30", final: "2.15", advance: "1.62", best: true, url: ONEXBET_URL },
                { name: "Betsson", trophy: "6.00", final: "2.10", advance: "1.58", best: false, url: BETSSON_URL },
                { name: "Bet365", trophy: "5.50", final: "2.00", advance: "1.55", best: false, url: "#" },
                { name: "Betway", trophy: "5.00", final: "1.95", advance: "1.50", best: false, url: "#" },
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
          <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>1xBet leads on outright odds. Odds fluctuate — click through for current prices.</div>
        </div>

        {/* Key facts */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Key Facts — France at the 2026 World Cup</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            { label: "QF Date", value: "July 8–9, 2026" },
            { label: "Win Trophy Odds", value: "6.00" },
            { label: "Reach Final Odds", value: "2.10" },
            { label: "QF Advance", value: "~1.58" },
            { label: "Tournament Ranking", value: "#1 Favourite" },
            { label: "Our Tip", value: "France Win the WC" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontWeight: 800, fontSize: "15px" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { q: "When is France's quarter-final at the 2026 World Cup?", a: "France's quarter-final is on July 8 or 9, 2026, depending on their bracket position. The exact date and opponent are confirmed after the Round of 16 concludes on July 7." },
            { q: "What are the odds for France to win the 2026 World Cup?", a: "France are priced at 6.00 to win the 2026 World Cup outright — the shortest price in the tournament. 1xBet offers slightly better odds at 6.30." },
            { q: "Can France win the World Cup in 2026?", a: "Yes. France are the strongest all-round squad in the tournament. With Mbappé in form, an experienced midfield and a solid defensive unit, they are genuine favourites to lift the trophy." },
            { q: "Who will France play in the quarter-final?", a: "France's quarter-final opponent is determined by the Round of 16 bracket. Based on their position, possible opponents include England, Germany or the winner of a lower-seeded R16 tie." },
            { q: "Where can I bet on France at the World Cup 2026?", a: "Betsson offers a 100% welcome bonus for new customers in eligible European countries. 1xBet offers the highest outright odds on France and covers most countries worldwide including USA, Nigeria and Ghana." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Back France to Win the World Cup 2026</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>Best outright price: France @ 6.30 on 1xBet. New Betsson customers get a 100% welcome bonus.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Bet France on 1xBet (Best Odds)
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
              { href: "/blog/argentina-quarter-final-world-cup-2026", label: "Argentina QF Preview" },
              { href: "/blog/usa-quarter-final-world-cup-2026", label: "USA QF Preview" },
              { href: "/blog/france-vs-senegal-world-cup-2026", label: "France vs Senegal Preview" },
              { href: "/world-cup-2026-odds", label: "Tournament Winner Odds" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
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
