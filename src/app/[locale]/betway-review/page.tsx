import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import Script from "next/script";

type Props = { params: Promise<{ locale: string }> };

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

function reviewUrl(l: string) {
  return l === "en" ? `${base}/betway-review` : `${base}/${l}/betway-review`;
}

const localeMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Betway World Cup 2026 Review — Odds, Bonus & Betting Markets",
    description:
      "Full Betway review for World Cup 2026. Claim your 100% matched bonus up to $50, explore live odds on all 48 nations and get expert tips for every match.",
  },
  es: {
    title: "Betway Reseña Mundial 2026 — Bono, Cuotas y Mercados",
    description:
      "Reseña completa de Betway para el Mundial 2026. Bono de bienvenida 100% hasta $50 y las mejores cuotas del mercado.",
  },
  pt: {
    title: "Betway Avaliação Copa 2026 — Bônus, Odds e Apostas",
    description:
      "Avaliação completa do Betway para a Copa 2026. Bônus de boas-vindas de 100% até $50 e excelentes odds ao vivo.",
  },
  de: {
    title: "Betway WM 2026 Bewertung — Bonus, Quoten & Märkte",
    description:
      "Vollständige Betway-Bewertung für die WM 2026. 100% Willkommensbonus bis zu $50 und tiefe Märkte für alle 48 Mannschaften.",
  },
  fr: {
    title: "Betway Avis Coupe du Monde 2026 — Bonus, Cotes & Marchés",
    description:
      "Avis complet sur Betway pour la Coupe du Monde 2026. Bonus de bienvenue 100% jusqu'à $50 et des cotes compétitives sur tous les matchs.",
  },
  it: {
    title: "Betway Recensione Mondiali 2026 — Bonus, Quote e Mercati",
    description:
      "Recensione completa di Betway per i Mondiali 2026. Bonus benvenuto 100% fino a $50 e ottime quote su tutte le 48 squadre.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMeta[locale] ?? localeMeta.en;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: reviewUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, reviewUrl(l)])), "x-default": reviewUrl("en") },
    },
    openGraph: {
      title: "Betway World Cup 2026 Review — Odds, Bonus & Betting Markets",
      description: "Full Betway review for World Cup 2026. Claim your 100% matched bonus up to $50, explore live odds on all 48 nations.",
      url: reviewUrl("en"),
      siteName: "WorldCupBet26",
      type: "article",
      images: [{ url: "https://www.worldcupbet26.com/og-betway.jpg", width: 1200, height: 630, alt: "Betway World Cup 2026 Review" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Betway World Cup 2026 Review — Odds, Bonus & Betting Markets",
      description: "Full Betway review for World Cup 2026. 100% matched bonus up to $50.",
      images: ["https://www.worldcupbet26.com/og-betway.jpg"],
    },
  };
}

const BETWAY_URL = "https://betway.com";
const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";

const pros = [
  "100% matched first-bet bonus up to $50 for new customers",
  "Available in 200+ countries — broad global coverage",
  "World Cup special markets: top scorer, correct score, group winners",
  "Fast, reliable mobile app for iOS and Android",
  "Live in-play betting on all World Cup matches",
  "Licensed by the UK Gambling Commission (UKGC) and Malta Gaming Authority",
  "Same-day withdrawals to e-wallets (Skrill, Neteller)",
];

const cons = [
  "Odds slightly shorter than Betsson on tournament winner markets",
  "Bonus wagering requirements: rollover x4 before withdrawal",
  "Not available in some US states",
];

const markets = [
  { name: "Match Result (1X2)", rating: 5, note: "Competitive margins on all group matches" },
  { name: "Both Teams to Score", rating: 4, note: "Good coverage but slightly shorter than Bet365" },
  { name: "Over/Under Goals", rating: 5, note: "Excellent range — 0.5 to 6.5 goals available" },
  { name: "Asian Handicap", rating: 4, note: "Available on all knockout round matches" },
  { name: "Tournament Winner", rating: 4, note: "Ante-post markets on all 48 qualifying nations" },
  { name: "Top Goalscorer", rating: 4, note: "Wide market including each-way options" },
  { name: "Player Props", rating: 5, note: "Bookings, assists, shots on target — great depth" },
];

