import { Link } from "@/i18n/navigation";

const articles = [
  { slug: "group-stage-preview", title: "World Cup 2026 Group Stage Preview", description: "Complete guide to the 2026 FIFA World Cup group stage with betting odds and tips.", tag: "Preview" },
  { slug: "top-favorites-to-win", title: "World Cup 2026 Top Favorites to Win", description: "Brazil, France, England and Argentina lead the betting odds.", tag: "Analysis" },
  { slug: "best-value-bets", title: "Best Value Bets and Dark Horses", description: "Find the best value bets. Dark horse teams with strong odds.", tag: "Value Bets" },
  { slug: "how-to-bet-world-cup", title: "How to Bet on World Cup 2026", description: "Complete beginner guide to World Cup 2026 betting markets and strategy.", tag: "Guide" },
];

export const metadata = { title: "World Cup 2026 Betting Tips | WorldCupBet26", description: "Expert betting tips and guides for the 2026 FIFA World Cup." };

export default function BlogPage() {
  return (
    <div style={{maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem"}}>
      <div style={{marginBottom: "2rem"}}>
        <h1 className="section-title">Betting Tips and Guides</h1>
        <p style={{color: "var(--muted)", fontSize: "1rem"}}>Expert analysis and guides for World Cup 2026 betting.</p>
      </div>
      <div style={{display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))"}}>
        {articles.map((article) => (
          <Link key={article.slug} href={("/blog/" + article.slug)}>
            <div className="card" style={{padding: "1.5rem", height: "100%"}}>
              <span style={{background: "var(--accent)", color: "#0d1117", fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase"}}>{article.tag}</span>
              <h2 style={{fontSize: "1.1rem", fontWeight: 700, margin: "0.75rem 0 0.5rem", color: "var(--foreground)"}}>{article.title}</h2>
              <p style={{color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6}}>{article.description}</p>
              <div style={{marginTop: "1rem", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600}}>Read more</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
