import {Link} from "@/i18n/navigation";

const articles = [
  {slug: "group-stage-preview", title: "World Cup 2026 Group Stage Preview", description: "Complete guide to the 2026 FIFA World Cup group stage with betting odds and tips."},
  {slug: "top-favorites-to-win", title: "World Cup 2026 Top Favorites to Win", description: "Brazil, France, England and Argentina lead the World Cup 2026 betting odds."},
  {slug: "best-value-bets", title: "World Cup 2026 Best Value Bets and Dark Horses", description: "Find the best value bets for World Cup 2026."},
  {slug: "how-to-bet-world-cup", title: "How to Bet on World Cup 2026", description: "Complete beginner guide to betting on the 2026 FIFA World Cup."},
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">World Cup 2026 Betting Tips and Guides</h1>
      <div className="grid gap-6">
        {articles.map((article) => (
          <Link key={article.slug} href={/blog/ + article.slug}>
            <div className="border rounded-lg p-6 hover:border-green-500 transition-colors">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-400">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
