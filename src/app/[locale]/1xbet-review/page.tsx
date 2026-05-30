import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const localeMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: "1xBet World Cup 2026 Review — Bonus, Odds & Betting Guide",
    description:
      "Full 1xBet review for World Cup 2026. 100% welcome bonus on first deposit up to €100. 130+ sports, live streaming, early cashout. Available in 130+ countries including Germany.",
  },
  de: {
    title: "1xBet WM 2026 Bewertung — Bonus, Quoten & Wettguide",
    description:
      "Vollständige 1xBet Bewertung für die WM 2026. 100% Willkommensbonus bis zu €100. Über 130 Sportarten, Live-Streaming, Early Cashout. In Deutschland verfügbar.",
  },
  es: {
    title: "1xBet Reseña Mundial 2026 — Bono, Cuotas y Guía de Apuestas",
    description:
      "Reseña completa de 1xBet para el Mundial 2026. Bono de bienvenida del 100% hasta €100. Más de 130 deportes, streaming en vivo y cashout anticipado.",
  },
  pt: {
    title: "1xBet Avaliação Copa 2026 — Bônus, Odds e Guia de Apostas",
    description:
      "Avaliação completa do 1xBet para a Copa 2026. Bônus de boas-vindas de 100% até €100. Mais de 130 esportes, streaming ao vivo e cashout antecipado.",
  },
  fr: {
    title: "1xBet Avis Coupe du Monde 2026 — Bonus, Cotes & Guide",
    description:
      "Avis complet sur 1xBet pour la Coupe du Monde 2026. Bonus de bienvenue 100% jusqu'à €100. Plus de 130 sports, streaming en direct et cashout anticipé.",
  },
  it: {
    title: "1xBet Recensione Mondiali 2026 — Bonus, Quote e Guida Scommesse",
    description:
      "Recensione completa di 1xBet per i Mondiali 2026. Bonus di benvenuto 100% fino a €100. Oltre 130 sport, live streaming e cashout anticipato.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const meta = localeMeta[locale] ?? localeMeta.en;
  const locales = ["en", "es", "pt", "de", "fr", "it"];
  const base = "https://www.worldcupbet26.com";

  function reviewUrl(l: string) {
    return l === "en" ? `${base}/1xbet-review` : `${base}/${l}/1xbet-review`;
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: reviewUrl("en"),
      languages: Object.fromEntries(locales.map((l) => [l, reviewUrl(l)])),
    },
    openGraph: {
      title: "1xBet World Cup 2026 Review — Bonus, Odds & Betting Guide",
      description: "Full 1xBet review for World Cup 2026. 100% welcome bonus up to €100. 130+ sports, live streaming, early cashout. Available in 130+ countries.",
      url: reviewUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
      images: [{ url: "https://www.worldcupbet26.com/og-1xbet.jpg", width: 1200, height: 630, alt: "1xBet World Cup 2026 Review" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "1xBet World Cup 2026 Review — Bonus, Odds & Betting Guide",
      description: "Full 1xBet review for World Cup 2026. 100% welcome bonus up to €100. 130+ sports and live streaming.",
      images: ["https://www.worldcupbet26.com/og-1xbet.jpg"],
    },
  };
}

const pros = [
  "100% welcome bonus on first deposit up to €100",
  "130+ sports and 1,000+ live events daily",
  "Live streaming of World Cup matches included",
  "Early Cashout on all major markets",
  "Available in Germany and 130+ countries worldwide",
  "Fast payouts — 24h via e-wallets",
  "Competitive odds with low margin on football",
];

const cons = [
  "Complex interface can overwhelm new bettors",
  "Bonus wagering requirements can be high (rollover ×35)",
  "Customer support response times vary",
];

const markets = [
  { name: "Match Result (1X2)", rating: 5, note: "Best odds on World Cup group stage matches" },
  { name: "Both Teams to Score", rating: 5, note: "Competitive juice across all fixtures" },
  { name: "Over/Under Goals", rating: 5, note: "Wide range from 0.5 to 6.5 goals" },
  { name: "Asian Handicap", rating: 4, note: "Available on all group and knockout games" },
  { name: "Tournament Winner", rating: 5, note: "Early ante-post markets on all 48 nations" },
  { name: "Top Goalscorer", rating: 4, note: "Boosted prices on key players" },
  { name: "Correct Score", rating: 4, note: "Enhanced accumulators available" },
];

export default function OnexBetReviewPage({ params }: Props) {
  const locale = params.locale;
  const isDE = locale === "de";

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* DE AVAILABILITY BADGE */}
      {isDE && (
        <div style={{
          background: "rgba(0,208,132,0.08)", borderBottom: "2px solid rgba(0,208,132,0.3)",
          padding: "10px 20px",
        }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px" }}>✅</span>
            <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}>
              1xBet ist in Deutschland verfügbar — eine der wenigen Top-Buchmacher ohne Geo-Sperre.
            </span>
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
                {isDE && (
                  <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>✅ IN DEUTSCHLAND VERFÜGBAR</span>
                )}
              </div>
              <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, margin: 0 }}>
                1xBet World Cup 2026 Review
              </h1>
              <div style={{ color: "var(--muted)", fontSize: "14px", marginTop: "4px" }}>
                Last updated: May 2026 · Verified by WorldCupBet26 editorial team
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px", marginBottom: "28px" }}>
            {[
              { label: "Our Rating", val: "4.7 / 5" },
              { label: "Welcome Bonus", val: "100% up to €100" },
              { label: "Min Deposit", val: "€1" },
              { label: "Payout Speed", val: "24 hours" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 16px" }}>
                <div style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>{s.label}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)" }}>{s.val}</div>
              </div>
            ))}
          </div>

          <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
            style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "16px 40px", borderRadius: "8px", fontWeight: 800, fontSize: "16px", textDecoration: "none" }} data-affiliate="1xBet">
            Claim 1xBet Bonus — 100% up to €100
          </a>
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>
            18+ · New customers only · T&Cs apply · Bet responsibly
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)", marginBottom: "16px" }}>✅ Pros</div>
            {pros.map((p) => (
              <div key={p} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                <span style={{ color: "var(--accent)", marginTop: "2px" }}>✓</span>{p}
              </div>
            ))}
          </div>
          <div style={{ background: "var(--card-bg)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#ef4444", marginBottom: "16px" }}>❌ Cons</div>
            {cons.map((c) => (
              <div key={c} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                <span style={{ color: "#ef4444", marginTop: "2px" }}>✗</span>{c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORLD CUP MARKETS */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>World Cup 2026 Betting Markets at 1xBet</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {markets.map((m) => (
              <div key={m.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{m.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: "12px", marginTop: "2px" }}>{m.note}</div>
                </div>
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ fontSize: "16px", color: i < m.rating ? "#ffd700" : "var(--card-border)" }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CLAIM */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>How to Claim Your 1xBet World Cup Bonus</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "16px", marginBottom: "28px" }}>
            {[
              { step: "1", title: "Click our link", desc: "Use our exclusive link to visit 1xBet and register a new account" },
              { step: "2", title: "Deposit €1+", desc: "Make your first deposit — minimum just €1, one of the lowest in the industry" },
              { step: "3", title: "Get 100% matched", desc: "1xBet matches your deposit 100% up to €100 in bonus funds instantly" },
              { step: "4", title: "Bet & win", desc: "Place bets on World Cup 2026 matches — wager the bonus to release funds" },
            ].map((s) => (
              <div key={s.step} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
            style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "16px 40px", borderRadius: "8px", fontWeight: 800, fontSize: "15px", textDecoration: "none" }} data-affiliate="1xBet">
            Get 1xBet Bonus Now →
          </a>
        </div>
      </section>

      {/* WHY 1XBET FOR WORLD CUP */}
      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Why Choose 1xBet for World Cup 2026?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px" }}>
            {[
              { icon: "📺", title: "Live Streaming", desc: "Watch all World Cup matches live directly in the 1xBet app or browser — no extra subscription needed." },
              { icon: "🌍", title: "130+ Countries", desc: "1xBet is one of the few top bookmakers accessible in Germany, Brazil, Mexico, Nigeria and more." },
              { icon: "⚡", title: "Fastest Odds", desc: "Odds are updated in real-time with one of the lowest overrounds on 1X2 football markets." },
              { icon: "💸", title: "Huge Market Range", desc: "Over 1,000 betting options per World Cup match: corners, cards, player props, and correct score accas." },
            ].map((w) => (
              <div key={w.title} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{w.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{w.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section style={{ padding: "0 20px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>Our Verdict</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
            1xBet is one of the world&apos;s largest online sportsbooks with an unmatched breadth of markets. For the 2026 World Cup,
            the combination of live streaming, ultra-competitive odds, and availability in 130+ countries — including Germany —
            makes it our top recommendation for international bettors. The ultra-low minimum deposit of €1 and instant bonus
            make it ideal for newcomers. Highly recommended, especially for German and Brazilian bettors.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
              style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }} data-affiliate="1xBet">
              Visit 1xBet
            </a>
            <Link href="/matches" style={{ display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Compare All Odds
            </Link>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "16px" }}>
            18+ only. Please gamble responsibly. T&Cs apply. Affiliate disclosure: we earn a commission if you sign up via our links, at no extra cost to you.
          </p>
        </div>
      </section>

    </div>
  );
}
