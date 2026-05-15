import {notFound} from "next/navigation";
import {Link} from "@/i18n/navigation";

const articles: Record<string, {title: string; description: string; content: string}> = {
  "group-stage-preview": {title: "World Cup 2026 Group Stage Preview", description: "Complete guide.", content: "The 2026 FIFA World Cup expands to 48 teams across USA, Canada, and Mexico. Brazil are favorites. England at 8/1 represent value."},
  "top-favorites-to-win": {title: "World Cup 2026 Top Favorites", description: "Brazil, France, England lead the odds.", content: "Brazil lead at 5/1. France at 6/1. Argentina at 7/1. England at 8/1 represent standout value."},
  "best-value-bets": {title: "Best Value Bets", description: "Find the best value bets.", content: "Morocco at 25/1 are compelling. USA at 20/1 benefit from home advantage. Japan underrated at 33/1."},
  "how-to-bet-world-cup": {title: "How to Bet on World Cup 2026", description: "Beginner guide.", content: "Match Result is the most popular market. Always compare odds. Bet responsibly."},
};

export async function generateMetadata(props: {params: {slug: string}}) {
  const a = articles[props.params.slug];
  if (!a) return {};
  return {title: a.title + " | WorldCupBet26", description: a.description};
}

export default function ArticlePage(props: {params: {slug: string}}) {
  const a = articles[props.params.slug];
  if (!a) notFound();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-green-500 mb-6 block">Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-4">{a.title}</h1>
      <p className="text-gray-400 mb-8">{a.description}</p>
      <p className="leading-relaxed">{a.content}</p>
    </div>
  );
}
