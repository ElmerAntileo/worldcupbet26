"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABEL: Record<string, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
  de: "DE",
  fr: "FR",
  it: "IT",
};

export function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/"
            className="text-lg font-semibold text-emerald-700 dark:text-emerald-400"
          >
            {t("brand")}
          </Link>
          <nav className="flex gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Link
              href="/matches"
              className="hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              {t("matches")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            {t("language")}
          </span>
          {routing.locales.map((loc) => (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                loc === locale
                  ? "bg-emerald-600 text-white"
                  : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              }`}
              prefetch={false}
            >
              {LOCALE_LABEL[loc] ?? loc.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
