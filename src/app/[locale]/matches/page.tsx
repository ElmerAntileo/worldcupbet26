import { cookies } from "next/headers";
import { Link } from "@/i18n/navigation";
import { MatchesPageHeading } from "@/components/MatchesPageHeading";
import {
  getUpcomingMatches,
  WORLD_CUP_SPORT_KEY,
} from "../../../../lib/odds-api/client";
import { isOddsApiPlaceholder } from "../../../../lib/odds-api/placeholder";
import { MOCK_MATCHES } from "../../../../lib/matches/mock";
import { rankBookmakers } from "../../../../lib/affiliate-router";
import type { Bookmaker, OddsEvent } from "../../../../lib/types";

function readGeo(): string {
  return cookies().get("geo")?.value ?? "row";
}

async function loadEvents(): Promise<OddsEvent[]> {
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

function h2hMarket(bm: Bookmaker) {
  return bm.markets.find((m) => m.key === "h2h");
}

function topBookmakersH2h(
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

function outcomeByName(
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

export default async function MatchesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const geo = readGeo();
  const events = await loadEvents();

  const dateFmt = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <MatchesPageHeading />
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        FIFA World Cup 2026 — upcoming fixtures
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const top = topBookmakersH2h(event, geo, 3);

          return (
            <li key={event.id}>
              <Link
                href={`/matches/${event.id}`}
                className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                  {dateFmt.format(new Date(event.commence_time))}
                </div>
                <div className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>{event.home_team}</span>
                  <span className="mx-2 text-zinc-400">vs</span>
                  <span>{event.away_team}</span>
                </div>

                <div className="mt-4 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  <div className="text-xs font-semibold uppercase text-zinc-500">
                    H2H (top books)
                  </div>
                  {top.map(({ bookmaker, h2h }) => {
                    const { homeO, drawO, awayO } = outcomeByName(
                      h2h.outcomes,
                      event.home_team,
                      event.away_team,
                    );
                    return (
                      <div
                        key={bookmaker.key}
                        className="flex justify-between gap-2 text-sm text-zinc-800 dark:text-zinc-200"
                      >
                        <span className="truncate font-medium text-zinc-600 dark:text-zinc-400">
                          {bookmaker.title}
                        </span>
                        <span className="shrink-0 font-mono text-xs">
                          {homeO?.price ?? "—"} / {drawO?.price ?? "—"} /{" "}
                          {awayO?.price ?? "—"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
