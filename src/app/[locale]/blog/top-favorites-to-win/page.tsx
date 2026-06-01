import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
const slug = "top-favorites-to-win";
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "World Cup 2026 Favorites to Win — Outright Odds & Best Bets",
    description:
      "Spain (+450) and France (+500) lead the 2026 World Cup winner odds. Compare outright prices for England, Brazil, Argentina and all 48 teams. Find the best value bets.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Winner Odds — Who Will Lift the Trophy?",
      description:
        "Spain and France are co-favourites. England, Brazil and Argentina are the value plays. Full outright odds comparison from Bet365, 1xBet and Betway.",
      type: "article",
      publishedTime: "2026-05-25T00:00:00Z",
      modifiedTime: "2026-05-25T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}

const faqs = [
  {
    q: "Who is favourite to win the 2026 World Cup?",
    a: "Spain (+450) and France (+500) are co-favourites across most major bookmakers as of May 2026. Spain are rated as the top team going into the tournament, while France are backed by the most balanced squad in the competition.",
  },
  {
    q: "What are England's odds to win the World Cup 2026?",
    a: "England are available at around +650 to +700 to win the 2026 World Cup. They are genuine contenders with a deep squad and Harry Kane at his peak, but questions about their ability to beat elite opposition in knockout rounds remain.",
  },
  {
    q: "Is Brazil a good bet for World Cup 2026?",
    a: "Brazil are priced at +800 to +900. They have strong squad depth but have dealt with injury concerns to key forwards. They remain a legitimate title contender and can be considered a value bet at current prices if their key attackers return to full fitness.",
  },
  {
    q: "Who are the best dark horse bets for 2026?",
    a: "Portugal (+1400), Germany (+1100) and the USA (+2000) are widely considered the strongest dark horse options. USA benefit from home advantage across all three host nations, which historically provides a 20–30% boost in win probability.",
  },
  {
    q: "Where can I bet on the World Cup 2026 outright winner?",
    a: "Bet365, Betsson, 1xBet and Betway all offer comprehensive outright markets for the 2026 World Cup. We recommend comparing prices across at least two bookmakers before placing your bet — odds can vary by 10–15% for the same selection.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "World Cup 2026 Favorites to Win — Outright Odds & Best Bets",
      description: "Compare outright winner odds for all top contenders in the 2026 FIFA World Cup. Analysis of Spain, France, England, Brazil and Argentina.",
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

export default function FavoritesPage({ params }: Props) {
  const isDE = params.locale === "de";
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ background: "rgba(255,184,0,0.1)", border: "1px solid rgba(255,184,0,0.3)", color: "var(--gold)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>TOURNAMENT WINNER</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated 25 May 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
            World Cup 2026 Favorites to Win: Outright Odds & Best Bets
          </h1>
          <p style={{ color: "var(--muted-light)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
            Spain and France enter the 2026 FIFA World Cup as co-favourites. With 48 teams, 104 matches and three host nations, this is the most open World Cup in history. We break down the outright winner odds, compare prices across top bookmakers and identify the best value bets.
          </p>
          <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" style={{ fontSize: "14px" }} data-affiliate="Betsson">
            Bet Outright at Betsson — 100% Bonus →
          </a>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>

        {/* ODDS TABLE */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>2026 World Cup Winner Odds — Top 10</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>American odds (+). Updated live. Always verify with your bookmaker.</p>
        <div style={{ overflowX: "auto", marginBottom: "40px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "rgba(0,208,132,0.08)", borderBottom: "1px solid var(--border-accent)" }}>
                {["Team", "Bet365", "1xBet", "Betway", "Assessment"].map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "var(--muted-light)", fontSize: "12px", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { team: "🇪🇸 Spain",     b365: "+450",  xbet: "+470",  bway: "+440",  note: "Tournament favourites, best squad depth",  value: true  },
                { team: "🇫🇷 France",    b365: "+500",  xbet: "+520",  bway: "+490",  note: "Most balanced squad, Mbappé at his peak",  value: false },
                { team: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",   b365: "+650",  xbet: "+680",  bway: "+640",  note: "Genuine contenders, Kane + Bellingham",    value: false },
                { team: "🇩🇪 Germany",   b365: "+1100", xbet: "+1150", bway: "+1050", note: "Strong value — resurgent form",              value: true  },
                { team: "🇧🇷 Brazil",    b365: "+800",  xbet: "+830",  bway: "+780",  note: "Injury-hit but still elite talent",          value: false },
                { team: "🇦🇷 Argentina", b365: "+900",  xbet: "+950",  bway: "+880",  note: "Defending champions, deep squad",            value: false },
                { team: "🇵🇹 Portugal",  b365: "+1400", xbet: "+1450", bway: "+1350", note: "Ronaldo's last WC — unpredictable",          value: false },
                { team: "🇺🇸 USA",       b365: "+2000", xbet: "+2100", bway: "+1900", note: "⭐ Home advantage — best long shot value",    value: true  },
                { team: "🇳🇱 Netherlands",b365: "+2200", xbet: "+2300", bway: "+2100", note: "Van Dijk era — well-organised",              value: false },
                { team: "🇲🇦 Morocco",   b365: "+2500", xbet: "+2600", bway: "+2400", note: "2022 semi-finalists — dangerous",            value: false },
              ].map((r) => (
                <tr key={r.team} style={{ borderBottom: "1px solid var(--border)", background: r.value ? "rgba(0,208,132,0.03)" : "transparent" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>{r.team} {r.value && <span style={{ background: "var(--accent)", color: "#000", fontSize: "10px", padding: "1px 6px", borderRadius: "3px", marginLeft: "6px" }}>VALUE</span>}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{r.b365}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{r.xbet}</td>
                  <td style={{ padding: "10px 12px", fontWeight: 800, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{r.bway}</td>
                  <td style={{ padding: "10px 12px", color: "var(--muted)", fontSize: "13px" }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ANALYSIS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>Team-by-Team Analysis</h2>

        {[
          {
            flag: "🇪🇸", team: "Spain (+450)", tag: "FAVOURITE", tagColor: "var(--gold)",
            body: "Spain are the consensus tournament favourites heading into 2026. They won Euro 2024 in dominant fashion and have the deepest attacking squad of any nation in the competition. Lamine Yamal at 18 is already a world-class talent and gives Spain a generational advantage on the left wing. Their midfield — anchored by Rodri — is the best in the world when fully fit. The question is whether they can carry the psychological burden of favouritism over 7 matches. At +450 they offer modest but justified value — this is a squad capable of winning comfortably.",
          },
          {
            flag: "🇫🇷", team: "France (+500)", tag: "CO-FAVOURITE", tagColor: "var(--gold)",
            body: "France possess the most star-studded squad in the competition. Mbappé is the world's deadliest finisher, Camavinga and Tchouaméni provide elite midfield balance, and their defensive structure is world class. France were runners-up in 2022 and have been knocking on the door of a second title. Their slight weakness is squad cohesion — they have had dressing room issues — but Deschamps is a masterful manager of big egos. +500 is a fair price; France should be the first consideration for outright bets.",
          },
          {
            flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team: "England (+650)", tag: "CONTENDER", tagColor: "var(--accent)",
            body: "England have finally assembled a squad capable of winning a major tournament. Bellingham, Saka, Foden and Kane in the same team is a genuinely frightening attacking unit. Their Euro 2024 performance was underwhelming but they still reached the final. The question is whether Southgate&apos;s cautious approach will hold them back — but England are widely expected to at least reach the semi-finals. +650 is attractive compared to France and Spain — if you believe England can take that final step, this is excellent value.",
          },
          {
            flag: "🇩🇪", team: "Germany (+1100) ⭐ VALUE", tag: "VALUE", tagColor: "var(--accent)",
            body: "Germany are massively underrated in the outright market. They hosted and won Euro 2024 with an exciting, attack-minded brand of football. Jamal Musiala is one of the best players in the world and Kai Havertz has transformed into a genuine elite forward. Germany are drawn in what should be a manageable group and, as perennial World Cup contenders, thrive under tournament pressure. +1100 significantly undervalues a team with genuine title credentials.",
          },
          {
            flag: "🇺🇸", team: "USA (+2000) ⭐ LONG SHOT VALUE", tag: "DARK HORSE", tagColor: "var(--muted-light)",
            body: "The USA benefit from home advantage across all three host nations — every game they play at a packed, partisan stadium. Historical data shows home advantage adds approximately 20–25% to win probability in international football. The USA squad has matured significantly, with Pulisic, Reyna and Weah forming a genuine attacking threat. At +2000, even a semi-final run would represent exceptional return on investment. Consider a small stake as part of a portfolio.",
          },
        ].map((t) => (
          <div key={t.team} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "28px" }}>{t.flag}</span>
              <h3 style={{ fontSize: "17px", fontWeight: 800, margin: 0 }}>{t.team}</h3>
              <span style={{ background: "rgba(255,184,0,0.12)", border: "1px solid rgba(255,184,0,0.3)", color: t.tagColor, borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>{t.tag}</span>
            </div>
            <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{t.body}</p>
          </div>
        ))}

        {/* BETTING STRATEGY */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "40px 0 16px" }}>Outright Betting Strategy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "40px" }}>
          {[
            { icon: "🎯", title: "Single selection", desc: "Back one team outright. Maximises returns but highest variance. Best for: Spain or France." },
            { icon: "📊", title: "Each-Way bet", desc: "Not available in most outright markets — check your bookmaker's terms before placing." },
            { icon: "🔢", title: "Portfolio approach", desc: "Split stake across 3–4 teams at different price points. Reduces risk while maintaining upside." },
            { icon: "💡", title: "Hedge as tournament progresses", desc: "Back a longshot early. If they advance, hedge with in-play bets to lock in profit." },
          ].map((s) => (
            <div key={s.title} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px" }}>
              <div style={{ fontSize: "22px", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{s.title}</div>
              <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {!isDE && (
          <div style={{ background: "linear-gradient(135deg, #071525, #0a1e12)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>🏆 Betsson — Best Outright Markets for World Cup 2026</div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px" }}>100% welcome bonus up to €100 · All 48 nations covered · Early odds available now</div>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" data-affiliate="Betsson">
              Claim Betsson Bonus →
            </a>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "12px" }}>18+ · New customers only · T&Cs apply · Gamble responsibly</div>
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
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/blog/best-value-bets", label: "Best Value Bets" },
              { href: "/blog/best-world-cup-2026-betting-odds", label: "Match Odds Compared" },
              { href: "/betsson-review", label: "Betsson Review" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
