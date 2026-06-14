import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Script from "next/script";
// Team pages use their own static PNG; fallback to shared OG
const TEAM_OG: Record<string, string> = {
  argentina:   'https://www.worldcupbet26.com/og-argentina.png',
  brazil:      'https://www.worldcupbet26.com/og-brazil.png',
  france:      'https://www.worldcupbet26.com/og-france.png',
  england:     'https://www.worldcupbet26.com/og-england.png',
  spain:       'https://www.worldcupbet26.com/og-spain.png',
  germany:     'https://www.worldcupbet26.com/og-germany.png',
  portugal:    'https://www.worldcupbet26.com/og-portugal.png',
  usa:         'https://www.worldcupbet26.com/og-usa.png',
  netherlands: 'https://www.worldcupbet26.com/og.png',
  italy:       'https://www.worldcupbet26.com/og.png',
  mexico:      'https://www.worldcupbet26.com/og.png',
  belgium:     'https://www.worldcupbet26.com/og.png',
  croatia:     'https://www.worldcupbet26.com/og.png',
  canada:      'https://www.worldcupbet26.com/og.png',
  uruguay:     'https://www.worldcupbet26.com/og.png',
  morocco:     'https://www.worldcupbet26.com/og.png',
  japan:       'https://www.worldcupbet26.com/og.png',
  colombia:    'https://www.worldcupbet26.com/og.png',
  senegal:     'https://www.worldcupbet26.com/og.png',
  ecuador:     'https://www.worldcupbet26.com/og.png',
  australia:   'https://www.worldcupbet26.com/og.png',
  switzerland: 'https://www.worldcupbet26.com/og.png',
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";
const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

const teams: Record<string, {
  name: string; flag: string; group: string; groupTeams: string[];
  betssonOdds: string; onexbetOdds: string; bet365Odds: string; betwayOdds: string;
  groupOdds: string; description: string; keyPlayers: string[]; recentForm: string;
  titles: number; lastTitle: string;
}> = {
  argentina: {
    name: "Argentina", flag: "🇦🇷", group: "D",
    groupTeams: ["Argentina", "Chile", "Bolivia", "TBD"],
    betssonOdds: "5.00", onexbetOdds: "4.85", bet365Odds: "5.50", betwayOdds: "5.25",
    groupOdds: "1.18",
    description: "The reigning world champions. Argentina arrive at the 2026 World Cup as the team to beat, led by Lionel Messi in what will likely be his final World Cup. Back-to-back Copa América titles and the 2022 Qatar triumph make them a formidable force.",
    keyPlayers: ["Lionel Messi", "Julián Álvarez", "Rodrigo De Paul", "Emiliano Martínez"],
    recentForm: "W W W D W",
    titles: 3, lastTitle: "2022",
  },
  brazil: {
    name: "Brazil", flag: "🇧🇷", group: "E",
    groupTeams: ["Brazil", "Colombia", "Paraguay", "TBD"],
    betssonOdds: "4.00", onexbetOdds: "3.90", bet365Odds: "4.20", betwayOdds: "4.10",
    groupOdds: "1.12",
    description: "Five-time world champions and perennial favourites, Brazil arrive in 2026 hungry to end a 24-year title drought. With a new generation of stars, the Seleção have the attacking firepower to go all the way.",
    keyPlayers: ["Vinícius Jr.", "Rodrygo", "Endrick", "Alisson Becker"],
    recentForm: "W W D W W",
    titles: 5, lastTitle: "2002",
  },
  france: {
    name: "France", flag: "🇫🇷", group: "C",
    groupTeams: ["France", "Croatia", "Morocco", "TBD"],
    betssonOdds: "6.00", onexbetOdds: "5.90", bet365Odds: "6.50", betwayOdds: "6.25",
    groupOdds: "1.15",
    description: "2018 World Cup winners and 2022 runners-up, France possess arguably the deepest squad in world football. With Mbappé at his peak and a settled defensive unit, Les Bleus are among the top contenders in 2026.",
    keyPlayers: ["Kylian Mbappé", "Antoine Griezmann", "Aurélien Tchouaméni", "Mike Maignan"],
    recentForm: "W D W W W",
    titles: 2, lastTitle: "2018",
  },
  england: {
    name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "B",
    groupTeams: ["England", "Serbia", "Denmark", "TBD"],
    betssonOdds: "7.50", onexbetOdds: "7.25", bet365Odds: "8.00", betwayOdds: "7.75",
    groupOdds: "1.20",
    description: "England have emerged as genuine contenders after reaching the Euro 2024 final. With a squad full of Premier League talent and a settled tactical identity under their manager, 2026 could finally be their year.",
    keyPlayers: ["Jude Bellingham", "Harry Kane", "Phil Foden", "Bukayo Saka"],
    recentForm: "W W D W L",
    titles: 1, lastTitle: "1966",
  },
  spain: {
    name: "Spain", flag: "🇪🇸", group: "F",
    groupTeams: ["Spain", "Germany", "Japan", "TBD"],
    betssonOdds: "8.00", onexbetOdds: "7.90", bet365Odds: "8.50", betwayOdds: "8.25",
    groupOdds: "1.35",
    description: "Euro 2024 champions, Spain are playing their most exciting football in years. A young, dynamic squad built around tiki-taka principles with explosive wingers makes them a serious World Cup threat.",
    keyPlayers: ["Lamine Yamal", "Pedri", "Rodri", "Álvaro Morata"],
    recentForm: "W W W W D",
    titles: 1, lastTitle: "2010",
  },
  germany: {
    name: "Germany", flag: "🇩🇪", group: "F",
    groupTeams: ["Spain", "Germany", "Japan", "TBD"],
    betssonOdds: "10.00", onexbetOdds: "9.75", bet365Odds: "10.50", betwayOdds: "10.25",
    groupOdds: "1.65",
    description: "The host of Euro 2024 and four-time world champions, Germany are rebuilding under their new manager with a blend of experienced players and exciting youth. Playing on North American soil gives them a slight psychological edge.",
    keyPlayers: ["Florian Wirtz", "Jamal Musiala", "Leroy Sané", "Manuel Neuer"],
    recentForm: "W D W W L",
    titles: 4, lastTitle: "2014",
  },
  portugal: {
    name: "Portugal", flag: "🇵🇹", group: "H",
    groupTeams: ["Portugal", "Turkey", "Czech Republic", "TBD"],
    betssonOdds: "12.00", onexbetOdds: "11.75", bet365Odds: "13.00", betwayOdds: "12.50",
    groupOdds: "1.22",
    description: "Despite being in the twilight of the Cristiano Ronaldo era, Portugal boast remarkable depth. Bruno Fernandes, Rafael Leão and a new generation ensure Portugal will be competitive — and dangerous on their day.",
    keyPlayers: ["Cristiano Ronaldo", "Bruno Fernandes", "Rafael Leão", "Rúben Dias"],
    recentForm: "W W W D W",
    titles: 0, lastTitle: "Never",
  },
  usa: {
    name: "USA", flag: "🇺🇸", group: "A",
    groupTeams: ["USA", "Mexico", "Canada", "TBD"],
    betssonOdds: "15.00", onexbetOdds: "14.75", bet365Odds: "16.00", betwayOdds: "15.50",
    groupOdds: "1.30",
    description: "Co-hosts and massive home-crowd favourites, the USA are a young, athletic side that will benefit enormously from playing on home soil. With MLS and European-based talent, they could surprise many teams in 2026.",
    keyPlayers: ["Christian Pulisic", "Tyler Adams", "Weston McKennie", "Gio Reyna"],
    recentForm: "W D W L W",
    titles: 0, lastTitle: "Never",
  },
  netherlands: {
    name: "Netherlands", flag: "🇳🇱", group: "G",
    groupTeams: ["Netherlands", "Senegal", "Ecuador", "TBD"],
    betssonOdds: "18.00", onexbetOdds: "17.50", bet365Odds: "19.00", betwayOdds: "18.50",
    groupOdds: "1.40",
    description: "The Dutch have rebuilt into a formidable unit under their manager, reaching the Euro 2024 semi-finals. With Van Dijk anchoring the defence and Gakpo providing creativity, the Netherlands are dangerous outsiders for the World Cup trophy.",
    keyPlayers: ["Virgil van Dijk", "Cody Gakpo", "Xavi Simons", "Memphis Depay"],
    recentForm: "W W D W L",
    titles: 0, lastTitle: "Never",
  },
  italy: {
    name: "Italy", flag: "🇮🇹", group: "H",
    groupTeams: ["Italy", "Albania", "Croatia", "TBD"],
    betssonOdds: "20.00", onexbetOdds: "19.50", bet365Odds: "21.00", betwayOdds: "20.50",
    groupOdds: "1.45",
    description: "Euro 2020 champions, Italy are rebuilding with an exciting new generation. Donnarumma remains world-class in goal, while Barella and Chiesa provide attacking threat. The Azzurri will be dangerous if they find their best form.",
    keyPlayers: ["Gianluigi Donnarumma", "Nicolò Barella", "Federico Chiesa", "Mateo Retegui"],
    recentForm: "W D W D W",
    titles: 4, lastTitle: "2006",
  },
  mexico: {
    name: "Mexico", flag: "🇲🇽", group: "A",
    groupTeams: ["USA", "Mexico", "Canada", "TBD"],
    betssonOdds: "40.00", onexbetOdds: "38.00", bet365Odds: "41.00", betwayOdds: "40.00",
    groupOdds: "2.20",
    description: "Co-hosts Mexico will have enormous home support and the advantage of familiar stadiums. El Tri have consistently reached the Round of 16 but struggle to go further. 2026 represents a golden opportunity to break that barrier on home soil.",
    keyPlayers: ["Raúl Jiménez", "Hirving Lozano", "Edson Álvarez", "Guillermo Ochoa"],
    recentForm: "W L W D W",
    titles: 0, lastTitle: "Never",
  },
  belgium: {
    name: "Belgium", flag: "🇧🇪", group: "E",
    groupTeams: ["Belgium", "Morocco", "Croatia", "TBD"],
    betssonOdds: "25.00", onexbetOdds: "24.00", bet365Odds: "26.00", betwayOdds: "25.50",
    groupOdds: "1.55",
    description: "The golden generation may be ageing but Belgium still have De Bruyne — arguably the world's best midfielder when fit. With Courtois in goal and Lukaku up front, Belgium have enough quality to make a deep run in 2026.",
    keyPlayers: ["Kevin De Bruyne", "Romelu Lukaku", "Thibaut Courtois", "Youri Tielemans"],
    recentForm: "W W L W D",
    titles: 0, lastTitle: "Never",
  },
  croatia: {
    name: "Croatia", flag: "🇭🇷", group: "B",
    groupTeams: ["Croatia", "Morocco", "Belgium", "TBD"],
    betssonOdds: "50.00", onexbetOdds: "48.00", bet365Odds: "51.00", betwayOdds: "50.00",
    groupOdds: "2.50",
    description: "2018 World Cup finalists and 2022 bronze medallists, Croatia over-achieved with Modrić orchestrating. As the legendary midfielder enters his final World Cup, Croatia will rely on the next generation to carry the torch in 2026.",
    keyPlayers: ["Luka Modrić", "Mateo Kovačić", "Joško Gvardiol", "Andrej Kramarić"],
    recentForm: "D W L W D",
    titles: 0, lastTitle: "Never",
  },
  canada: {
    name: "Canada", flag: "🇨🇦", group: "A",
    groupTeams: ["USA", "Mexico", "Canada", "TBD"],
    betssonOdds: "80.00", onexbetOdds: "75.00", bet365Odds: "81.00", betwayOdds: "80.00",
    groupOdds: "2.80",
    description: "Co-hosts Canada qualified for their first World Cup in 36 years at Qatar 2022 and now host the tournament in 2026. With Alphonso Davies as their talisman and growing depth, the Reds could surprise in front of a passionate home crowd.",
    keyPlayers: ["Alphonso Davies", "Jonathan David", "Tajon Buchanan", "Atiba Hutchinson"],
    recentForm: "W W D W L",
    titles: 0, lastTitle: "Never",
  },
  uruguay: {
    name: "Uruguay", flag: "🇺🇾", group: "C",
    groupTeams: ["Uruguay", "Bolivia", "Chile", "TBD"],
    betssonOdds: "55.00", onexbetOdds: "52.00", bet365Odds: "56.00", betwayOdds: "55.00",
    groupOdds: "1.50",
    description: "Two-time world champions, Uruguay punch above their weight every tournament. With Darwin Núñez leading the attack and a miserly defence, Uruguay are dangerous opponents who should not be underestimated in 2026.",
    keyPlayers: ["Darwin Núñez", "Federico Valverde", "Rodrigo Bentancur", "José María Giménez"],
    recentForm: "W D W W L",
    titles: 2, lastTitle: "1950",
  },
  morocco: {
    name: "Morocco", flag: "🇲🇦", group: "C",
    groupTeams: ["France", "Croatia", "Morocco", "TBD"],
    betssonOdds: "45.00", onexbetOdds: "43.00", bet365Odds: "46.00", betwayOdds: "45.00",
    groupOdds: "2.10",
    description: "The 2022 World Cup semi-finalists and Africa's greatest-ever World Cup team. Morocco shocked the world in Qatar and return in 2026 as serious contenders. Hakimi and Ziyech provide quality in attack, while their defence is rock solid.",
    keyPlayers: ["Achraf Hakimi", "Hakim Ziyech", "Yassine Bounou", "Azzedine Ounahi"],
    recentForm: "W W D W W",
    titles: 0, lastTitle: "Never",
  },
  japan: {
    name: "Japan", flag: "🇯🇵", group: "F",
    groupTeams: ["Spain", "Germany", "Japan", "TBD"],
    betssonOdds: "65.00", onexbetOdds: "62.00", bet365Odds: "66.00", betwayOdds: "65.00",
    groupOdds: "3.20",
    description: "Japan have become Asia's most consistent World Cup performers, reaching the Round of 16 in Qatar 2022. With a generation of players starring in Europe's top leagues, the Samurai Blue could go further than ever in 2026.",
    keyPlayers: ["Takefusa Kubo", "Daichi Kamada", "Ritsu Doan", "Hioki Sakai"],
    recentForm: "W W W D W",
    titles: 0, lastTitle: "Never",
  },
  colombia: {
    name: "Colombia", flag: "🇨🇴", group: "G",
    groupTeams: ["Colombia", "TBD", "TBD", "TBD"],
    betssonOdds: "60.00", onexbetOdds: "58.00", bet365Odds: "61.00", betwayOdds: "60.00",
    groupOdds: "1.60",
    description: "Copa América 2024 runners-up, Colombia are one of South America's most exciting sides. James Rodríguez provided experience, while a new wave of talent including Luís Díaz makes them genuine dark horse contenders for 2026.",
    keyPlayers: ["Luís Díaz", "James Rodríguez", "Richard Ríos", "Dávinson Sánchez"],
    recentForm: "W W W D W",
    titles: 0, lastTitle: "Never",
  },
  senegal: {
    name: "Senegal", flag: "🇸🇳", group: "G",
    groupTeams: ["Netherlands", "Senegal", "Ecuador", "TBD"],
    betssonOdds: "90.00", onexbetOdds: "85.00", bet365Odds: "91.00", betwayOdds: "90.00",
    groupOdds: "3.50",
    description: "AFCON champions and Africa Cup holders, Senegal are Africa's second best hope after Morocco. Sadio Mané remains an iconic figure and with a squad full of Premier League and Ligue 1 quality, the Lions of Teranga will compete hard in 2026.",
    keyPlayers: ["Sadio Mané", "Kalidou Koulibaly", "Idrissa Gueye", "Ismaila Sarr"],
    recentForm: "W D W W L",
    titles: 0, lastTitle: "Never",
  },
  ecuador: {
    name: "Ecuador", flag: "🇪🇨", group: "G",
    groupTeams: ["Netherlands", "Senegal", "Ecuador", "TBD"],
    betssonOdds: "120.00", onexbetOdds: "115.00", bet365Odds: "125.00", betwayOdds: "120.00",
    groupOdds: "4.50",
    description: "Ecuador upset the host Qatar in the 2022 World Cup opener and have continued to develop as a team. Énner Valencia remains their talisman, but younger players are ready to step up on the bigger stage in 2026.",
    keyPlayers: ["Énner Valencia", "Moisés Caicedo", "Jeremy Sarmiento", "Piero Hincapié"],
    recentForm: "W L W W D",
    titles: 0, lastTitle: "Never",
  },
  australia: {
    name: "Australia", flag: "🇦🇺", group: "H",
    groupTeams: ["Portugal", "Turkey", "Czech Republic", "TBD"],
    betssonOdds: "150.00", onexbetOdds: "145.00", bet365Odds: "155.00", betwayOdds: "150.00",
    groupOdds: "5.00",
    description: "The Socceroos reached the quarter-finals in Qatar 2022, their best-ever World Cup finish. Mathew Ryan's heroics in goal and a fighting spirit make Australia capable of another deep run if they can navigate a tricky group.",
    keyPlayers: ["Mathew Ryan", "Martin Boyle", "Riley McGree", "Miloš Degenek"],
    recentForm: "W D W L W",
    titles: 0, lastTitle: "Never",
  },
  switzerland: {
    name: "Switzerland", flag: "🇨🇭", group: "D",
    groupTeams: ["Argentina", "Chile", "Bolivia", "TBD"],
    betssonOdds: "85.00", onexbetOdds: "80.00", bet365Odds: "86.00", betwayOdds: "85.00",
    groupOdds: "3.80",
    description: "Switzerland are one of Europe's most consistent national teams, qualifying for every World Cup since 2006. Granit Xhaka's experience and a well-organised defensive unit make the Swiss difficult to break down — and capable of a quarter-final run.",
    keyPlayers: ["Granit Xhaka", "Xherdan Shaqiri", "Yann Sommer", "Manuel Akanji"],
    recentForm: "W W D W W",
    titles: 0, lastTitle: "Never",
  },
};

export function generateStaticParams() {
  return Object.keys(teams).map((team) => ({ team }));
}

function pageUrl(teamSlug: string, locale: string) {
  const path = `/world-cup-2026-odds/${teamSlug}`;
  return locale === "en" ? `${base}${path}` : `${base}/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string; locale: string }>;
}): Promise<Metadata> {
  const { team: teamSlug, locale } = await params;
  const team = teams[teamSlug];
  if (!team) return {};

  const ogImg = TEAM_OG[teamSlug] ?? 'https://www.worldcupbet26.com/og.png';

  return {
    title: `${team.name} World Cup 2026 Odds — Best Betting Prices`,
    description: `Compare ${team.name} World Cup 2026 betting odds from Betsson, 1xBet, Bet365 & Betway. Current price: ${team.betssonOdds} to win the tournament. Best odds highlighted.`,
    keywords: [
      `${team.name} World Cup 2026 odds`,
      `${team.name} World Cup odds`,
      `${team.name} 2026 FIFA odds`,
      `${team.name} World Cup betting`,
      `${team.name} World Cup 2026`,
    ],
    alternates: {
      canonical: pageUrl(teamSlug, "en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(teamSlug, l)])), "x-default": pageUrl(teamSlug, "en") },
    },
    openGraph: {
      title: `${team.name} World Cup 2026 Odds — Compare Best Prices`,
      description: `Current ${team.name} odds to win World Cup 2026: ${team.betssonOdds}. Compare all bookmakers side-by-side.`,
      type: "website",
      url: pageUrl(teamSlug, locale),
      images: [{ url: ogImg, width: 1200, height: 630, alt: `${team.name} World Cup 2026 Odds — WorldCupBet26` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${team.name} World Cup 2026 Odds`,
      description: `Compare ${team.name} odds from Betsson, 1xBet, Bet365 & Betway. Best price: ${team.betssonOdds}.`,
      images: [ogImg],
    },
  };
}

