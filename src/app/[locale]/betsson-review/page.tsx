import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const localeMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Betsson World Cup 2026 Review — Bonus, Odds & Betting Guide",
    description: "Full Betsson review for World Cup 2026. Claim your 100% welcome bonus up to €100, compare live odds and get expert tips for every match.",
  },
  de: {
    title: "Betsson WM 2026 Bewertung — Bonus, Quoten & Wettguide",
    description: "⚠️ Betsson möglicherweise in Deutschland nicht verfügbar. Vollständige Bewertung mit Alternativen für deutsche Nutzer.",
  },
  es: {
    title: "Betsson Reseña Mundial 2026 — Bono, Cuotas y Guía",
    description: "Reseña completa de Betsson para el Mundial 2026. Reclama tu bono de bienvenida del 100% hasta €100.",
  },
  pt: {
    title: "Betsson Avaliação Copa 2026 — Bônus, Odds e Guia",
    description: "Avaliação completa do Betsson para a Copa 2026. Bônus de boas-vindas de 100% até €100.",
  },
  fr: {
    title: "Betsson Avis Coupe du Monde 2026 — Bonus, Cotes & Guide",
    description: "Avis complet sur Betsson pour la Coupe du Monde 2026. Bonus de bienvenue 100% jusqu'à €100.",
  },
  it: {
    title: "Betsson Recensione Mondiali 2026 — Bonus, Quote e Guida",
    description: "Recensione completa di Betsson per i Mondiali 2026. Bonus di benvenuto 100% fino a €100.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const meta = localeMeta[locale] ?? localeMeta.en;
  const locales = ["en", "es", "pt", "de", "fr", "it"];
  const base = "https://www.worldcupbet26.com";
  function reviewUrl(l: string) {
    return l === "en" ? `${base}/betsson-review` : `${base}/${l}/betsson-review`;
  }
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: reviewUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, reviewUrl(l)])), "x-default": reviewUrl("en") },
    },
    openGraph: {
      title: "Betsson World Cup 2026 Review — Bonus, Odds & Betting Guide",
      description: "Full Betsson review for World Cup 2026. Claim your 100% welcome bonus up to €100, compare live odds and get expert tips for every match.",
      url: reviewUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
      images: [{ url: "https://www.worldcupbet26.com/og-betsson.jpg", width: 1200, height: 630, alt: "Betsson World Cup 2026 Review" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Betsson World Cup 2026 Review — Bonus, Odds & Betting Guide",
      description: "Full Betsson review for World Cup 2026. 100% welcome bonus up to €100.",
      images: ["https://www.worldcupbet26.com/og-betsson.jpg"],
    },
  };
}

const BETSSON = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";

const pros = [
  "100% welcome bonus up to €100 for new players",
  "Live streaming of World Cup matches",
  "Cash out available on all major markets",
  "World Cup special markets: top scorer, group winners, correct score",
  "Fast payouts — 24h to Skrill and bank transfer",
  "Licensed in Malta (MGA) and multiple EU jurisdictions",
];

const cons = [
  "Not available in the USA",
  "Bonus wagering requirements apply (rollover x5)",
];

const markets = [
  { name: "Match Result (1X2)", rating: 5, note: "Best odds on group stage matches" },
  { name: "Both Teams to Score", rating: 5, note: "Competitive juice across all matches" },
  { name: "Over/Under Goals", rating: 4, note: "Wide range from 0.5 to 5.5" },
  { name: "Asian Handicap", rating: 4, note: "Available on all knockout games" },
  { name: "Tournament Winner", rating: 5, note: "Early odds on all 48 nations" },
  { name: "Top Goalscorer", rating: 4, note: "Ante-post markets open now" },
];

