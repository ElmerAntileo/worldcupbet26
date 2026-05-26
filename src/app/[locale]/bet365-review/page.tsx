import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BET365_URL = "https://bet365.com";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
function reviewUrl(l: string) {
  return l === "en" ? `${base}/bet365-review` : `${base}/${l}/bet365-review`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Bet365 World Cup 2026 Review — Odds, Live Streaming & Bonus Guide | WorldCupBet26",
    description:
      "Full Bet365 review for World Cup 2026. Up to $500 welcome bonus, live streaming of all matches, 100+ markets per game. Is Bet365 the best bookmaker for the World Cup?",
    alternates: {
      canonical: reviewUrl(params.locale),
      languages: Object.fromEntries(locales.map((l) => [l, reviewUrl(l)])),
    },
  };
}

const pros = [
  "Live streaming of World Cup matches (where available by region)",
  "Up to $500 welcome bonus for new customers",
  "100+ betting markets per World Cup match",
  "Industry-leading in-play betting interface",
  "Cash Out available on all major World Cup markets",
  "Asian Handicap, correct score, first goalscorer and more",
  "Licensed in multiple jurisdictions — trusted since 2001",
  "Fast payouts — 24 hours to e-wallets",
];

const cons = [
  "Not available in all US states (check local regulations)",
  "Welcome bonus not available to players in all regions",
  "Odds can be slightly shorter than specialist competitors on some markets",
];

const markets = [
  { name: "Match Result (1X2)", rating: 5, note: "Best prices on all 104 World Cup matches" },
  { name: "Over/Under Goals", rating: 5, note: "0.5 through 5.5 available on all fixtures" },
  { name: "Both Teams to Score", rating: 5, note: "Competitive -105 to +100 across the board" },
  { name: "Asian Handicap", rating: 5, note: "Full Asian handicap range on all games" },
  { name: "First Goalscorer", rating: 4, note: "All players available, enhanced odds on key matches" },
  { name: "Tournament Winner", rating: 5, note: "Early odds on all 48 nations open now" },
  { name: "Golden Boot", rating: 4, note: "All frontrunners covered — Mbappé, Kane, Yamal" },
  { name: "Correct Score", rating: 4, note: "All scorelines available, boosted specials" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Organization",
    name: "Bet365",
    url: "https://bet365.com",
  },
  author: { "@type": "Organization", name: "WorldCupBet26" },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.9",
    bestRating: "5",
  },
  reviewBody: "Bet365 is the world's largest online sportsbook and our top-rated bookmaker for the 2026 FIFA World Cup. Outstanding live streaming, market depth and cash out features make it the benchmark for World Cup betting.",
};

