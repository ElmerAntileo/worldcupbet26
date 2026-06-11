import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";
import { OG_IMAGE } from "@/lib/og";

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function pageUrl(l: string) {
  return l === "en" ? `${base}/world-cup-2026-odds` : `${base}/${l}/world-cup-2026-odds`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Odds — All Teams Betting Odds Compared",
  description:
    "World Cup 2026 betting odds for 22 top teams. Compare Argentina, Brazil, France, England, Spain, Germany odds across Betsson, 1xBet, Bet365 and Betway. Updated daily.",
  alternates: {
    canonical: pageUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(l)])), "x-default": pageUrl("en") },
  },
  openGraph: {
    title: "World Cup 2026 Odds — All Teams Betting Odds Compared",
    description:
      "Compare World Cup 2026 winner odds for every team. Best prices from top bookmakers updated daily.",
    type: "website",
    images: [OG_IMAGE],
  },
};

const BETSSON_URL = "/choose-betting";

const teams = [
  { slug: "spain",       name: "Spain",       flag: "🇪🇸", odds: "5.75",   bookmaker: "Betsson", tier: 1, group: "H" },
  { slug: "france",      name: "France",      flag: "🇫🇷", odds: "6.00",   bookmaker: "Betsson", tier: 1, group: "I" },
  { slug: "england",     name: "England",     flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", odds: "7.50",   bookmaker: "Betsson", tier: 1, group: "L" },
  { slug: "brazil",      name: "Brazil",      flag: "🇧🇷", odds: "9.50",   bookmaker: "Betsson", tier: 1, group: "C" },
  { slug: "argentina",   name: "Argentina",   flag: "🇦🇷", odds: "10.00",  bookmaker: "1xBet",   tier: 1, group: "J" },
  { slug: "germany",     name: "Germany",     flag: "🇩🇪", odds: "11.00",  bookmaker: "Betsson", tier: 2, group: "E" },
  { slug: "portugal",    name: "Portugal",    flag: "🇵🇹", odds: "13.00",  bookmaker: "Betsson", tier: 2, group: "K" },
  { slug: "netherlands", name: "Netherlands", flag: "🇳🇱", odds: "17.00",  bookmaker: "Betsson", tier: 2, group: "F" },
  { slug: "usa",         name: "USA",         flag: "🇺🇸", odds: "20.00",  bookmaker: "Betsson", tier: 2, group: "D" },
  { slug: "belgium",     name: "Belgium",     flag: "🇧🇪", odds: "25.00",  bookmaker: "Betsson", tier: 3, group: "G" },
  { slug: "colombia",    name: "Colombia",    flag: "🇨🇴", odds: "30.00",  bookmaker: "Betsson", tier: 3, group: "K" },
  { slug: "uruguay",     name: "Uruguay",     flag: "🇺🇾", odds: "40.00",  bookmaker: "Betsson", tier: 3, group: "H" },
  { slug: "morocco",     name: "Morocco",     flag: "🇲🇦", odds: "45.00",  bookmaker: "Betsson", tier: 3, group: "C" },
  { slug: "croatia",     name: "Croatia",     flag: "🇭🇷", odds: "55.00",  bookmaker: "Betsson", tier: 3, group: "L" },
  { slug: "mexico",      name: "Mexico",      flag: "🇲🇽", odds: "60.00",  bookmaker: "Betsson", tier: 3, group: "A" },
  { slug: "japan",       name: "Japan",       flag: "🇯🇵", odds: "65.00",  bookmaker: "Betsson", tier: 4, group: "F" },
  { slug: "canada",      name: "Canada",      flag: "🇨🇦", odds: "70.00",  bookmaker: "Betsson", tier: 4, group: "B" },
  { slug: "senegal",     name: "Senegal",     flag: "🇸🇳", odds: "80.00",  bookmaker: "Betsson", tier: 4, group: "I" },
  { slug: "switzerland", name: "Switzerland", flag: "🇨🇭", odds: "90.00",  bookmaker: "Betsson", tier: 4, group: "B" },
  { slug: "ecuador",     name: "Ecuador",     flag: "🇪🇨", odds: "100.00", bookmaker: "Betsson", tier: 4, group: "E" },
  { slug: "australia",   name: "Australia",   flag: "🇦🇺", odds: "150.00", bookmaker: "Betsson", tier: 4, group: "D" },
  { slug: "türkiye",     name: "Türkiye",     flag: "🇹🇷", odds: "120.00", bookmaker: "Betsson", tier: 4, group: "D" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "World Cup 2026 Winner Odds — All Teams",
  description: "Betting odds to win the 2026 FIFA World Cup for all qualified teams, compared across top bookmakers.",
  url: `${base}/world-cup-2026-odds`,
  numberOfItems: teams.length,
  itemListElement: teams.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${t.name} World Cup 2026 Odds`,
    url: `${base}/world-cup-2026-odds/${t.slug}`,
  })),
};

const tierLabel: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Top Favourite",    color: "#ffd700", bg: "rgba(255,215,0,0.12)" },
  2: { label: "Strong Contender", color: "var(--accent)", bg: "rgba(0,208,132,0.10)" },
  3: { label: "Dark Horse",       color: "#a78bfa", bg: "rgba(167,139,250,0.10)" },
  4: { label: "Outsider",         color: "#f97316", bg: "rgba(249,115,22,0.10)" },
};

const oddsFaqs = [
  {
    q: "Which team is the favourite to win World Cup 2026?",
    a: "Spain are the current market favourite at 5.75 with Betsson — boosted by back-to-back UEFA Nations League and Euro 2024 wins. France (6.00) are second, followed by England (7.50), Brazil (9.50) and Argentina (10.00). Spain's young core of Yamal, Pedri and Morata make them bookmakers' top pick heading into the tournament.",
  },
  {
    q: "What do the decimal odds mean for World Cup betting?",
    a: "Decimal odds show your total return per £/€/$ staked. A team at 5.00 means a £10 bet returns £50 (£40 profit + £10 stake) if they win. At 4.00, a £10 bet returns £40. Odds below 2.00 mean the team is favoured; odds above 10.00 indicate a long-shot. All odds listed here are in decimal (European) format.",
  },
  {
    q: "Which bookmaker offers the best World Cup 2026 winner odds?",
    a: "Based on our daily comparison, Betsson and 1xBet consistently offer the highest tournament winner odds. Betsson prices Spain at 5.75, France at 6.00, England at 7.50. 1xBet often matches or marginally undercuts Betsson for outright markets. We recommend checking both before placing any long-term bet.",
  },
  {
    q: "Who are the dark horses for World Cup 2026?",
    a: "Germany (10.00) and Morocco (45.00) are our top dark horse picks. Germany have a young, exciting squad with Wirtz and Musiala ready to break out on the biggest stage. Morocco shocked the world by reaching the 2022 semi-finals and return with a largely intact squad and growing confidence.",
  },
  {
    q: "How often are these World Cup odds updated?",
    a: "We update World Cup winner odds daily from Betsson, 1xBet, Bet365 and Betway. Odds fluctuate based on team news, injury updates and betting market activity. Odds tend to shorten for favourites as the tournament approaches and market confidence builds.",
  },
  {
    q: "How do I place a bet on a World Cup tournament winner?",
    a: "Register at a licensed bookmaker (Betsson or 1xBet are our top picks), navigate to Football → International → FIFA World Cup → Outright/Tournament Winner, select your team and enter your stake. Outright winner bets are settled after the Final on July 19, 2026. Ensure you review terms for each-way and each-group options.",
  },
];

const oddsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: oddsFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const cardStyle: React.CSSProperties = {
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
  borderRadius: "12px",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
  color: "var(--foreground)",
  transition: "border-color 0.15s, transform 0.15s",
};

export default function WorldCupOddsHub() {
  return (
    <>
      <Script
        id="ld-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

        {/* HEADER */}
        <section style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
          borderBottom: "1px solid var(--card-border)",
          padding: "40px 20px 36px",
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)",
              borderRadius: "20px", padding: "5px 14px", marginBottom: "16px",
              fontSize: "12px", color: "var(--accent)", fontWeight: 600,
            }}>
              <span style={{ width: "7px", height: "7px", background: "var(--accent)", borderRadius: "50%", display: "inline-block" }} />
              LIVE ODDS — UPDATED DAILY
            </div>
            <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, marginBottom: "12px", lineHeight: 1.2 }}>
              World Cup 2026 Odds<br />
              <span style={{ color: "var(--accent)" }}>All Teams Compared</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "640px", lineHeight: 1.65, marginBottom: "24px" }}>
              Compare World Cup 2026 winner odds for every team across Betsson, 1xBet, Bet365 and Betway.
              Click any team for a full breakdown of odds history, group stage fixtures and expert analysis.
            </p>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { val: "22+", label: "Teams" },
                { val: "4",  label: "Bookmakers" },
                { val: "48h", label: "Odds refresh" },
                { val: "Jun 11", label: "Kick-off" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "26px", fontWeight: 900, color: "var(--accent)" }}>{s.val}</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAMS GRID */}
        <section style={{ padding: "40px 20px 60px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            {[1, 2, 3, 4].map(tier => (
              <div key={tier} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <span style={{
                    background: tierLabel[tier].bg,
                    color: tierLabel[tier].color,
                    border: `1px solid ${tierLabel[tier].color}40`,
                    borderRadius: "8px", padding: "4px 12px",
                    fontSize: "12px", fontWeight: 700,
                  }}>
                    {tierLabel[tier].label}
                  </span>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "12px",
                }}>
                  {teams.filter(t => t.tier === tier).map((team) => (
                    <Link
                      key={team.slug}
                      href={`/world-cup-2026-odds/${team.slug}`}
                      style={cardStyle}
                    >
                      {/* Rank badge */}
                      <div style={{
                        minWidth: "32px", height: "32px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "8px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "13px", fontWeight: 700, color: "var(--muted)",
                      }}>
                        {teams.indexOf(team) + 1}
                      </div>

                      {/* Flag */}
                      <span style={{ fontSize: "30px", lineHeight: 1 }}>{team.flag}</span>

                      {/* Name + group */}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: "15px" }}>{team.name}</div>
                        <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>
                          Group {team.group}
                        </div>
                      </div>

                      {/* Odds */}
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--accent)" }}>
                          {team.odds}
                        </div>
                        <div style={{ fontSize: "10px", color: "var(--muted)", marginTop: "1px" }}>
                          {team.bookmaker}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div style={{ color: "var(--muted)", fontSize: "16px" }}>›</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{
              background: "linear-gradient(135deg, #1a2f1a, #0d1f2d)",
              border: "1px solid rgba(0,208,132,0.3)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
              marginBottom: "32px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>
                BEST VALUE FOR WORLD CUP 2026
              </div>
              <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, marginBottom: "12px" }}>
                Lock In Odds Before They Drop
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>
                Odds shorten as June 11 approaches. Get best price now across our top-rated bookmakers.
              </p>
              <a
                href={BETSSON_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{
                  background: "var(--accent)", color: "#000",
                  padding: "14px 32px", borderRadius: "8px",
                  fontWeight: 800, fontSize: "15px", textDecoration: "none",
                  display: "inline-block",
                }}
                data-affiliate="Betsson"
              >
                🏆 Bet at Betsson — Up to €100 Bonus
              </a>
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "14px" }}>
                18+ | Gamble Responsibly | T&Cs Apply
              </p>
            </div>

            {/* SEO text block */}
            <div style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "32px",
            }}>
              <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>
                How to Read World Cup 2026 Odds
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>
                The odds listed above are <strong style={{ color: "var(--foreground)" }}>decimal (European) format</strong> — the most common format used by Betsson, 1xBet, Bet365 and Betway.
                A team at <strong style={{ color: "var(--accent)" }}>5.00</strong> means a €10 bet returns €50 (€40 profit + €10 stake) if that team wins the tournament.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>
                <strong style={{ color: "var(--foreground)" }}>Spain at 5.75</strong> are the current market favourite —
                the tightest odds reflect back-to-back Euro 2024 and Nations League wins. As the group stage unfolds,
                these odds will shift significantly. Locking in value early can be smart.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7 }}>
                Click any team above for a full odds comparison across all four bookmakers, plus group stage fixture odds,
                Golden Boot picks and expert match previews.
              </p>
            </div>

            {/* Internal links */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { href: "/matches", label: "⚽ Live Match Odds" },
                { href: "/world-cup-2026-groups", label: "📋 Group Stage Draw" },
                { href: "/blog/top-favorites-to-win", label: "🏆 Top Favorites" },
                { href: "/blog/best-value-bets", label: "💰 Best Value Bets" },
                { href: "/blog/golden-boot-odds-2026", label: "👟 Golden Boot Odds" },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    background: "var(--accent-dim)", border: "1px solid var(--border-accent)",
                    color: "var(--accent)", padding: "8px 16px", borderRadius: "8px",
                    fontSize: "13px", fontWeight: 600, textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "48px 0 32px" }}>
          <Script id="odds-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oddsFaqSchema) }} />
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>World Cup 2026 Odds — FAQs</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "24px" }}>Common questions about World Cup 2026 betting odds.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {oddsFaqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", overflow: "hidden" }}>
                <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 600, fontSize: "14px", color: "var(--foreground)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 800, fontSize: "18px", lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: "0 18px 14px", color: "var(--muted)", fontSize: "13px", lineHeight: 1.75, borderTop: "1px solid var(--card-border)" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section style={{ padding: "20px", background: "#1a1a2e", borderTop: "1px solid var(--card-border)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ color: "var(--muted)", fontSize: "12px", margin: 0 }}>
              Odds are indicative and updated regularly. Always check the bookmaker&apos;s site for the latest prices.
              18+ only. Gamble responsibly. worldcupbet26.com contains affiliate links.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
