import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getMatchOdds } from "../../../../../lib/odds-api/client";
import { isOddsApiPlaceholder } from "../../../../../lib/odds-api/placeholder";
import { getMockOddsEvent, MOCK_MATCHES } from "../../../../../lib/matches/mock";
import type { Bookmaker, Market, OddsEvent } from "../../../../../lib/types";
import { BetButton } from "@/components/BetButton";

function readGeo(): string {
  return cookies().get("geo")?.value ?? "row";
}

async function resolveEvent(eventId: string): Promise<OddsEvent> {
  if (isOddsApiPlaceholder()) {
    return getMockOddsEvent(eventId) ?? MOCK_MATCHES[0];
  }
  try {
    const live = await getMatchOdds(eventId);
    if (live) return live;
  } catch {
    /* use mock */
  }
  return getMockOddsEvent(eventId) ?? MOCK_MATCHES[0];
}

function marketByKey(bm: Bookmaker, key: string): Market | undefined {
  return bm.markets.find((m) => m.key === key);
}

function formatMarket(m?: Market): string {
  if (!m?.outcomes.length) return "—";
  return m.outcomes
    .map((o) => {
      let s = `${o.name}: ${o.price}`;
      if (o.point != null) s += ` (${o.point})`;
      return s;
    })
    .join(" · ");
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; eventId: string };
}): Promise<Metadata> {
  const event = await resolveEvent(params.eventId);
  const title = `${event.home_team} vs ${event.away_team} | WorldCupBet26`;
  const description = `Compare the best odds for ${event.home_team} vs ${event.away_team} at WorldCupBet26 — h2h, spreads, and totals from leading bookmakers.`;
  return { title, description };
}

export default async function MatchDetailPage({
  params,
}: {
  params: { locale: string; eventId: string };
}) {
  const { locale, eventId } = params;
  const geo = readGeo();
  const event = await resolveEvent(eventId);
  const tNav = await getTranslations("Nav");

  const dateFmt = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/matches"
        className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
      >
        ← {tNav("matches")}
      </Link>

      <header className="mt-6 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <p className="text-sm text-zinc-500">
          {event.sport_title ?? "FIFA World Cup 2026"}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {event.home_team}{" "}
          <span className="text-zinc-400 font-normal">vs</span> {event.away_team}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
          {dateFmt.format(new Date(event.commence_time))}
        </p>
      </header>

      <div className="mt-10 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900/80">
            <tr className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <th className="px-4 py-3">Bookmaker</th>
              <th className="px-4 py-3">H2H</th>
              <th className="px-4 py-3">Spreads</th>
              <th className="px-4 py-3">Totals</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {event.bookmakers.map((bm) => (
              <tr
                key={bm.key}
                className="border-t border-zinc-100 align-top dark:border-zinc-800"
              >
                <td className="px-4 py-4 font-semibold text-zinc-900 dark:text-zinc-50">
                  {bm.title}
                </td>
                <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300">
                  {formatMarket(marketByKey(bm, "h2h"))}
                </td>
                <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300">
                  {formatMarket(marketByKey(bm, "spreads"))}
                </td>
                <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300">
                  {formatMarket(marketByKey(bm, "totals"))}
                </td>
                <td className="px-4 py-4 text-right">
                  <BetButton bookmaker={bm.key} geo={geo} label="Bet now" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
