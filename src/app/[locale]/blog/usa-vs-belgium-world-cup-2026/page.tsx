import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

export const metadata: Metadata = {
  title: "USA vs Belgium World Cup 2026 Odds, Tips & Prediction | Round of 16",
  description: "USA face Belgium in the Round of 16 at Seattle Stadium on July 7. Expert tip: Belgium to Win @ 1.85. Full odds comparison across Betsson and 1xBet.",
  alternates: {
    canonical: "https://www.worldcupbet26.com/blog/usa-vs-belgium-world-cup-2026",
    languages: {
      en: "https://www.worldcupbet26.com/blog/usa-vs-belgium-world-cup-2026",
      es: "https://www.worldcupbet26.com/es/blog/usa-vs-belgium-world-cup-2026",
      pt: "https://www.worldcupbet26.com/pt/blog/usa-vs-belgium-world-cup-2026",
      "x-default": "https://www.worldcupbet26.com/blog/usa-vs-belgium-world-cup-2026",
    },
  },
  openGraph: {
    title: "USA vs Belgium World Cup 2026 Odds, Tips & Prediction",
    description: "USA host Belgium at Seattle Stadium in R16. Expert tip: Belgium to Win @ 1.85. Full odds from Betsson and 1xBet.",
    url: "https://www.worldcupbet26.com/blog/usa-vs-belgium-world-cup-2026",
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: "https://www.worldcupbet26.com/og-blog.jpg", width: 1200, height: 630, alt: "USA vs Belgium World Cup 2026 Odds & Tips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA vs Belgium World Cup 2026 Odds, Tips & Prediction",
    description: "USA vs Belgium Round of 16 at Seattle — 02:00 CEST. Expert tip: Belgium to Win @ 1.85.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "USA vs Belgium World Cup 2026 Odds, Tips & Prediction",
      "description": "USA face Belgium in the Round of 16 on July 7, 2026 at Seattle Stadium. Full odds comparison and expert betting tip.",
      "datePublished": "2026-07-06",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": "https://www.worldcupbet26.com" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the odds for USA vs Belgium World Cup 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Belgium are favourites at 1.85 with Betsson. The draw is 3.50. USA to win on home soil is 4.20." },
        },
        {
          "@type": "Question",
          "name": "When is USA vs Belgium at the 2026 World Cup?",
          "acceptedAnswer": { "@type": "Answer", "text": "USA vs Belgium is on July 7, 2026 in the Round of 16. Kick-off is at 02:00 CEST at Seattle Stadium, Seattle." },
        },
        {
          "@type": "Question",
          "name": "What is the best bet for USA vs Belgium 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Belgium to Win @ 1.85 with Betsson. The Red Devils have too much quality for this USA side despite the home advantage." },
        },
      ],
    },
  ],
};

