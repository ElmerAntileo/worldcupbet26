import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
const slug = "golden-boot-odds-2026";
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "World Cup 2026 Golden Boot Odds — Mbappé, Kane & Top Scorer Tips",
    description:
      "Compare 2026 World Cup Golden Boot odds for Mbappé (+600), Kane (+650), Haaland (+1300) and more. Find the best top scorer prices across Bet365, 1xBet and Betway.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Golden Boot Odds — Top Scorer Picks & Best Prices",
      description:
        "Kylian Mbappé is the +600 favourite. Harry Kane at +650, Lamine Yamal the best value at +1800. See all top scorer odds compared.",
      type: "article",
      publishedTime: "2026-05-25T00:00:00Z",
      modifiedTime: "2026-05-25T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}


const faqs = [
  {
    q: "Who is favourite for the 2026 World Cup Golden Boot?",
    a: "Kylian Mbappé leads the market at around +600 across major bookmakers. He won the Golden Boot at the 2022 World Cup and is France's primary striker — a team that is second favourite to win the tournament outright.",
  },
  {
    q: "What are Harry Kane's Golden Boot odds for 2026?",
    a: "Harry Kane is priced between +640 and +670 depending on the bookmaker. He is England's penalty taker and central striker, making him well placed to accumulate goals if England reach the later rounds.",
  },
  {
    q: "Who offers the best value in the Golden Boot market?",
    a: "Lamine Yamal at +1750–+1850 is widely considered the best value bet. Spain are among the top 3 favourites to win the tournament, giving Yamal maximum game time. He is 18 years old and already one of the most dangerous attackers in world football.",
  },
  {
    q: "How many goals typically wins the Golden Boot?",
    a: "In recent World Cups, the Golden Boot winner has scored between 6 and 8 goals. With the expanded 48-team format in 2026 adding more group stage matches, the Golden Boot total could reach 8–10 goals for the winner.",
  },
  {
    q: "Which bookmaker has the best Golden Boot odds?",
    a: "Odds vary by player. Bet365 and 1xBet typically offer the most competitive prices. We recommend comparing across bookmakers using our comparison tables above before placing your bet.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "World Cup 2026 Golden Boot Odds — Mbappé, Kane & Top Scorer Tips",
      description:
        "Compare 2026 World Cup Golden Boot odds for the top scorers. Analysis, value picks and best prices from leading bookmakers.",
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

export default function GoldenBootPage({ params }: Props) {
  const isDE = params.locale === "de";
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,184,0,0.1)", border: "1px solid rgba(255,184,0,0.3)", color: "var(--gold)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>GOLDEN BOOT</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated 25 May 2026 · Odds subject to change</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
            World Cup 2026 Golden Boot Odds: Who Will Be Top Scorer?
          </h1>
          <p style={{ color: "var(--muted-light)", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
            Kylian Mbappé enters the 2026 FIFA World Cup as the defending Golden Boot holder and clear favourite to retain it. But Harry Kane, Lamine Yamal and Erling Haaland are all in contention. We compare the best top scorer prices from leading bookmakers so you can find maximum value.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" style={{ fontSize: "14px" }} data-affiliate="Betsson">
              Bet at Betsson — 100% Bonus →
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: "transparent", border: "1px solid var(--border-bright)", color: "var(--foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }} data-affiliate="1xBet">
              Compare at 1xBet →
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>

        {/* ODDS COMPARISON TABLE */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>2026 World Cup Top Scorer Odds Compared</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>Odds shown in American format (+). Updated 25 May 2026.</p>

        <div style={{ overflowX: "auto", marginBottom: "40px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "rgba(0,208,132,0.08)", borderBottom: "1px solid var(--border-accent)" }}>
                {["Player", "Country", "Bet365", "1xBet", "Betway", "Verdict"].map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "var(--muted-light)", fontSize: "12px", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Kylian Mbappé",   country: "France 🇫🇷",    bet365: "+600",  onexbet: "+620",  betway: "+580",  verdict: "Defending champ, France go deep", value: false },
                { name: "Harry Kane",      country: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",   bet365: "+650",  onexbet: "+670",  betway: "+640",  verdict: "England penalty taker, strong",   value: false },
                { name: "Lamine Yamal",    country: "Spain 🇪🇸",     bet365: "+1800", onexbet: "+1850", betway: "+1750", verdict: "⭐ Best value — Spain favourites",   value: true  },
                { name: "Lionel Messi",    country: "Argentina 🇦🇷", bet365: "+1100", onexbet: "+1150", betway: "+1050", verdict: "Age concern, but Argentina elite",  value: false },
                { name: "Raphinha",        country: "Brazil 🇧🇷",    bet365: "+1400", onexbet: "+1450", betway: "+1350", verdict: "Brazil's #1 taker, good if fit",    value: false },
                { name: "Erling Haaland",  country: "Norway 🇳🇴",    bet365: "+1300", onexbet: "+1350", betway: "+1250", verdict: "Norway unlikely deep run — risky",  value: false },
                { name: "Vinícius Jr.",    country: "Brazil 🇧🇷",    bet365: "+1600", onexbet: "+1650", betway: "+1500", verdict: "Explosive, but inconsistent",        value: false },
                { name: "Jude Bellingham", country: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",   bet365: "+2000", onexbet: "+2100", betway: "+1900", verdict: "Creator, not finisher — avoid",    value: false },
              ].map((p) => (
                <tr key={p.name} style={{ borderBottom: "1px solid var(--border)", background: p.value ? "rgba(0,208,132,0.04)" : "transparent" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>{p.name} {p.value && <span style={{ background: "var(--accent)", color: "#000", fontSize: "10px", padding: "1px 6px", borderRadius: "3px", marginLeft: "6px" }}>VALUE</span>}</td>
                  <td style={{ padding: "10px 12px", color: "var(--muted-light)" }}>{p.country}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{p.bet365}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{p.onexbet}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{p.betway}</td>
                  <td style={{ padding: "10px 12px", color: "var(--muted)", fontSize: "13px" }}>{p.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "11px", marginTop: "-30px", marginBottom: "40px" }}>18+ · Odds indicative only. Always verify on the bookmaker&apos;s site before placing a bet.</p>

        {/* PLAYER ANALYSIS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "24px" }}>Player-by-Player Analysis</h2>

        {[
          {
            name: "Kylian Mbappé (+600)", flag: "🇫🇷", verdict: "FAVOURITE",
            body: "Mbappé is the standout favourite and for good reason. The PSG and France forward won the Golden Boot at the 2022 World Cup with 8 goals and enters this tournament as the world's deadliest finisher. France are priced second in the outright winner market, meaning Mbappé is almost guaranteed to play deep into the tournament — the single biggest factor for top scorer bets. His only weakness is France's squad depth, which can sometimes see him operate more as a creator than a pure finisher. At +600 the price is fair; no clear over-value, but no reason to oppose the favourite either.",
          },
          {
            name: "Harry Kane (+650)", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", verdict: "STRONG CONTENDER",
            body: "Kane finally has his World Cup moment. England are genuine title contenders at +700 to win the tournament, and Kane remains their central striker and penalty taker — a crucial advantage in a Golden Boot race where spot kicks can swing the count by 2–3 goals. His record at Bayern has been extraordinary (record-breaking 36 Bundesliga goals in a single season). The slight concern is Kane historically doesn't fire at major tournaments — he was top scorer in 2018 but many came from the spot. In 2022 he missed England's crucial penalty vs France. If he converts efficiently, he's the man to beat.",
          },
          {
            name: "Lamine Yamal (+1800) ⭐ BEST VALUE", flag: "🇪🇸", verdict: "VALUE PICK",
            body: "This is the standout value bet in the entire Golden Boot market. At just 18 years old, Yamal is already one of the most dangerous attackers in world football and Spain are +450 to win the tournament — the single highest probability of any nation going to the final. The more games Spain play, the more opportunities Yamal gets to score. He contributes goals as well as assists and has the creativity to create his own chances even when the team is dominating. At +1800, the price implies a roughly 5.3% chance — which significantly undervalues him given Spain's tournament prospects. Our top value recommendation.",
          },
          {
            name: "Lionel Messi (+1100)", flag: "🇦🇷", verdict: "SENTIMENTAL PICK",
            body: "Messi enters what will almost certainly be his final World Cup aged 38. Argentina are +900 to retain their title and carry a deep, world-class squad. The concern is Messi's minutes — will he play every game at full intensity for seven matches? His club form at Inter Miami has been inconsistent, and Argentina have other creators and finishers who can carry the load. Sentimental value aside, +1100 feels slightly generous for the risk involved. Worth a small stake if you believe in the fairytale.",
          },
          {
            name: "Erling Haaland (+1300)", flag: "🇳🇴", verdict: "AVOID",
            body: "Haaland is one of the best strikers on the planet, but the Golden Boot market is fundamentally about tournament progression — and Norway face a very difficult path. They will need to navigate a tough group and then face top-tier opposition in the knockouts. The Golden Boot is almost always won by a player from a team that reaches at least the semi-finals. Norway are not realistically projected to go that far. +1300 doesn't compensate adequately for this structural disadvantage.",
          },
        ].map((p) => (
          <div key={p.name} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "28px" }}>{p.flag}</span>
              <h3 style={{ fontSize: "17px", fontWeight: 800, margin: 0 }}>{p.name}</h3>
              <span style={{ background: p.verdict === "VALUE PICK" ? "rgba(0,208,132,0.15)" : p.verdict === "AVOID" ? "rgba(255,68,68,0.12)" : "rgba(255,184,0,0.12)", border: `1px solid ${p.verdict === "VALUE PICK" ? "rgba(0,208,132,0.4)" : p.verdict === "AVOID" ? "rgba(255,68,68,0.4)" : "rgba(255,184,0,0.4)"}`, color: p.verdict === "VALUE PICK" ? "var(--accent)" : p.verdict === "AVOID" ? "var(--hot)" : "var(--gold)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>{p.verdict}</span>
            </div>
            <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{p.body}</p>
          </div>
        ))}

        {/* HOW THE MARKET WORKS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "40px 0 16px" }}>How the Golden Boot Market Works</h2>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
          The Golden Boot (officially the Adidas Golden Boot) is awarded to the player who scores the most goals in the tournament. In the 2026 World Cup, with 104 matches across a 48-team field, there will be more group stage matches than ever before — giving top strikers extra opportunities to build their tally.
        </p>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
          If two players finish level on goals, assists are used as the tie-breaker. If still tied, minutes played is the decider — this can swing the result significantly in a close race.
        </p>
        <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
          <strong style={{ color: "var(--foreground)" }}>Key betting tip:</strong> Always prioritise players from teams with the best chance of going deep. A striker from a team eliminated in the Round of 32 will play a maximum of 4 matches. A striker from a finalist plays up to 7. That&apos;s the single most important variable in this market.
        </p>

        {/* EXPANDED FORMAT SECTION */}
        <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--accent)", marginBottom: "10px" }}>📊 Impact of the 48-Team Expanded Format</h3>
          <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            The 2026 World Cup is the first 48-team tournament. Each team now plays 3 group stage matches (same as before), but the knockout bracket is larger. The winner will play 7 matches instead of 7 (unchanged for finalists). However, the <em>average</em> team now plays 4+ matches, meaning more goals across the board and a higher likelihood that the Golden Boot total exceeds 8 goals for the first time since 1998.
          </p>
        </div>

        {/* CTA */}
        {!isDE && (
          <div style={{ background: "linear-gradient(135deg, #071525, #0a1e12)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "8px" }}>Our recommended bookmaker for Golden Boot betting</div>
            <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>🏆 Betsson — 100% Welcome Bonus up to €100</div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px" }}>Live streaming · Cash out · Full Golden Boot market</div>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" data-affiliate="Betsson">
              Claim Betsson Bonus →
            </a>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ · New customers · T&Cs apply · Bet responsibly</div>
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

        {/* INTERNAL LINKS */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "12px" }}>Related guides:</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/blog/best-world-cup-2026-betting-odds", label: "Best Odds Compared" },
              { href: "/blog/top-favorites-to-win", label: "Tournament Winner Odds" },
              { href: "/blog/best-value-bets", label: "Best Value Bets" },
              { href: "/betsson-review", label: "Betsson Review" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
