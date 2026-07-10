import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Erling Haaland World Cup 2026: 7 Goals, Norway in QF — Stats & Odds",
  description: "Erling Haaland leads the World Cup 2026 Golden Boot race with 7 goals. Norway face England tonight in the quarter-final. Full stats, betting odds and expert analysis.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/erling-haaland-world-cup-2026" },
  openGraph: {
    title: "Erling Haaland World Cup 2026 — 7 Goals, Norway's Miracle Run",
    description: "Haaland leads the Golden Boot race with 7 goals. Norway face England tonight. Can he fire them to the semi-finals?",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function ErlingHaaland() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Player Feature</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Plays Tonight</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        🇳🇴 Erling Haaland: 7 Goals, One Dream — Norway&apos;s World Cup Miracle
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>10 July 2026 · Norway vs England tonight · Miami · 21:00 UTC</p>

      {/* Stats */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "0.85rem", fontWeight: 800, color: accent, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>World Cup 2026 Stats</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", textAlign: "center" }}>
          {[
            { label: "Goals", value: "7" },
            { label: "Hat-tricks", value: "1" },
            { label: "Games", value: "5" },
            { label: "Shots on target", value: "14" },
          ].map(s => (
            <div key={s.label} style={{ padding: "12px", background: "rgba(0,208,132,0.05)", borderRadius: "8px", border: "1px solid rgba(0,208,132,0.12)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: accent, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: muted, fontSize: "0.75rem", fontWeight: 600, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Tonight&apos;s Best Bets</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { bet: "Haaland Anytime Scorer vs England", odds: "1.65" },
            { bet: "Haaland Golden Boot (to finish top scorer)", odds: "2.20" },
            { bet: "Norway to Win (reach semi-final)", odds: "3.60" },
          ].map(b => (
            <div key={b.bet} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.bet}</div>
              <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "12px" }}>@ {b.odds}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Norway Were Not Supposed to Be Here</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Norway qualified for the World Cup on goal difference. They were ranked 23rd in the FIFA world rankings entering the tournament. They had never won a knockout game at a major tournament. And yet here they are — in the quarter-finals, with Erling Haaland playing the football of his life.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        The hat-trick against Switzerland in the R16 was the moment the world truly took notice. Three goals in 28 second-half minutes. The first was a header so precise it looked like a training exercise. The second a low driven finish from 20 yards. The third — a penalty — was struck with the casual authority of a man who simply cannot miss right now.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Why He&apos;s Different at This World Cup</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        At Manchester City, Haaland operates in a system built for him — diagonal runs behind high lines, pulls into the box from wide positions, first-time finishes from Rodri or De Bruyne crosses. Norway play differently. They are compact, direct and rely on Haaland to hold the ball, win aerial duels and create as well as finish.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        That he has been this effective in a more demanding system speaks to his development as a complete centre-forward. His hold-up play has improved dramatically. His link work in the build-up against Colombia and Switzerland was that of a player who has moved beyond pure penalty-box poaching.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Tonight: Haaland vs Kane</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        The Golden Boot duel between Haaland (7 goals) and Kane (5 goals) is also a quarter-final tonight. Two of the best centre-forwards in the world. One match. Winner goes to the semi-finals and takes a giant step towards the top scorer award. Haaland needs Norway to win to stay in the Golden Boot race. Kane needs England to win to keep up. This is the subplot within a subplot within the biggest sporting event on earth.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Haaland &amp; Norway vs England</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/norway-vs-england-world-cup-2026" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Norway vs England — Full Preview &amp; Odds</Link>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race — Full Standings</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