export default function UsaBelgiumPage() {
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
          <span>USA vs Belgium World Cup 2026</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>ROUND OF 16</span>
          <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>HOME NATION</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>TUE 7 JUL 02:00 CEST</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          USA vs Belgium World Cup 2026 — Odds, Tips & Prediction
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          The host nation faces Belgium&apos;s Red Devils in the Round of 16 at Seattle Stadium. The USA have the crowd — Belgium have the quality. Lukaku, De Bruyne and company arrive as clear favourites, but home soil upsets are what World Cups are made of. Here are the best odds and our expert tip.
        </p>

        {/* Match info card */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>&#x1F1FA;&#x1F1F8;</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>USA</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Host Nation</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)", letterSpacing: "-1px" }}>VS</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Jul 7 · 02:00 CEST</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>&#x1F1E7;&#x1F1EA;</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>Belgium</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Favourites</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" }}>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>4.20</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>USA Win</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>3.50</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Draw</div>
            </div>
            <div style={{ background: "rgba(0,208,132,0.08)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)" }}>1.85</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Belgium Win</div>
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
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>EXPERT TIP — Belgium to Win @ 1.85</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Belgium have looked clinical throughout the tournament. With De Bruyne controlling midfield and Lukaku leading the line, the Red Devils have too much quality for a USA side that has relied heavily on home support. Belgium&apos;s experience in knockout football is a major edge.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Belgium to Win at 1.85 with Betsson is our top pick. Even if the USA push them, Belgium&apos;s quality should see them through in extra time if needed.
          </p>
          <div style={{ marginTop: "14px" }}>
            <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet Belgium @ 1.85 on Betsson
            </a>
          </div>
        </div>

        {/* Odds comparison */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>USA vs Belgium Odds Comparison</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Bookmaker</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>USA Win</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Draw</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Belgium Win</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Over 2.5</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Betsson", usa: "4.20", draw: "3.50", bel: "1.85", o25: "2.10", best: true, url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
                { name: "1xBet", usa: "4.30", draw: "3.45", bel: "1.83", o25: "2.08", best: false, url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
                { name: "Bet365", usa: "4.00", draw: "3.50", bel: "1.87", o25: "2.05", best: false, url: "#" },
                { name: "Betway", usa: "4.10", draw: "3.40", bel: "1.85", o25: "2.00", best: false, url: "#" },
              ].map((bk) => (
                <tr key={bk.name} style={{ borderBottom: "1px solid var(--card-border)", background: bk.best ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "12px" }}>
                    <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: bk.best ? "var(--accent)" : "var(--foreground)", fontWeight: bk.best ? 700 : 500, textDecoration: "none" }}>
                      {bk.name} {bk.best && "★"}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.usa}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.draw}</td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: bk.best ? 700 : 400, color: bk.best ? "var(--accent)" : "inherit" }}>{bk.bel}</td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: bk.best ? 700 : 400, color: bk.best ? "var(--gold)" : "inherit" }}>{bk.o25}</td>
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
              <span style={{ fontSize: "28px" }}>&#x1F1FA;&#x1F1F8;</span>
              <h3 style={{ fontSize: "15px", fontWeight: 800, margin: 0 }}>USA</h3>
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 2 }}>
              <li>Massive home crowd advantage in Seattle</li>
              <li>Pulisic leads an improving attack</li>
              <li>Strong team spirit and tournament momentum</li>
              <li>First ever World Cup R16 on home soil</li>
              <li>WC winner odds: <strong style={{ color: "var(--accent)" }}>35.00</strong></li>
            </ul>
          </div>
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "28px" }}>&#x1F1E7;&#x1F1EA;</span>
              <h3 style={{ fontSize: "15px", fontWeight: 800, margin: 0 }}>Belgium</h3>
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "13px", color: "var(--muted)", lineHeight: 2 }}>
              <li>De Bruyne — world-class playmaker</li>
              <li>Lukaku — clinical in front of goal</li>
              <li>Experienced in big knockout games</li>
              <li>New generation stars alongside veterans</li>
              <li>WC winner odds: <strong style={{ color: "var(--accent)" }}>14.00</strong></li>
            </ul>
          </div>
        </div>

        {/* Key facts */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Key Match Facts</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            { label: "Date", value: "July 7, 2026" },
            { label: "Kick-off", value: "02:00 CEST" },
            { label: "Venue", value: "Seattle Stadium" },
            { label: "Round", value: "Round of 16" },
            { label: "USA WC odds", value: "35.00" },
            { label: "Belgium WC odds", value: "14.00" },
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
            { q: "What are the odds for USA vs Belgium World Cup 2026?", a: "Belgium are favourites at 1.85 (Betsson). The USA are 4.20 to win. The draw is 3.50." },
            { q: "When is USA vs Belgium at the 2026 World Cup?", a: "USA vs Belgium is on July 7, 2026 in the Round of 16. Kick-off is at 02:00 CEST at Seattle Stadium, Seattle." },
            { q: "Can the USA beat Belgium at the 2026 World Cup?", a: "At 4.20, the USA are underdogs, but home advantage in Seattle is significant. Pulisic&apos;s form and the crowd make an upset possible, though Belgium&apos;s quality makes them clear favourites." },
            { q: "What is the best bet for USA vs Belgium 2026?", a: "Belgium to Win @ 1.85 on Betsson. De Bruyne and Lukaku provide too much quality for the USA to contain over 90 minutes." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Ready to Bet on USA vs Belgium?</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>Best tip: Belgium to Win @ 1.85 on Betsson. New customer? Claim your 100% welcome bonus today.</p>
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
              { href: "/blog/portugal-vs-spain-world-cup-2026", label: "Portugal vs Spain R16" },
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
