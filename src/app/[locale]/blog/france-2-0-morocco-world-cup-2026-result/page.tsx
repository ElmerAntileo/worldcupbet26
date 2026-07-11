import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "France 2-0 Morocco World Cup 2026 Result — Quarter-Final Report",
  description: "France beat Morocco 2-0 in the World Cup 2026 quarter-final in Boston on July 9. Mbappé and Griezmann on target. France into the semi-finals. Full match report and semi-final odds.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/france-2-0-morocco-world-cup-2026-result" },
  openGraph: {
    title: "France 2-0 Morocco — World Cup 2026 QF Result",
    description: "France into the semi-finals after a 2-0 win over Morocco in Boston. Full match report and semi-final betting odds.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function FranceMoroccoResult() {
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
        France 2–0 Morocco — World Cup 2026 QF Report
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>9 July 2026 · Gillette Stadium, Boston · Quarter-Final</p>

      {/* Scoreboard */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "2rem", marginBottom: "2rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇫🇷</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>France</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", fontWeight: 900, color: accent, lineHeight: 1, letterSpacing: "-2px" }}>2–0</div>
            <div style={{ color: muted, fontSize: "0.78rem", marginTop: "4px", fontWeight: 600 }}>FULL TIME</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇲🇦</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>Morocco</div>
          </div>
        </div>
        <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "space-around", fontSize: "0.82rem", color: muted }}>
          <div><span style={{ color: "var(--foreground)", fontWeight: 700 }}>Mbappé 34'</span><br />Griezmann 67'</div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: "1.2rem" }}>|</div>
          <div>No scorers</div>
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Match Report</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        France repeated the 2022 World Cup semi-final scoreline to march into the last four in Boston. A controlled, professional performance from Didier Deschamps&apos; side was exactly what the pre-match odds predicted — and exactly what Morocco feared.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Kylian Mbappé broke the deadlock on 34 minutes with a clinical finish after a perfectly weighted through ball from Antoine Griezmann. Morocco pressed for an equaliser but France&apos;s defensive structure — built around the imperious William Saliba and Lisandro Hernandez — gave them nothing.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        Griezmann himself added the second on 67 minutes, arriving late into the box to sweep home a cross from Theo Hernandez and kill the tie. Morocco&apos;s Achraf Hakimi — arguably the best right-back in the tournament — had a brilliant individual display but was ultimately unable to unlock a France back-line that has now conceded just twice in six games.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        France will face the winner of Spain vs Belgium in the semi-finals. Mbappé now has six goals in this tournament — three behind Golden Boot leader Erling Haaland, but with two games remaining.
      </p>

      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "0.85rem", fontWeight: 800, color: accent, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Key Stats</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px", fontSize: "0.85rem", alignItems: "center", textAlign: "center" }}>
          {[["Possession", "58%", "42%"], ["Shots", "14", "7"], ["Shots on target", "6", "2"], ["Clean sheet", "✅", "—"]].map(([label, f, m]) => (
            <>
              <div key={label + "f"} style={{ fontWeight: 700, color: accent }}>{f}</div>
              <div key={label + "l"} style={{ color: muted, fontSize: "0.75rem", padding: "6px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>{label}</div>
              <div key={label + "m"} style={{ fontWeight: 700, color: muted }}>{m}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>France Semi-Final Odds</div>
        {[
          { label: "France to Win the World Cup", odds: "3.50" },
          { label: "Mbappé Golden Boot", odds: "5.00" },
          { label: "France to Win vs Spain/England", odds: "1.80" },
        ].map(b => (
          <div key={b.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
            <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.label}</div>
            <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "12px" }}>@ {b.odds}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on France in the Semi-Finals</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>
      <Link href="/blog/world-cup-2026-golden-boot-race" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Golden Boot Race — Mbappé closing in on Haaland</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
