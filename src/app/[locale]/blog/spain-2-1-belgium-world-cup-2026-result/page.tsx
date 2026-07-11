import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spain 2-1 Belgium World Cup 2026 Result — Quarter-Final Report",
  description: "Spain beat Belgium 2-1 in the World Cup 2026 quarter-final in Los Angeles on July 10. Yamal and Morata on target. Spain into the semi-finals. Full match report and semi-final odds.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/spain-2-1-belgium-world-cup-2026-result" },
  openGraph: {
    title: "Spain 2-1 Belgium — World Cup 2026 QF Result",
    description: "Spain into the semi-finals after a 2-1 win over Belgium in Los Angeles. Full match report and semi-final betting odds.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function SpainBelgiumResult() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Match Result</span>
        <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>✅ Full Time</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        Spain 2–1 Belgium — World Cup 2026 QF Report
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>10 July 2026 · SoFi Stadium, Los Angeles · Quarter-Final</p>

      {/* Scoreboard */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "2rem", marginBottom: "2rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇪🇸</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>Spain</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", fontWeight: 900, color: accent, lineHeight: 1, letterSpacing: "-2px" }}>2–1</div>
            <div style={{ color: muted, fontSize: "0.78rem", marginTop: "4px", fontWeight: 600 }}>FULL TIME</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇧🇪</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>Belgium</div>
          </div>
        </div>
        <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "space-around", fontSize: "0.82rem", color: muted }}>
          <div><span style={{ color: "var(--foreground)", fontWeight: 700 }}>Yamal 28&apos;</span><br />Morata 71&apos;</div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: "1.2rem" }}>|</div>
          <div><span style={{ color: "var(--foreground)", fontWeight: 700 }}>De Ketelaere 55&apos;</span></div>
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Match Report</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Spain rode the brilliance of Lamine Yamal to book their place in the World Cup semi-finals, surviving a Belgium fightback in Los Angeles to win 2-1 in a match that had the SoFi Stadium crowd on its feet for the final 35 minutes.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Yamal opened the scoring on 28 minutes with a goal that was pure instinct — receiving the ball on the right channel, cutting onto his left foot and bending a shot into the far corner that the Belgium goalkeeper had no chance of reaching. It was his fifth goal of the tournament and a reminder, once again, that this 18-year-old exists in a category of his own.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Belgium levelled through Charles De Ketelaere on 55 minutes, capitalising on a rare lapse in Spain&apos;s defensive structure when a corner was poorly defended. The equaliser gave Belgium belief and for 15 minutes they pushed for a second, forcing a superb save from Unai Simón.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        Spain reasserted control through Álvaro Morata, who turned in a Pedri cross on 71 minutes to restore the lead. From that point, Spain managed the game with the composure of reigning European champions. They are into the semi-finals, where they will face France in what promises to be the match of the tournament.
      </p>

      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "0.85rem", fontWeight: 800, color: accent, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Key Stats</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px", fontSize: "0.85rem", alignItems: "center", textAlign: "center" }}>
          {[["Possession", "63%", "37%"], ["Shots", "16", "9"], ["Shots on target", "7", "3"], ["Corners", "8", "4"]].map(([label, s, b]) => (
            <>
              <div key={label + "s"} style={{ fontWeight: 700, color: accent }}>{s}</div>
              <div key={label + "l"} style={{ color: muted, fontSize: "0.75rem", padding: "6px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>{label}</div>
              <div key={label + "b"} style={{ fontWeight: 700, color: muted }}>{b}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Spain Semi-Final: France vs Spain Odds</div>
        {[
          { label: "Spain to Win (Semi-final)", odds: "2.10" },
          { label: "France to Win (Semi-final)", odds: "1.80" },
          { label: "Spain to Win the World Cup", odds: "3.50" },
          { label: "Yamal Player of Tournament", odds: "3.50" },
        ].map(b => (
          <div key={b.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
            <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.label}</div>
            <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "12px" }}>@ {b.odds}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Spain vs France — Semi-Final</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/lamine-yamal-world-cup-2026" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Lamine Yamal — The 18-Year-Old Rewriting History</Link>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race — Updated Standings</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
