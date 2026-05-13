import { Link } from "@/i18n/navigation";
import type { OddsEvent } from "../../lib/types";
import {
  outcomeByName,
  topBookmakersH2h,
} from "../../lib/matches/events";

type Props = {
  event: OddsEvent;
  geo: string;
  locale: string;
  h2hCaption?: string;
  vsLabel?: string;
};

export function FeaturedMatchCard({
  event,
  geo,
  locale,
  h2hCaption = "H2H (top books)",
  vsLabel = "vs",
}: Props) {
  const dateFmt = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const top = topBookmakersH2h(event, geo, 3);

  return (
    <li>
      <Link
        href={`/matches/${event.id}`}
        className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
      >
        <div className="text-xs font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          {dateFmt.format(new Date(event.commence_time))}
        </div>
        <div className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          <span>{event.home_team}</span>
          <span className="mx-2 text-zinc-400">{vsLabel}</span>
          <span>{event.away_team}</span>
        </div>

        <div className="mt-4 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <div className="text-xs font-semibold uppercase text-zinc-500">
            {h2hCaption}
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
}
