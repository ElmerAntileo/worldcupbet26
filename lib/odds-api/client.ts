import type { OddsEvent } from "../types";

const CACHE_TTL_MS = 5 * 60 * 1000;
const WORLD_CUP_SPORT_KEY = "soccer_fifa_world_cup_2026";

type CacheEntry<T> = { value: T; expiresAt: number };
const cache = new Map<string, CacheEntry<unknown>>();

function getCached<T>(key: string): T | undefined {
  const hit = cache.get(key);
  if (!hit || hit.expiresAt <= Date.now()) {
    if (hit) cache.delete(key);
    return undefined;
  }
  return hit.value as T;
}

function setCached<T>(key: string, value: T): void {
  cache.set(key, { value, expiresAt: Date.now() + CACHE_TTL_MS });
}

function logRateLimit(headers: Headers): void {
  const remaining = headers.get("x-requests-remaining");
  if (remaining != null) {
    console.info(
      `[odds-api] X-Requests-Remaining: ${remaining}` +
        (headers.get("x-requests-used")
          ? `, used: ${headers.get("x-requests-used")}`
          : ""),
    );
  }
}

function getBaseUrl(): string {
  const base =
    process.env.ODDS_API_BASE?.replace(/\/$/, "") ??
    "https://api.the-odds-api.com/v4";
  return base;
}

function getApiKey(): string {
  const key = process.env.ODDS_API_KEY;
  if (!key) {
    throw new Error("ODDS_API_KEY is not set");
  }
  return key;
}

async function fetchOddsJson<T>(pathWithQuery: string): Promise<T> {
  const url = `${getBaseUrl()}${pathWithQuery}`;
  const res = await fetch(url, { next: { revalidate: 0 } });

  logRateLimit(res.headers);

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `Odds API error ${res.status}: ${res.statusText}${body ? ` — ${body.slice(0, 200)}` : ""}`,
    );
  }

  return (await res.json()) as T;
}

/**
 * Upcoming events with odds for a sport key (e.g. `soccer_fifa_world_cup_2026`).
 */
export async function getUpcomingMatches(sport: string): Promise<OddsEvent[]> {
  const cacheKey = `upcoming:${sport}`;
  const cached = getCached<OddsEvent[]>(cacheKey);
  if (cached) return cached;

  const params = new URLSearchParams({
    apiKey: getApiKey(),
    regions: "us,uk,eu",
    markets: "h2h,spreads,totals",
    oddsFormat: "decimal",
    dateFormat: "iso",
  });

  const data = await fetchOddsJson<OddsEvent[]>(
    `/sports/${encodeURIComponent(sport)}/odds/?${params.toString()}`,
  );

  setCached(cacheKey, data);
  return data;
}

/**
 * Odds for a single event. Uses World Cup sport key by default (this product’s primary league).
 */
export async function getMatchOdds(eventId: string): Promise<OddsEvent | null> {
  const cacheKey = `event:${WORLD_CUP_SPORT_KEY}:${eventId}`;
  const cached = getCached<OddsEvent | null>(cacheKey);
  if (cached !== undefined) return cached;

  const params = new URLSearchParams({
    apiKey: getApiKey(),
    regions: "us,uk,eu",
    markets: "h2h,spreads,totals",
    oddsFormat: "decimal",
    dateFormat: "iso",
    eventIds: eventId,
  });

  const data = await fetchOddsJson<OddsEvent[]>(
    `/sports/${encodeURIComponent(WORLD_CUP_SPORT_KEY)}/odds/?${params.toString()}`,
  );

  const event = data[0] ?? null;
  setCached(cacheKey, event);
  return event;
}

export { WORLD_CUP_SPORT_KEY };
