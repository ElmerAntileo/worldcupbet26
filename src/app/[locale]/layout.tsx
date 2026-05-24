import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";
import StickyOddsBar from "@/components/StickyOddsBar";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Nav />
      <StickyOddsBar />
      <main className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
