import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";
import StickyOddsBar from "@/components/StickyOddsBar";
import AffiliateTracker from "@/components/AffiliateTracker";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

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
      {/* GA4 — consent mode default (GDPR: denied until user accepts) */}
      <Script id="ga4-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500,
          });
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PHCT4V7XB8" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PHCT4V7XB8', { anonymize_ip: true });
        `}
      </Script>
      <Nav />
      <StickyOddsBar />
      <main className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">{children}</main>
      <Footer />
      <CookieConsent />
      <AffiliateTracker />
    </NextIntlClientProvider>
  );
}
