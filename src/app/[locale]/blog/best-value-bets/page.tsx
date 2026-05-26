import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
const slug = "best-value-bets";
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Best Value Bets World Cup 2026 — Dark Horses & Over/Under Tips | WorldCupBet26",
    description:
      "Find the best value bets for the 2026 FIFA World Cup. Dark horses, BTTS tips, Over/Under picks and accumulator ideas with odds compared across Bet365, 1xBet and Betway.",
    alternates: {
      canonical: postUrl(params.locale),
      languages: Object.fromEntries(locales.map((l) => [l, postUrl(l)])),
    },
    openGraph: {
      title: "Best World Cup 2026 Value Bets — Dark Horses & Betting Tips",
      description: "USA +2000, Morocco +2500, Germany +1100 — where is the real value in the 2026 World Cup betting markets? Our expert picks explained.",
      type: "article",
      publishedTime: "2026-05-25T00:00:00Z",
      modifiedTime: "2026-05-25T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}

const faqs = [
  {
    q: "What is a value bet in World Cup betting?",
    a: "A value bet occurs when the odds offered by a bookmaker imply a lower probability than you believe the true probability to be. For example, if you believe Germany have a 12% chance of winning the World Cup but the bookmaker prices them at +1100 (implying ~8.3%), that's a value bet. Finding value, not just picking winners, is the key to profitable long-term betting.",
  },
  {
    q: "Which team is the best dark horse for World Cup 2026?",
    a: "Germany (+1100) and the USA (+2000) are widely considered the best dark horse picks. Germany are reigning Euro 2024 champions and significantly underpriced. The USA benefit from home advantage across all three host nations, which statistically boosts win probability by 20–30%.",
  },
  {
    q: "Is Over 2.5 goals a good World Cup bet?",
    a: "Yes — historically, World Cup matches average around 2.6 goals per game. With the expanded 48-team field in 2026 bringing more mismatched group stage fixtures, the Over 2.5 market on selected matches offers excellent value. We particularly like Over 2.5 in group stage matches involving Brazil, Spain, France and Germany.",
  },
  {
    q: "What are BTTS tips for World Cup 2026?",
    a: "Both Teams to Score (BTTS — Yes) is most effective in closely matched knockout round fixtures. In the group stage, it's risky as weaker teams may park the bus. Look for BTTS on matches like France vs England, Argentina vs Germany or Spain vs Brazil — elite teams who all attack aggressively.",
  },
  {
    q: "How should I build a World Cup accumulator?",
    a: "A World Cup accumulator (parlay) combines multiple selections for a larger potential payout. Keep selections to 3–5 legs for best risk/reward. Focus on favourite home wins and Over 2.5 goals markets. Avoid combining too many outright picks — stick to match results and totals for accumulators.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Value Bets World Cup 2026 — Dark Horses & Betting Tips",
      description: "Expert value bets, dark horse picks, BTTS tips and accumulator ideas for the 2026 FIFA World Cup.",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      author: { "@type": "Organization", name: "WorldCupBet26" },
      publisher: { "@type": "Organization", name: "WorldCupBet26", url: "https://www.worldcupbet26.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ValueBetsPage({ params }: Props) {
  const isDE = params.locale === "de";
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>VALUE BETS</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated 25 May 2026 · Tournament starts June 11</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
            Best Value Bets for World Cup 2026: Dark Horses, BTTS & Over/Under Tips
          </h1>
          <p style={{ color: "var(--muted-light)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
            The 2026 World Cup is the biggest betting event in US history, with $3.1 billion in projected legal handle. The outright markets for Spain and France are correctly priced — but deeper in the market, significant value exists for smart bettors. Here are our best bets by category.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" style={{ fontSize: "14px" }} data-affiliate="1xBet">
              Bet at 1xBet — 100% up to €100 →
            </a>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "1px solid var(--border-bright)", color: "var(--foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }} data-affiliate="Betsson">
              Compare at Betsson →
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>

        {/* DARK HORSES */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>🐴 Best Dark Horse Picks</h2>

        {[
          {
            team: "Germany", flag: "🇩🇪", odds: "+1100", label: "⭐ TOP PICK",
            body: "Germany are the standout value in the entire outright market. As reigning Euro 2024 champions, playing on home soil (they co-hosted the Euros) with the tournament's best transitional attack led by Jamal Musiala, they are comprehensively underrated at +1100. The market prices them as a 5th or 6th favourite, but tactically and technically they have the tools to beat any team in this field. Thomas Müller's experience alongside Musiala's brilliance makes them a compelling portfolio pick. We recommend a 10–15% stake allocation.",
          },
          {
            team: "USA", flag: "🇺🇸", odds: "+2000", label: "HOME ADVANTAGE",
            body: "The USA benefit from a structural advantage that no other team possesses: every match they play will be on home soil, in front of a partisan crowd, in familiar conditions. Historical analysis shows that host nations outperform their pre-tournament odds by an average of 25–35% in terms of actual results. Pulisic, Reyna and Weah are genuine Premier League quality, and their squad has matured significantly since 2022. Even a quarter-final run would represent excellent value at +2000.",
          },
          {
            team: "Morocco", flag: "🇲🇦", odds: "+2500", label: "PROVEN PEDIGREE",
            body: "Morocco were the story of the 2022 World Cup, becoming the first African nation to reach the semi-finals. The core of that squad is still intact and they have only gotten stronger. Their defensive organisation is elite — they kept clean sheets against Spain and Portugal in 2022. At +2500, you're getting a team that has already proven it can beat top European nations on the biggest stage. A legitimate outside bet at this price.",
          },
          {
            team: "Portugal", flag: "🇵🇹", odds: "+1400", label: "SQUAD DEPTH",
            body: "This will be Cristiano Ronaldo&apos;s final World Cup and Portugal have quietly assembled one of the deepest squads in the tournament. Bruno Fernandes, Rafael Leão, Bernardo Silva and João Félix form a devastating attacking unit that doesn't rely on Ronaldo the way it once did. At +1400, Portugal offer better value than England (+650) given the quality differential between the squads is minimal.",
          },
        ].map((t) => (
          <div key={t.team} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px 24px", marginBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "28px" }}>{t.flag}</span>
              <span style={{ fontWeight: 800, fontSize: "16px" }}>{t.team}</span>
              <span style={{ fontWeight: 900, fontSize: "18px", color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{t.odds}</span>
              <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>{t.label}</span>
            </div>
            <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{t.body}</p>
          </div>
        ))}

        {/* OVER/UNDER */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "40px 0 16px" }}>⚽ Over/Under Goals Tips</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          The Over/Under market is one of the most consistent value generators in World Cup betting. Historically, matches average 2.6 goals per game across the full tournament — but this number is heavily skewed by the group stage, where top nations routinely beat weaker opponents by 3+ goals.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "40px" }}>
          {[
            { pick: "Over 2.5 Goals", context: "Top team vs weak group opponent", odds: "Approx. -110 to -130", note: "Best when Spain, Germany, France or Brazil face lower-ranked sides in the group stage." },
            { pick: "Under 2.5 Goals", context: "Knockout round, evenly matched", odds: "Approx. -110 to -120", note: "Later knockout rounds tend to tighten up. Teams play more cautiously with elimination on the line." },
            { pick: "Both Teams to Score — Yes", context: "Top vs top, knockout stage", odds: "Approx. -105 to +100", note: "Look for BTTS in matches like France vs England, Spain vs Brazil. Both teams attack and press high." },
            { pick: "Over 3.5 Goals", context: "Major mismatch group game", odds: "Approx. +140 to +160", note: "Spain, Germany and France are projected for 7+ group stage goals. Single big game value available." },
          ].map((p) => (
            <div key={p.pick} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px" }}>
              <div style={{ fontWeight: 800, fontSize: "15px", color: "var(--accent)", marginBottom: "6px" }}>{p.pick}</div>
              <div style={{ fontSize: "12px", color: "var(--gold)", fontWeight: 700, marginBottom: "6px" }}>{p.context}</div>
              <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{p.odds}</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{p.note}</div>
            </div>
          ))}
        </div>

        {/* ACCUMULATOR SECTION */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>🔢 Accumulator Ideas</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          Accumulators (parlays) combine multiple selections for a larger potential payout. The key is keeping selections to a manageable number and focusing on markets where you have an edge. Avoid outright winner picks in accumulators — variance is too high. Instead, combine Over 2.5 goals and Match Result picks from group stage games.
        </p>
        <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--accent)", marginBottom: "14px" }}>📋 Sample 4-Leg Accumulator (Group Stage)</h3>
          {[
            { pick: "Spain to win Group H", odds: "+120" },
            { pick: "France Over 2.5 goals in group stage match", odds: "-115" },
            { pick: "Germany to win their group", odds: "+140" },
            { pick: "Brazil Over 2.5 goals in group stage match", odds: "-120" },
          ].map((l, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "14px" }}>
              <span style={{ color: "var(--muted-light)" }}>Leg {i + 1}: {l.pick}</span>
              <span style={{ fontWeight: 800, color: "var(--accent)" }}>{l.odds}</span>
            </div>
          ))}
          <div style={{ marginTop: "12px", fontSize: "13px", color: "var(--muted)" }}>
            Combined parlay payout: approximately +900 to +1200 depending on bookmaker. For a $10 stake, potential return of ~$100–$120.
          </div>
        </div>

        {/* VALUE METHODOLOGY */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>How We Find Value Bets</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
          Our value assessment process starts with assigning true probability to each outcome. We use a combination of recent form, squad quality, historical tournament data, and contextual factors (home advantage, injury news, draw bracket difficulty). We then convert that probability to decimal odds, and compare against what the bookmakers are offering.
        </p>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
          <strong style={{ color: "var(--foreground)" }}>Example:</strong> If we assess Germany have a 12% chance of winning the World Cup (= decimal odds of 8.33, or approximately +733 in American format), and Bet365 is offering +1100 (implying only 8.3%), that represents significant positive expected value. We compare across bookmakers to ensure we always take the best available price.
        </p>

        {!isDE && (
          <div style={{ background: "linear-gradient(135deg, #071525, #0a1e12)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>💰 Betsson — Best World Cup Value Markets</div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px" }}>Boosted odds · Acca insurance · Early cashout on all World Cup bets</div>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" data-affiliate="Betsson">
              Claim 100% Bonus at Betsson →
            </a>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ · T&Cs apply · Bet responsibly</div>
          </div>
        )}

        {/* FAQ */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "18px 20px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px" }}>{f.q}</h3>
              <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "12px" }}>Related guides:</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/blog/top-favorites-to-win", label: "Tournament Favorites" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/blog/group-stage-preview", label: "Group Stage Preview" },
              { href: "/blog/how-to-bet-world-cup", label: "How to Bet Guide" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
