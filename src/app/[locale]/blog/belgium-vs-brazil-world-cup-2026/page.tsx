import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Belgium vs Brazil World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "Belgium vs Brazil World Cup 2026 Quarter-Final on July 9. Brazil favoured at 2.20. Expert tip: Brazil Win @ 2.20. Full odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/belgium-vs-brazil-world-cup-2026" },
  openGraph: {
    title: "Belgium vs Brazil World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "Belgium vs Brazil QF · Jul 9 · Belgium 3.10 | Draw 3.25 | Brazil 2.20. Expert tip inside.",
    images: [{ url: "https://www.worldcupbet26.com/qf3_belgium_brazil_jul9.png", width: 1200, height: 628 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.worldcupbet26.com/qf3_belgium_brazil_jul9.png"] },
};

export default function BelgiumBrazilQF() {
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
        Belgium vs Brazil — World Cup 2026 Quarter-Final Odds &amp; Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Wednesday 9 July 2026 · 21:00 CEST · FIFA World Cup 2026 Quarter-Final</p>

      <img src="/qf3_belgium_brazil_jul9.png" alt="Belgium vs Brazil World Cup 2026 Quarter-Final odds" style={{ width: "100%", borderRadius: "12px", marginBottom: "2rem" }} />

      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — Belgium vs Brazil</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Bookmaker</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Belgium</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Draw</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Brazil</div>
          {[
            { bk: "Betsson", b: "3.10", d: "3.25", br: "2.20", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   b: "3.00", d: "3.30", br: "2.25", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  b: "3.15", d: "3.20", br: "2.18", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk + "bk"} style={{ padding: "6px 0" }}><a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a></div>
              <div key={row.bk + "b"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.b}</div>
              <div key={row.bk + "d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.d}</div>
              <div key={row.bk + "br"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.br}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>Brazil to Win @ <span style={{ color: "var(--accent)" }}>2.20</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          Brazil are on a mission. After their agonising 2022 QF exit on penalties, the Seleção have rebuilt with pace and hunger. Vinícius Júnior is the best winger in the tournament. Belgium&apos;s ageing Golden Generation has over-performed to reach this stage — Brazil&apos;s quality should tell in the end.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: Brazil&apos;s Redemption vs Belgium&apos;s Last Stand</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Brazil haven&apos;t won a World Cup since 2002. The pressure grows with each tournament. But this squad — led by Vinícius, Rodrygo and the brilliant Endrick — has a different energy. They&apos;ve scored 14 goals in five games and haven&apos;t been below top gear since the group stage opener.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Belgium&apos;s story is remarkable. De Bruyne is 34 and still pulling the strings. Lukaku — written off by many — has five goals. They beat the USA 4-1 in the Round of 16 in what many called a shock result. But Belgium are no longer underdogs; they&apos;re dangerous opponents for any team.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        The 2022 QF between Brazil and Belgium ended 2-1 to Brazil at the group stage (different format). The class runs deep on both sides. This will be an open, attack-minded quarter-final.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Belgium vs Brazil</div>
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
