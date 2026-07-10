import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

export const metadata: Metadata = {
  title: "Portugal vs Spain World Cup 2026 Odds, Tips & Prediction | Round of 16",
  description: "Portugal face Spain in tonight's Round of 16 clash at Dallas Stadium. Expert betting tip: Both Teams to Score @ 1.90. Full odds comparison across Betsson and 1xBet.",
  alternates: {
    canonical: "https://www.worldcupbet26.com/blog/portugal-vs-spain-world-cup-2026",
    languages: {
      en: "https://www.worldcupbet26.com/blog/portugal-vs-spain-world-cup-2026",
      es: "https://www.worldcupbet26.com/es/blog/portugal-vs-spain-world-cup-2026",
      pt: "https://www.worldcupbet26.com/pt/blog/portugal-vs-spain-world-cup-2026",
      "x-default": "https://www.worldcupbet26.com/blog/portugal-vs-spain-world-cup-2026",
    },
  },
  openGraph: {
    title: "Portugal vs Spain World Cup 2026 Odds, Tips & Prediction",
    description: "Iberian derby in Dallas tonight. Expert tip: Both Teams to Score @ 1.90. Full odds from Betsson and 1xBet.",
    url: "https://www.worldcupbet26.com/blog/portugal-vs-spain-world-cup-2026",
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: "https://www.worldcupbet26.com/og-blog.jpg", width: 1200, height: 630, alt: "Portugal vs Spain World Cup 2026 Odds & Tips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portugal vs Spain World Cup 2026 Odds, Tips & Prediction",
    description: "Iberian derby in Dallas tonight — Round of 16. Expert tip: Both Teams to Score @ 1.90.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Portugal vs Spain World Cup 2026 Odds, Tips & Prediction",
      "description": "Portugal face Spain in the Round of 16 on July 6, 2026 at Dallas Stadium. Full odds comparison and expert betting tip.",
      "datePublished": "2026-07-06",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": "https://www.worldcupbet26.com" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the odds for Portugal vs Spain World Cup 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Portugal are slight underdogs at 2.40 with Betsson. The draw is priced at 3.20. Spain to win is 2.80." },
        },
        {
          "@type": "Question",
          "name": "When is Portugal vs Spain at the 2026 World Cup?",
          "acceptedAnswer": { "@type": "Answer", "text": "Portugal vs Spain is on July 6, 2026 in the Round of 16. Kick-off is at 21:00 CEST at Dallas Stadium, Dallas." },
        },
        {
          "@type": "Question",
          "name": "What is the best bet for Portugal vs Spain 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our expert tip is Both Teams to Score @ 1.90. Iberian derbies historically produce goals at both ends — Portugal and Spain have both scored freely in this tournament." },
        },
      ],
    },
  ],
};