const reviewFaqs = [
  {
    q: "Is Betway safe and legit for World Cup 2026 betting?",
    a: "Yes. Betway is fully licensed by the UK Gambling Commission (UKGC) and Malta Gaming Authority (MGA), two of the most respected regulatory bodies in the world. They have operated since 2006 and hold licences in 20+ jurisdictions.",
  },
  {
    q: "What is the Betway World Cup 2026 welcome bonus?",
    a: "New Betway customers can claim a 100% matched first-bet offer up to $50 (or local equivalent). Deposit at least $10, place your first bet, and if it loses you get the stake back as a free bet. Wagering requirements apply (x4 rollover). Terms and conditions apply — 18+ only.",
  },
  {
    q: "What World Cup 2026 markets does Betway offer?",
    a: "Betway covers all major World Cup markets: Match Result (1X2), Both Teams to Score, Over/Under Goals, Asian Handicap, Correct Score, Tournament Winner, Group Winner, Top Goalscorer, Golden Boot, Player bookings and cards. They also offer live in-play markets during matches.",
  },
  {
    q: "How does Betway compare to Betsson for World Cup odds?",
    a: "Betsson typically offers slightly better odds on tournament winner markets and BTTS, while Betway excels on player props and correct score markets. We recommend having accounts at both to get the best price for each market. Our odds comparison tables across all match preview pages show which book has the best price in real time.",
  },
  {
    q: "Can I bet on World Cup 2026 from my country with Betway?",
    a: "Betway operates in 200+ countries, giving it one of the widest global footprints of any major bookmaker. It is fully licensed in the UK, Africa (Nigeria, Kenya, South Africa), Europe, and many parts of Asia and Latin America. Some US states and a handful of jurisdictions are excluded — check local laws before betting.",
  },
];

const reviewFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: reviewFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "Betway Review", item: `${base}/betway-review` },
  ],
};