export default function Bet365ReviewPage({ params }: Props) {
  const isDE = params.locale === "de";

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "52px" }}>⚽</div>
            <div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>#1 RATED</span>
                <span style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#ffd700", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>WORLD&apos;S LARGEST SPORTSBOOK</span>
              </div>
              <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, margin: 0 }}>Bet365 World Cup 2026 Review</h1>
              <div style={{ color: "var(--muted)", fontSize: "14px", marginTop: "4px" }}>Last updated: May 2026 · Verified by WorldCupBet26</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "28px" }}>
            {[
              { label: "Our Rating", val: "4.9 / 5" },
              { label: "Welcome Bonus", val: "Up to $500" },
              { label: "Min Deposit", val: "$10" },
              { label: "Live Streaming", val: "✅ Included" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 16px" }}>
                <div style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>{s.label}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)" }}>{s.val}</div>
              </div>
            ))}
          </div>
          <a href={BET365_URL} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "16px 40px", borderRadius: "8px", fontWeight: 800, fontSize: "16px", textDecoration: "none" }}>
            Visit Bet365 — Up to $500 Bonus
          </a>
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>18+ · New customers only · T&Cs apply · Bet responsibly</div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)", marginBottom: "16px" }}>✅ Pros</div>
            {pros.map((p) => (
              <div key={p} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>{p}
              </div>
            ))}
          </div>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#ef4444", marginBottom: "16px" }}>❌ Cons</div>
            {cons.map((c) => (
              <div key={c} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                <span style={{ color: "#ef4444", marginTop: "2px", flexShrink: 0 }}>✗</span>{c}
              </div>
            ))}
            {isDE && (
              <div style={{ marginTop: "16px", padding: "10px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "6px", fontSize: "12px", color: "#f87171" }}>
                ⚠️ Deutsche Nutzer: Bitte prüfe die Verfügbarkeit in deiner Region. Alternative:{" "}
                <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700 }} data-affiliate="1xBet">1xBet</a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY BET365 IS #1 */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>Why Bet365 is Our #1 Rated World Cup Bookmaker</h2>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
            Bet365 has been the world&apos;s largest online sportsbook since 2001 and for the 2026 World Cup they have invested heavily in their platform. The combination of live streaming, market depth and the industry&apos;s best in-play betting interface makes them the benchmark that all other bookmakers are measured against.
          </p>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong style={{ color: "var(--foreground)" }}>Live Streaming:</strong> Bet365 offers live streaming of World Cup matches directly within their app and desktop platform — provided you have a funded account or have placed a bet in the last 24 hours. This is one of the most valuable features for in-play bettors, eliminating the need to watch on a separate screen.
          </p>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
            <strong style={{ color: "var(--foreground)" }}>In-Play Cash Out:</strong> Bet365&apos;s Cash Out feature is available on virtually every World Cup market, allowing you to take a profit or cut a loss before the match concludes. Partial cash out is also available — take some profit while leaving the remainder running.
          </p>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            <strong style={{ color: "var(--foreground)" }}>Market Depth:</strong> With 100+ markets per match, Bet365 covers everything from standard 1X2 to first goalscorer, exact minutes of goals, number of corners and individual player shots. For the World Cup, they also offer unique tournament markets like group stage accumulators, correct bracket predictions and live bracket betting as the knockout rounds progress.
          </p>
        </div>
      </section>

      {/* MARKETS */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>World Cup 2026 Betting Markets at Bet365</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {markets.map((m) => (
              <div key={m.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{m.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: "12px", marginTop: "2px" }}>{m.note}</div>
                </div>
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ fontSize: "16px", color: i < m.rating ? "#ffd700" : "var(--card-border)" }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS GUIDE */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>How to Claim the Bet365 Welcome Offer</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "28px" }}>
            {[
              { step: "1", title: "Visit Bet365", desc: "Click our link to visit Bet365 and register a new account — takes under 2 minutes." },
              { step: "2", title: "Make a deposit", desc: "Deposit a minimum qualifying amount using any supported payment method (card, e-wallet, bank transfer)." },
              { step: "3", title: "Claim your bonus", desc: "Select the welcome offer during registration or in your account promotions section." },
              { step: "4", title: "Bet on the World Cup", desc: "Place qualifying bets on World Cup markets to meet the rollover requirements and release your bonus." },
            ].map((s) => (
              <div key={s.step} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <a href={BET365_URL} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "16px 40px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }}>
            Visit Bet365 Now →
          </a>
        </div>
      </section>

      {/* VERDICT */}
      <section style={{ padding: "0 20px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>Our Verdict: 4.9/5 ⭐</h2>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
            Bet365 is simply the best all-round bookmaker for the 2026 World Cup. Their live streaming, 100+ markets per match, industry-leading cash out and fast payouts make them the #1 choice for serious bettors. The welcome bonus gives new customers an excellent boost. If you can only use one bookmaker for World Cup 2026, make it Bet365.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={BET365_URL} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              Visit Bet365
            </a>
            <Link href="/matches" style={{ display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Compare All Odds
            </Link>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "16px" }}>18+ only. Please gamble responsibly. T&Cs apply. Bet365 is an independent bookmaker — note that some links on this page may be standard referral links.</p>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "14px" }}>Compare Other Top Bookmakers</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/betsson-review", label: "Betsson Review" },
              { href: "/1xbet-review", label: "1xBet Review" },
              { href: "/blog/best-world-cup-2026-betting-odds", label: "Best Odds Guide" },
              { href: "/matches", label: "Live Odds Comparison" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "8px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