export default async function TeamOddsPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team: teamSlug } = await params;
  const team = teams[teamSlug];
  if (!team) return notFound();

  const ogImg = TEAM_OG[teamSlug] ?? 'https://www.worldcupbet26.com/og.png';

  const bookmakers = [
    { name: "Betsson", odds: team.betssonOdds, url: BETSSON_URL, affiliate: true, badge: "⭐ Best odds" },
    { name: "1xBet", odds: team.onexbetOdds, url: ONEXBET_URL, affiliate: true, badge: "⭐ Top bonus" },
    { name: "Bet365", odds: team.bet365Odds, url: "https://bet365.com", affiliate: false, badge: "" },
    { name: "Betway", odds: team.betwayOdds, url: "https://betway.com", affiliate: false, badge: "" },
  ];

  const bestOdds = Math.max(...bookmakers.map((b) => parseFloat(b.odds)));

  const teamFaqs = [
    {
      q: `What are ${team.name}'s current odds to win the 2026 World Cup?`,
      a: `${team.name}'s best current odds to win the 2026 World Cup are ${team.betssonOdds} at Betsson. 1xBet offers ${team.onexbetOdds}, Bet365 has ${team.bet365Odds}, and Betway quotes ${team.betwayOdds}. We update these odds daily — always verify on the bookmaker's site before betting.`,
    },
    {
      q: `Which bookmaker has the best odds for ${team.name} to win the World Cup?`,
      a: `Betsson offers the best current odds for ${team.name} at ${team.betssonOdds}. Our comparison updates daily across Betsson, 1xBet, Bet365 and Betway. Betsson and 1xBet consistently offer the most competitive tournament winner prices and both have welcome bonuses available for new customers.`,
    },
    {
      q: `What group is ${team.name} in at the 2026 World Cup?`,
      a: `${team.name} are in Group ${team.group} at the 2026 FIFA World Cup. Their group stage opponents are: ${team.groupTeams.filter(t => t !== team.name).join(", ")}. ${team.name} are priced at ${team.groupOdds} to top Group ${team.group}.`,
    },
    {
      q: `Has ${team.name} ever won the FIFA World Cup?`,
      a: team.titles > 0
        ? `Yes — ${team.name} have won the FIFA World Cup ${team.titles} time${team.titles > 1 ? "s" : ""}, most recently in ${team.lastTitle}.`
        : `${team.name} have never won the FIFA World Cup. In 2026 they are aiming to claim their first title at odds of ${team.betssonOdds}.`,
    },
    {
      q: `Is ${team.name} worth betting on in World Cup 2026?`,
      a: `${team.description} At odds of ${team.betssonOdds} with Betsson, ${team.name} ${parseFloat(team.betssonOdds) <= 10 ? "are a genuine contender at a price that reflects their chances" : parseFloat(team.betssonOdds) <= 30 ? "represent an interesting each-way play in a wide-open market" : "are a speculative dark horse bet — high risk but high reward potential at these long odds"}.`,
    },
  ];

  const teamFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: teamFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "World Cup 2026 Odds", item: `${base}/world-cup-2026-odds` },
      { "@type": "ListItem", position: 3, name: `${team.name} World Cup 2026 Odds`, item: `${base}/world-cup-2026-odds/${teamSlug}` },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "FIFA World Cup 2026",
    description: `Betting odds for ${team.name} at the 2026 FIFA World Cup. Compare prices from Betsson, 1xBet, Bet365 and Betway. Best current odds: ${team.betssonOdds}.`,
    startDate: "2026-06-11",
    endDate: "2026-07-19",
    location: {
      "@type": "Place",
      name: "USA, Canada, Mexico",
      address: { "@type": "PostalAddress", addressCountry: "US" },
    },
    competitor: {
      "@type": "SportsTeam",
      name: team.name,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    organizer: { "@type": "Organization", name: "FIFA", url: "https://www.fifa.com" },
    image: ogImg,
    offers: {
      "@type": "Offer",
      url: BETSSON_URL,
      price: team.betssonOdds,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };

  return (
    <>
      <Script id="team-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="team-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamFaqSchema) }} />
      <Script id="team-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg,#040c18,#071525)", padding: "48px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>{team.flag}</div>
            <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--accent)", marginBottom: 12 }}>
              {team.name} World Cup 2026 Odds
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, maxWidth: 600, margin: "0 auto 24px" }}>
              Compare the best {team.name} betting odds from top bookmakers. Tournament winner, group stage & match odds — updated daily.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                🏆 {team.titles > 0 ? `${team.titles}× World Champion` : "First title hunt"}
              </span>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                📅 Group {team.group}
              </span>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                🎯 Best odds: {team.betssonOdds}
              </span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>

          {/* Odds comparison table */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: "var(--accent)" }}>
              {team.name} to Win World Cup 2026 — Odds Comparison
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {bookmakers.map((bk) => {
                const isBest = parseFloat(bk.odds) === bestOdds;
                return (
                  <div key={bk.name} style={{
                    background: bk.affiliate ? "rgba(0,208,132,0.05)" : "var(--card)",
                    border: isBest ? "2px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 140 }}>
                      <span style={{ fontWeight: 800, fontSize: 18 }}>{bk.name}</span>
                      {bk.badge && (
                        <span style={{ background: "var(--accent)", color: "#000", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                          {bk.badge}
                        </span>
                      )}
                      {isBest && (
                        <span style={{ background: "#FFD700", color: "#000", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                          BEST
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 32, fontWeight: 900, color: isBest ? "var(--accent)" : "var(--text)" }}>
                      {bk.odds}
                    </div>
                    <a
                      href={bk.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      data-affiliate={bk.affiliate ? bk.name : undefined}
                      style={{
                        background: bk.affiliate ? "var(--accent)" : "rgba(255,255,255,0.1)",
                        color: bk.affiliate ? "#000" : "var(--text)",
                        padding: "10px 24px",
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      {bk.affiliate ? `Bet at ${bk.name} →` : "View odds"}
                    </a>
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
              Odds updated daily. 18+ | Gamble responsibly.
            </p>
          </section>

          {/* Team overview */}
          <section style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
              {team.flag} {team.name} — 2026 World Cup Preview
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 20 }}>{team.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Key Players</div>
                {team.keyPlayers.map((p) => (
                  <div key={p} style={{ color: "var(--text)", fontSize: 14, marginBottom: 4 }}>• {p}</div>
                ))}
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Recent Form</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {team.recentForm.split(" ").map((r, i) => (
                    <span key={i} style={{
                      width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: 13,
                      background: r === "W" ? "rgba(0,208,132,0.2)" : r === "D" ? "rgba(255,200,0,0.2)" : "rgba(255,60,60,0.2)",
                      color: r === "W" ? "var(--accent)" : r === "D" ? "#FFC800" : "#FF3C3C",
                    }}>{r}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Group Stage odds</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)" }}>{team.groupOdds} <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>to top Group {team.group}</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.1),rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: 16, padding: "32px", textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Ready to back {team.name}?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              Get the best odds at Betsson or 1xBet — both offer welcome bonuses for new customers.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
                data-affiliate="Betsson"
                style={{ background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
                Bet at Betsson — {team.betssonOdds} →
              </a>
              <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
                data-affiliate="1xBet"
                style={{ background: "rgba(0,208,132,0.15)", color: "var(--accent)", border: "2px solid var(--accent)", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
                Bet at 1xBet — {team.onexbetOdds} →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "var(--accent)" }}>
              {team.name} World Cup 2026 — FAQ
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }}>Frequently asked questions about {team.name} at the 2026 World Cup.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {teamFaqs.map((faq, i) => (
                <details key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
                  <summary style={{ padding: "14px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14, color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span>{faq.q}</span>
                    <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 800, fontSize: 18, lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 18px 14px", color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.75, borderTop: "1px solid var(--border)" }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>More World Cup 2026 Betting</h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/matches" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                ⚽ All Match Odds
              </Link>
              <Link href="/world-cup-2026-groups" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                📊 Group Stage
              </Link>
              <Link href="/blog/top-favorites-to-win" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                🏆 Top Favourites
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
