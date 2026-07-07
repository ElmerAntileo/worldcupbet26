import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "France vs England World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "France vs England World Cup 2026 Quarter-Final on July 8. France favoured at 1.80. Expert tip: France Win & Under 2.5 Goals @ 2.60. Full odds from Betsson and 1xBet.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/france-vs-england-world-cup-2026" },
  openGraph: {
    title: "France vs England World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "France vs England QF · Jul 8 · France 1.80 | Draw 3.80 | England 4.20. Expert tip inside.",
    images: [{ url: "https://www.worldcupbet26.com/qf1_france_england_jul8.png", width: 1200, height: 628 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.worldcupbet26.com/qf1_france_england_jul8.png"] },
};

export default function FranceEnglandQF() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>

      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Quarter-Final</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Jul 8</span>
      </div>

      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        France vs England — World Cup 2026 Quarter-Final Odds & Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Tuesday 8 July 2026 · 21:00 CEST · FIFA World Cup 2026 Quarter-Final</p>

      <img src="/qf1_france_england_jul8.png" alt="France vs England World Cup 2026 Quarter-Final odds" style={{ width: "100%", borderRadius: "12px", marginBottom: "2rem" }} />

      {/* Odds table */}
      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — France vs England</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Bookmaker</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>France Win</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Draw</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>England Win</div>
          {[
            { bk: "Betsson", f: "1.80", d: "3.80", e: "4.20", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   f: "1.85", d: "3.75", e: "4.10", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  f: "1.78", d: "3.90", e: "4.30", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk + "bk"} style={{ padding: "6px 0" }}>
                <a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a>
              </div>
              <div key={row.bk + "f"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0", color: "var(--foreground)" }}>{row.f}</div>
              <div key={row.bk + "d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0", color: "var(--foreground)" }}>{row.d}</div>
              <div key={row.bk + "e"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0", color: "var(--foreground)" }}>{row.e}</div>
            </>
          ))}
        </div>
      </div>

      {/* Expert tip */}
      <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>France Win &amp; Under 2.5 Goals @ <span style={{ color: "var(--accent)" }}>2.60</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          France have conceded just one goal in five tournament games. Their defensive structure under Deschamps suffocates opponents — Upamecano and Koundé have been elite. England&apos;s attack is potent but France&apos;s counter-pressing limits clear chances. Both teams are cautious in knockout football: expect a tight 1-0 or 2-0 France win.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: The Biggest QF Clash</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        France vs England is the standout quarter-final of the 2026 World Cup. Two of Europe&apos;s heavyweights who have met in pivotal tournaments before — including the 2022 Qatar QF where France edged through 2-1. Revenge is on England&apos;s agenda; France have other ideas.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        France arrive as the tournament&apos;s #1 favourites at 3.50 outright. Kylian Mbappé has been in devastating form — four goals and two assists — while Antoine Griezmann continues to pull the strings in midfield. The balance of the team is what makes them so dangerous: world-class in every department.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        England, meanwhile, reached the QF with back-to-back comfortable wins. Harry Kane leads the Golden Boot race with five goals. Jude Bellingham is the creative force England have needed. The question is whether this England team — so often disappointing in the big moments — can finally deliver against the best.
      </p>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Key Stats</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "2rem" }}>
        {[
          { label: "France goals scored", val: "12" },
          { label: "France goals conceded", val: "1" },
          { label: "England goals scored", val: "10" },
          { label: "England goals conceded", val: "3" },
          { label: "Head-to-head (last 5)", val: "France 3–2" },
          { label: "Last WC meeting", val: "France 2-1 (2022 QF)" },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "4px" }}>{s.label}</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--accent)" }}>{s.val}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on France vs England</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "white", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>
            Bet with Betsson
          </a>
          <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "linear-gradient(135deg,#00d084,#00b870)", color: "#040c18", padding: "12px 28px", borderRadius: "8px", fontWeight: 800, textDecoration: "none" }}>
            Bet with 1xBet
          </a>
        </div>
        <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>18+ | T&Cs apply | Gamble Responsibly</div>
      </div>

      <Link href="/blog/world-cup-2026-quarter-final-odds" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>
        ← View all Quarter-Final odds and predictions
      </Link>
    </div>
  );
}
