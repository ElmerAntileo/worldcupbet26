import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "World Cup 2026 Best XI So Far — Top Players After the Quarter-Finals",
  description: "Our World Cup 2026 Best XI after the quarter-finals: Messi, Haaland, Yamal, Mbappé, Kane and more. Who makes the dream team of the tournament? Full stats and analysis.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/world-cup-2026-best-xi" },
  openGraph: {
    title: "World Cup 2026 Best XI — Dream Team of the Tournament So Far",
    description: "Haaland up front, Yamal on the wing, Messi pulling strings. Our World Cup 2026 Team of the Tournament after the quarter-finals.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

const players: { pos: string; name: string; team: string; flag: string; note: string }[] = [
  { pos: "GK", name: "Emiliano Martínez", team: "Argentina", flag: "🇦🇷", note: "3 clean sheets, two crucial penalty saves in the R16" },
  { pos: "RB", name: "Achraf Hakimi", team: "Morocco", flag: "🇲🇦", note: "Best right-back in the tournament despite Morocco's QF exit" },
  { pos: "CB", name: "William Saliba", team: "France", flag: "🇫🇷", note: "Immovable in France's water-tight defensive unit" },
  { pos: "CB", name: "Lisandro Martínez", team: "Argentina", flag: "🇦🇷", note: "Commanding on the ball, fierce in the air" },
  { pos: "LB", name: "Theo Hernandez", team: "France", flag: "🇫🇷", note: "France's most dynamic attacking outlet from left-back" },
  { pos: "CM", name: "Pedri", team: "Spain", flag: "🇪🇸", note: "The engine of Spain's possession machine, 94% pass accuracy" },
  { pos: "CM", name: "Jude Bellingham", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", note: "2 goals, 4 assists, moments of brilliance in every game" },
  { pos: "AM", name: "Lionel Messi", team: "Argentina", flag: "🇦🇷", note: "4G+4A at age 38. Still the tournament's most complete player" },
  { pos: "RW", name: "Lamine Yamal", team: "Spain", flag: "🇪🇸", note: "4G+5A — the defining player of the entire tournament" },
  { pos: "LW", name: "Kylian Mbappé", team: "France", flag: "🇫🇷", note: "5 goals, relentless pace, unstoppable on his day" },
  { pos: "ST", name: "Erling Haaland", team: "Norway", flag: "🇳🇴", note: "7 goals, leading the Golden Boot race by two" },
];

export default function BestXI() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Team of the Tournament</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 After QFs</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        World Cup 2026 Best XI — Team of the Tournament So Far
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>Updated after the quarter-finals · 11 July 2026 · 4-2-3-1 formation</p>

      {/* XI Table */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem", overflowX: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 24px 1fr 1fr", gap: "6px 16px", fontSize: "0.85rem", minWidth: "480px" }}>
          {["Pos", "", "Player", "Why"].map(h => (
            <div key={h} style={{ fontWeight: 700, color: muted, paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{h}</div>
          ))}
          {players.map(p => (
            <>
              <div key={p.name + "pos"} style={{ fontWeight: 800, color: accent, fontSize: "0.75rem", paddingTop: "10px", letterSpacing: "0.06em" }}>{p.pos}</div>
              <div key={p.name + "flag"} style={{ fontSize: "1.2rem", paddingTop: "10px" }}>{p.flag}</div>
              <div key={p.name + "name"} style={{ fontWeight: 700, paddingTop: "10px" }}>
                {p.name}
                <div style={{ color: muted, fontSize: "0.76rem", fontWeight: 500 }}>{p.team}</div>
              </div>
              <div key={p.name + "note"} style={{ color: muted, fontSize: "0.8rem", paddingTop: "10px", lineHeight: 1.5 }}>{p.note}</div>
            </>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>The Stories Behind the Picks</h2>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Goalkeeper: Emiliano Martínez</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        &apos;Dibu&apos; Martínez was the hero of Argentina&apos;s 2022 World Cup penalty shootout. In 2026, he has been immense from the first whistle. Three clean sheets in five games. A save against the United States in the R16 that altered the trajectory of the entire match. At 33, he is in the form of his life. His command of the box has given Argentina the platform to play with the freedom that Messi requires.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Defence: Hakimi, Saliba, L. Martínez, Theo Hernandez</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Achraf Hakimi was the best player in Morocco&apos;s run despite their exit to France. At right-back for Morocco, he created more chances than most forwards in the tournament. Saliba has been faultless for France — a composed, tall, modern centre-back who rarely needs to put a foot wrong because his reading of the game prevents the situation from arising. Lisandro Martínez is his contrasting Argentine counterpart: combative, vocal, brilliant. Theo Hernandez on the left gave France a dimension no other team can match from full-back.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Midfield: Pedri &amp; Bellingham</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Pedri has been the heartbeat of Spain&apos;s possession football. 94% pass accuracy across five games while still managing to create meaningful opportunities rather than just recycling sideways. Jude Bellingham is in a different mode — he is the game-changing midfielder, arriving late into areas, scoring crucial goals and turning matches with single moments of brilliance. The 21-year-old has arrived as one of the world&apos;s elite in this tournament.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>Attack: Messi, Yamal, Mbappé, Haaland</h3>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        The front four selects itself. Yamal is the tournament&apos;s defining player — a teenage generational talent on the world&apos;s biggest stage. Mbappé has delivered five goals and a match-winning performance against Morocco. Messi at number 10 pulls the strings at 38 years old with a combined goal-and-assist tally that no outfield player other than Yamal can match. And then there is Haaland: seven goals, the Golden Boot race leader, a man who has turned a quarter-final clash into a blockbuster sporting event just by showing up.
      </p>

      <div style={{ background: "rgba(255,199,0,0.05)", border: "1px solid rgba(255,199,0,0.2)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#ffd700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Honourable Mentions</div>
        {[
          { name: "Harry Kane 🏴󠁧󠁢󠁥󠁮󠁧󠁿", reason: "5 goals, Golden Boot contender — edge goes to Mbappé on impact" },
          { name: "Antoine Griezmann 🇫🇷", reason: "Orchestrated France's build-up through entire tournament" },
          { name: "Breel Embolo 🇨🇭", reason: "4 goals, near-upset over Norway — unlucky to face Argentina next" },
          { name: "Rodri 🇪🇸", reason: "The axis Spain rotates around when Pedri needs cover" },
        ].map(h => (
          <div key={h.name} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
            <div style={{ fontWeight: 700, whiteSpace: "nowrap", fontSize: "0.875rem" }}>{h.name}</div>
            <div style={{ color: muted, fontSize: "0.8rem", lineHeight: 1.5 }}>{h.reason}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on the World Cup 2026 — Semi-Finals &amp; Final</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race — Top Scorer Standings</Link>
      <Link href="/blog/lamine-yamal-world-cup-2026" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Lamine Yamal — The 18-Year-Old Rewriting History</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
