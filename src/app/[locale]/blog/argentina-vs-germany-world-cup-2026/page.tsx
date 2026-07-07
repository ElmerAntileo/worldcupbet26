import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Argentina vs Germany World Cup 2026 Odds, Tips & Prediction | Quarter-Final",
  description: "Argentina vs Germany World Cup 2026 Quarter-Final on July 8. Argentina favoured at 2.10. Expert tip: Argentina to Win @ 2.10. Full odds from Betsson, 1xBet and Betway.",
  alternates: { canonical: "https://www.worldcupbet26.com/blog/argentina-vs-germany-world-cup-2026" },
  openGraph: {
    title: "Argentina vs Germany World Cup 2026 Quarter-Final — Odds & Prediction",
    description: "Argentina vs Germany QF · Jul 8 · Argentina 2.10 | Draw 3.40 | Germany 3.30. Expert tip inside.",
    images: [{ url: "https://www.worldcupbet26.com/qf2_argentina_germany_jul8.png", width: 1200, height: 628 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.worldcupbet26.com/qf2_argentina_germany_jul8.png"] },
};

export default function ArgentinaGermanyQF() {
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
        Argentina vs Germany — World Cup 2026 Quarter-Final Odds &amp; Prediction
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Tuesday 8 July 2026 · 01:00 CEST (Wed) · FIFA World Cup 2026 Quarter-Final</p>

      <img src="/qf2_argentina_germany_jul8.png" alt="Argentina vs Germany World Cup 2026 Quarter-Final odds" style={{ width: "100%", borderRadius: "12px", marginBottom: "2rem" }} />

      <div className="card" style={{ padding: "1.25rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--accent)" }}>Match Odds — Argentina vs Germany</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ fontWeight: 700, color: "var(--muted)", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Bookmaker</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Argentina</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Draw</div>
          <div style={{ fontWeight: 700, color: "var(--muted)", textAlign: "center", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Germany</div>
          {[
            { bk: "Betsson", a: "2.10", d: "3.40", g: "3.30", url: "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" },
            { bk: "1xBet",   a: "2.15", d: "3.35", g: "3.25", url: "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" },
            { bk: "Betway",  a: "2.08", d: "3.45", g: "3.40", url: "/api/redirect/betway" },
          ].map(row => (
            <>
              <div key={row.bk + "bk"} style={{ padding: "6px 0" }}><a href={row.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>{row.bk}</a></div>
              <div key={row.bk + "a"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.a}</div>
              <div key={row.bk + "d"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.d}</div>
              <div key={row.bk + "g"} style={{ textAlign: "center", fontWeight: 800, padding: "6px 0" }}>{row.g}</div>
            </>
          ))}
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.08), rgba(0,208,132,0.03))", border: "1px solid rgba(0,208,132,0.25)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>Expert Tip</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>Argentina to Win @ <span style={{ color: "var(--accent)" }}>2.10</span></div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
          The reigning champions are the value pick here. Messi&apos;s motivation is unmatched — this is likely his final World Cup. Argentina&apos;s tournament record in knockouts under Scaloni is exceptional (9W 1L in QF+ since 2019). Germany have momentum but their defence looked exposed in the R16. Back Argentina.
        </p>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Preview: Defending Champions vs European Giant</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Argentina arrive as defending world champions chasing back-to-back World Cup titles — only Brazil (1958, 1962) and Italy (1934, 1938) have ever achieved that feat. Messi, playing what he has hinted is his last World Cup, is the driving force. His vision, movement and leadership elevate every player around him.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        Germany have been rejuvenated under their new generation. Florian Wirtz has been electric — four goals, three assists — and Leroy Sané provides the pace on the wings. But Germany&apos;s defensive record (six goals conceded in five games) is a concern at this level.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
        The intriguing subplot: these sides met in the 2014 World Cup Final, Germany winning 1-0 through Mario Götze&apos;s extra-time goal. Argentina have waited 12 years for this rematch. The atmosphere will be electric.
      </p>

      <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "12px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Bet on Argentina vs Germany</div>
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
