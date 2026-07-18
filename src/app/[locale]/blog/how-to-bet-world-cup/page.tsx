import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
const slug = "how-to-bet-world-cup";
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How to Bet on the World Cup 2026 — Complete Beginner Guide",
    description:
      "Learn how to bet on World Cup 2026 with this complete guide. Understand betting markets, odds formats, how to claim bonuses and which bookmakers to use. Step-by-step for beginners.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "How to Bet on World Cup 2026 — Step-by-Step Guide for Beginners",
      description: "Match Result, Handicap, BTTS, Over/Under, Top Scorer — all World Cup betting markets explained for beginners.",
      type: "article",
      publishedTime: "2026-05-25T00:00:00Z",
      modifiedTime: "2026-05-25T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}

const faqs = [
  {
    q: "What is the easiest bet for World Cup 2026?",
    a: "The easiest and most popular bet is the Match Result (also called 1X2). You pick whether the home team wins (1), the match is a draw (X) or the away team wins (2). Odds are always displayed clearly and the outcome is simple — perfect for beginners.",
  },
  {
    q: "How do I read World Cup betting odds?",
    a: "Betting odds are displayed in three main formats: American (+500), Decimal (6.00) and Fractional (5/1). They all mean the same thing — for every $1 bet, you win $5 profit. American odds with a + sign show how much you win on a $100 bet. American odds with a - sign show how much you need to bet to win $100. Decimal odds multiply your stake by the displayed number (2.10 × $10 = $21 return including stake).",
  },
  {
    q: "Can I bet on the World Cup in the USA?",
    a: "Yes. Legal sports betting is available in over 35 US states. Licensed sportsbooks including DraftKings, FanDuel, BetMGM and Caesars all offer World Cup 2026 markets. International bookmakers like Bet365, 1xBet and Betsson also operate in many markets worldwide.",
  },
  {
    q: "What is a welcome bonus and how do I claim one?",
    a: "A welcome bonus is an offer for new customers. The most common type is a deposit match — for example, 100% up to €100 means if you deposit €100, the bookmaker adds another €100 in bonus funds. To claim, register a new account via our links, make your first qualifying deposit, and the bonus is credited automatically. Wagering requirements (typically x5–x10) apply before withdrawal.",
  },
  {
    q: "What is live betting on World Cup matches?",
    a: "Live betting (also called in-play betting) lets you place bets while a match is in progress. Odds update in real-time based on the score, time remaining and game events. For example, if a team goes 1-0 up after 30 minutes, the odds for the other team to win will lengthen significantly. Live betting requires fast decisions but offers some of the best value opportunities.",
  },
  {
    q: "What does BTTS mean in World Cup betting?",
    a: "BTTS stands for Both Teams to Score. You are betting that both teams will score at least one goal during the match — the final result doesn't matter. BTTS — Yes is typically priced between -110 and +110 depending on the match. It's a popular market because you don&apos;t need to predict the winner, just whether both defences are breached.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Bet on the World Cup 2026 — Complete Beginner Guide",
      description: "Step-by-step guide to betting on the 2026 FIFA World Cup. Markets explained, odds formats, bonus guide and recommended bookmakers.",
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
    {
      "@type": "HowTo",
      name: "How to Bet on World Cup 2026",
      step: [
        { "@type": "HowToStep", name: "Choose a licensed bookmaker", text: "Select from our recommended bookmakers: Bet365, Betsson, 1xBet or Betway." },
        { "@type": "HowToStep", name: "Register and verify your account", text: "Sign up with your name, email and date of birth. Verify your identity as required." },
        { "@type": "HowToStep", name: "Claim your welcome bonus", text: "Make a qualifying first deposit to activate your welcome bonus (100% up to €100 at most top bookmakers)." },
        { "@type": "HowToStep", name: "Choose your market", text: "Select from Match Result, Over/Under, BTTS, Handicap, Outright Winner or any other available market." },
        { "@type": "HowToStep", name: "Compare odds and place your bet", text: "Always compare odds across at least two bookmakers. Add your selection to your bet slip, enter your stake, and confirm." },
      ],
    },
  ],
};

