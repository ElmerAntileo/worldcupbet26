import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spain vs Portugal World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "Spain vs Portugal World Cup 2026 Quarter-Final on July 9. The Iberian derby returns. Expert tip: Over 2.5 Goals @ 1.95. Full odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/spain-vs-portugal-world-cup-2026" },
  openGraph: {
    title: "Spain vs Portugal World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "Spain vs Portugal QF · Jul 9 · Spain 2.40 | Draw 3.20 | Portugal 2.90. Expert tip inside.",
    images: [{ url: "https://www.worldcupbet26.com/qf4_spain_portugal_jul9.png", width: 1200, height: 628 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.worldcupbet26.com/qf4_spain_portugal_jul9.png"] },
};

export default function SpainPortugalQF() {
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
        Spain vs Portugal — World Cup 2026 Quarter-Final Odds &amp; Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Wednesday 9 July 2026 · 01:00 CEST (Thu) · FIFA World Cup 2026 Quarter-Final</p>

      <img src="/qf4_spain_portugal_jul9.png" alt="Spain vs Portugal World Cup 2026 Quarter-Final odds" style={{ width: "100%", borderRadius: "12px", marginBottom: "2rem" }} />

      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — Spain vs Portugal</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Bookmaker</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Spain</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Draw</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Portugal</div>
          {[
            { bk: "Betsson", s: "2.40", d: "3.20", p: "2.90", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   s: "2.45", d: "3.15", p: "2.85", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  s: "2.38", d: "3.25", p: "2.95", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk + "bk"} style={{ padding: "6px 0" }}><a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a></div>
              <div key={row.bk + "s"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.s}</div>
              <div key={row.bk + "d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.d}</div>
              <div key={row.bk + "p"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.p}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>Over 2.5 Goals @ <span style={{ color: "var(--accent)" }}>1.95</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          Every Iberian derby at a major tournament has produced drama — and goals. Spain average 3.2 goals per game in this tournament; Portugal average 2.8. Both sides attack with intensity and neither is shy about pressing forward. Yamal vs Leão is the duel of the tournament. Back the goals.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: The Iberian Derby at the World Cup</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Spain vs Portugal at a World Cup. It doesn&apos;t get bigger in the Iberian peninsula. These sides last met at the 2018 World Cup group stage — a 3-3 thriller where Ronaldo scored a hat-trick. Eight years later, both squads are transformed but the rivalry is fiercer than ever.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Spain, the reigning Nations League holders, have been the most complete team in the tournament. Lamine Yamal, 18, is already one of the best players on the planet. Pedri controls midfield, Morata leads the line with intelligence. Spain&apos;s tiki-taka 2.0 combines the possession of the Guardiola era with the verticality of the modern game.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        Portugal have Ronaldo at 41, still leading the line, still hungry. But the real threat comes from Rafael Leão, Bruno Fernandes and Bernardo Silva. Portugal&apos;s counter-attack has been devastating — they&apos;ve scored nine goals on the break already. This could be the most entertaining QF of the tournament.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Spain vs Portugal</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with Betsson</a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>Bet with 1xBet</a>
        </div>
        <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>

      <Link href="/blog/world-cup-2026-quarter-final-odds" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>← View all Quarter-Final odds and predictions</Link>
    </div>
  );
}
