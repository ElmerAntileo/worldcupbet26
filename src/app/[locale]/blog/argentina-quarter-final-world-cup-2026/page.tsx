import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import OnexBetBanner from "@/components/OnexBetBanner";

const base = "https://www.worldcupbet26.com";

export const metadata: Metadata = {
  title: "Argentina Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
  description: "Argentina's World Cup 2026 quarter-final preview. Messi and the reigning champions face a QF match on July 8. Best odds at Betsson and 1xBet, expert tips and match prediction.",
  alternates: {
    canonical: `${base}/blog/argentina-quarter-final-world-cup-2026`,
    languages: {
      en: `${base}/blog/argentina-quarter-final-world-cup-2026`,
      es: `${base}/es/blog/argentina-quarter-final-world-cup-2026`,
      pt: `${base}/pt/blog/argentina-quarter-final-world-cup-2026`,
      "x-default": `${base}/blog/argentina-quarter-final-world-cup-2026`,
    },
  },
  openGraph: {
    title: "Argentina Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
    description: "Can Messi lead Argentina to the semi-finals? Expert betting tips and best odds for Argentina's World Cup 2026 quarter-final.",
    url: `${base}/blog/argentina-quarter-final-world-cup-2026`,
    siteName: "WorldCupBet26",
    type: "article",
    images: [{ url: `${base}/og-blog.jpg`, width: 1200, height: 630, alt: "Argentina Quarter-Final World Cup 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina Quarter-Final World Cup 2026 Odds & Tips",
    description: "Argentina QF preview. Can Messi go all the way? Best odds and expert betting tips.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Argentina Quarter-Final World Cup 2026 — Odds, Tips & Prediction",
      "description": "Full preview of Argentina's quarter-final at the 2026 World Cup on July 8. Odds comparison and expert betting tips.",
      "datePublished": "2026-07-06",
      "author": { "@type": "Organization", "name": "WorldCupBet26" },
      "publisher": { "@type": "Organization", "name": "WorldCupBet26", "url": base },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is Argentina's quarter-final at the 2026 World Cup?",
          "acceptedAnswer": { "@type": "Answer", "text": "Argentina play their quarter-final on Friday July 8, 2026. The match is scheduled for 22:00 CEST." },
        },
        {
          "@type": "Question",
          "name": "What are the odds on Argentina winning the World Cup 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Argentina are priced at 8.00 to win the World Cup 2026 outright at the quarter-final stage. They are the third favourites behind France (6.00) and Brazil (6.50)." },
        },
        {
          "@type": "Question",
          "name": "What is the best bet for Argentina's World Cup quarter-final?",
          "acceptedAnswer": { "@type": "Answer", "text": "Argentina to advance to the semi-finals is the standout value bet. The reigning world champions are strong favourites for any QF matchup, priced around 1.60–1.75 to qualify." },
        },
      ],
    },
  ],
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export default function ArgentinaQFPage() {
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
          <span>Argentina Quarter-Final World Cup 2026</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>QUARTER-FINAL</span>
          <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>WORLD CHAMPIONS</span>
          <span style={{ background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", color: "var(--gold)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>FRIDAY JUL 8</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
          Argentina Quarter-Final World Cup 2026 — Odds, Tips & Prediction
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
          The reigning world champions Argentina march into the quarter-finals of the 2026 World Cup. With Lionel Messi playing what many believe is his final World Cup campaign, Argentina are battle-hardened, motivated and backed by one of the deepest squads in the tournament. Here&apos;s who they could face, the odds, and why they&apos;re among the best bets left in the competition.
        </p>

        {/* Hero match card */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>🇦🇷</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>Argentina</div>
              <div style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 700 }}>REIGNING CHAMPIONS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)", letterSpacing: "-1px" }}>VS</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>Jul 8 · 22:00 CEST</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "52px", marginBottom: "6px" }}>⚽</div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>QF Opponent</div>
              <div style={{ color: "var(--muted)", fontSize: "12px" }}>Confirmed after Jul 7</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" }}>
            <div style={{ background: "rgba(0,208,132,0.08)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--accent)" }}>~1.65</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Argentina to Advance</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>8.00</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Win Trophy (outright)</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900 }}>2.30</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Reach Final</div>
            </div>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center", fontSize: "11px", color: "var(--muted)" }}>
            Best odds via Betsson &amp; 1xBet — <Link href="/world-cup-2026-odds" style={{ color: "var(--accent)", textDecoration: "none" }}>compare all bookmakers</Link>
          </div>
        </div>

        {/* Expert tip */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)" }}>EXPERT TIP — Argentina to Qualify for the Semi-Finals @ 1.65</span>
          </div>
          <p style={{ color: "var(--foreground)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Argentina have not lost a competitive match since the 2022 World Cup final. In knockout football, their experience is unparalleled — Messi, Álvarez and Di María have all delivered in pressure situations. The quarter-final stage is exactly where Argentina tend to raise their level. Backing them to qualify is the standout value play this round.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Argentina have won 8 of their last 9 knockout matches in major tournaments. The exception was the 2022 final — which they also won on penalties. This side knows how to win when it counts.
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Bet Argentina to Advance on 1xBet →
            </a>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)", padding: "10px 20px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
              Betsson — 100% Welcome Bonus
            </a>
          </div>
        </div>

        {/* Argentina squad overview */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Argentina at the 2026 World Cup — How They Got Here</h2>
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ fontSize: "36px" }}>🇦🇷</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px" }}>Argentina</div>
              <div style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 700 }}>Reigning World Champions | WC winner odds: 8.00</div>
            </div>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "14px", color: "var(--muted)", lineHeight: 2.1 }}>
            <li><strong style={{ color: "var(--foreground)" }}>Captain:</strong> Lionel Messi — potentially his final World Cup; playing with desperate hunger</li>
            <li><strong style={{ color: "var(--foreground)" }}>Key attacker:</strong> Julián Álvarez — pace, pressing and poaching in the box</li>
            <li><strong style={{ color: "var(--foreground)" }}>Midfield engine:</strong> De Paul and Mac Allister — control the tempo, press relentlessly</li>
            <li><strong style={{ color: "var(--foreground)" }}>Defence:</strong> Romero and Otamendi — experienced, physical, difficult to beat through the air</li>
            <li><strong style={{ color: "var(--foreground)" }}>Tournament form:</strong> Won every match since the group stage. Clinical in front of goal.</li>
            <li><strong style={{ color: "var(--foreground)" }}>Weakness:</strong> Can be vulnerable on the counter if drawn into attacking too early</li>
          </ul>
        </div>

        <OnexBetBanner />

        {/* Likely opponents */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Who Could Argentina Face in the Quarter-Final?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            {
              flag: "🇵🇹", name: "Portugal", prob: "High", odds: "2.10",
              body: "If Portugal advance past Spain, they become the most likely QF opponent for Argentina. A Messi vs Ronaldo World Cup quarter-final would be the most watched football match in history. Portugal have firepower but Argentina have the edge in balance."
            },
            {
              flag: "🇪🇸", name: "Spain", prob: "High", odds: "2.00",
              body: "Spain's possession-based game is the system most capable of neutralising Argentina's press. A tight tactical battle — Argentina's directness vs Spain's control. Argentina's knockout experience gives them the edge in a potential penalty shootout."
            },
            {
              flag: "🇨🇭", name: "Switzerland or Colombia", prob: "Possible", odds: "1.50–1.60",
              body: "If Switzerland or Colombia advance from their R16 match, they'd face a much longer shot against Argentina. Either team would struggle to contain Messi over 90 minutes. Argentina should win comfortably — but the handicap market offers best value here."
            },
          ].map(({ flag, name, prob, odds, body }) => (
            <div key={name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "28px" }}>{flag}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "15px" }}>{name}</div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>Probability: {prob}</div>
                  </div>
                </div>
                <div style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "8px", padding: "6px 14px" }}>
                  <div style={{ fontSize: "11px", color: "var(--muted)" }}>Argentina to advance</div>
                  <div style={{ fontSize: "18px", fontWeight: 900, color: "var(--accent)" }}>{odds}</div>
                </div>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "13px", lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Key facts */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Argentina Quarter-Final — Key Numbers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "2.5rem" }}>
          {[
            { label: "QF Date", value: "July 8, 2026" },
            { label: "Kick-off", value: "22:00 CEST" },
            { label: "WC Winner Odds", value: "8.00" },
            { label: "Reach Final Odds", value: "2.30" },
            { label: "QF Advance", value: "~1.65" },
            { label: "Our tip", value: "Argentina to advance" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontWeight: 800, fontSize: "15px" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Odds comparison */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Argentina QF Odds Comparison</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--card-border)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Bookmaker</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Argentina to Advance</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Win Trophy</th>
                <th style={{ textAlign: "center", padding: "10px 12px", color: "var(--muted)", fontWeight: 600 }}>Reach Final</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "1xBet ★", advance: "1.68", trophy: "8.20", final: "2.35", best: true, url: ONEXBET_URL },
                { name: "Betsson", advance: "1.65", trophy: "8.00", final: "2.30", best: false, url: BETSSON_URL },
                { name: "Bet365", advance: "1.62", trophy: "7.50", final: "2.20", best: false, url: "#" },
                { name: "Betway", advance: "1.60", trophy: "7.00", final: "2.10", best: false, url: "#" },
              ].map((bk) => (
                <tr key={bk.name} style={{ borderBottom: "1px solid var(--card-border)", background: bk.best ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "12px" }}>
                    <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: bk.best ? "var(--accent)" : "var(--foreground)", fontWeight: bk.best ? 700 : 500, textDecoration: "none" }}>
                      {bk.name}
                    </a>
                  </td>
                  <td style={{ textAlign: "center", padding: "12px", fontWeight: 800, color: bk.best ? "var(--accent)" : "var(--foreground)", fontSize: bk.best ? "16px" : "14px" }}>{bk.advance}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.trophy}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{bk.final}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>1xBet offers the best odds on Argentina to advance. Odds fluctuate — check the links for current prices.</div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2.5rem" }}>
          {[
            { q: "When is Argentina's quarter-final at the 2026 World Cup?", a: "Argentina's quarter-final is on Friday July 8, 2026. The match kicks off at 22:00 CEST — subject to confirmation once the full bracket is set after the July 7 Round of 16 matches." },
            { q: "What are the odds on Argentina winning the World Cup 2026?", a: "Argentina are 8.00 to win the 2026 World Cup outright — the third-shortest price behind France (6.00) and Brazil (6.50). These odds are available at Betsson and 1xBet." },
            { q: "Who will Argentina play in the World Cup 2026 quarter-final?", a: "Argentina's quarter-final opponent is confirmed after the July 7 Round of 16. Based on the bracket, the most likely opponents are the winner of Portugal vs Spain, or the Switzerland vs Colombia winner." },
            { q: "Is Argentina a good bet for the 2026 World Cup quarter-final?", a: "Yes. Argentina are strong favourites to advance from any quarter-final matchup at approximately 1.65. As reigning world champions with Messi in inspired form, they offer excellent value to qualify for the semi-finals." },
            { q: "Where can I bet on Argentina's quarter-final?", a: "1xBet offers the best Argentina odds globally and covers most countries including USA, Nigeria and Ghana. Betsson has the best welcome bonus (100% matched) for eligible countries in Europe." },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.1), rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Back Argentina to Reach the Semi-Finals</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>Best odds: ~1.68 on 1xBet. New customers can claim a 100% deposit welcome bonus on both bookmakers.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "var(--accent)", color: "#040c18", padding: "12px 24px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Best odds: Bet Argentina on 1xBet
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
              { href: "/blog/argentina-vs-egypt-world-cup-2026", label: "Argentina vs Egypt R16" },
              { href: "/blog/portugal-vs-spain-world-cup-2026", label: "Portugal vs Spain R16" },
              { href: "/blog/switzerland-vs-colombia-world-cup-2026", label: "Switzerland vs Colombia R16" },
              { href: "/world-cup-2026-odds", label: "Tournament Winner Odds" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/blog/top-favorites-to-win", label: "Tournament Favourites" },
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
