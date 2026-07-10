import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messi's Last World Cup? Argentina Back-to-Back Bid — 2026 Odds & Analysis",
  description: "Lionel Messi faces Argentina vs Switzerland in the World Cup 2026 quarter-final. Is this his last chance at back-to-back glory? Stats, odds, and why this match matters more than any other.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/messi-last-world-cup-argentina-2026" },
  openGraph: {
    title: "Messi's Last World Cup? Argentina vs Switzerland QF — Odds & Analysis",
    description: "Messi has 4 goals and 4 assists. Argentina face Switzerland on July 12. Is this the final chapter?",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function MessiLastWorldCup() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Player Feature</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 QF Jul 12</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        🇦🇷 Messi&apos;s Final Chapter: Argentina&apos;s Back-to-Back World Cup Bid
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>11 July 2026 · Argentina vs Switzerland — QF · Kansas City · 1 Jul 12, 01:00 UTC</p>

      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "0.85rem", fontWeight: 800, color: accent, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Messi · World Cup 2026 Stats</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", textAlign: "center" }}>
          {[
            { label: "Goals", value: "4" },
            { label: "Assists", value: "4" },
            { label: "Games", value: "5" },
            { label: "Age", value: "38" },
          ].map(s => (
            <div key={s.label} style={{ padding: "12px", background: "rgba(0,208,132,0.05)", borderRadius: "8px", border: "1px solid rgba(0,208,132,0.12)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: accent, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: muted, fontSize: "0.75rem", fontWeight: 600, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Quarter-Final Odds · Argentina vs Switzerland</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { bet: "Argentina to Win", odds: "1.80" },
            { bet: "Draw (AET)", odds: "3.60" },
            { bet: "Switzerland Upset", odds: "4.20" },
            { bet: "Messi Anytime Scorer", odds: "2.50" },
          ].map(b => (
            <div key={b.bet} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.bet}</div>
              <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "12px" }}>@ {b.odds}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>This Is the One That Matters</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Lionel Messi is 38 years old. He said before this tournament that it would be his last World Cup. He said the same thing before 2022, and then lifted the trophy in Qatar in the most extraordinary final football has ever produced. Nobody — not even Messi himself — really knows if this is the end.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        What we do know is this: no player in history has won back-to-back World Cups as a senior international. If Argentina can hold on to beat Switzerland on Sunday and go on to win this tournament, Messi will not just be the greatest player of all time — he will have done something that never been done in the modern era.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Still the Best in the Tournament</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        People who came here expecting to see an older, slower Messi going through the motions have been left looking very foolish. Four goals and four assists — a combined contribution bettered only by Yamal in this tournament. His goal against Poland in the group stage was a reminder that when the door opens even a crack, the ball finds the net through sheer force of precision.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        What has changed is where the genius operates. Messi no longer has the gas to beat five men on the dribble. He doesn&apos;t need to. His positioning is so advanced that he finds pockets of space before the play has even started. His assist for De Paul&apos;s winner against the United States in the R16 was a pass that four other players in world football could play, and Messi played it without breaking stride.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Switzerland: More Dangerous Than Their Odds Suggest</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Breel Embolo has four goals for Switzerland. They beat Norway on penalties in the R16 after a 1-1 draw that was tighter than the scoreline suggests. Switzerland&apos;s pressing system under Murat Yakin disrupts even technically superior opponents — and when Granit Xhaka wins the midfield, they are capable of controlling long stretches of matches.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        This Argentina team, for all their quality, can be pressed. Rodrigo De Paul has had some unusually passive performances in this tournament. If Switzerland can limit the supply to Messi&apos;s feet, they have a genuine chance. At 4.20, the upset is interesting. But we lean Argentina. This is Messi&apos;s World Cup to lose.
      </p>

      <blockquote style={{ borderLeft: "3px solid rgba(0,208,132,0.6)", paddingLeft: "1rem", color: muted, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
        &quot;I know what this is. This is the last chance. And I&apos;m going to give everything.&quot; — Lionel Messi, press conference, June 2026
      </blockquote>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>The Numbers Behind the Legacy</h2>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "1.25rem", marginBottom: "2rem" }}>
        {[
          { label: "World Cups played", value: "6" },
          { label: "World Cup goals (career)", value: "17" },
          { label: "World Cup assists (career)", value: "11" },
          { label: "World Cup wins", value: "1 (2022)" },
          { label: "Ballon d'Or wins", value: "8" },
        ].map(s => (
          <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ color: muted, fontSize: "0.875rem" }}>{s.label}</div>
            <div style={{ fontWeight: 800, color: accent }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Messi &amp; Argentina vs Switzerland</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race — Messi vs Haaland vs Yamal</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