export default function BetssonReviewPage({ params }: Props) {
  const isDE = params.locale === 'de';

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* GEO-RESTRICTION WARNING — DE only */}
      {isDE && (
        <div style={{
          background: "rgba(239,68,68,0.08)",
          borderBottom: "2px solid rgba(239,68,68,0.4)",
          padding: "12px 20px",
        }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
            <div>
              <span style={{ fontWeight: 700, fontSize: "13px", color: "#f87171" }}>
                Hinweis für Nutzer in Deutschland:{" "}
              </span>
              <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                Betsson ist in Deutschland möglicherweise nicht verfügbar oder geo-gesperrt.
                Bitte prüfe die Verfügbarkeit, bevor du dich registrierst.
                Empfohlene Alternativen für Deutschland:{" "}
              </span>
              <a
                href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                style={{ color: "var(--accent)", fontWeight: 700, fontSize: "13px" }}
               data-affiliate="1xBet">
                1xBet
              </a>
              {" · "}
              <a
                href="https://betway.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ color: "var(--accent)", fontWeight: 700, fontSize: "13px" }}
              >
                Betway
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
        borderBottom: "1px solid var(--card-border)",
        padding: "48px 20px 40px",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "52px" }}>🏆</div>
            <div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>APPROVED PARTNER</span>
                <span style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#ffd700", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>EDITOR&apos;S CHOICE</span>
              </div>
              <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, margin: 0 }}>Betsson World Cup 2026 Review</h1>
              <div style={{ color: "var(--muted)", fontSize: "14px", marginTop: "4px" }}>Last updated: May 2026 · Verified by WorldCupBet26 editorial team</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px", marginBottom: "28px" }}>
            {[{label:"Our Rating",val:"4.8 / 5"},{label:"Welcome Bonus",val:"100% up to €100"},{label:"Min Deposit",val:"€10"},{label:"Payout Speed",val:"24 hours"}].map(s=>(
              <div key={s.label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 16px" }}>
                <div style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>{s.label}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)" }}>{s.val}</div>
              </div>
            ))}
          </div>
          <a href={BETSSON} target="_blank" rel="noopener noreferrer nofollow" style={{
            display: "inline-block", background: "var(--accent)", color: "#000",
            padding: "16px 40px", borderRadius: "8px", fontWeight: 800,
            fontSize: "16px", textDecoration: "none",
          }} data-affiliate="Betsson">
            Claim Betsson Bonus — 100% up to €100
          </a>
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>18+ · New customers only · T&Cs apply · Bet responsibly</div>
          {isDE && (
            <div style={{ color: "#f87171", fontSize: "11px", marginTop: "4px", fontWeight: 600 }}>
              ⚠️ Möglicherweise in Deutschland nicht verfügbar
            </div>
          )}
        </div>
      </section>

      {/* PROS / CONS */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)", marginBottom: "16px" }}>✅ Pros</div>
            {pros.map(p=>(<div key={p} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}><span style={{ color: "var(--accent)", marginTop: "2px" }}>✓</span>{p}</div>))}
          </div>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#ef4444", marginBottom: "16px" }}>❌ Cons</div>
            {cons.map(c=>(<div key={c} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}><span style={{ color: "#ef4444", marginTop: "2px" }}>✗</span>{c}</div>))}
          </div>
        </div>
      </section>

      {/* WORLD CUP MARKETS */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>World Cup 2026 Betting Markets</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {markets.map(m=>(
              <div key={m.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{m.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: "12px", marginTop: "2px" }}>{m.note}</div>
                </div>
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({length:5},(_,i)=>(
                    <span key={i} style={{ fontSize: "16px", color: i < m.rating ? "#ffd700" : "var(--card-border)" }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CLAIM BONUS */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>How to Claim Your Betsson World Cup Bonus</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "16px", marginBottom: "28px" }}>
            {[
              { step: "1", title: "Click our link", desc: "Use our exclusive link to visit Betsson and register a new account" },
              { step: "2", title: "Deposit €10+", desc: "Make your first deposit of at least €10 using any supported payment method" },
              { step: "3", title: "Get matched", desc: "Betsson matches your deposit 100% up to €100 in bonus funds" },
              { step: "4", title: "Bet & win", desc: "Place bets on World Cup matches — wager x5 to release the bonus" },
            ].map(s=>(
              <div key={s.step} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <a href={BETSSON} target="_blank" rel="noopener noreferrer nofollow" style={{
            display: "inline-block", background: "var(--accent)", color: "#000",
            padding: "16px 40px", borderRadius: "8px", fontWeight: 800,
            fontSize: "15px", textDecoration: "none",
          }} data-affiliate="Betsson">
            Get Betsson Bonus Now →
          </a>
        </div>
      </section>

      {/* VERDICT */}
      <section style={{ padding: "0 20px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>Our Verdict</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
            Betsson is one of Europe&apos;s most trusted sportsbooks with over 60 years of history. For the 2026 World Cup, their market depth, live streaming, and competitive odds make them our top recommended bookmaker. The 100% welcome bonus gives new bettors a strong start. Highly recommended.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={BETSSON} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }} data-affiliate="Betsson">
              Visit Betsson
            </a>
            <Link href="/matches" style={{ display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Compare All Odds
            </Link>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "16px" }}>18+ only. Please gamble responsibly. T&Cs apply. Affiliate disclosure: we earn a commission if you sign up via our links, at no extra cost to you.</p>
        </div>
      </section>

    </div>
  );
}
