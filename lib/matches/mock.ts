import type { Bookmaker, OddsEvent } from "../types";

const SPORT = "soccer_fifa_world_cup_2026";

function h2h(
  homeTeam: string,
  awayTeam: string,
  drawPrice: number,
): Bookmaker["markets"] {
  return [
    {
      key: "h2h",
      outcomes: [
        { name: homeTeam, price: 2.4 },
        { name: "Draw", price: drawPrice },
        { name: awayTeam, price: 3.1 },
      ],
    },
    {
      key: "spreads",
      outcomes: [
        { name: homeTeam, price: 1.91, point: -0.5 },
        { name: awayTeam, price: 1.91, point: 0.5 },
      ],
    },
    {
      key: "totals",
      outcomes: [
        { name: "Over", price: 1.95, point: 2.5 },
        { name: "Under", price: 1.87, point: 2.5 },
      ],
    },
  ];
}

function bookmaker(
  key: string,
  title: string,
  home: string,
  away: string,
  draw: number,
): Bookmaker {
  return {
    key,
    title,
    last_update: new Date().toISOString(),
    markets: h2h(home, away, draw),
  };
}

/** Three fallback matches when the API is unavailable or returns nothing. */
export const MOCK_MATCHES: OddsEvent[] = [
  {
    id: "mock-wc-1",
    sport_key: SPORT,
    sport_title: "FIFA World Cup 2026",
    commence_time: "2026-06-14T18:00:00.000Z",
    home_team: "United States",
    away_team: "England",
    bookmakers: [
      bookmaker("draftkings", "DraftKings", "United States", "England", 3.2),
      bookmaker("fanduel", "FanDuel", "United States", "England", 3.25),
      bookmaker("bet365", "Bet365", "United States", "England", 3.15),
      bookmaker("betway", "Betway", "United States", "England", 3.3),
      bookmaker("unibet", "Unibet", "United States", "England", 3.18),
      bookmaker("bwin", "Bwin", "United States", "England", 3.22),
      bookmaker("888sport", "888sport", "United States", "England", 3.28),
    ],
  },
  {
    id: "mock-wc-2",
    sport_key: SPORT,
    sport_title: "FIFA World Cup 2026",
    commence_time: "2026-06-15T20:00:00.000Z",
    home_team: "Brazil",
    away_team: "Germany",
    bookmakers: [
      bookmaker("bet365", "Bet365", "Brazil", "Germany", 3.4),
      bookmaker("draftkings", "DraftKings", "Brazil", "Germany", 3.45),
      bookmaker("fanduel", "FanDuel", "Brazil", "Germany", 3.42),
      bookmaker("unibet", "Unibet", "Brazil", "Germany", 3.38),
      bookmaker("bwin", "Bwin", "Brazil", "Germany", 3.41),
      bookmaker("betway", "Betway", "Brazil", "Germany", 3.44),
      bookmaker("888sport", "888sport", "Brazil", "Germany", 3.46),
    ],
  },
  {
    id: "mock-wc-3",
    sport_key: SPORT,
    sport_title: "FIFA World Cup 2026",
    commence_time: "2026-06-16T16:00:00.000Z",
    home_team: "Spain",
    away_team: "Japan",
    bookmakers: [
      bookmaker("fanduel", "FanDuel", "Spain", "Japan", 3.55),
      bookmaker("draftkings", "DraftKings", "Spain", "Japan", 3.52),
      bookmaker("betway", "Betway", "Spain", "Japan", 3.58),
      bookmaker("bet365", "Bet365", "Spain", "Japan", 3.5),
      bookmaker("unibet", "Unibet", "Spain", "Japan", 3.53),
      bookmaker("bwin", "Bwin", "Spain", "Japan", 3.56),
      bookmaker("888sport", "888sport", "Spain", "Japan", 3.6),
    ],
  },
];

const byId = new Map(MOCK_MATCHES.map((e) => [e.id, e]));

export function getMockOddsEvent(eventId: string): OddsEvent | null {
  return byId.get(eventId) ?? null;
}
