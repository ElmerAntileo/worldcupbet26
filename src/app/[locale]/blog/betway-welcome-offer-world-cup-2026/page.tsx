import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Betway Welcome Offer 2026: Bet £10 Get £60 in Free Bets — World Cup",
  description: "Claim the Betway World Cup welcome offer: Bet £10 Get £60 in Free Bets. Step-by-step guide, T&Cs, and expert tips for the 2026 FIFA World Cup quarter-finals.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/betway-welcome-offer-world-cup-2026" },
  openGraph: {
    title: "Betway Welcome Offer 2026 — Bet £10 Get £60 in Free Bets",
    description: "New Betway customers: Bet £10 on any World Cup match and get £60 in Free Bets. Claim in 3 easy steps. 18+ T&Cs apply.",
    url: "https://www.worldcupbet26.com/blog/betway-welcome-offer-world-cup-2026",
    siteName: "WorldCupBet26",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Betway Welcome Offer 2026 — Bet £10 Get £60",
    description: "Claim £60 in Free Bets on the World Cup quarter-finals with Betway. New customers only.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";
const cardStyle = { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" };
const btnPrimary = { display: "inline-block", background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "1rem" };

export default function BetwayWelcomeOffer() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Betway Bonus</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 New Customers</span>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>World Cup 2026</span>
      </div>

      <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.3rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        Betway Welcome Offer 2026: Bet £10, Get £60 in Free Bets
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>
        Updated July 2026 · New customers only · 18+ · T&Cs apply · Gamble responsibly
      </p>

      {/* Hero CTA */}
      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.10),rgba(0,208,132,0.04))", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "2rem", marginBottom: "2rem", textAlign: "center" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Exclusive Offer — World Cup 2026</div>
        <div style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "6px" }}>Bet £10 <span style={{ color: accent }}>Get £60</span></div>
        <div style={{ color: muted, fontSize: "0.9rem", marginBottom: "1.25rem" }}>in Free Bets on any World Cup quarter-final</div>
        <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={btnPrimary}>
          Claim £60 at Betway →
        </a>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ · New customers only · Min deposit £10 · T&Cs apply</div>
      </div>

      {/* How to claim */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>How to Claim the Betway Welcome Offer</h2>
      <div style={cardStyle}>
        {[
          { step: "1", title: "Register", desc: "Click the button above and sign up for a new Betway account. Takes under 2 minutes." },
          { step: "2", title: "Deposit £10", desc: "Make your first deposit of at least £10 using any payment method (card, PayPal, bank transfer)." },
          { step: "3", title: "Place your first bet", desc: "Bet £10 on any World Cup quarter-final or semi-final at odds of evens (2.00) or greater." },
          { step: "4", title: "Get £60 in Free Bets", desc: "Once your qualifying bet settles, Betway credits £60 in Free Bets to your account within 24 hours." },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: "flex", gap: "16px", marginBottom: "1.25rem", alignItems: "flex-start" }}>
            <div style={{ minWidth: "36px", height: "36px", borderRadius: "50%", background: "rgba(0,208,132,0.15)", border: "2px solid rgba(0,208,132,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: accent, fontSize: "0.9rem" }}>{step}</div>
            <div>
              <div style={{ fontWeight: 800, marginBottom: "3px" }}>{title}</div>
              <div style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={btnPrimary}>
            Get Started at Betway →
          </a>
        </div>
      </div>

      {/* Why Betway */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Why Use Betway for the World Cup?</h2>
      <div style={{ ...cardStyle, padding: "1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1rem" }}>
          {[
            { icon: "⚽", title: "World Cup Specials", desc: "Dedicated quarter-final markets, BTTS, scorer bets, and tournament winner all in one place." },
            { icon: "📱", title: "Best-in-class App", desc: "Betway's mobile app is consistently rated the top sports betting app in the UK App Store." },
            { icon: "💸", title: "Cash Out", desc: "Full and partial cash out available on all World Cup matches — take profit early or cut losses." },
            { icon: "🔴", title: "Live Streaming", desc: "Watch selected World Cup matches live in the Betway app with an active account balance." },
            { icon: "🎯", title: "Acca Boost", desc: "Accumulator boosts on multi-match World Cup bets — stack your quarter-finals for extra value." },
            { icon: "🛡️", title: "Responsible Gambling", desc: "Industry-leading tools including deposit limits, cool-off periods and reality checks." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ padding: "0.75rem", background: "rgba(0,208,132,0.04)", borderRadius: "8px", border: "1px solid rgba(0,208,132,0.1)" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "6px" }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>{title}</div>
              <div style={{ color: muted, fontSize: "0.8rem", lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Current QF odds */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Betway World Cup Quarter-Final Odds</h2>
      <div style={cardStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "8px", fontSize: "0.85rem" }}>
          {["Match", "Home", "Draw", "Away"].map(h => (
            <div key={h} style={{ fontWeight: 700, color: muted, paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.07)", textAlign: h === "Match" ? "left" : "center" }}>{h}</div>
          ))}
          {[
            { match: "🇫🇷 France vs Morocco 🇲🇦", home: "1.44", draw: "4.60", away: "6.75", date: "Jul 9" },
            { match: "🇪🇸 Spain vs Belgium 🇧🇪", home: "1.88", draw: "3.55", away: "4.10", date: "Jul 10" },
            { match: "🇳🇴 Norway vs England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", home: "3.70", draw: "3.35", away: "1.95", date: "Jul 11" },
          ].map(row => (
            <>
              <div key={row.match} style={{ padding: "8px 0", fontWeight: 600, fontSize: "0.8rem" }}>{row.match} <span style={{ color: muted, fontWeight: 400 }}>· {row.date}</span></div>
              <div key={row.match+"h"} style={{ textAlign: "center", fontWeight: 800, padding: "8px 0", color: accent }}>{row.home}</div>
              <div key={row.match+"d"} style={{ textAlign: "center", fontWeight: 700, padding: "8px 0" }}>{row.draw}</div>
              <div key={row.match+"a"} style={{ textAlign: "center", fontWeight: 700, padding: "8px 0" }}>{row.away}</div>
            </>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={btnPrimary}>
            Bet on the Quarter-Finals at Betway →
          </a>
        </div>
        <div style={{ fontSize: "11px", color: muted, textAlign: "center", marginTop: "8px" }}>Odds correct at time of publication. Subject to change.</div>
      </div>

      {/* Expert tips */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Best Bets for the World Cup QFs</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { match: "France vs Morocco", tip: "France Win & Under 2.5 Goals", odds: "2.20", reasoning: "France are the class act of the tournament. Morocco will make it tight but France's defensive record is exceptional — only 2 goals conceded in 5 games." },
          { match: "Norway vs England", tip: "England to Win", odds: "1.95", reasoning: "England have the experience to handle a Haaland-inspired Norway. Kane needs goals for the Golden Boot — he'll deliver here." },
          { match: "Spain vs Belgium", tip: "Spain to Win", odds: "1.88", reasoning: "Spain's xG numbers are the best in the tournament. Yamal is unstoppable. Belgium have the firepower to scare anyone, but Spain are a level above." },
        ].map(({ match, tip, odds, reasoning }) => (
          <div key={match} style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.07),rgba(0,208,132,0.02))", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "12px", padding: "1.1rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{match}</div>
            <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "4px" }}>{tip} @ <span style={{ color: accent }}>{odds}</span></div>
            <p style={{ color: muted, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>{reasoning}</p>
          </div>
        ))}
      </div>

      {/* T&Cs */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem" }}>Betway Welcome Offer — Key Terms</h2>
      <div style={{ ...cardStyle, background: "rgba(0,0,0,0.2)" }}>
        <ul style={{ color: muted, fontSize: "0.825rem", lineHeight: 2, margin: 0, paddingLeft: "1.2rem" }}>
          <li>New UK customers only (18+)</li>
          <li>Min deposit: £10 · Min bet: £10 at odds of 1/1 (2.00) or greater</li>
          <li>£60 in Free Bets credited within 24 hours of qualifying bet settling</li>
          <li>Free Bets valid for 7 days · Free Bet stakes are not returned with winnings</li>
          <li>One offer per household / IP address</li>
          <li>Full terms at <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: accent }}>betway.com</a></li>
        </ul>
      </div>

      {/* Bottom CTA */}
      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "14px", padding: "2rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "8px" }}>Ready to claim your <span style={{ color: accent }}>£60 in Free Bets?</span></div>
        <p style={{ color: muted, fontSize: "0.875rem", marginBottom: "1.25rem" }}>Join Betway now and bet on France vs Morocco, Spain vs Belgium and Norway vs England with bonus money.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={btnPrimary}>
            Claim £60 Free Bets at Betway
          </a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ · New customers only · Gamble Responsibly · <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: muted }}>BeGambleAware.org</a></div>
      </div>

      {/* Related articles */}
      <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.75rem" }}>Quarter-Final Betting Guides</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { href: "/blog/france-vs-morocco-world-cup-2026", label: "France vs Morocco — Odds & Prediction" },
          { href: "/blog/norway-vs-england-world-cup-2026", label: "Norway vs England — Odds & Prediction" },
          { href: "/blog/spain-vs-belgium-world-cup-2026", label: "Spain vs Belgium — Odds & Prediction" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>→ {label}</Link>
        ))}
      </div>
    </div>
  );
}
