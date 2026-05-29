import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";
const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

type MatchData = {
  slug: string;
  home: { team: string; flag: string; form: string; tourOdds: string; slug: string };
  away: { team: string; flag: string; form: string; tourOdds: string; slug: string };
  date: string; time: string; venue: string; city: string; group: string;
  odds: { betsson: [string,string,string]; onexbet: [string,string,string]; bet365: [string,string,string]; betway: [string,string,string] };
  preview: string;
  tip: { pick: string; odds: string; book: string; bookUrl: string; analysis: string };
  keyFacts: string[];
};

const matches: Record<string, MatchData> = {
  "mexico-vs-poland": {
    slug: "mexico-vs-poland",
    home: { team: "Mexico", flag: "🇲🇽", form: "W W D W L", tourOdds: "40.00", slug: "mexico" },
    away: { team: "Poland", flag: "🇵🇱", form: "W D W L W", tourOdds: "65.00", slug: "portugal" },
    date: "June 11, 2026", time: "18:00 ET", venue: "Estadio Azteca", city: "Mexico City, Mexico", group: "A",
    odds: { betsson: ["2.15","3.25","3.65"], onexbet: ["2.10","3.20","3.70"], bet365: ["2.10","3.20","3.60"], betway: ["2.05","3.25","3.70"] },
    preview: "Mexico open the 2026 World Cup at the iconic Estadio Azteca in front of 87,000+ fans — one of the most intimidating venues in world football. El Tri have been preparing for this moment for years as co-hosts and will carry enormous crowd support. Poland's hopes rest on Robert Lewandowski, still dangerous at 37, though less explosive than in his prime at Bayern Munich.\n\nThis is the perfect scenario for Mexico to get three points. The Azteca atmosphere, tournament-opener motivation and home advantage make El Tri the clear value pick. Poland will defend deep and try to hit on the counter through Lewandowski, but Mexico's pace and pressing should cause problems. Expect a competitive opening match with a home win.",
    tip: { pick: "Mexico to Win", odds: "2.15", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Mexico at home at Estadio Azteca on the tournament's opening day is one of the best value bets of the group stage. The crowd factor is enormous and Poland rely on an aging Lewandowski. Mexico have won 7 of their last 10 World Cup home games at the Azteca." },
    keyFacts: ["Estadio Azteca capacity: 87,523 — Mexico's fortress", "Mexico are co-hosts with a 4-year preparation advantage", "Poland's Lewandowski scored 2 goals at Qatar 2022", "The Azteca last hosted a World Cup match in 1986 — Mexico's most historic venue"],
  },
  "usa-vs-panama": {
    slug: "usa-vs-panama",
    home: { team: "USA", flag: "🇺🇸", form: "W W W D W", tourOdds: "15.00", slug: "usa" },
    away: { team: "Panama", flag: "🇵🇦", form: "D W L W D", tourOdds: "250.00", slug: "usa" },
    date: "June 12, 2026", time: "20:00 ET", venue: "MetLife Stadium", city: "New York, USA", group: "B",
    odds: { betsson: ["1.58","3.95","6.60"], onexbet: ["1.55","3.90","6.75"], bet365: ["1.55","3.90","6.50"], betway: ["1.50","4.00","6.80"] },
    preview: "The USA make their home tournament debut at MetLife Stadium in New York — the venue that will host the Final on July 19. Christian Pulisic, Weston McKennie and Tyler Adams lead a squad full of European-based talent. Panama are scrappy CONCACAF opponents but vastly outclassed individually.\n\nThe USA should dominate possession and create multiple chances. Panama will defend deep with a compact 5-4-1 and hope for a set-piece goal. Expect the Americans to be clinical in front of their home crowd — this is their statement game and they will want a convincing scoreline. USA covering the -1.5 Asian handicap is realistic.",
    tip: { pick: "USA -1.5 Asian Handicap", odds: "2.10", book: "Betsson", bookUrl: BETSSON_URL, analysis: "The USA are dominant home favourites with enormous quality advantage over Panama. At MetLife in front of a full house, Pulisic and company will attack from the first whistle. The Asian handicap at 2.10 offers better value than the outright at 1.55." },
    keyFacts: ["MetLife Stadium also hosts the World Cup Final on July 19", "Pulisic has 31 international goals for the USA", "USA have won CONCACAF Nations League in 2024", "Panama's all-time World Cup record: W1 D1 L4"],
  },
  "argentina-vs-ecuador": {
    slug: "argentina-vs-ecuador",
    home: { team: "Argentina", flag: "🇦🇷", form: "W W W W D", tourOdds: "5.00", slug: "argentina" },
    away: { team: "Ecuador", flag: "🇪🇨", form: "W D L W W", tourOdds: "120.00", slug: "ecuador" },
    date: "June 13, 2026", time: "15:00 ET", venue: "SoFi Stadium", city: "Los Angeles, USA", group: "C",
    odds: { betsson: ["1.48","4.25","7.60"], onexbet: ["1.45","4.20","7.80"], bet365: ["1.45","4.20","7.50"], betway: ["1.43","4.30","7.80"] },
    preview: "The reigning world champions open their 2026 campaign at SoFi Stadium in Los Angeles — an iconic American venue with a passionate South American fanbase. Messi, Álvarez and De Paul make Argentina one of the most technically complete sides in the tournament. Ecuador are a physical, well-organised South American team but lack the quality of Argentina's golden generation.\n\nArgentina should control this match from start to finish. Messi will look to stamp his authority early and Álvarez provides the movement and finishing to punish any Ecuador defensive errors. The key question is by how much Argentina win — at -1.5 Asian handicap they are fair value at ~2.00.",
    tip: { pick: "Argentina -1.5 Asian Handicap", odds: "2.00", book: "1xBet", bookUrl: ONEXBET_URL, analysis: "Argentina are overwhelming favourites and should win comfortably at SoFi. The reigning champions open against Ecuador who struggled to qualify — Argentina's squad depth, motivation and tournament experience should deliver a multi-goal victory. Back Argentina -1.5 at around 2.00." },
    keyFacts: ["Argentina are reigning World Cup champions (2022)", "Messi: 106 international goals — Argentina's all-time record", "Ecuador upset host Qatar in the 2022 World Cup opener", "SoFi Stadium capacity: 70,240 with retractable roof"],
  },
  "germany-vs-japan": {
    slug: "germany-vs-japan",
    home: { team: "Germany", flag: "🇩🇪", form: "W W D W W", tourOdds: "10.00", slug: "germany" },
    away: { team: "Japan", flag: "🇯🇵", form: "W W W D W", tourOdds: "65.00", slug: "japan" },
    date: "June 14, 2026", time: "18:00 CET", venue: "BC Place", city: "Vancouver, Canada", group: "D",
    odds: { betsson: ["1.78","3.65","5.10"], onexbet: ["1.80","3.55","5.05"], bet365: ["1.75","3.60","5.00"], betway: ["1.72","3.70","5.10"] },
    preview: "The rematch everyone in Germany has been dreading since 2022. Japan shocked the world by beating Germany 2-1 in Qatar — coming from behind through a second-half blitz that ended Germany's tournament. Wirtz, Musiala and a revamped German squad have been built specifically to avoid repeating that humiliation.\n\nGermany are motivated, improved and shouldn't be caught napping again. However, Japan are a serious side with top European players across their squad — Kubo (Real Sociedad), Doan (Freiburg) and Kamada (Lazio) are all quality. The Samurai Blue will defend deep and look for the counter. BTTS at 1.85 reflects the danger of Japan's counter-attacks even as Germany dominate.",
    tip: { pick: "Germany to Win & BTTS", odds: "2.80", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Germany need to avenge Qatar 2022 and will attack with intensity. However, Japan are not a side to take lightly — they have quality European players and a proven ability to score against elite opposition. BTTS with a Germany win is our pick at ~2.80 with Betsson." },
    keyFacts: ["Japan beat Germany 2-1 at Qatar 2022 from 0-1 down", "Florian Wirtz: Bayer Leverkusen's player of the year 2023/24", "Japan have won 12 of their last 15 international matches", "Germany are 4-time World Cup winners (1954, 1974, 1990, 2014)"],
  },
  "england-vs-serbia": {
    slug: "england-vs-serbia",
    home: { team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", form: "W W W W D", tourOdds: "7.50", slug: "england" },
    away: { team: "Serbia", flag: "🇷🇸", form: "W D W L W", tourOdds: "120.00", slug: "england" },
    date: "June 15, 2026", time: "18:00 ET", venue: "Lincoln Financial Field", city: "Philadelphia, USA", group: "E",
    odds: { betsson: ["1.53","3.95","7.10"], onexbet: ["1.50","3.90","7.25"], bet365: ["1.50","3.90","7.00"], betway: ["1.48","4.00","7.20"] },
    preview: "England enter the 2026 World Cup as genuine contenders after reaching the Euro 2024 Final. Jude Bellingham, Harry Kane and Phil Foden form one of Europe's most potent attacking combinations, and the squad depth is the best in the Three Lions' history. Serbia are a physical, disciplined side built around Dušan Vlahović up front and a dominant midfield.\n\nEngland should be too strong for Serbia across 90 minutes, but tournament openers are notoriously tight as both teams are cautious. Serbia will make it uncomfortable in the first half, but England's quality should tell as the game opens up. A 2-0 or 2-1 England win is the most likely outcome. The short odds at 1.53 reflect England's quality but combine with an Over 1.5 goals bet to boost the value.",
    tip: { pick: "England to Win", odds: "1.53", book: "Betsson", bookUrl: BETSSON_URL, analysis: "England are the standout favourite in Group E and should get three points against Serbia in their opener. The Three Lions have too much quality for Serbia — Kane, Bellingham and Saka make them dangerous from all angles. A win here sets up a clear path to the Round of 16." },
    keyFacts: ["England reached Euro 2024 Final (lost to Spain)", "Kane broke Rooney's England goals record in 2023", "Bellingham: Real Madrid's Champions League winner", "Serbia's Vlahović scored 22+ Serie A goals in 2023/24"],
  },
  "spain-vs-croatia": {
    slug: "spain-vs-croatia",
    home: { team: "Spain", flag: "🇪🇸", form: "W W W D W", tourOdds: "8.00", slug: "spain" },
    away: { team: "Croatia", flag: "🇭🇷", form: "D W W W D", tourOdds: "50.00", slug: "croatia" },
    date: "June 16, 2026", time: "18:00 ET", venue: "Rose Bowl", city: "Pasadena, USA", group: "F",
    odds: { betsson: ["1.88","3.45","4.70"], onexbet: ["1.90","3.40","4.65"], bet365: ["1.85","3.40","4.60"], betway: ["1.82","3.50","4.70"] },
    preview: "Euro 2024 champions Spain meet 2018 World Cup finalists Croatia in what should be one of the most technically accomplished group stage matches. Spain's tiki-taka revolution has new faces — Lamine Yamal (17), Pedri and Rodri dominate midfield — while Álvaro Morata leads the line. Croatia's golden generation, marshalled by the legendary Luka Modrić, are entering their final World Cup together.\n\nThis is a genuine tactical battle between two quality possession-based teams. Spain should have the edge in individual quality — Yamal is arguably the world's best young player — but Modrić's experience and Kovačić's quality make Croatia dangerous. Under 2.5 goals at 1.65 makes sense as both teams are defensively disciplined in big tournament matches.",
    tip: { pick: "Spain to Win + Under 2.5 Goals", odds: "2.60", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Spain are the reigning European champions and have the quality to control this match, but Croatia are not easy to break down. A tight 1-0 or 2-0 Spain win is our prediction. The Spain Win + Under 2.5 Goals combination at ~2.60 offers good value for a tactically disciplined match." },
    keyFacts: ["Spain are Euro 2024 champions — beaten England 2-1 in the final", "Lamine Yamal: youngest ever Euro winner at 17", "Croatia finished 3rd at 2022 World Cup; 2nd at 2018", "Modrić at 40 years old in 2026 — likely his farewell World Cup"],
  },
  "portugal-vs-morocco": {
    slug: "portugal-vs-morocco",
    home: { team: "Portugal", flag: "🇵🇹", form: "W W W D W", tourOdds: "12.00", slug: "portugal" },
    away: { team: "Morocco", flag: "🇲🇦", form: "W W W D W", tourOdds: "45.00", slug: "morocco" },
    date: "June 17, 2026", time: "20:00 ET", venue: "Arrowhead Stadium", city: "Kansas City, USA", group: "G",
    odds: { betsson: ["1.98","3.45","4.20"], onexbet: ["2.00","3.40","4.15"], bet365: ["1.95","3.40","4.10"], betway: ["1.92","3.45","4.20"] },
    preview: "This is a high-stakes Group G opener and a rematch of the 2022 World Cup quarter-final — where Morocco eliminated Portugal 1-0 in one of the tournament's biggest shocks. Portugal will be desperate to avenge that defeat. Cristiano Ronaldo at 41 may be in a reduced role, but Bruno Fernandes, Rafael Leão and a deep squad carry Portugal's hopes.\n\nMorocco are not the same shock-factor team they were in Qatar — they arrive in 2026 as a known, respected quantity. Achraf Hakimi is world-class at right-back and Bounou is an elite goalkeeper. This will be a tight, physical battle. Portugal's quality in attack should edge it, but Morocco's defensive organisation makes Under 2.5 goals at 1.65 the smart market.",
    tip: { pick: "Under 2.5 Goals", odds: "1.65", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Portugal vs Morocco is a rematch of the 2022 quarter-final (Morocco won 1-0). Both teams are defensively exceptional — Morocco conceded just 5 goals in 7 matches at Qatar 2022. A tight match with 0-2 goals total is the most likely scenario. Under 2.5 at 1.65 is strong value." },
    keyFacts: ["Morocco beat Portugal 1-0 in the 2022 World Cup quarter-final", "Morocco were the first African team to reach a World Cup semi-final", "Bounou kept 5 clean sheets in 7 matches at Qatar 2022", "Bruno Fernandes: Portugal's captain and creative force"],
  },
  "netherlands-vs-senegal": {
    slug: "netherlands-vs-senegal",
    home: { team: "Netherlands", flag: "🇳🇱", form: "W W D W W", tourOdds: "18.00", slug: "netherlands" },
    away: { team: "Senegal", flag: "🇸🇳", form: "W D W W L", tourOdds: "90.00", slug: "senegal" },
    date: "June 18, 2026", time: "15:00 ET", venue: "Empower Field at Mile High", city: "Denver, USA", group: "H",
    odds: { betsson: ["1.73","3.65","5.30"], onexbet: ["1.75","3.55","5.25"], bet365: ["1.70","3.60","5.20"], betway: ["1.68","3.70","5.30"] },
    preview: "Netherlands enter the 2026 World Cup having rebuilt impressively since their 2022 quarter-final exit. Virgil van Dijk leads one of Europe's most organised defences, while Cody Gakpo and Xavi Simons provide genuine creative threat. Senegal are Africa's best hope with Sadio Mané still capable of the extraordinary despite approaching 35.\n\nNetherlands should control this match through superior organisation and individual quality. Van Dijk commanding the backline gives them a solid foundation, and Gakpo's direct running can trouble any defence. Senegal are dangerous from set pieces and on the counter through Mané, so a clean sheet for Netherlands is not guaranteed. Netherlands to win at 1.73 is solid value.",
    tip: { pick: "Netherlands to Win", odds: "1.73", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Netherlands are a quality, well-organised European side who should have too much for Senegal over 90 minutes. Van Dijk's leadership and Gakpo's quality give Netherlands a clear edge. At 1.73, the Dutch win is the safest bet in Group H." },
    keyFacts: ["Senegal are reigning AFCON champions", "Van Dijk: Liverpool's captain and consistently world-class centre-back", "Gakpo scored 3 goals at Qatar 2022 World Cup", "Mané won AFCON Player of the Tournament 2023"],
  },
  "usa-vs-mexico": {
    slug: "usa-vs-mexico",
    home: { team: "USA", flag: "🇺🇸", form: "W W W D W", tourOdds: "15.00", slug: "usa" },
    away: { team: "Mexico", flag: "🇲🇽", form: "W W D W L", tourOdds: "40.00", slug: "mexico" },
    date: "June 22, 2026", time: "20:00 ET", venue: "AT&T Stadium", city: "Dallas, USA", group: "B",
    odds: { betsson: ["2.35","3.25","3.05"], onexbet: ["2.30","3.20","3.10"], bet365: ["2.30","3.20","3.00"], betway: ["2.25","3.30","3.10"] },
    preview: "The North American derby that transcends football — USA vs Mexico carries enormous cultural weight and this 2026 World Cup group stage clash could determine who tops Group B. Dallas's AT&T Stadium will be split down the middle between USA and Mexico fans, creating an electric atmosphere. Pulisic and McKennie lead a USA side that has established recent CONCACAF dominance over El Tri.\n\nUSA vs Mexico matches in recent years have been intense, physical and closely contested. Both teams know each other intimately from CONCACAF competition. The USA have the slight edge based on recent results and home crowd advantage, but Mexico are dangerous with Jiménez and Lozano capable of punishing any defensive error. Both teams to score at 1.80 reflects the derby nature — expect goals from both sides.",
    tip: { pick: "Both Teams to Score", odds: "1.80", book: "Betsson", bookUrl: BETSSON_URL, analysis: "USA vs Mexico is a blood derby where both teams throw caution to the wind. Recent clashes have featured goals at both ends — in the last 5 USA vs Mexico internationals, BTTS has landed 4 times. At 1.80, this represents excellent value in a match where both attackers have quality." },
    keyFacts: ["USA vs Mexico: the most-watched rivalry in CONCACAF", "USA beat Mexico 3-2 in 2021 Copa Oro Final on Mexican soil", "Pulisic: AC Milan's best-paid American player", "AT&T Stadium capacity: 100,000 for World Cup fixtures"],
  },
  "germany-vs-france": {
    slug: "germany-vs-france",
    home: { team: "Germany", flag: "🇩🇪", form: "W W D W W", tourOdds: "10.00", slug: "germany" },
    away: { team: "France", flag: "🇫🇷", form: "W D W W W", tourOdds: "6.00", slug: "france" },
    date: "June 24, 2026", time: "18:00 CET", venue: "Gillette Stadium", city: "Boston, USA", group: "D",
    odds: { betsson: ["2.75","3.25","2.65"], onexbet: ["2.72","3.22","2.68"], bet365: ["2.70","3.20","2.60"], betway: ["2.65","3.25","2.65"] },
    preview: "The match of the group stage. Germany vs France at the World Cup is a fixture that transcends football — two of the sport's most decorated nations meeting in a direct contest that will decide who tops Group D. Germany have Wirtz and Musiala — arguably Europe's two best young players — while France counter with Mbappé, Griezmann and the world's deepest squad.\n\nThis match will be decided by fine margins. Germany will press high and use their technical quality to control central areas, but Mbappé's pace on the counter is the single biggest threat to any defence in the tournament. France's counter-attacking can devastate high defensive lines. The draw at 3.25 is solid value — these teams are genuinely 50/50 — but BTTS at ~1.85 is our preferred bet given the attacking quality on both sides.",
    tip: { pick: "Both Teams to Score", odds: "1.85", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Germany vs France is the most evenly matched game of the group stage. Both squads have world-class attackers — Wirtz/Musiala for Germany, Mbappé/Griezmann for France. In a match of this magnitude, goals are expected from both sides. BTTS at 1.85 is excellent value for a prestige European clash." },
    keyFacts: ["France are our overall World Cup 2026 winner tip at 6.00", "Wirtz and Musiala could be the best midfield duo in the tournament", "Germany beat France 1-0 in the 2014 World Cup quarter-final", "Mbappé has scored in 5 consecutive major tournament knockout games"],
  },
  "brazil-vs-argentina": {
    slug: "brazil-vs-argentina",
    home: { team: "Brazil", flag: "🇧🇷", form: "W W D W W", tourOdds: "4.00", slug: "brazil" },
    away: { team: "Argentina", flag: "🇦🇷", form: "W W W W D", tourOdds: "5.00", slug: "argentina" },
    date: "June 26, 2026", time: "21:00 ET", venue: "Hard Rock Stadium", city: "Miami, USA", group: "C",
    odds: { betsson: ["2.35","3.15","3.05"], onexbet: ["2.32","3.15","3.08"], bet365: ["2.30","3.10","3.00"], betway: ["2.25","3.15","3.05"] },
    preview: "The greatest rivalry in world football. Brazil vs Argentina — Vinícius Jr. vs Messi, the Seleção vs the Albiceleste, South America's titans meeting at Hard Rock Stadium in Miami. Both teams are likely to have already qualified from Group C when they meet on June 26, so this becomes a battle for group leadership — and a better Round of 32 draw. Neither side will hold back.\n\nThis is a genuinely 50/50 match. Brazil at 4.00 outright favourites to win the tournament vs Argentina at 5.00 — the odds are almost identical for this match at 2.35 vs 3.05. When these two meet on the biggest stage, goals flow. Brazil vs Argentina has averaged 2.4 goals in the last 10 meetings and BTTS has landed 7 times in those 10 matches. Back BTTS at 1.68 and enjoy the greatest match of the group stage.",
    tip: { pick: "Both Teams to Score", odds: "1.68", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Brazil vs Argentina is the most anticipated match in World Cup history outside of Finals. Both teams have world-class forwards — Vinícius for Brazil, Messi/Álvarez for Argentina. BTTS has landed in 7 of their last 10 meetings. At 1.68, this is our highest-confidence group stage tip." },
    keyFacts: ["Brazil are the all-time World Cup leaders with 5 titles", "Argentina are reigning champions (2022)", "Vinícius Jr. was Champions League top scorer 2024/25", "Their last 3 meetings (since 2020) all saw goals from both sides"],
  },
  "mexico-vs-saudi-arabia": {
    slug: "mexico-vs-saudi-arabia",
    home: { team: "Mexico", flag: "🇲🇽", form: "W W D W L", tourOdds: "40.00", slug: "mexico" },
    away: { team: "Saudi Arabia", flag: "🇸🇦", form: "W L D W W", tourOdds: "150.00", slug: "mexico" },
    date: "June 19, 2026", time: "20:00 ET", venue: "Estadio Azteca", city: "Mexico City, Mexico", group: "A",
    odds: { betsson: ["1.93","3.55","4.30"], onexbet: ["1.90","3.60","4.25"], bet365: ["1.90","3.50","4.20"], betway: ["1.85","3.60","4.30"] },
    preview: "Mexico vs Saudi Arabia at the Azteca is a must-win game for El Tri if they want to advance from Group A. Saudi Arabia shocked Argentina 2-1 at Qatar 2022 in one of the all-time World Cup upsets, showing they are capable of beating anyone on their day. Mexico, however, should be far too strong on home soil.\n\nSaudi Arabia will likely sit deep and defend, relying on the high defensive line that caught Argentina off-guard in 2022. Mexico have the quality to break down a defensive Saudi side, particularly with the Azteca roaring behind them. A Mexico win is expected but the 1.93 price is solid value — El Tri need three points here to advance.",
    tip: { pick: "Mexico to Win", odds: "1.93", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Mexico need to beat Saudi Arabia to ensure qualification from Group A. At home at the Azteca, El Tri have too much quality for a Saudi side that will defend deep. Mexico at 1.93 offers good value — they should win this comfortably." },
    keyFacts: ["Saudi Arabia beat Argentina 2-1 at Qatar 2022 — the biggest World Cup upset in 40 years", "Mexico have never won a World Cup (best finish: QF 5 times)", "The Azteca is the only stadium to have hosted two World Cup Finals", "Mexico's Raúl Jiménez has been top scorer in Liga MX twice"],
  },
};

export function generateStaticParams() {
  return Object.keys(matches).map((match) => ({ match }));
}

function pageUrl(slug: string, locale: string) {
  const path = `/world-cup-2026-matches/${slug}`;
  return locale === "en" ? `${base}${path}` : `${base}/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ match: string; locale: string }>;
}): Promise<Metadata> {
  const { match: slug, locale } = await params;
  const m = matches[slug];
  if (!m) return {};

  const title = `${m.home.team} vs ${m.away.team} World Cup 2026 Odds & Preview`;
  const description = `${m.home.team} vs ${m.away.team} World Cup 2026 betting odds: ${m.home.team} ${m.odds.betsson[0]} · Draw ${m.odds.betsson[1]} · ${m.away.team} ${m.odds.betsson[2]}. Group ${m.group} preview, tips and analysis.`;

  return {
    title,
    description,
    keywords: [
      `${m.home.team} vs ${m.away.team} World Cup 2026`,
      `${m.home.team} vs ${m.away.team} odds`,
      `${m.home.team} vs ${m.away.team} betting`,
      `World Cup 2026 Group ${m.group}`,
      `${m.home.team} World Cup 2026 odds`,
      `${m.away.team} World Cup 2026 odds`,
    ],
    alternates: {
      canonical: pageUrl(slug, "en"),
      languages: Object.fromEntries(locales.map((l) => [l, pageUrl(slug, l)])),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl(slug, locale),
      publishedTime: "2026-05-29T00:00:00Z",
    },
  };
}

export default async function MatchPreviewPage({
  params,
}: {
  params: Promise<{ match: string }>;
}) {
  const { match: slug } = await params;
  const m = matches[slug];
  if (!m) return notFound();

  const bestHomeOdds = Math.max(...[m.odds.betsson[0], m.odds.onexbet[0], m.odds.bet365[0], m.odds.betway[0]].map(Number));
  const bestAwayOdds = Math.max(...[m.odds.betsson[2], m.odds.onexbet[2], m.odds.bet365[2], m.odds.betway[2]].map(Number));

  const bookmakers = [
    { name: "Betsson", home: m.odds.betsson[0], draw: m.odds.betsson[1], away: m.odds.betsson[2], url: BETSSON_URL, affiliate: true },
    { name: "1xBet", home: m.odds.onexbet[0], draw: m.odds.onexbet[1], away: m.odds.onexbet[2], url: ONEXBET_URL, affiliate: true },
    { name: "Bet365", home: m.odds.bet365[0], draw: m.odds.bet365[1], away: m.odds.bet365[2], url: "https://bet365.com", affiliate: false },
    { name: "Betway", home: m.odds.betway[0], draw: m.odds.betway[1], away: m.odds.betway[2], url: "https://betway.com", affiliate: false },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What are the odds for ${m.home.team} vs ${m.away.team} at the 2026 World Cup?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The current best odds are: ${m.home.team} to win at ${bestHomeOdds} (${m.odds.betsson[0]} at Betsson), Draw at ${m.odds.betsson[1]}, ${m.away.team} to win at ${bestAwayOdds}. Odds are updated daily — always verify before betting.`,
        },
      },
      {
        "@type": "Question",
        name: `When is ${m.home.team} vs ${m.away.team} at the World Cup 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${m.home.team} vs ${m.away.team} is played on ${m.date} at ${m.time} at ${m.venue}, ${m.city}. This is a Group ${m.group} match at the 2026 FIFA World Cup.`,
        },
      },
      {
        "@type": "Question",
        name: `Which bookmaker has the best odds for ${m.home.team} vs ${m.away.team}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Betsson currently offers the best odds for ${m.home.team} vs ${m.away.team} at ${m.home.team} ${m.odds.betsson[0]} / Draw ${m.odds.betsson[1]} / ${m.away.team} ${m.odds.betsson[2]}. 1xBet is also competitive. Compare all four bookmakers above and always bet at the highest available price.`,
        },
      },
      {
        "@type": "Question",
        name: `Who will win ${m.home.team} vs ${m.away.team} at World Cup 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our betting tip: ${m.tip.pick} at ${m.tip.odds} with ${m.tip.book}. ${m.tip.analysis}`,
        },
      },
      {
        "@type": "Question",
        name: `What group are ${m.home.team} and ${m.away.team} in at the 2026 World Cup?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Both ${m.home.team} and ${m.away.team} are in Group ${m.group} at the 2026 FIFA World Cup. The group stage runs June 11–27, 2026. The top two teams plus potentially the best third-placed finishers advance to the Round of 32.`,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Match Previews", item: `${base}/world-cup-2026-matches` },
      { "@type": "ListItem", position: 3, name: `${m.home.team} vs ${m.away.team}`, item: pageUrl(slug, "en") },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${m.home.team} vs ${m.away.team} World Cup 2026 Odds & Preview`,
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    author: { "@type": "Organization", name: "WorldCupBet26", url: base },
    publisher: { "@type": "Organization", name: "WorldCupBet26", url: base },
  };

  return (
    <>
      <Script id="match-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="match-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="match-article-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.25rem" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.25rem" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/world-cup-2026-matches" style={{ color: "var(--accent)", textDecoration: "none" }}>Match Previews</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>{m.home.team} vs {m.away.team}</span>
        </nav>

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg,#040c18,#071525)", borderRadius: "16px", padding: "2rem 1.5rem", marginBottom: "2rem", textAlign: "center" }}>
          <div style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.08em" }}>
            FIFA WORLD CUP 2026 — GROUP {m.group}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(16px,4vw,48px)", marginBottom: "16px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(40px,8vw,72px)" }}>{m.home.flag}</div>
              <div style={{ fontWeight: 900, fontSize: "clamp(16px,3vw,24px)", marginTop: "8px" }}>{m.home.team}</div>
              <div style={{ color: "var(--accent)", fontWeight: 800, fontSize: "clamp(20px,4vw,36px)", marginTop: "4px" }}>{m.odds.betsson[0]}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "var(--muted)", fontSize: "12px", fontWeight: 700, marginBottom: "6px" }}>DRAW</div>
              <div style={{ fontWeight: 800, fontSize: "clamp(20px,3vw,28px)", color: "var(--foreground)" }}>{m.odds.betsson[1]}</div>
              <div style={{ color: "var(--muted)", fontSize: "11px", fontWeight: 700, marginTop: "6px" }}>VS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(40px,8vw,72px)" }}>{m.away.flag}</div>
              <div style={{ fontWeight: 900, fontSize: "clamp(16px,3vw,24px)", marginTop: "8px" }}>{m.away.team}</div>
              <div style={{ color: "var(--accent)", fontWeight: 800, fontSize: "clamp(20px,4vw,36px)", marginTop: "4px" }}>{m.odds.betsson[2]}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", fontSize: "13px", color: "var(--muted)" }}>
            <span>📅 {m.date}</span>
            <span>🕐 {m.time}</span>
            <span>🏟️ {m.venue}</span>
            <span>📍 {m.city}</span>
          </div>
        </div>

        {/* Odds comparison table */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">{m.home.team} vs {m.away.team} — Odds Comparison</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "8px", padding: "8px 16px", fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              <div>Bookmaker</div>
              <div style={{ textAlign: "center" }}>{m.home.team}</div>
              <div style={{ textAlign: "center" }}>Draw</div>
              <div style={{ textAlign: "center" }}>{m.away.team}</div>
              <div style={{ textAlign: "center" }}></div>
            </div>
            {bookmakers.map((bk) => {
              const isHomeB = Number(bk.home) === bestHomeOdds;
              const isAwayB = Number(bk.away) === bestAwayOdds;
              return (
                <div key={bk.name} className="card" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "8px", alignItems: "center", padding: "14px 16px", borderLeft: bk.affiliate ? "3px solid var(--accent)" : undefined }}>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>{bk.name}{bk.affiliate && <span style={{ fontSize: "10px", background: "var(--accent)", color: "#000", borderRadius: "4px", padding: "1px 5px", marginLeft: "6px", fontWeight: 800 }}>★</span>}</div>
                  <div style={{ textAlign: "center", fontWeight: 800, fontSize: "18px", color: isHomeB ? "var(--accent)" : "var(--foreground)" }}>{bk.home}</div>
                  <div style={{ textAlign: "center", fontWeight: 700, fontSize: "16px", color: "var(--muted)" }}>{bk.draw}</div>
                  <div style={{ textAlign: "center", fontWeight: 800, fontSize: "18px", color: isAwayB ? "var(--accent)" : "var(--foreground)" }}>{bk.away}</div>
                  <div style={{ textAlign: "right" }}>
                    {bk.affiliate ? (
                      <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={bk.name}
                        style={{ background: "var(--accent)", color: "#000", padding: "7px 14px", borderRadius: "6px", fontWeight: 800, fontSize: "12px", textDecoration: "none", whiteSpace: "nowrap" }}>
                        Bet →
                      </a>
                    ) : (
                      <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow"
                        style={{ background: "rgba(255,255,255,0.07)", color: "var(--muted)", padding: "7px 14px", borderRadius: "6px", fontSize: "12px", textDecoration: "none" }}>
                        View
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "10px" }}>
            Odds updated daily. ★ = affiliate bookmaker with welcome bonus. 18+ | Gamble responsibly.
          </p>
        </section>

        {/* Preview */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">{m.home.team} vs {m.away.team} — Match Preview</h2>
          <div className="card" style={{ padding: "1.5rem", marginTop: "1rem" }}>
            {m.preview.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.75, marginBottom: i < m.preview.split("\n\n").length - 1 ? "1rem" : "0" }}>{para}</p>
            ))}
          </div>
        </section>

        {/* Betting tip */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">Our Betting Tip</h2>
          <div style={{ background: "rgba(0,208,132,0.07)", border: "2px solid rgba(0,208,132,0.35)", borderRadius: "14px", padding: "1.5rem", marginTop: "1rem" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "12px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "4px" }}>EXPERT TIP</div>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--foreground)" }}>{m.tip.pick}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>via {m.tip.book}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "38px", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{m.tip.odds}</div>
                <a href={m.tip.bookUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={m.tip.book}
                  style={{ display: "inline-block", marginTop: "8px", background: "var(--accent)", color: "#000", padding: "10px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}>
                  Bet Now →
                </a>
              </div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: "0" }}>{m.tip.analysis}</p>
          </div>
        </section>

        {/* Key facts */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">Key Facts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "10px", marginTop: "1rem" }}>
            {m.keyFacts.map((fact, i) => (
              <div key={i} className="card" style={{ padding: "12px 16px", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ color: "var(--accent)", fontWeight: 900, fontSize: "16px", flexShrink: 0 }}>⚡</span>
                <span style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5 }}>{fact}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament odds for both teams */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">Tournament Winner Odds</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "1rem" }}>
            {[
              { team: m.home.team, flag: m.home.flag, odds: m.home.tourOdds, slug: m.home.slug },
              { team: m.away.team, flag: m.away.flag, odds: m.away.tourOdds, slug: m.away.slug },
            ].map((t) => (
              <Link key={t.team} href={`/world-cup-2026-odds/${t.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "1.25rem", textAlign: "center", cursor: "pointer" }}>
                  <div style={{ fontSize: "40px", marginBottom: "8px" }}>{t.flag}</div>
                  <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{t.team} to Win WC</div>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--accent)" }}>{t.odds}</div>
                  <div style={{ fontSize: "12px", color: "var(--accent)", marginTop: "8px", fontWeight: 600 }}>Full odds & preview →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">{m.home.team} vs {m.away.team} — FAQ</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 600, fontSize: "14px", color: "var(--foreground)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span>{item.name}</span>
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 800, fontSize: "18px" }}>+</span>
                </summary>
                <div style={{ padding: "0 18px 14px", color: "var(--muted)", fontSize: "13px", lineHeight: 1.75, borderTop: "1px solid var(--border)" }}>
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>More World Cup 2026</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { href: "/world-cup-2026-matches", label: "⚽ All Match Previews" },
              { href: "/world-cup-2026-odds", label: "🏆 Tournament Winner Odds" },
              { href: "/blog/world-cup-2026-betting-tips", label: "💡 Expert Betting Tips" },
              { href: "/world-cup-2026-groups", label: "📋 Group Stage" },
              { href: "/blog/world-cup-2026-schedule", label: "📅 Full Schedule" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>
        <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2rem" }}>
          Odds updated daily. 18+ only. Gamble responsibly. T&Cs apply.
        </p>
      </div>
    </>
  );
}
