/** Vercel / app region bucket used for affiliate routing */
export type GeoRegion = "us" | "uk" | "ca" | "de" | "row";

export interface Team {
  name: string;
}

export interface Match {
  id: string;
  sportKey: string;
  commenceTime: string;
  homeTeam: Team;
  awayTeam: Team;
}

/** The Odds API v4 outcome object */
export interface Outcome {
  name: string;
  price: number;
  point?: number;
}

/** The Odds API v4 market object */
export interface Market {
  key: string;
  last_update?: string;
  outcomes: Outcome[];
}

/** The Odds API v4 bookmaker object */
export interface Bookmaker {
  key: string;
  title: string;
  last_update?: string;
  markets: Market[];
}

/** The Odds API v4 event + odds payload */
export interface OddsEvent {
  id: string;
  sport_key: string;
  sport_title?: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
}

export interface AffiliateLink {
  bookmakerSlug: string;
  url: string;
  region: GeoRegion;
}
