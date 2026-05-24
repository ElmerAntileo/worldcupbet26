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
  title: 'WorldCupBet26 | Best World Cup 2026 Betting Odds',
  description: 'Compare live World Cup 2026 betting odds from 30+ top bookmakers. Best bonuses, match previews and expert tips for FIFA World Cup USA, Canada, Mexico 2026.',
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
