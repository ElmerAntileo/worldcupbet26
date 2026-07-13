import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "France vs Spain Semi-Final World Cup 2026 — Odds, Preview & Prediction",
  description: "France vs Spain World Cup 2026 Semi-Final on July 14 at AT&T Stadium, Dallas. France 1.67 favourites vs Spain 2.20. Mbappé vs Yamal. Full preview, team news and best odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/france-vs-spain-semi-final-world-cup-2026" },
  openGraph: {
    title: "France vs Spain — World Cup 2026 Semi-Final Odds & Preview",
    description: "The match of the tournament. France 1.67 vs Spain 2.20. Mbappé vs Yamal. Dallas, Jul 14, 15:00 ET. Best odds inside.",
  },
};

const accent = "var(--accent)";
const muted = "var(--muted)";

export default function FranceSpainSF() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: accent, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Semi-Final Preview</span>
        <span style={{ background: "rgba(255,165,0,0.12)", border: "1px solid rgba(255,165,0,0.3)", color: "#ffa500", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Jul 14 · Dallas</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        France vs Spain — World Cup 2026 Semi-Final Preview
      </h1>
      <p style={{ color: muted, fontSize: "0.9rem", marginBottom: "2rem" }}>14 July 2026 · AT&T Stadium, Dallas · 19:00 UTC / 15:00 ET / 21:00 CEST</p>

      {/* Odds card */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇫🇷</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>France</div>
            <div style={{ color: accent, fontSize: "1.4rem", fontWeight: 900, marginTop: "4px" }}>1.67</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: muted, lineHeight: 1 }}>vs</div>
            <div style={{ color: muted, fontSize: "0.78rem", marginTop: "6px" }}>Draw 3.50</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "4px" }}>🇪🇸</div>
            <div style={{ fontWeight: 800, fontSize: "1rem" }}>Spain</div>
            <div style={{ color: accent, fontSize: "1.4rem", fontWeight: 900, marginTop: "4px" }}>2.20</div>
          </div>
        </div>
        <p style={{ color: muted, fontSize: "0.8rem", textAlign: "center", marginTop: "1rem" }}>
          AT&T Stadium · Dallas · July 14, 2026 · 15:00 ET
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>The Match of the Tournament</h2>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        France against Spain. Mbappé against Yamal. The tournament&apos;s two most complete teams, two of the finest squads in world football, meeting in a Dallas semi-final that was circled on calendars the moment the quarter-final draw was made.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1rem" }}>
        France have been relentless. They beat Morocco 2-0 in the quarter-final — controlled, professional, devastating on the counter. Kylian Mbappé now has 6 goals and 3 assists in the tournament. Antoine Griezmann, at 35, is playing the best football of his career, providing the creative link between midfield and attack that has unlocked every defence France have faced.
      </p>
      <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem" }}>
        Spain are the counter-argument to everything. They&apos;ve gone through this tournament playing proper football — dominant possession, precision passing, the full La Liga orchestra conducting itself on the biggest stage. Lamine Yamal, 18 years old, has 5 goals and 4 assists and is the most dangerous wide player in the world right now. Pedri controls the tempo from midfield. Álvaro Morata provides the finishing. Spain beat Belgium 2-1 in Los Angeles and barely looked troubled doing it.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Key Battles</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { fr: "Mbappé", es: "Carvajal", label: "Right flank" },
          { fr: "Griezmann", es: "Pedri", label: "Creative control" },
          { fr: "Upamecano", es: "Yamal", label: "Left flank" },
          { fr: "Tchouaméni", es: "Morata", label: "Physical battle" },
        ].map(b => (
          <div key={b.label} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", padding: "0.75rem", textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{b.label}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>🇫🇷 {b.fr}</span>
              <span style={{ color: muted, fontSize: "0.75rem" }}>vs</span>
              <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>{b.es} 🇪🇸</span>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Tournament Stats</h2>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px", fontSize: "0.85rem", alignItems: "center", textAlign: "center" }}>
          {[
            ["Goals scored", "10", "12"],
            ["Goals conceded", "2", "3"],
            ["Possession avg", "51%", "64%"],
            ["Top scorer", "Mbappé 6", "Yamal 5"],
          ].map(([label, fr, es]) => (
            <>
              <div key={label + "fr"} style={{ fontWeight: 700, color: accent }}>{fr}</div>
              <div key={label + "l"} style={{ color: muted, fontSize: "0.75rem", padding: "6px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>{label}</div>
              <div key={label + "es"} style={{ fontWeight: 700, color: muted }}>{es}</div>
            </>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Our Prediction</h2>
      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "10px", padding: "1.25rem", marginBottom: "2rem" }}>
        <p style={{ color: muted, lineHeight: 1.8, marginBottom: "0.5rem" }}>
          This is the hardest match to call in the entire tournament. France&apos;s 1.67 reflects their status as the slightly more complete team — deeper squad, more experience of winning at major tournaments, Mbappé at peak powers. But Spain at 2.20 represents outstanding value. They have the better system, the better ball retention, and a 18-year-old who has already announced himself as the player of this World Cup.
        </p>
        <p style={{ color: muted, lineHeight: 1.8 }}>
          <strong style={{ color: accent }}>Pick:</strong> Spain to Win or Draw (Double Chance) at ~1.30 for safety. For value: <strong style={{ color: accent }}>Spain to Win at 2.20</strong>. This is the best price you will see on Spain to reach the final.
        </p>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Semi-Final Betting Markets</div>
        {[
          { label: "France to Win", odds: "1.67" },
          { label: "Draw after 90 mins", odds: "3.50" },
          { label: "Spain to Win", odds: "2.20" },
          { label: "Mbappé Anytime Scorer", odds: "1.70" },
          { label: "Yamal Anytime Scorer", odds: "2.00" },
          { label: "Both Teams to Score", odds: "1.95" },
          { label: "Over 2.5 Goals", odds: "2.20" },
          { label: "France to Win the World Cup", odds: "3.50" },
          { label: "Spain to Win the World Cup", odds: "3.50" },
        ].map(b => (
          <div key={b.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{b.label}</div>
            <div style={{ fontWeight: 900, color: accent, fontSize: "1rem", marginLeft: "12px" }}>@ {b.odds}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on France vs Spain — Semi-Final</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
          <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#1a4fd6,#1240b0)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betway</a>
        </div>
        <div style={{ fontSize: "11px", color: muted, marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>

      <Link href="/blog/spain-2-1-belgium-world-cup-2026-result" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Spain 2-1 Belgium — QF Match Report</Link>
      <Link href="/blog/france-2-0-morocco-world-cup-2026-result" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ France 2-0 Morocco — QF Match Report</Link>
      <Link href="/blog/lamine-yamal-world-cup-2026" style={{ color: accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>→ Lamine Yamal — The 18-Year-Old Rewriting History</Link>
      <Link href="/blog" style={{ color: accent, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← All Articles</Link>
    </div>
  );
}
