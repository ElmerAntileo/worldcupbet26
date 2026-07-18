import { OG_IMAGE } from "@/lib/og";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string; locale: string } };

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
function postUrl(slug: string, l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

// Fallback summaries for any slugs that don&apos;t have a dedicated page.tsx
// (The dedicated pages take priority via Next.js file-based routing.)
const articles: Record<string, { title: string; description: string; content: string }> = {
  "group-stage-preview": {
    title: "World Cup 2026 Group Stage Preview",
    description:
      "Complete guide to the 2026 FIFA World Cup group stage — group winner odds, qualification predictions and betting tips for all 12 groups.",
    content:
      "The 2026 FIFA World Cup expands to 48 teams across USA, Canada and Mexico. Spain top Group H as 79% favourites. The USA lead Group D on home soil. Brazil dominate Group C projecting 7.4 group stage goals. Argentina face Germany in what could be the group stage match of the tournament.",
  },
  "top-favorites-to-win": {
    title: "World Cup 2026 Top Favorites to Win",
    description:
      "Spain (+450) and France (+500) lead the 2026 World Cup outright odds. Full analysis of England, Brazil, Argentina and dark horses Germany and USA.",
    content:
      "Spain and France enter the 2026 World Cup as co-favourites. Germany at +1100 are the standout value play — reigning Euro 2024 champions with Musiala and Havertz. England (+650) are genuine contenders with Kane at his peak.",
  },
  "best-value-bets": {
    title: "Best Value Bets for World Cup 2026",
    description:
      "Find the best value bets for World Cup 2026. Dark horses, BTTS tips, Over/Under picks and accumulator ideas.",
    content:
      "The standout value picks for 2026: Germany at +1100, USA at +2000 (home advantage), Morocco at +2500. Over 2.5 goals is the best recurring bet for top teams vs weak group opponents.",
  },
  "how-to-bet-world-cup": {
    title: "How to Bet on World Cup 2026",
    description:
      "Step-by-step beginner guide to World Cup 2026 betting. Markets explained, odds formats, bonus guide and recommended bookmakers.",
    content:
      "Betting on the World Cup starts with choosing a licensed bookmaker. The most popular markets are Match Result, Over/Under Goals, Both Teams to Score and the Tournament Winner. Always compare odds across at least two bookmakers before placing.",
  },
  "best-world-cup-betting-sites": {
    title: "Best World Cup 2026 Betting Sites — Safe & Regulated Sportsbooks",
    description:
      "Top-rated World Cup 2026 betting sites with best bonuses and odds. Compare Betsson, 1xBet, Bet365, Betway & more. Live odds, expert tips & secure betting.",
    content:
      "Finding the right sportsbook for World Cup 2026 betting is crucial. You want a licensed, regulated platform that offers competitive odds, reliable payouts, and exclusive World Cup bonuses. Betsson offers 100% up to €100 with World Cup specials. 1xBet provides 130+ betting markets per match. Bet365 features the fastest live odds updates and best mobile app. Betway runs constant promotions throughout the tournament. All require ID verification (24-48 hours) so sign up NOW before June 11.",
  },
  "world-cup-betting-guide": {
    title: "World Cup 2026 Betting Guide — Complete Overview for Beginners",
    description:
      "Complete World Cup 2026 betting guide for beginners. Learn betting markets, odds types, strategy tips, and how to find the best sportsbooks. June 11-July 19.",
    content:
      "The 2026 FIFA World Cup runs June 11 to July 19 with 80 matches across 48 teams. Betting markets include Match Result (1X2), Over/Under Goals, Both Teams to Score, Asian Handicap, Correct Score, Tournament Winner, and Player Props. Key strategy: set a bankroll (e.g., €1,000), bet no more than 2-5% per match, find value bets where odds underestimate probability, and compare odds across multiple sportsbooks. Group stage bets offer best value. Use WorldCupBet26's odds comparison to always bet at the highest available odds.",
  },
  "world-cup-odds-explained": {
    title: "World Cup 2026 Odds Explained — How to Read & Understand Betting Odds",
    description:
      "Learn how World Cup 2026 betting odds work. Understand decimal, fractional, moneyline odds formats. Learn to calculate profits and find value.",
    content:
      "Betting odds represent probability expressed as numbers. Decimal odds (1.65, 2.50) are most common in World Cup betting. Calculate returns: Stake × Odds = Total Return. €10 at 1.65 = €16.50 total (€6.50 profit). Implied probability: 100 ÷ Odds = Percentage. 1.65 odds = 60.6% probability. Fractional odds (3/5, 7/2) show profit only. Moneyline odds (-165, +370) are used in USA. Always compare odds across sportsbooks — a 0.05 difference per bet adds up across dozens of matches. Smart bettors find value when true probability exceeds implied probability.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = articles[params.slug];
  if (!a) return { title: "Article Not Found" };
  return {
    title: a.title,
    description: a.description,
    alternates: {
      canonical: postUrl(params.slug, "en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(params.slug, l)])), "x-default": postUrl(params.slug, "en") },
    },
    openGraph: {
      title: a.title,
      description: a.description,
      type: "article",
        images: [OG_IMAGE],
  },
  };
}

export default function ArticlePage({ params }: Props) {
  const a = articles[params.slug];
  if (!a) notFound();
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.25rem" }}>
      <Link href="/blog" style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 600, marginBottom: "24px", display: "inline-block" }}>
        ← Back to Blog
      </Link>
      <h1 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, marginBottom: "12px", lineHeight: 1.2 }}>{a.title}</h1>
      <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "32px" }}>{a.description}</p>
      <p style={{ color: "var(--muted-light)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>{a.content}</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {[
          { href: "/blog/best-world-cup-betting-sites", label: "Best Betting Sites" },
          { href: "/blog/world-cup-betting-guide", label: "Betting Guide" },
          { href: "/blog/world-cup-odds-explained", label: "Odds Explained" },
          { href: "/blog/best-world-cup-2026-betting-odds", label: "Best Odds" },
          { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
          { href: "/blog/top-favorites-to-win", label: "Tournament Favorites" },
          { href: "/blog/best-value-bets", label: "Value Bets" },
          { href: "/blog/group-stage-preview", label: "Group Stage Preview" },
          { href: "/blog/how-to-bet-world-cup", label: "How to Bet" },
        ]
          .filter((l) => !l.href.endsWith(params.slug))
          .map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
      </div>
    </div>
  );
}
