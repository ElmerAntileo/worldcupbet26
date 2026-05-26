import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locales = ["en", "es", "pt", "de", "fr", "it"];
  const base = "https://www.worldcupbet26.com";
  function postUrl(l: string) {
    return l === "en"
      ? `${base}/blog/best-world-cup-2026-betting-odds`
      : `${base}/${l}/blog/best-world-cup-2026-betting-odds`;
  }
  return {
    title: "Best World Cup 2026 Betting Odds — Compare Top Bookmakers | WorldCupBet26",
    description:
      "Find the best World Cup 2026 betting odds across 30+ bookmakers. We compare Bet365, 1xBet, Betway and more so you always get maximum value on every match.",
    alternates: {
      canonical: postUrl(params.locale),
      languages: Object.fromEntries(locales.map((l) => [l, postUrl(l)])),
    },
    openGraph: {
      title: "Best World Cup 2026 Betting Odds — Compare Top Bookmakers",
      description:
        "Find the best World Cup 2026 betting odds across 30+ bookmakers. Updated live for every group stage and knockout match.",
      type: "article",
      publishedTime: "2026-05-01T00:00:00Z",
      modifiedTime: "2026-05-24T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}

const bookmakerComparison = [
  { name: "Bet365",  rating: "4.9★", bonus: "Up to $500",     odds: "2.10", link: "https://bet365.com",      highlight: false },
  { name: "1xBet",   rating: "4.7★", bonus: "100% up to €100", odds: "2.15", link: ONEXBET_URL,               highlight: true  },
  { name: "Betway",  rating: "4.7★", bonus: "100% up to €100", odds: "2.05", link: "https://betway.com",      highlight: false },
  { name: "888Sport",rating: "4.6★", bonus: "Bet $10 Get $30", odds: "2.15", link: "https://888sport.com",    highlight: false },
  { name: "Betsson", rating: "4.8★", bonus: "100% up to €100", odds: "2.10", link: BETSSON_URL,               highlight: false },
];

export default function BestOddsPost({ params }: Props) {
  const isDE = params.locale === "de";
  const publishDate = "24 May 2026";

  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
        borderBottom: "1px solid var(--card-border)",
        padding: "48px 20px 40px",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>ODDS GUIDE</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated {publishDate}</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Best World Cup 2026 Betting Odds:<br />How to Always Find Maximum Value
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, maxWidth: "700px", marginBottom: "28px" }}>
            With 48 group stage matches, 16 knockout games and a tournament winner market that already has
            Brazil at 5/1 — the 2026 FIFA World Cup is the biggest betting event of the decade.
            In this guide we break down where to find the best odds, which bookmakers consistently offer
            the highest prices, and how to compare across all of them in seconds.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/matches" style={{ background: "var(--accent)", color: "#000", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Compare Live Odds →
            </Link>
            <Link href="/blog" style={{ background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "12px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* SECTION 1 */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px", marginTop: "0" }}>
          Why Odds Comparison Matters for World Cup Betting
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
          The difference between the best and worst odds on a single match is rarely obvious — but it compounds
          dramatically over a full tournament. Consider a €100 bet on Brazil to win the World Cup:
          at 5/1 (Bet365) you return €600; at 9/2 (another bookmaker) you return only €550.
          Over 64 matches that &quot;small&quot; edge is the difference between a profitable tournament and a losing one.
        </p>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
          WorldCupBet26 aggregates live odds from 32+ licensed bookmakers so you never leave value on the table.
          Our match pages update in real time — bookmark{" "}
          <Link href="/matches" style={{ color: "var(--accent)", fontWeight: 600 }}>the odds comparison page</Link>
          {" "}and check it before every bet.
        </p>

        {/* BOOKMAKER TABLE */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>
          Top 5 Bookmakers for World Cup 2026 Odds
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
          We evaluated 30+ sportsbooks on odds margin, market depth, live streaming, payout speed, and bonus value.
          Here are our top picks — with sample odds on <strong style={{ color: "var(--foreground)" }}>USA vs Mexico</strong> (Group B, Jun 22) as the benchmark:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr", gap: "8px", padding: "8px 16px", fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            <span>Bookmaker</span><span>Rating</span><span>Welcome Bonus</span><span>USA odds</span><span></span>
          </div>
          {bookmakerComparison
            .filter((bk) => !(isDE && bk.name === "Betsson"))
            .map((bk) => (
              <div key={bk.name} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr",
                gap: "8px", alignItems: "center",
                background: bk.highlight ? "rgba(0,208,132,0.06)" : "var(--card-bg)",
                border: `1px solid ${bk.highlight ? "rgba(0,208,132,0.3)" : "var(--card-border)"}`,
                borderRadius: "8px", padding: "14px 16px",
              }}>
                <div style={{ fontWeight: 700, fontSize: "14px" }}>
                  {bk.name}
                  {bk.highlight && (
                    <span style={{ marginLeft: "6px", background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "3px", padding: "1px 6px", fontSize: "9px", fontWeight: 800 }}>BEST ODDS</span>
                  )}
                </div>
                <div style={{ color: "#ffd700", fontSize: "13px" }}>{bk.rating}</div>
                <div style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 600 }}>{bk.bonus}</div>
                <div style={{ fontWeight: 700, fontSize: "16px", color: bk.highlight ? "var(--accent)" : "var(--foreground)" }}>{bk.odds}</div>
                <div>
                  <a href={bk.link} target="_blank" rel="noopener noreferrer nofollow sponsored"
                    style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "7px 14px", borderRadius: "6px", fontWeight: 700, fontSize: "12px", textDecoration: "none", whiteSpace: "nowrap" }}>
                    Bet Now
                  </a>
                </div>
              </div>
            ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "12px", marginBottom: "32px" }}>
          Odds shown are indicative for USA vs Mexico (Group B). Always verify current prices on the bookmaker&apos;s site. 18+. T&Cs apply.
          {isDE && " ⚠️ Betsson möglicherweise in Deutschland nicht verfügbar."}
        </p>

        {/* SECTION 2 */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px" }}>
          How to Find the Best World Cup 2026 Betting Odds
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
          There are three proven strategies for consistently beating the average bettor on World Cup odds:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          {[
            {
              n: "1",
              title: "Always compare before placing",
              body: "A 0.10 difference in decimal odds is a 5% swing in value. Use our live comparison table to check all bookmakers on every match before committing.",
            },
            {
              n: "2",
              title: "Have accounts at 3+ bookmakers",
              body: "No single bookmaker offers the best price on every market. Bet365 often leads on match result; 1xBet on Asian handicap; Betway on accumulators. Having accounts at all three gives you access to the best price every time.",
            },
            {
              n: "3",
              title: "Claim welcome bonuses strategically",
              body: "Each of the top 5 bookmakers above offers a welcome bonus. Spread your initial deposits to unlock €500+ in bonus funds — which acts as an insurance buffer during the group stage.",
            },
            {
              n: "4",
              title: "Use early payout and cashout features",
              body: "Betway and Bet365 both offer Early Payout on tournament winner bets if your team goes 2-0 up in a knockout game. 1xBet offers cashout on virtually every market, including accumulators.",
            },
          ].map((s) => (
            <div key={s.n} style={{ display: "flex", gap: "16px", background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "20px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", flexShrink: 0 }}>{s.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{s.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 3 */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px" }}>
          Best Odds by Market Type — World Cup 2026
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "14px", marginBottom: "32px" }}>
          {[
            { market: "Match Result (1X2)", leader: "Bet365 & 1xBet", detail: "Consistently 3-5% lower margin than industry average." },
            { market: "Asian Handicap", leader: "1xBet", detail: "Widest range of lines and best prices on handicap betting." },
            { market: "Over/Under Goals", leader: "Betway", detail: "Strong on totals with Early Payout if 3 goals scored by HT." },
            { market: "Tournament Winner", leader: "Bet365", detail: "Best ante-post prices and boosted each-way offers." },
            { market: "Top Goalscorer", leader: "1xBet & 888Sport", detail: "Player prop prices consistently 8-12% better than average." },
            { market: "Both Teams to Score", leader: "Betway", detail: "BTTS accumulators with Acca Insurance up to €25." },
          ].map((m) => (
            <div key={m.market} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>{m.market}</div>
              <div style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>🏆 {m.leader}</div>
              <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{m.detail}</div>
            </div>
          ))}
        </div>

        {/* SECTION 4 */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px" }}>
          World Cup 2026 Outright Odds — Tournament Winner
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
          The outright market is where odds differences are most significant. Here are the current best available
          prices on the top nations to lift the trophy in New Jersey on July 19, 2026:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "10px", marginBottom: "32px" }}>
          {[
            { team: "🇧🇷 Brazil",    odds: "5/1",  dec: "6.00", note: "Favorites; strong squad depth" },
            { team: "🇫🇷 France",    odds: "6/1",  dec: "7.00", note: "Defending finalists; loaded attack" },
            { team: "🇦🇷 Argentina", odds: "7/1",  dec: "8.00", note: "World champions; Messi farewell?" },
            { team: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", odds: "8/1",  dec: "9.00", note: "Best value among top 5" },
            { team: "🇩🇪 Germany",   odds: "10/1", dec: "11.00", note: "Host-region advantage" },
            { team: "🇪🇸 Spain",     odds: "10/1", dec: "11.00", note: "2024 Euro champions" },
          ].map((t) => (
            <div key={t.team} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{t.team}</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent)", marginBottom: "2px" }}>{t.dec}</div>
              <div style={{ fontSize: "10px", color: "var(--muted)" }}>{t.odds} fractional</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>{t.note}</div>
            </div>
          ))}
        </div>

        {/* CTA BLOCK */}
        <div style={{ background: "linear-gradient(135deg, #0d1117, #1a2332)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>Ready to bet on World Cup 2026?</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
            Compare live odds across 32+ bookmakers on every group stage match. Click below to see our full odds comparison tool — updated in real time from the opening game on June 11.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/matches" style={{ background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
              View All Match Odds →
            </Link>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
              style={{ background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }} data-affiliate="1xBet">
              Claim 1xBet Bonus
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {[
            {
              q: "Which bookmaker has the best World Cup 2026 odds?",
              a: "1xBet and Bet365 consistently offer the highest odds on 1X2 football markets. For tournament winner and player props, Bet365 and 888Sport lead. Our live comparison tool always shows the current best price.",
            },
            {
              q: "Can I bet on the World Cup 2026 from Germany?",
              a: "Yes — 1xBet and Betway are available to German bettors. Note that Betsson may be geo-restricted in Germany. Always check availability before registering.",
            },
            {
              q: "What is the best welcome bonus for World Cup 2026 betting?",
              a: "Bet365 offers up to $500, while 1xBet and Betway both offer a 100% match up to €100. We recommend claiming multiple welcome offers across 3-4 bookmakers for maximum value.",
            },
            {
              q: "How often are odds updated on WorldCupBet26?",
              a: "Our odds pull from bookmaker feeds in real time. Prices for match result markets typically refresh every 60 seconds; live in-play markets update continuously.",
            },
          ].map((faq) => (
            <div key={faq.q} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "18px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "8px", color: "var(--foreground)" }}>❓ {faq.q}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>

        {/* BACK LINK */}
        <Link href="/blog" style={{ color: "var(--accent)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
          ← Back to all articles
        </Link>

        <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "24px" }}>
          18+ only. Gambling should be fun — please bet responsibly. Affiliate disclosure: WorldCupBet26 earns a commission on qualifying sign-ups at no extra cost to you.
        </p>
      </div>
    </article>
  );
}