export default function HowToBetPage({ params }: Props) {
  const isDE = params.locale === "de";
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>BEGINNER GUIDE</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated 25 May 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
            How to Bet on World Cup 2026: Complete Step-by-Step Guide
          </h1>
          <p style={{ color: "var(--muted-light)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
            The 2026 FIFA World Cup kicks off on June 11 — and it&apos;s shaping up to be the largest betting event in history, with 104 matches, 48 nations and projections of $3.1 billion in US betting handle alone. Whether you&apos;re a first-time bettor or looking to level up your strategy, this guide covers everything: markets, odds, bonuses and bankroll management.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>

        {/* STEP-BY-STEP */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>Step 1: Choose a Licensed Bookmaker</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          The first step is selecting a regulated, licensed sportsbook. Only use bookmakers licensed in your jurisdiction — this protects your funds and ensures fair treatment. Our recommended bookmakers for World Cup 2026 betting:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {[
            { name: "Bet365", flag: "⚽", bonus: "Up to $500 welcome bonus", note: "Best for live streaming + in-play betting", link: "https://bet365.com" },
            { name: "Betsson", flag: "🏆", bonus: "100% up to €100 welcome bonus", note: "Top-rated for match odds and market depth", link: BETSSON_URL, affiliate: true },
            { name: "1xBet",  flag: "🏆", bonus: "100% up to €100 on first deposit", note: "130+ World Cup markets per match", link: ONEXBET_URL, affiliate: true },
            { name: "Betway", flag: "🏆", bonus: "100% up to €100 welcome bonus", note: "World Cup Specials · Acca insurance", link: "https://betway.com" },
          ].map((bk) => (
            <div key={bk.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "20px" }}>{bk.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{bk.name}</div>
                  <div style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 600 }}>{bk.bonus}</div>
                  <div style={{ color: "var(--muted)", fontSize: "12px" }}>{bk.note}</div>
                </div>
              </div>
              <a href={bk.link} target="_blank" rel={`noopener noreferrer nofollow${bk.affiliate ? " sponsored" : ""}`} className="btn-primary" style={{ fontSize: "12px", padding: "8px 16px" }}>
                Visit →
              </a>
            </div>
          ))}
        </div>

        {/* MARKETS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>Step 2: Understand the Betting Markets</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          World Cup betting offers more markets than almost any other sporting event. Here are the most important ones explained:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {[
            { name: "Match Result (1X2)", icon: "⚽", desc: "The most popular market. Pick which team wins, or bet on the draw. In knockout rounds there is no Draw option (3-way becomes 2-way including extra time).", example: "USA to win vs Mexico: +150" },
            { name: "Over/Under Goals", icon: "📊", desc: "Bet on whether the total goals in a match will be Over or Under a specified number (most commonly 2.5). Over 2.5 goals means you win if the match has 3 or more goals.", example: "France vs Brazil Over 2.5 Goals: -115" },
            { name: "Both Teams to Score (BTTS)", icon: "🎯", desc: "Bet on whether both teams will score at least one goal. The match result is irrelevant — only whether each team gets on the scoresheet.", example: "England vs Argentina BTTS Yes: -105" },
            { name: "Asian Handicap", icon: "➕", desc: "A handicap is applied to level out matches between mismatched opponents. For example, Spain -1.5 means Spain must win by 2 or more goals for your bet to win.", example: "Spain -1.5 vs weaker team: +110" },
            { name: "Correct Score", icon: "🔢", desc: "Predict the exact final score. Odds are significantly higher but difficult to predict. Best used in small stakes for high reward.", example: "Brazil 2-1 Germany: +900" },
            { name: "Tournament Winner", icon: "🏆", desc: "Bet on which nation wins the entire 2026 World Cup. These bets are placed before the tournament and pay out after the final on July 19.", example: "Spain to win World Cup 2026: +450" },
            { name: "Golden Boot (Top Scorer)", icon: "👟", desc: "Bet on which player will score the most goals across the entire tournament. Mbappé is the +600 favourite.", example: "Mbappé Top Scorer: +600" },
          ].map((m) => (
            <div key={m.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px 20px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "20px" }}>{m.icon}</span>
                <span style={{ fontWeight: 800, fontSize: "15px" }}>{m.name}</span>
              </div>
              <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.6, margin: "0 0 8px" }}>{m.desc}</p>
              <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)", borderRadius: "4px", padding: "6px 10px", fontSize: "12px", color: "var(--muted-light)", fontWeight: 600 }}>
                Example: {m.example}
              </div>
            </div>
          ))}
        </div>

        {/* ODDS FORMATS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Step 3: Reading Odds Formats</h2>
        <div style={{ overflowX: "auto", marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "rgba(0,208,132,0.08)", borderBottom: "1px solid var(--border-accent)" }}>
                {["Format", "Example", "What it means", "Return on $10 bet"].map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "var(--muted-light)", fontSize: "12px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { fmt: "American", ex: "+500", means: "Win $500 on a $100 bet", ret: "$60 (inc. stake)" },
                { fmt: "Decimal",  ex: "6.00",  means: "Multiply stake by 6.00",  ret: "$60 (inc. stake)" },
                { fmt: "Fractional",ex: "5/1",  means: "Win $5 for every $1 bet", ret: "$60 (inc. stake)" },
                { fmt: "American", ex: "-150",  means: "Bet $150 to win $100",    ret: "$16.67 (inc. stake)" },
              ].map((r) => (
                <tr key={r.ex} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 600 }}>{r.fmt}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)" }}>{r.ex}</td>
                  <td style={{ padding: "10px 12px", color: "var(--muted-light)" }}>{r.means}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>{r.ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BONUS GUIDE */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Step 4: Claim Your Welcome Bonus</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          All major bookmakers offer a welcome bonus to new customers. The most common format is a deposit match bonus — the bookmaker matches your first deposit up to a capped amount. Here&apos;s how to claim one:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "32px" }}>
          {[
            { step: "1", title: "Register via our link", desc: "Click any of our bookmaker links to ensure you qualify for the welcome bonus." },
            { step: "2", title: "Verify your account", desc: "Provide your name, email and date of birth. Some bookmakers require ID verification." },
            { step: "3", title: "Make your first deposit", desc: "Deposit the minimum qualifying amount (usually €10) using any supported payment method." },
            { step: "4", title: "Bonus is credited", desc: "Your welcome bonus is added automatically. Check the promotions section if it doesn't appear within 24 hours." },
          ].map((s) => (
            <div key={s.step} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px" }}>
              <div style={{ width: "28px", height: "28px", background: "var(--accent)", color: "#000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", marginBottom: "10px" }}>{s.step}</div>
              <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>{s.title}</div>
              <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* BANKROLL */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>Step 5: Bankroll Management</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
          The single most important habit for any bettor — experienced or beginner — is bankroll management. Set a total budget for the tournament and stick to it regardless of results. Our recommended framework:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "32px" }}>
          {[
            { rule: "Set a total budget", detail: "Decide how much you&apos;ll bet across the entire tournament (e.g., $200). Never exceed this." },
            { rule: "Bet 1–5% per selection", detail: "Risk no more than 1–5% of your total budget on any single bet. This protects you from ruin." },
            { rule: "Never chase losses", detail: "If you lose, don&apos;t increase your stake to win it back. Stick to your plan." },
            { rule: "Record your bets", detail: "Track every bet in a spreadsheet. This helps you identify what&apos;s working." },
          ].map((r) => (
            <div key={r.rule} style={{ background: "rgba(255,68,68,0.04)", border: "1px solid rgba(255,68,68,0.15)", borderRadius: "8px", padding: "14px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "var(--foreground)", marginBottom: "6px" }}>✅ {r.rule}</div>
              <div style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: r.detail }} />
            </div>
          ))}
        </div>

        {!isDE && (
          <div style={{ background: "linear-gradient(135deg, #071525, #0a1e12)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>🏆 Ready to bet? Start with Betsson</div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px" }}>100% welcome bonus up to €100 · Licensed & regulated · Full World Cup coverage</div>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" data-affiliate="Betsson">
              Claim Betsson Bonus →
            </a>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ · New customers only · Wagering requirements apply · T&Cs apply</div>
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
              { href: "/blog/best-world-cup-2026-betting-odds", label: "Compare Odds" },
              { href: "/blog/best-value-bets", label: "Best Value Bets" },
              { href: "/blog/top-favorites-to-win", label: "Tournament Favorites" },
              { href: "/responsible-gambling", label: "Responsible Gambling" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
