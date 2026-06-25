import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldcupbet26.com"),
  title: {
    default: 'World Cup Betting Odds 2026 — Live Odds Comparison | Betsson, 1xBet, Bet365',
    template: '%s | WorldCupBet26',
  },
  description: 'World Cup betting odds 2026 live from 32+ bookmakers. Compare Betsson vs 1xBet vs Bet365. Best bonuses, match predictions & expert World Cup betting tips.',
  keywords: ['world cup betting', 'world cup betting odds', 'world cup 2026 odds', 'betting odds 2026', 'FIFA World Cup betting', '2026 World Cup odds'],
  openGraph: {
    siteName: 'WorldCupBet26',
    type: 'website',
    images: [
      {
        url: 'https://www.worldcupbet26.com/og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'WorldCupBet26 — Compare World Cup 2026 Betting Odds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@worldcupbet26',
    images: ['https://www.worldcupbet26.com/og-social.jpg'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
