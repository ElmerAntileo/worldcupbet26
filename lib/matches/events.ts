import { rankBookmakers } from "../affiliate-router";
import {
  getUpcomingMatches,
  WORLD_CUP_SPORT_KEY,
} from "../odds-api/client";
import { isOddsApiPlaceholder } from "../odds-api/placeholder";
import { MOCK_MATCHES } from "./mock";
import type { Bookmaker, OddsEvent } from "../types";

export async function loadUpcomingWorldCupEvents(): Promise<OddsEvent[]> {
  if (isOddsApiPlaceholder()) {
    return MOCK_MATCHES;
  }
  try {
    const events = await getUpcomingMatches(WORLD_CUP_SPORT_KEY);
    if (!events.length) return MOCK_MATCHES;
    return events;
  } catch {
    return MOCK_MATCHES;
  }
}

export function h2hMarket(bm: Bookmaker) {
  return bm.markets.find((m) => m.key === "h2h");
}

export function topBookmakersH2h(
  event: OddsEvent,
  geo: string,
  limit: number,
): { bookmaker: Bookmaker; h2h: NonNullable<ReturnType<typeof h2hMarket>> }[] {
  const preferred = rankBookmakers(geo);
  const byKey = new Map(event.bookmakers.map((b) => [b.key, b]));
  const out: {
    bookmaker: Bookmaker;
    h2h: NonNullable<ReturnType<typeof h2hMarket>>;
  }[] = [];

  for (const key of preferred) {
    const bm = byKey.get(key);
    const h2h = bm ? h2hMarket(bm) : undefined;
    if (bm && h2h) {
      out.push({ bookmaker: bm, h2h });
      if (out.length >= limit) return out;
    }
  }

  for (const bm of event.bookmakers) {
    if (out.some((x) => x.bookmaker.key === bm.key)) continue;
    const h2h = h2hMarket(bm);
    if (h2h) {
      out.push({ bookmaker: bm, h2h });
      if (out.length >= limit) break;
    }
  }

  return out;
}

export function outcomeByName(
  outcomes: { name: string; price: number }[],
  home: string,
  away: string,
) {
  const homeO = outcomes.find(
    (o) => o.name === home || o.name.includes(home.slice(0, 12)),
  );
  const awayO = outcomes.find(
    (o) => o.name === away || o.name.includes(away.slice(0, 12)),
  );
  const drawO = outcomes.find((o) => /draw/i.test(o.name));
  return { homeO, drawO, awayO };
}

export { WORLD_CUP_SPORT_KEY };
