import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FeaturedMatchCard } from "@/components/FeaturedMatchCard";
import { loadUpcomingWorldCupEvents } from "../../../lib/matches/events";

function readGeo(): string {
  return cookies().get("geo")?.value ?? "row";
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "HomePage",
  });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function Home({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations("HomePage");
  const geo = readGeo();
  const events = await loadUpcomingWorldCupEvents();
  const featured = events.slice(0, 3);

  return (
    <article className="font-[family-name:var(--font-geist-sans)]">
      <section className="border-b border-emerald-900/20 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            FIFA World Cup 2026
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/95">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/matches"
              className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-emerald-900 shadow transition hover:bg-emerald-50"
            >
              {t("featuredViewAll")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {t("featuredTitle")}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t("featuredSubtitle")}
            </p>
          </div>
          <Link
            href="/matches"
            className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
          >
            {t("featuredViewAll")} →
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => (
            <FeaturedMatchCard
              key={event.id}
              event={event}
              geo={geo}
              locale={locale}
              h2hCaption={t("featuredH2hCaption")}
              vsLabel={t("vsLabel")}
            />
          ))}
        </ul>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-100/80 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {t("whyTitle")}
          </h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            <li className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                {t("whyOddsTitle")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {t("whyOddsText")}
              </p>
            </li>
            <li className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                {t("whyLangTitle")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {t("whyLangText")}
              </p>
            </li>
            <li className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                {t("whyLiveTitle")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {t("whyLiveText")}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {t("faqTitle")}
        </h2>
        <dl className="mt-10 space-y-8">
          {(
            [
              ["faq1q", "faq1a"],
              ["faq2q", "faq2a"],
              ["faq3q", "faq3a"],
              ["faq4q", "faq4a"],
              ["faq5q", "faq5a"],
            ] as const
          ).map(([qk, ak]) => (
            <div key={qk}>
              <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                {t(qk)}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t(ak)}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
