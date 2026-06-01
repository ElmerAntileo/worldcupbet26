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
  "mexico-vs-south-africa": {
    slug: "mexico-vs-south-africa",
    home: { team: "Mexico", flag: "🇲🇽", form: "W W D W W", tourOdds: "60.00", slug: "mexico" },
    away: { team: "South Africa", flag: "🇿🇦", form: "W D W L W", tourOdds: "250.00", slug: "south-africa" },
    date: "June 11, 2026", time: "15:00 ET", venue: "Estadio Azteca", city: "Mexico City, Mexico", group: "A",
    odds: { betsson: ["1.65","3.70","5.50"], onexbet: ["1.67","3.65","5.40"], bet365: ["1.62","3.72","5.55"], betway: ["1.60","3.75","5.60"] },
    preview: "Mexico open the 2026 FIFA World Cup at the iconic Estadio Azteca — the only stadium to have hosted two World Cup Finals (1970, 1986). Over 87,000 fans will roar El Tri on as co-hosts make their statement on the tournament\'s first day. This is a defining moment for Mexican football: a home World Cup, a nation expecting deep progress.\n\nSouth Africa qualify as AFCON representatives but enter Group A as significant underdogs. Mexico have home advantage, squad depth and four years of preparation specifically for this tournament. El Tri\'s attacking trio of Jiménez, Lozano and Lainez will look to overwhelm Bafana Bafana early. The opening match of any World Cup is always nervy, but Mexico\'s home support should carry them to three points.",
    tip: { pick: "Mexico to Win", odds: "1.65", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Mexico at the Azteca on opening day is one of the tournament\'s clearest value bets. The home crowd effect at the Azteca is among the most powerful in world football. South Africa will defend deep but lack the quality to contain El Tri across 90 minutes. At 1.65, Mexico win is our confident opener tip." },
    keyFacts: ["Estadio Azteca capacity: 87,523 — the largest WC stadium in 2026", "Mexico are co-hosts: 4-year tactical preparation advantage", "The Azteca last hosted a WC match in 1986 — the famous \'Hand of God\'", "South Africa qualified for their 4th ever World Cup"],
  },
  "canada-vs-bosnia-herzegovina": {
    slug: "canada-vs-bosnia-herzegovina",
    home: { team: "Canada", flag: "🇨🇦", form: "W W D W W", tourOdds: "70.00", slug: "canada" },
    away: { team: "Bosnia & Herzeg.", flag: "🇧🇦", form: "W W L D W", tourOdds: "300.00", slug: "bosnia-herzegovina" },
    date: "June 12, 2026", time: "15:00 ET", venue: "BMO Field", city: "Toronto, Canada", group: "B",
    odds: { betsson: ["1.80","3.55","4.80"], onexbet: ["1.82","3.50","4.75"], bet365: ["1.78","3.55","4.85"], betway: ["1.75","3.60","4.90"] },
    preview: "Canada open their home World Cup at BMO Field in Toronto — a nation that last played at a World Cup in 1986 and has been building towards this moment for a decade. Alphonso Davies (Bayern Munich), Jonathan David (Lille) and Tajon Buchanan lead a squad brimming with European talent. This is a golden generation for Canadian football.\n\nBosnia & Herzegovina make their first World Cup appearance. Canada\'s pace and pressing with a home crowd boost should be too much for a debutant Bosnian side. Expect an energetic opener with Canada establishing early control.",
    tip: { pick: "Canada to Win", odds: "1.80", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Canada are the clear home favourites with Davies, David and Buchanan providing world-class firepower. Bosnia are making their World Cup debut and will struggle to contain Canada\'s pace and intensity. At 1.80, Canada win is solid value." },
    keyFacts: ["Canada\'s first World Cup home game — a historic occasion for the nation", "Alphonso Davies: Bayern Munich starter, one of Europe\'s best left-backs", "Jonathan David: Lille top scorer with 30+ club goals in 2024/25", "Bosnia & Herzegovina qualify for their first ever World Cup"],
  },
  "usa-vs-paraguay": {
    slug: "usa-vs-paraguay",
    home: { team: "USA", flag: "🇺🇸", form: "W W W D W", tourOdds: "20.00", slug: "usa" },
    away: { team: "Paraguay", flag: "🇵🇾", form: "W D L W D", tourOdds: "250.00", slug: "paraguay" },
    date: "June 12, 2026", time: "21:00 ET", venue: "MetLife Stadium", city: "New York/NJ, USA", group: "D",
    odds: { betsson: ["1.75","3.60","4.80"], onexbet: ["1.77","3.55","4.75"], bet365: ["1.72","3.60","4.85"], betway: ["1.70","3.65","4.90"] },
    preview: "The USA open their home World Cup at MetLife Stadium — the same venue that will host the Final on July 19. Christian Pulisic, Weston McKennie, Tyler Adams and Gio Reyna lead a squad full of European-based talent. A sold-out MetLife with 82,500+ fans will create one of the loudest atmospheres in the tournament.\n\nParaguay are scrappy CONMEBOL opponents who qualified against the odds. The USA should control possession and create chances. Pulisic\'s pace and McKennie\'s energy in transition will be the key attacking outlets. A USA win by 2+ goals is the expected outcome.",
    tip: { pick: "USA to Win", odds: "1.75", book: "Betsson", bookUrl: BETSSON_URL, analysis: "USA are strong home favourites at MetLife — the venue of the Final. Paraguay will defend but Pulisic\'s quality and the home crowd will tell. At 1.75, a USA win represents solid value for what should be a comfortable American victory." },
    keyFacts: ["MetLife Stadium also hosts the World Cup Final on July 19", "Pulisic: USMNT\'s most capped active player with 33+ international goals", "USA won CONCACAF Nations League 2024", "Paraguay\'s World Cup record: never past the round of 16"],
  },
  "argentina-vs-austria": {
    slug: "argentina-vs-austria",
    home: { team: "Argentina", flag: "🇦🇷", form: "W W W W D", tourOdds: "10.00", slug: "argentina" },
    away: { team: "Austria", flag: "🇦🇹", form: "W D W W W", tourOdds: "200.00", slug: "austria" },
    date: "June 13, 2026", time: "18:00 ET", venue: "SoFi Stadium", city: "Los Angeles, USA", group: "J",
    odds: { betsson: ["1.50","4.10","6.50"], onexbet: ["1.48","4.05","6.60"], bet365: ["1.47","4.10","6.55"], betway: ["1.45","4.15","6.65"] },
    preview: "The reigning world champions open their 2026 defence at SoFi Stadium in Los Angeles, where a sea of blue-and-white will greet Messi, Álvarez and De Paul. Argentina qualified from Group J as early as the draw — but tournaments must be won on the pitch. Austria, buoyed by David Alaba\'s leadership and Christoph Baumgartner\'s craft, will not be passive.\n\nArgentina should control this comfortably. The World Cup holders are motivated, have tournament DNA and possess the deepest South American squad in the competition. Argentina -1.5 at around 2.15 offers better value than the outright at 1.50 for those seeking a return.",
    tip: { pick: "Argentina -1.5 Asian Handicap", odds: "2.15", book: "1xBet", bookUrl: ONEXBET_URL, analysis: "Argentina are overwhelming favourites against Austria. Messi, Álvarez and De Paul give them world-class quality at every level. The reigning champions should win by 2+ goals, making the Asian handicap at 2.15 better value than the outright 1.50." },
    keyFacts: ["Argentina are reigning World Cup champions (Qatar 2022)", "Messi: 109+ international goals — Argentina\'s all-time record scorer", "SoFi Stadium hosts multiple WC games including a semi-final", "Austria\'s David Alaba is one of the most decorated active European players"],
  },
  "netherlands-vs-japan": {
    slug: "netherlands-vs-japan",
    home: { team: "Netherlands", flag: "🇳🇱", form: "W W D W W", tourOdds: "17.00", slug: "netherlands" },
    away: { team: "Japan", flag: "🇯🇵", form: "W W W D W", tourOdds: "65.00", slug: "japan" },
    date: "June 14, 2026", time: "15:00 ET", venue: "Rose Bowl", city: "Pasadena, USA", group: "F",
    odds: { betsson: ["1.75","3.65","5.00"], onexbet: ["1.77","3.58","4.95"], bet365: ["1.72","3.62","5.05"], betway: ["1.70","3.68","5.10"] },
    preview: "Netherlands vs Japan could be the most tactically fascinating group stage match. The Dutch are organised with Virgil van Dijk as the best centre-back on the planet. Japan are football\'s greatest giant-killers — beating Germany 2-1 and Spain 2-1 at Qatar 2022 with a fully European-seasoned squad.\n\nNetherlands will dominate possession and look to play through Cody Gakpo and Xavi Simons. Japan\'s danger lies in their second-half intensity — Doan, Kubo and Kamada are all quality. BTTS at 1.80 reflects Japan\'s proven ability to score against elite sides.",
    tip: { pick: "Netherlands to Win & BTTS", odds: "2.70", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Netherlands should win but Japan will score. The Samurai Blue beat both Germany and Spain at Qatar 2022. BTTS at 1.80 is our preferred standalone bet, but Netherlands Win + BTTS at 2.70 offers excellent combined value." },
    keyFacts: ["Japan beat Germany 2-1 AND Spain 2-1 at Qatar 2022 from behind at half-time", "Van Dijk: Liverpool captain, consistently in PFA Team of the Year", "Gakpo scored 3 World Cup goals in 2022 as a teenager", "Japan are ranked in the top 15 FIFA world rankings going into 2026"],
  },
  "brazil-vs-morocco": {
    slug: "brazil-vs-morocco",
    home: { team: "Brazil", flag: "🇧🇷", form: "W W D W W", tourOdds: "9.50", slug: "brazil" },
    away: { team: "Morocco", flag: "🇲🇦", form: "W W W D W", tourOdds: "45.00", slug: "morocco" },
    date: "June 14, 2026", time: "21:00 ET", venue: "Hard Rock Stadium", city: "Miami, USA", group: "C",
    odds: { betsson: ["1.62","3.90","6.00"], onexbet: ["1.65","3.85","5.90"], bet365: ["1.60","3.88","6.05"], betway: ["1.58","3.92","6.10"] },
    preview: "Brazil vs Morocco could be the group stage match of the tournament. Morocco reached the 2022 World Cup semi-finals — beating Spain and Portugal along the way — and are no longer a surprise package. Achraf Hakimi at right-back, Bounou in goal and a physical midfield make Morocco the toughest draw in Group C.\n\nBrazil, powered by Vinícius Jr., Rodrygo and a defence rebuilt around Militão and Gabriel Magalhães, are tournament favourites in the group. But Morocco\'s defensive organisation is exceptional. Expect an intense, low-scoring match. Under 2.5 goals at 1.75 has strong appeal given Morocco\'s defensive record.",
    tip: { pick: "Under 2.5 Goals", odds: "1.75", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Morocco conceded just 5 goals in 7 matches at Qatar 2022 — their defensive structure is exceptional. Brazil are quality but have historically struggled against well-organised teams. Under 2.5 goals at 1.75 is our pick — a tight, tactical match is expected." },
    keyFacts: ["Morocco were the first African team to reach a World Cup semi-final (2022)", "Achraf Hakimi: PSG\'s most valuable player by market value", "Brazil are 5-time World Cup winners — last won in 2002", "Vinícius Jr. won the FIFA Best Player award in 2024"],
  },
  "germany-vs-ecuador": {
    slug: "germany-vs-ecuador",
    home: { team: "Germany", flag: "🇩🇪", form: "W W D W W", tourOdds: "11.00", slug: "germany" },
    away: { team: "Ecuador", flag: "🇪🇨", form: "W D L W W", tourOdds: "100.00", slug: "ecuador" },
    date: "June 15, 2026", time: "15:00 ET", venue: "AT&T Stadium", city: "Dallas, USA", group: "E",
    odds: { betsson: ["1.50","4.20","7.50"], onexbet: ["1.48","4.15","7.60"], bet365: ["1.47","4.20","7.55"], betway: ["1.45","4.25","7.65"] },
    preview: "Germany enter the 2026 World Cup as dark horses after their humiliating 2022 group stage exit. Florian Wirtz and Jamal Musiala — arguably Europe\'s most exciting midfield pairing — give Die Mannschaft genuine title credentials. Ecuador qualified impressively but are significant underdogs in Group E.\n\nGermany should dominate from the first whistle. Wirtz\'s creativity, Musiala\'s dribbling and Havertz\'s movement off the ball will be too much for an Ecuador side that will try to stay compact and hit on the counter. A comfortable Germany win is the expected outcome — this is a redemption tournament for a nation that underperformed badly in 2022.",
    tip: { pick: "Germany to Win", odds: "1.50", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Germany are a heavy favourite and should cruise past Ecuador. Wirtz and Musiala are at the peak of their powers. At 1.50, the Germany win is safe value — combine with Germany -1.5 at around 2.20 for better returns." },
    keyFacts: ["Germany were eliminated in the group stage at Qatar 2022 — major embarrassment", "Florian Wirtz: Bayer Leverkusen\'s key player in their undefeated Bundesliga season 2023/24", "Musiala: Bayern Munich\'s most creative player, 15+ goals per season", "Germany are 4-time World Cup winners (1954, 1974, 1990, 2014)"],
  },
  "france-vs-senegal": {
    slug: "france-vs-senegal",
    home: { team: "France", flag: "🇫🇷", form: "W D W W W", tourOdds: "6.00", slug: "france" },
    away: { team: "Senegal", flag: "🇸🇳", form: "W W D W W", tourOdds: "80.00", slug: "senegal" },
    date: "June 15, 2026", time: "21:00 ET", venue: "Levi\'s Stadium", city: "Santa Clara, USA", group: "I",
    odds: { betsson: ["1.70","3.75","5.50"], onexbet: ["1.72","3.70","5.45"], bet365: ["1.68","3.75","5.55"], betway: ["1.65","3.80","5.60"] },
    preview: "France vs Senegal is one of the most culturally charged matches of the group stage — Les Bleus against a Senegalese squad packed with Ligue 1 talent. Kylian Mbappé, Antoine Griezmann and a squad with back-to-back World Cup Final appearances (2018 winners, 2022 runners-up) are overwhelming favourites. Senegal counter with AFCON title holders and the pace of Iliman Ndiaye and Nicolas Jackson.\n\nFrance should have too much quality across all departments. Mbappé will be the difference-maker — his pace destroys defensive lines and he is arguably the best player in the world entering this tournament. Senegal will defend deep and look to counter. Expect a France win but goals at both ends are possible.",
    tip: { pick: "France to Win", odds: "1.70", book: "Betsson", bookUrl: BETSSON_URL, analysis: "France are the tournament second-favourite at 6.00 and have too much quality for Senegal. Mbappé at peak, Griezmann as creator and defensive experience of Upamecano and Camavinga make this France team the complete package. At 1.70, France win is our confident Group I tip." },
    keyFacts: ["France are 2018 World Cup winners and 2022 runners-up", "Mbappé has scored in every major tournament since 2018", "Senegal won AFCON 2023 — Africa\'s dominant force", "France have won 4 of their last 5 major tournament openers by 2+ goals"],
  },
  "spain-vs-uruguay": {
    slug: "spain-vs-uruguay",
    home: { team: "Spain", flag: "🇪🇸", form: "W W W D W", tourOdds: "5.75", slug: "spain" },
    away: { team: "Uruguay", flag: "🇺🇾", form: "W W D W D", tourOdds: "40.00", slug: "uruguay" },
    date: "June 16, 2026", time: "18:00 ET", venue: "Arrowhead Stadium", city: "Kansas City, USA", group: "H",
    odds: { betsson: ["1.88","3.50","4.40"], onexbet: ["1.90","3.45","4.35"], bet365: ["1.85","3.50","4.45"], betway: ["1.82","3.55","4.50"] },
    preview: "Spain enter the 2026 World Cup as the bookmakers\' favourite — Euro 2024 winners with a generation of remarkable talent led by Lamine Yamal, Pedri and Rodri. Uruguay bring CONMEBOL experience and a defensive unit built on discipline, with Darwin Núñez and Rodrigo Bentancur providing quality in the attacking third.\n\nThis should be a controlled Spain performance — La Roja will dominate possession with their tiki-taka style. Uruguay will sit deep with a low block and attempt to frustrate Spain before countering. Spain to win at 1.88 is very solid value given their quality and tournament-favourite status.",
    tip: { pick: "Spain to Win + Under 2.5 Goals", odds: "2.80", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Spain are the world\'s #1 tournament favourite. Uruguay will make this hard but Spain have the quality to win 1-0 or 2-0. Spain Win + Under 2.5 at 2.80 reflects the disciplined, tactical nature of what should be a tight group opener." },
    keyFacts: ["Spain are Euro 2024 & Nations League champions — bookmakers\' #1 pick", "Lamine Yamal: youngest ever Euro winner at 17 (Barcelona)", "Darwin Núñez: Liverpool striker with 20+ Premier League goals in 2024/25", "Rodri won Ballon d\'Or 2024 — arguably the world\'s best midfielder"],
  },
  "england-vs-croatia": {
    slug: "england-vs-croatia",
    home: { team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", form: "W W W W D", tourOdds: "7.50", slug: "england" },
    away: { team: "Croatia", flag: "🇭🇷", form: "D W W W D", tourOdds: "55.00", slug: "croatia" },
    date: "June 16, 2026", time: "21:00 ET", venue: "Gillette Stadium", city: "Boston, USA", group: "L",
    odds: { betsson: ["1.55","4.00","6.50"], onexbet: ["1.57","3.95","6.45"], bet365: ["1.53","4.00","6.55"], betway: ["1.50","4.05","6.60"] },
    preview: "England vs Croatia carries tournament history — Croatia knocked England out of the 2018 World Cup semi-final (2-1 AET) and beat them at Euro 2020 in the group stage. England will want revenge. Jude Bellingham, Harry Kane and Bukayo Saka make this Three Lions squad arguably the most talented in England history.\n\nCroatia\'s golden generation — Modrić, Kovačić, Gvardiol — are ageing but dangerous. Modrić at 40 will likely be playing his last World Cup. England should win comfortably on paper but Croatia can hurt England when it matters most. Expect a tight first half with England\'s quality telling in the second.",
    tip: { pick: "England to Win", odds: "1.55", book: "Betsson", bookUrl: BETSSON_URL, analysis: "England have the strongest squad they have ever assembled — Bellingham at Real Madrid, Kane as Bayern\'s top scorer, Saka at Arsenal. Croatia are ageing and England should finally put the 2018 humiliation to rest. A 2-0 or 2-1 England win is our prediction. At 1.55, solid value." },
    keyFacts: ["Croatia knocked England out in the 2018 WC semi-final (2-1 AET)", "Jude Bellingham: youngest scorer in Real Madrid Champions League history", "Kane broke Wayne Rooney\'s England all-time goalscoring record", "Modrić will be 40 years old at the 2026 World Cup — his farewell tournament"],
  },
  "portugal-vs-colombia": {
    slug: "portugal-vs-colombia",
    home: { team: "Portugal", flag: "🇵🇹", form: "W W W D W", tourOdds: "13.00", slug: "portugal" },
    away: { team: "Colombia", flag: "🇨🇴", form: "W W D W W", tourOdds: "30.00", slug: "colombia" },
    date: "June 17, 2026", time: "20:00 ET", venue: "NRG Stadium", city: "Houston, USA", group: "K",
    odds: { betsson: ["1.85","3.50","4.50"], onexbet: ["1.87","3.45","4.45"], bet365: ["1.82","3.50","4.55"], betway: ["1.80","3.55","4.60"] },
    preview: "Portugal vs Colombia is the most competitive Group K opener. Bruno Fernandes, Rafael Leão and Bernardo Silva are Portugal\'s creative forces in what could be Cristiano Ronaldo\'s final World Cup tournament. Colombia — with Cucho Hernández and a well-organised squad — are not to be underestimated.\n\nPortugal\'s defensive organisation and attacking variety should prove the difference, but under 2.5 goals at 1.70 is a smart bet given Colombia\'s disciplined approach. Portugal\'s European pedigree and deeper squad should secure three points in Group K.",
    tip: { pick: "Portugal to Win", odds: "1.85", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Portugal have too much quality for Colombia across 90 minutes. Bruno Fernandes directs play, Leão provides pace, and the defensive unit is well-organised. At 1.85, Portugal win offers fair value — their European pedigree should prove decisive in Group K." },
    keyFacts: ["Portugal won Euro 2016 and the 2024 Nations League", "Bruno Fernandes: Manchester United captain, 15+ goals per season", "Colombia qualified top of CONMEBOL qualifying — unexpected achievement", "NRG Stadium, Houston: one of the most modern WC venues in 2026"],
  },
  "belgium-vs-egypt": {
    slug: "belgium-vs-egypt",
    home: { team: "Belgium", flag: "🇧🇪", form: "W W D W W", tourOdds: "25.00", slug: "belgium" },
    away: { team: "Egypt", flag: "🇪🇬", form: "W D W W D", tourOdds: "200.00", slug: "egypt" },
    date: "June 17, 2026", time: "18:00 ET", venue: "SoFi Stadium", city: "Inglewood, USA", group: "G",
    odds: { betsson: ["1.78","3.60","5.00"], onexbet: ["1.80","3.55","4.95"], bet365: ["1.75","3.60","5.05"], betway: ["1.73","3.65","5.10"] },
    preview: "Belgium\'s golden generation has one last shot at World Cup glory. Kevin De Bruyne at 35, Romelu Lukaku\'s successors and the organisational brilliance of their midfield give Belgium a quality core. Egypt, led by Mohamed Salah (who will be 34 in 2026), make this their most anticipated World Cup in decades — and with Salah, any side can cause an upset.\n\nBelgium should control this match through De Bruyne\'s passing range. Egypt will funnel through Salah and look for moments of individual quality. Group G is Belgium\'s best chance to finally deliver on the golden generation\'s promise. Belgium win at 1.78 is solid value.",
    tip: { pick: "Belgium to Win", odds: "1.78", book: "Betsson", bookUrl: BETSSON_URL, analysis: "Belgium have too much quality for Egypt, even with Salah in the opposition ranks. De Bruyne\'s creativity and Belgium\'s pressing system should dominate. The golden generation\'s last major tournament dance — expect them motivated from the first whistle. At 1.78, Belgium win is our pick." },
    keyFacts: ["Belgium\'s golden generation never won a major tournament — 2026 is their last chance", "Kevin De Bruyne: Manchester City captain, 2024 Premier League title winner", "Mohamed Salah: 30+ goals for Liverpool in 2024/25 — still world class at 34", "SoFi Stadium capacity: 70,240 — one of the most spectacular WC venues"],
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
      languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(slug, l)])), "x-default": pageUrl(slug, "en") },
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
