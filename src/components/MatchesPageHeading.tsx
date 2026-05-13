"use client";

import { useTranslations } from "next-intl";

export function MatchesPageHeading() {
  const t = useTranslations("MatchesPage");
  return (
    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
      {t("title")}
    </h1>
  );
}