export default function BetwayReviewPage() {
  return (
    <>
      <Script id="betway-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewFaqSchema) }} />
      <Script id="betway-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
          borderBottom: "1px solid var(--card-border)",
          padding: "48px 20px 40px",
        }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "52px" }}>🔶</div>
              <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>APPROVED PARTNER</span>
                  <span style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#ffd700", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>TRUSTED SINCE 2006</span>
                </div>
                <h1 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, margin: 0 }}>Betway World Cup 2026 Review</h1>
                <div style={{ color: "var(--muted)", fontSize: "14px", marginTop: "4px" }}>Last updated: May 2026 · Verified by WorldCupBet26 editorial team</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px", marginBottom: "28px" }}>
              {[
                { label: "Our Rating", val: "4.6 / 5" },
                { label: "Welcome Bonus", val: "100% up to $50" },
                { label: "Min Deposit", val: "$10" },
                { label: "Payout Speed", val: "Same day" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 16px" }}>
                  <div style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>{s.label}</div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)" }}>{s.val}</div>
                </div>
              ))}
            </div>
            <a href={BETWAY_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{
              display: "inline-block", background: "var(--accent)", color: "#000",
              padding: "16px 40px", borderRadius: "8px", fontWeight: 800,
              fontSize: "16px", textDecoration: "none",
            }} data-affiliate="Betway">
              Claim Betway Bonus — 100% up to $50
            </a>
            <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>18+ · New customers only · T&Cs apply · Bet responsibly</div>
          </div>
        </section>

        {/* PROS / CONS */}
        <section style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            <div style={{ background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "10px", padding: "24px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)", marginBottom: "16px" }}>✅ Pros</div>
              {pros.map((p) => (
                <div key={p} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>{p}
                </div>
              ))}
            </div>
            <div style={{ background: "var(--card-bg)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "24px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", color: "#ef4444", marginBottom: "16px" }}>❌ Cons</div>
              {cons.map((c) => (
                <div key={c} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                  <span style={{ color: "#ef4444", marginTop: "2px", flexShrink: 0 }}>✗</span>{c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD CUP MARKETS */}
        <section style={{ padding: "0 20px 40px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>World Cup 2026 Betting Markets at Betway</h2>
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

        {/* HOW TO CLAIM BONUS */}
        <section style={{ padding: "0 20px 40px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>How to Claim the Betway World Cup Bonus</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "16px", marginBottom: "28px" }}>
              {[
                { step: "1", title: "Click our link", desc: "Use our exclusive link to open the Betway registration page and create your new account" },
                { step: "2", title: "Deposit $10+", desc: "Make your first deposit of at least $10 using card, e-wallet (Skrill, PayPal) or bank transfer" },
                { step: "3", title: "Place your bet", desc: "Place a qualifying bet on any World Cup match — odds must be 1.50 or greater" },
                { step: "4", title: "Collect bonus", desc: "If your bet loses, Betway returns your stake as a free bet up to $50 within 24 hours" },
              ].map((s) => (
                <div key={s.step} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "12px" }}>{s.step}</div>
                  <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                  <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>
            <a href={BETWAY_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{
              display: "inline-block", background: "var(--accent)", color: "#000",
              padding: "16px 40px", borderRadius: "8px", fontWeight: 800,
              fontSize: "15px", textDecoration: "none",
            }} data-affiliate="Betway">
              Get Betway Bonus Now →
            </a>
          </div>
        </section>

        {/* ODDS COMPARISON */}
        <section style={{ padding: "0 20px 40px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Betway vs Betsson — World Cup Odds Comparison</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "var(--card-bg)", borderBottom: "2px solid var(--card-border)" }}>
                    {["Market", "Betway", "Betsson", "Best Price"].map((h) => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { market: "France to win tournament", betway: "6.00", betsson: "6.00", best: "Betway / Betsson" },
                    { market: "Brazil to win tournament", betway: "6.50", betsson: "6.50", best: "Betway / Betsson" },
                    { market: "Germany to win tournament", betway: "10.00", betsson: "10.00", best: "Betway / Betsson" },
                    { market: "Brazil vs Argentina — BTTS", betway: "1.65", betsson: "1.68", best: "🏆 Betsson" },
                    { market: "Over 2.5 Goals (avg)", betway: "1.75", betsson: "1.72", best: "🏆 Betway" },
                    { market: "Mbappé Golden Boot", betway: "8.50", betsson: "8.00", best: "🏆 Betsson" },
                  ].map((r, i) => (
                    <tr key={r.market} style={{ borderBottom: "1px solid var(--card-border)", background: i % 2 === 0 ? "transparent" : "var(--card-bg)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600 }}>{r.market}</td>
                      <td style={{ padding: "12px 16px", color: "var(--accent)", fontWeight: 700 }}>{r.betway}</td>
                      <td style={{ padding: "12px 16px", color: "var(--accent)", fontWeight: 700 }}>{r.betsson}</td>
                      <td style={{ padding: "12px 16px", color: "var(--muted)", fontSize: "12px" }}>{r.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "8px" }}>Odds checked May 2026. Subject to change. Always compare live odds before placing bets.</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 20px 40px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Betway World Cup 2026 — FAQs</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {reviewFaqs.map((f) => (
                <details key={f.q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
                  <summary style={{ fontWeight: 700, fontSize: "14px", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.q}
                    <span style={{ color: "var(--accent)", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>+</span>
                  </summary>
                  <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: "13px", lineHeight: 1.7 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* VERDICT */}
        <section style={{ padding: "0 20px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", background: "var(--card-bg)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>Our Betway Verdict for World Cup 2026</h2>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
              Betway is a globally trusted sportsbook with 20 years of experience and coverage in 200+ countries. Their World Cup 2026 offering is strong — particularly on player props and correct score markets. The 100% matched welcome bonus gives new bettors excellent value to start. We rate Betway 4.6/5 and recommend pairing it with Betsson to access the best odds across both platforms.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={BETWAY_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }} data-affiliate="Betway">
                Visit Betway
              </a>
              <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }} data-affiliate="Betsson">
                Compare — Betsson Bonus
              </a>
              <Link href="/world-cup-2026-odds" style={{ display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                All Odds →
              </Link>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "16px" }}>18+ only. Gamble responsibly. T&Cs apply. Affiliate disclosure: we earn a commission if you sign up through our links, at no extra cost to you.</p>
          </div>
        </section>

      </div>
    </>
  );
}
