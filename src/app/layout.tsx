import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { getLocale } from "next-intl/server";
import "./globals.css";

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
    default: 'World Cup 2026 Betting Odds — Compare Bookmakers Live | WorldCupBet26',
    template: '%s | WorldCupBet26',
  },
  description: 'Compare World Cup 2026 betting odds from Betsson, 1xBet, Bet365 & more. Best bonuses, live match odds, value bets & expert tips. FIFA World Cup Jun 11–Jul 19.',
  keywords: ['World Cup 2026 odds', 'FIFA 2026 betting', 'World Cup betting', '2026 World Cup bookmakers', 'best World Cup odds'],
  openGraph: {
    siteName: 'WorldCupBet26',
    type: 'website',
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHCT4V7XB8"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PHCT4V7XB8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
