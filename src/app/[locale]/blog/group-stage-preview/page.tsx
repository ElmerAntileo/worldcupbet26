import { OG_IMAGE } from "@/lib/og";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

const BETSSON_URL = "/choose-betting";

const locales = ["en", "es", "pt", "de", "fr", "it"];
const base = "https://www.worldcupbet26.com";
const slug = "group-stage-preview";
function postUrl(l: string) {
  return l === "en" ? `${base}/blog/${slug}` : `${base}/${l}/blog/${slug}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "World Cup 2026 Group Stage Preview — Predictions, Odds & Tips",
    description:
      "Full World Cup 2026 group stage preview with betting predictions for all 12 groups. Who qualifies from Group A, B, C? Compare group winner odds from Bet365, 1xBet & Betway.",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Group Stage Preview — All 12 Groups, Predictions & Odds",
      description: "Spain top Group H at 79% probability. USA lead Group D. Brazil dominate Group C. Full group-by-group World Cup 2026 analysis and betting tips.",
      type: "article",
      publishedTime: "2026-05-25T00:00:00Z",
      modifiedTime: "2026-05-25T00:00:00Z",
        images: [OG_IMAGE],
  },
  };
}

const faqs = [
  {
    q: "How does the World Cup 2026 group stage work?",
    a: "The 2026 FIFA World Cup features 48 teams split into 12 groups of 4. Each team plays 3 group stage matches. The top 2 teams from each group qualify for the Round of 32, along with the 8 best third-place finishers. That means 32 teams advance from the group stage to the knockout rounds.",
  },
  {
    q: "Which group is the most competitive at World Cup 2026?",
    a: "Group B, featuring Switzerland, Canada and Bosnia-Herzegovina, and Group F with Brazil, Morocco and Colombia are considered the most competitive. Group H, containing Spain, is the group with the clearest favourite — Spain have a 79% group win probability.",
  },
  {
    q: "Will the USA qualify from their group at World Cup 2026?",
    a: "Yes — the USA are strong group favourites with a 75% qualification rate projected. They are the #1 seed in Group D and play all group matches on home soil, which provides a significant advantage. Expect the USA to top their group.",
  },
  {
    q: "Which World Cup 2026 group is the Group of Death?",
    a: "The Group of Death in 2026 is widely considered to be the group containing Argentina and a strong European side. Argentina (+900 outright) are in a group where 3 of 4 teams could realistically qualify — making every point critical from the first match.",
  },
  {
    q: "What bets can I place on the group stage?",
    a: "You can bet on Group Winner, which team qualifies (each team to qualify Yes/No), exact group finish order, team to finish 3rd, total goals in the group, and match-by-match results for each fixture within the group. Group winner is the most popular group stage market.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "World Cup 2026 Group Stage Preview — Predictions, Odds & Tips",
      description: "Full group-by-group analysis of the 2026 FIFA World Cup. Group winner odds, qualification predictions and betting tips for all 12 groups.",
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

const groups = [
  {
    id: "A", teams: ["Mexico 🇲🇽", "South Africa 🇿🇦", "Saudi Arabia 🇸🇦", "Bolivia 🇧🇴"],
    favorite: "Mexico", favOdds: "+140",
    analysis: "Mexico are clear group favourites at +140 with an 80%+ qualification rate. The co-hosts open the entire 2026 World Cup at Estadio Azteca vs South Africa on June 11 — 87,000 passionate fans will give El Tri a massive home advantage. South Africa are underdogs but represent AFCON quality. Saudi Arabia and Bolivia are the outsiders.",
    tip: "Mexico to win Group A", tipOdds: "+140",
  },
  {
    id: "B", teams: ["Switzerland 🇨🇭", "Canada 🇨🇦", "Norway 🇳🇴", "Bosnia 🇧🇦"],
    favorite: "Switzerland", favOdds: "+160",
    analysis: "Switzerland lead this competitive group projecting 5.2 goals over three games. Canada benefit from home advantage and have an 70%+ qualification rate despite being second favourites. Norway's Haaland makes them dangerous but the group format disadvantages big-name players without team depth.",
    tip: "Both Switzerland and Canada to qualify", tipOdds: "+110",
  },
  {
    id: "C", teams: ["Brazil 🇧🇷", "Morocco 🇲🇦", "Colombia 🇨🇴", "Haiti 🇭🇹"],
    favorite: "Brazil", favOdds: "+110",
    analysis: "Brazil dominate this group with a 95%+ qualification rate, projecting 7.4 group stage goals — second highest of any team. Morocco are the firm second-place finishers, proven 2022 semi-finalists with elite defensive organisation. Colombia are capable but face a near-impossible task.",
    tip: "Brazil Over 2.5 group stage goals", tipOdds: "-115",
  },
  {
    id: "D", teams: ["USA 🇺🇸", "Türkiye 🇹🇷", "Cuba 🇨🇺", "New Zealand 🇳🇿"],
    favorite: "USA", favOdds: "+120",
    analysis: "The USA are group favourites on home soil with a 75% qualification rate. Every game in this group will be played in packed American stadiums — the home advantage is enormous. Türkiye are underestimated at 30% group win probability and represent genuine value to qualify.",
    tip: "USA to win Group D", tipOdds: "+120",
  },
  {
    id: "E", teams: ["England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Slovenia 🇸🇮", "Korea Republic 🇰🇷", "Panama 🇵🇦"],
    favorite: "England", favOdds: "+105",
    analysis: "England are strong favourites to top this group comfortably — their attacking quality of Bellingham, Kane, Saka and Foden far exceeds Group E. The question is by how many. England Over 2.5 group stage goals is the standout market here.",
    tip: "England to win Group E + Over 2.5 goals in England matches", tipOdds: "+180",
  },
  {
    id: "F", teams: ["France 🇫🇷", "Netherlands 🇳🇱", "Ecuador 🇪🇨", "Guinea 🇬🇳"],
    favorite: "France", favOdds: "+115",
    analysis: "France are slight group favourites ahead of a dangerous Netherlands side. Both teams should advance, making this group interesting from a betting perspective. France vs Netherlands is the group&apos;s key match — look for Over 2.5 goals in that fixture.",
    tip: "Both France and Netherlands to qualify", tipOdds: "-120",
  },
  {
    id: "G", teams: ["Belgium 🇧🇪", "Egypt 🇪🇬", "New Zealand 🇳🇿", "El Salvador 🇸🇻"],
    favorite: "Belgium", favOdds: "+105",
    analysis: "Belgium's golden generation gets one last chance at World Cup glory in Group G. Kevin De Bruyne, Romelu Lukaku's successors and a squad with Europa League quality throughout should top the group. Egypt with Mohamed Salah make this opener on June 17 at SoFi Stadium a marquee event — Salah at 34 is still capable of disrupting any team on his day.",
    tip: "Belgium to win Group G", tipOdds: "+105",
  },
  {
    id: "H", teams: ["Spain 🇪🇸", "Uruguay 🇺🇾", "Côte d'Ivoire 🇨🇮", "Georgia 🇬🇪"],
    favorite: "Spain", favOdds: "-180",
    analysis: "Spain are overwhelming Group H favourites at -180 — Euro 2024 and Nations League champions, with Lamine Yamal, Pedri and Rodri in their prime. Uruguay bring South American grit with Darwin Núñez leading the attack, but La Roja's tiki-taka quality is a level above the group competition. Spain should top Group H with ease.",
    tip: "Spain to win Group H", tipOdds: "-180",
  },
];

export default function GroupStagePreviewPage({ params }: Props) {
  const isDE = params.locale === "de";
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)", borderBottom: "1px solid var(--card-border)", padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>GROUP STAGE PREVIEW</span>
            <span style={{ color: "var(--muted)", fontSize: "12px", alignSelf: "center" }}>Updated 25 May 2026 · Starts June 11</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
            World Cup 2026 Group Stage Preview: Predictions, Odds & Betting Tips for All 12 Groups
          </h1>
          <p style={{ color: "var(--muted-light)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
            The expanded 48-team World Cup introduces 12 groups, 36 group stage matches and a wider path to the knockout rounds. Spain are dominant Group H favourites at 79% probability, the USA benefit from home advantage in Group D, and Argentina face Germany in what could be the group stage match of the tournament. Here&apos;s our full group-by-group analysis.
          </p>
          <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" style={{ fontSize: "14px" }} data-affiliate="Betsson">
            Bet Group Stage at Betsson →
          </a>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px" }}>

        {/* FORMAT BOX */}
        <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: 800, color: "var(--accent)", marginBottom: "10px" }}>📋 How the 2026 Group Stage Works</h2>
          <ul style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.8, paddingLeft: "20px", margin: 0 }}>
            <li>48 teams split into 12 groups of 4</li>
            <li>Each team plays 3 group stage matches (6 matches per group)</li>
            <li>Top 2 from each group + 8 best third-place teams advance to Round of 32</li>
            <li>Win = 3pts · Draw = 1pt · Loss = 0pts</li>
            <li>Tiebreaker: goal difference, then goals scored, then head-to-head</li>
          </ul>
        </div>

        {/* GROUPS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "24px" }}>Group-by-Group Analysis & Betting Tips</h2>

        {groups.map((g) => (
          <div key={g.id} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
              <div style={{ background: "var(--accent)", color: "#000", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "15px", flexShrink: 0 }}>
                {g.id}
              </div>
              <div style={{ fontWeight: 800, fontSize: "17px" }}>Group {g.id}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {g.teams.map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: "4px", padding: "2px 8px", fontSize: "12px", color: "var(--muted-light)" }}>{t}</span>
                ))}
              </div>
            </div>
            <p style={{ color: "var(--muted-light)", fontSize: "14px", lineHeight: 1.7, marginBottom: "14px" }}>{g.analysis}</p>
            <div style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "6px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ color: "var(--muted-light)", fontSize: "13px", fontWeight: 600 }}>💡 Our tip: <strong style={{ color: "var(--foreground)" }}>{g.tip}</strong></span>
              <span style={{ fontWeight: 900, color: "var(--accent)", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>{g.tipOdds}</span>
            </div>
          </div>
        ))}

        {/* BEST GROUP STAGE BETS */}
        <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "40px 0 16px" }}>Our Top 5 Group Stage Bets</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {[
            { bet: "Spain to win Group H", odds: "-180", reason: "79% group win probability — strongest in the tournament" },
            { bet: "USA to win Group D", odds: "+120", reason: "Home advantage + strongest squad in the group" },
            { bet: "Brazil Over 2.5 group goals", odds: "-115", reason: "Brazil project 7.4 group stage goals — second highest of any team" },
            { bet: "Japan to qualify from Group H", odds: "+200", reason: "Best value in the tournament — Belgium are beatable and Japan are organised" },
            { bet: "Argentina vs Germany Over 2.5 goals", odds: "-110", reason: "Two attacking powerhouses — expect an open, high-scoring match" },
          ].map((b, i) => (
            <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "3px" }}>#{i + 1}: {b.bet}</div>
                <div style={{ color: "var(--muted)", fontSize: "12px" }}>{b.reason}</div>
              </div>
              <span style={{ fontWeight: 900, color: "var(--accent)", fontSize: "16px", fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>{b.odds}</span>
            </div>
          ))}
        </div>

        {!isDE && (
          <div style={{ background: "linear-gradient(135deg, #071525, #0a1e12)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "12px", padding: "28px 32px", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>🏆 Bet Group Stage Markets at Betsson</div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px" }}>Group winner · Team to qualify · Over/Under · Match Result — all 36 group games covered</div>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary" data-affiliate="Betsson">
              Claim 100% Welcome Bonus →
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
              { href: "/blog/top-favorites-to-win", label: "Tournament Winner Odds" },
              { href: "/blog/best-value-bets", label: "Best Value Bets" },
              { href: "/blog/golden-boot-odds-2026", label: "Golden Boot Odds" },
              { href: "/matches", label: "Live Match Odds" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
