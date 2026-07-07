import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "France vs Morocco World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "France vs Morocco World Cup 2026 Quarter-Final on July 9. France favoured at 1.45. Expert tip: France Win & Under 2.5 Goals @ 2.20. Full odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/france-vs-morocco-world-cup-2026" },
  openGraph: {
    title: "France vs Morocco World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "France vs Morocco QF · Jul 9 · France 1.45 | Draw 4.50 | Morocco 6.50. Expert tip inside.",
  },
};

export default function FranceMoroccoQF() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Quarter-Final</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Jul 9</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        France vs Morocco — World Cup 2026 Quarter-Final Odds &amp; Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Thursday 9 July 2026 · 22:00 CEST · Boston Stadium · FIFA World Cup 2026 Quarter-Final</p>

      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — France vs Morocco</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          {["Bookmaker","France","Draw","Morocco"].map(h => (
            <div key={h} style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)", textAlign: h === "Bookmaker" ? "left" : "center" }}>{h}</div>
          ))}
          {[
            { bk: "Betsson", f: "1.45", d: "4.50", m: "6.50", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   f: "1.48", d: "4.40", m: "6.20", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  f: "1.44", d: "4.60", m: "6.75", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk} style={{ padding: "6px 0" }}><a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a></div>
              <div key={row.bk+"f"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.f}</div>
              <div key={row.bk+"d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.d}</div>
              <div key={row.bk+"m"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.m}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>France Win &amp; Under 2.5 Goals @ <span style={{ color: "var(--accent)" }}>2.20</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          France are the clear favourites and their defensive record this tournament is exceptional — only two goals conceded in five games. Morocco are dangerous on the counter but France&apos;s structure will limit clear chances. Expect a controlled 1-0 or 2-0 France win rather than an open game.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: France vs Morocco</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        This is a repeat of the 2022 World Cup semi-final, where France beat Morocco 2-0 in a tightly contested match. Morocco became the first African nation to reach a World Cup semi-final in Qatar, and they arrive at this quarter-final with the same ambition — and a better squad.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        France, under Deschamps, have been dominant. Mbappé has five goals, Griezmann orchestrates the midfield with precision. The depth of the French squad — with Camavinga, Tchouaméni and Hernandez — makes them near impossible to break down.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        Morocco&apos;s Achraf Hakimi is one of the best players in the tournament. Their high press and transition game can hurt any team. But France at 1.45 is fair value — the data backs them heavily.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on France vs Morocco</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
        </div>
        <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Quarter-Final previews</Link>
    </div>
  );
}
