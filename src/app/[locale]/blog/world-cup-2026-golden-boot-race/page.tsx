import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "World Cup 2026 Golden Boot Race: Haaland vs Kane vs Yamal vs Messi — Updated Odds",
  description: "Who will win the World Cup 2026 Golden Boot? Haaland leads with 7 goals, Kane on 5, Yamal on 4. Full top scorer odds, stats and expert analysis updated after the quarter-finals.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/world-cup-2026-golden-boot-race" },
  openGraph: {
    title: "World Cup 2026 Golden Boot Race — Haaland vs Kane vs Yamal vs Messi",
    description: "Haaland leads with 7 goals in 5 games. Kane close behind at 5. Who wins the Golden Boot? Full odds and analysis.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function GoldenBootRace() {
  const players = [
    { flag: "🇳🇴", name: "Erling Haaland", team: "Norway", goals: 7, assists: 1, odds: "2.20", status: "QF tonight" },
    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "Harry Kane", team: "England", goals: 5, assists: 2, odds: "3.50", status: "QF tonight" },
    { flag: "🇪🇸", name: "Lamine Yamal", team: "Spain", goals: 4, assists: 5, odds: "4.50", status: "Semi-finalist" },
    { flag: "🇫🇷", name: "Kylian Mbappé", team: "France", goals: 5, assists: 3, odds: "5.00", status: "Semi-finalist" },
    { flag: "🇦🇷", name: "Lionel Messi", team: "Argentina", goals: 4, assists: 4, odds: "7.00", status: "QF tomorrow" },
    { flag: "🇨🇭", name: "Breel Embolo", team: "Switzerland", goals: 4, assists: 1, odds: "12.00", status: "QF tomorrow" },
  ];

  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Golden Boot</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Updated QF</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        World Cup 2026 Golden Boot Race: Who Will Top Score?
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>Updated after the quarter-finals · 10 July 2026</p>

      {/* Leaderboard */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: accent, marginBottom: "1rem" }}>Top Scorer Standings &amp; Odds</h2>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto auto", gap: "6px 16px", fontSize: "0.85rem", alignItems: "center" }}>
          {["", "Player", "Goals", "Odds", "Status"].map(h => (
            <div key={h} style={{ fontWeight: 700, color: muted, paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{h}</div>
          ))}
          {players.map((p, i) => (
            <>
              <div key={p.name+"f"} style={{ fontSize: "1.4rem", padding: "8px 0" }}>{p.flag}</div>
              <div key={p.name+"n"} style={{ padding: "8px 0" }}>
                <div style={{ fontWeight: 700 }}>{p.name}</div>
                <div style={{ color: muted, fontSize: "0.78rem" }}>{p.team}</div>
              </div>
              <div key={p.name+"g"} style={{ fontWeight: 900, fontSize: "1.1rem", color: i === 0 ? accent : "var(--foreground)", textAlign: "center" }}>{p.goals}</div>
              <div key={p.name+"o"} style={{ fontWeight: 700, color: accent, textAlign: "center" }}>{p.odds}</div>
              <div key={p.name+"s"} style={{ fontSize: "0.75rem", color: muted, whiteSpace: "nowrap" }}>{p.status}</div>
            </>
          ))}
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "12px" }}>Odds at Betsson. Goals include QF results. Assists shown in stats.</div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Best Bet</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>Haaland to Win Golden Boot @ <span style={{ color: accent }}>2.20</span></div>
        <p style={{ color: muted, fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          With 7 goals in 5 games — including a hat-trick in the R16 — Haaland leads the race by two goals. Norway face England tonight and need a win to stay in the tournament. If Norway go through, Haaland has two more games to extend his lead. At 2.20, he&apos;s the value pick.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>The Race Breakdown</h2>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Erling Haaland — The Favourite</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Seven goals. Five games. A hat-trick against Switzerland in the R16 that had the watching world holding their breath. Haaland has turned this World Cup into a one-man highlight reel. He&apos;s two goals clear and plays tonight in Miami. Norway need the win, and Haaland needs the goals — their incentives are perfectly aligned.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Harry Kane — The Chaser</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Five goals for the England captain, who has never won a major trophy in his career and knows this might be his last realistic shot at a World Cup medal. Kane is clinical in front of goal and guaranteed to get chances against Norway tonight. If England win, expect Kane to arrive in the semi-finals hungry.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem" }}>Yamal &amp; Mbappé — The Wildcards</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        Both are already through to the semi-finals with two games remaining. Yamal has 4 goals and 5 assists — an extraordinary return for an 18-year-old. Mbappé has 5 but has struggled to score in big knockout games historically. The semi-final and final give them a genuine route to 7 or 8 goals.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on the Golden Boot</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
