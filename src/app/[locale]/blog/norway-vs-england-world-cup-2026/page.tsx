import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Norway vs England World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "Norway vs England World Cup 2026 Quarter-Final on July 11. England favoured at 2.00. Expert tip: England Win @ 2.00. Haaland vs Kane. Full odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/norway-vs-england-world-cup-2026" },
  openGraph: {
    title: "Norway vs England World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "Norway vs England QF · Jul 11 · Norway 3.60 | Draw 3.30 | England 2.00. Expert tip inside.",
  },
};

export default function NorwayEnglandQF() {
  return (
    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem", color: "var(--foreground)" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.85rem" }}>← All Articles</Link>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>Quarter-Final</span>
        <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>🔥 Jul 11</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        Norway vs England — World Cup 2026 Quarter-Final Odds &amp; Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Saturday 11 July 2026 · 23:00 CEST · FIFA World Cup 2026 Quarter-Final</p>

      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — Norway vs England</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          {["Bookmaker","Norway","Draw","England"].map(h => (
            <div key={h} style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)", textAlign: h === "Bookmaker" ? "left" : "center" }}>{h}</div>
          ))}
          {[
            { bk: "Betsson", n: "3.60", d: "3.30", e: "2.00", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   n: "3.50", d: "3.25", e: "2.05", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  n: "3.70", d: "3.35", e: "1.95", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk} style={{ padding: "6px 0" }}><a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a></div>
              <div key={row.bk+"n"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.n}</div>
              <div key={row.bk+"d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.d}</div>
              <div key={row.bk+"e"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.e}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.08),rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>England to Win @ <span style={{ color: "var(--accent)" }}>2.00</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          England have looked solid and Kane is in excellent form with the Golden Boot race in mind. Norway are the biggest surprise package of the tournament — Haaland has been a constant threat — but England&apos;s squad depth and tournament experience should see them through. 2.00 is a fair price.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: Norway vs England — The Match of the Round</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Norway&apos;s run to the quarter-finals is one of the stories of the tournament. Erling Haaland, motivated by the chance to take his country to a semi-final for the first time ever, has been extraordinary — seven goals in five games, including a hat-trick in the R16. Norway are no fluke.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        England have been steady if unspectacular. Kane leads the Golden Boot race and Jude Bellingham has moments of genius. But their performances have lacked the conviction of a tournament winner. The pressure of another quarter-final looms large for the Three Lions.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        The Haaland vs Kane battle is the individual duel of the tournament. England back their experience; Norway back their talisman. We lean England at 2.00 — but this is the QF most likely to go to extra time.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Norway vs England</div>
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
