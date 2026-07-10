import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lamine Yamal World Cup 2026: 18-Year-Old Star — Goals, Odds & Stats",
  description: "Lamine Yamal is the story of World Cup 2026. The 18-year-old Spain winger has 4 goals and 5 assists. Can he win Player of the Tournament? Full stats, odds and betting tips.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/lamine-yamal-world-cup-2026" },
  openGraph: {
    title: "Lamine Yamal World Cup 2026 — The 18-Year-Old Rewriting History",
    description: "4 goals, 5 assists, Spain in the semi-finals. Lamine Yamal is the tournament's defining player. Full stats and odds.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function LamineYamal() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Player Feature</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Semi-Finalist</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        🇪🇸 Lamine Yamal: The 18-Year-Old Rewriting World Cup History
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>10 July 2026 · Spain through to the semi-finals</p>

      {/* Stat Box */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "0.85rem", fontWeight: 800, color: accent, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>World Cup 2026 Stats</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", textAlign: "center" }}>
          {[
            { label: "Goals", value: "4" },
            { label: "Assists", value: "5" },
            { label: "Games", value: "5" },
            { label: "Age", value: "18" },
          ].map(s => (
            <div key={s.label} style={{ padding: "12px", background: "rgba(0,208,132,0.05)", borderRadius: "8px", border: "1px solid rgba(0,208,132,0.12)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: accent, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: muted, fontSize: "0.75rem", fontWeight: 600, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Odds */}
      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Best Bets</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { bet: "Yamal — Player of the Tournament", odds: "3.50" },
            { bet: "Yamal — Top Scorer (Golden Boot)", odds: "4.50" },
            { bet: "Yamal Anytime Scorer (semi-final)", odds: "2.10" },
          ].map(b => (
            <div key={b.bet} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.bet}</div>
              <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "12px" }}>@ {b.odds}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>The Kid Who Broke Pelé&apos;s Record</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        When Lamine Yamal scored a stunning curling effort against France in the 2024 Euros final — the day before his 17th birthday — the world got its first real look at what this kid was capable of. World Cup 2026 has been his complete coronation.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        At 18 years and 172 days, Yamal is the youngest player ever to reach a World Cup semi-final. He broke the record set by Pelé in 1958. Let that sink in. He is playing in the same conversation as the greatest footballer who ever lived — and he&apos;s doing it on merit, not sentiment.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Four goals and five assists in five games. No other player in this tournament can match that combined contribution. He has created more chances than any other player, completed more dribbles and drawn more fouls. Belgium had three men assigned to stop him tonight and it still wasn&apos;t enough.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>What Makes Him Impossible to Stop</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Yamal operates almost exclusively from the right side, cutting infield onto his stronger left foot — a pattern every opponent knows and still cannot stop. His first touch takes him into space that shouldn&apos;t exist, his acceleration off the mark is sub-2 seconds over five metres, and his final ball decision-making is that of a veteran in his prime.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        FC Barcelona have already tied him to a contract until 2030 with a release clause that sources close to the club describe as &quot;stratospheric.&quot; Real Madrid are watching. PSG are watching. For now, so is the rest of the planet.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Can Spain Win the World Cup?</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        Spain are the reigning European champions and now into the World Cup semi-finals. Their possession stats are the best in the tournament. With Pedri pulling the strings in midfield, Morata leading the line and Yamal making the difference on the right, they have the pieces to go all the way. Spain to win the World Cup is currently available at 3.50 — down from 5.00 before the Belgium game.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Yamal &amp; Spain</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race: Yamal vs Haaland vs Kane</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
