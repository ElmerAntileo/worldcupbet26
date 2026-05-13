import { cookies } from "next/headers";
import { MatchesPageHeading } from "@/components/MatchesPageHeading";
import { FeaturedMatchCard } from "@/components/FeaturedMatchCard";
import { loadUpcomingWorldCupEvents } from "../../../../lib/matches/events";

function readGeo(): string {
  return cookies().get("geo")?.value ?? "row";
}

export default async function MatchesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const geo = readGeo();
  const events = await loadUpcomingWorldCupEvents();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <MatchesPageHeading />
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        FIFA World Cup 2026 — upcoming fixtures
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <FeaturedMatchCard
            key={event.id}
            event={event}
            geo={geo}
            locale={locale}
          />
        ))}
      </ul>
    </div>
  );
}
