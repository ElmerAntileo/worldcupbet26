import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Cup 2026 Betting Tips, Odds Guides & Predictions | WorldCupBet26",
  description:
    "Expert World Cup 2026 betting guides: Golden Boot odds, group stage predictions, tournament winner tips, value bets and how-to guides. Updated daily.",
};

const articles = [
  {
    slug: "golden-boot-odds-2026",
    title: "World Cup 2026 Golden Boot Odds: Mbappé, Kane & Top Scorer Picks",
    description: "Mbappé (+600) leads the Golden Boot market. Compare top scorer odds for Kane, Yamal, Haaland and more across Bet365, 1xBet and Betway.",
    tag: "Golden Boot",
    hot: true,
  },
  {
    slug: "best-world-cup-2026-betting-odds",
    title: "Best World Cup 2026 Betting Odds: How to Find Maximum Value",
    description: "Compare odds across 30+ bookmakers, find the best prices by market type, and claim the highest welcome bonuses for the 2026 World Cup.",
    tag: "Odds Guide",
    hot: false,
  },
  {
    slug: "top-favorites-to-win",
    title: "World Cup 2026 Favorites to Win: Outright Odds & Best Bets",
    description: "Spain (+450) and France (+500) lead the outright market. Full odds comparison for England, Brazil, Argentina and dark horses Germany and USA.",
    tag: "Tournament Winner",
    hot: false,
  },
  {
    slug: "group-stage-preview",
    title: "World Cup 2026 Group Stage Preview: All 12 Groups Analysed",
    description: "Complete group-by-group preview with qualifying predictions, group winner odds and betting tips for all 36 group stage matches.",
    tag: "Group Stage",
    hot: false,
  },
  {
    slug: "best-value-bets",
    title: "Best Value Bets World Cup 2026: Dark Horses, BTTS & Accumulator Tips",
    description: "Germany (+1100), USA (+2000) and Morocco (+2500) are the standout value picks. Plus BTTS and Over/Under tips for the group stage.",
    tag: "Value Bets",
    hot: false,
  },
  {
    slug: "how-to-bet-world-cup",
    title: "How to Bet on World Cup 2026: Complete Beginner Guide",
    description: "All betting markets explained: Match Result, Over/Under, BTTS, Asian Handicap, Golden Boot. Step-by-step guide with odds formats and bonus tips.",
    tag: "Beginner Guide",
    hot: false,
  },
];

export default function BlogPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 className="section-title">World Cup 2026 Betting Tips & Guides</h1>
        <p style={{ color: "var(--muted)", fontSize: "1rem", maxWidth: "600px" }}>
          Expert odds analysis, predictions and strategy guides for the 2026 FIFA World Cup — updated daily throughout the tournament.
        </p>
      </div>
      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
        {articles.map((article) => (
          <Link key={article.slug} href={"/blog/" + article.slug} style={{ textDecoration: "none" }}>
            <div className="card" style={{ padding: "1.5rem", height: "100%", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                  {article.tag}
                </span>
                {article.hot && (
                  <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>
                    🔥 NEW
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--foreground)", lineHeight: 1.4 }}>{article.title}</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{article.description}</p>
              <div style={{ marginTop: "1rem", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600 }}>Read more →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