export default function PortugalSpainPage() {
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
          <span>Portugal vs Spain World Cup 2026</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>ROUND OF 16</span>
          <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>IBERIAN DERBY</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>TONIGHT 21:00 CEST</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          Portugal vs Spain World Cup 2026 — Odds, Tips & Prediction
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          The Iberian derby arrives at the Round of 16. Portugal and Spain — two of the tournament favourites — meet tonight at Dallas Stadium. With Ronaldo&apos;s final World Cup campaign clashing against Yamal&apos;s rising star, this is the match of the round. Here are the best odds and our expert tip.
        </p>

        {/* Match info card */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>&#x1F1F5;&#x1F1F9;</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>Portugal</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Outsiders</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)", letterSpacing: "-1px" }}>VS</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Jul 6 · 21:00 CEST</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>&#x1F1EA;&#x1F1F8;</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>Spain</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Favourites</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" }}>
            <div style={{ background: "rgba(0,208,132,0.08)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)" }}>2.40</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Portugal Win</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>3.20</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Draw</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>2.80</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Spain Win</div>
            </div>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center", fontSize: "11px", color: "var(--muted)" }}>
            Best odds via Betsson — <Link href="/world-cup-2026-odds" style={{ color: "var(--accent)", textDecoration: "none" }}>compare all bookmakers</Link>
          </div>
        </div>

        {/* Expert tip */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>&#x1F4A1;</span>
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>EXPERT TIP — Both Teams to Score @ 1.90</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Iberian derbies are traditionally open, high-intensity affairs. Both Portugal and Spain have been clinical in front of goal throughout this tournament. Portugal&apos;s attack led by Bruno Fernandes and Spain&apos;s Yamal and Morata combination means neither defence is likely to keep a clean sheet.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Both Teams to Score at 1.90 with Betsson is our top pick. In their last 5 meetings, both teams have scored in 4 of them.
          </p>
          <div style={{ marginTop: "14px" }}>
            <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet BTTS @ 1.90 on Betsson
            </a>
          </div>
        </div>

        {/* Odds comparison */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Portugal vs Spain Odds Comparison</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Bookmaker</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Portugal Win</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Draw</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Spain Win</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>BTTS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Betsson", por: "2.40", draw: "3.20", esp: "2.80", btts: "1.90", best: true, url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
                { name: "1xBet", por: "2.45", draw: "3.15", esp: "2.75", btts: "1.88", best: false, url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
                { name: "Bet365", por: "2.38", draw: "3.25", esp: "2.85", btts: "1.85", best: false, url: "#" },
                { name: "Betway", por: "2.35", draw: "3.10", esp: "2.80", btts: "1.87", best: false, url: "#" },
              ].map((bk) => (
                <tr key={bk.name} style={{ borderBottom: "1px solid var(--card-border)", background: bk.best ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "12px" }}>
                    <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: bk.best ? "var(--accent)" : "var(--foreground)", fontWeight: bk.best ? 700 : 500, textDecoration: "none" }}>
                      {bk.name} {bk.best && "★"}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: 700 }}>{bk.por}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.draw}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.esp}</td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: bk.best ? 700 : 400, color: bk.best ? "var(--gold)" : "inherit" }}>{bk.btts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <OnexBetBanner />

        {/* Match preview */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Match Preview</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "2.5rem" }}>
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "28px" }}>&#x1F1F5;&#x1F1F9;</span>
              <h3 style={{ fontSize: "15px", fontWeight: 800, margin: 0 }}>Portugal</h3>
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 2 }}>
              <li>Ronaldo&apos;s last World Cup — highly motivated</li>
              <li>Bruno Fernandes pulling strings in midfield</li>
              <li>Rafael Leão dangerous on the left wing</li>
              <li>Strong defensive record in knockout rounds</li>
              <li>WC 2026 winner odds: <strong style={{ color: "var(--accent)" }}>12.00</strong></li>
            </ul>
          </div>
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "28px" }}>&#x1F1EA;&#x1F1F8;</span>
              <h3 style={{ fontSize: "15px", fontWeight: 800, margin: 0 }}>Spain</h3>
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 2 }}>
              <li>Reigning European champions</li>
              <li>Lamine Yamal — best young player in the world</li>
              <li>Morata clinical in front of goal</li>
              <li>Dominant possession-based style</li>
              <li>WC 2026 winner odds: <strong style={{ color: "var(--accent)" }}>7.50</strong></li>
            </ul>
          </div>
        </div>

        {/* Key facts */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Key Match Facts</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            { label: "Date", value: "July 6, 2026" },
            { label: "Kick-off", value: "21:00 CEST" },
            { label: "Venue", value: "Dallas Stadium" },
            { label: "Round", value: "Round of 16" },
            { label: "Portugal WC odds", value: "12.00" },
            { label: "Spain WC odds", value: "7.50" },
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
            { q: "What are the odds for Portugal vs Spain World Cup 2026?", a: "Portugal are priced at 2.40 to win (Betsson). Spain are favourites at 2.80. The draw is 3.20." },
            { q: "When is Portugal vs Spain at the 2026 World Cup?", a: "Portugal vs Spain is on July 6, 2026 in the Round of 16. Kick-off is at 21:00 CEST at Dallas Stadium, Dallas." },
            { q: "Who will win Portugal vs Spain World Cup 2026?", a: "Spain are slight favourites at 2.80. However, Portugal with Ronaldo&apos;s motivation and Bruno Fernandes&apos;s form makes this genuinely 50/50. Our tip is Both Teams to Score." },
            { q: "What is the best bet for Portugal vs Spain 2026?", a: "Both Teams to Score @ 1.90 on Betsson. Iberian derbies produce goals and both sides have attacked freely in this tournament." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Ready to Bet on Portugal vs Spain?</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>Best tip: Both Teams to Score @ 1.90 on Betsson. New customer? Claim your 100% welcome bonus today.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow" style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Claim Bonus &amp; Bet on Betsson
            </a>
            <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Bet on 1xBet
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px", opacity: 0.7 }}>18+ | Gamble responsibly | T&amp;Cs apply</p>
        </div>

        {/* Internal links */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--card-border)" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--muted)", marginBottom: "12px" }}>MORE WORLD CUP 2026 BETTING GUIDES</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/blog/usa-vs-belgium-world-cup-2026", label: "USA vs Belgium R16" },
              { href: "/blog/world-cup-2026-betting-tips", label: "Betting Tips" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/world-cup-2026-odds", label: "Tournament Winner Odds" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
