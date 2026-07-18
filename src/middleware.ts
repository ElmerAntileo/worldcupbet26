import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { getGeo } from "../lib/geo";

const intlMiddleware = createMiddleware(routing);

const SOCIAL_CRAWLERS = /Twitterbot|facebookexternalhit|LinkedInBot|WhatsApp|Slackbot|TelegramBot|Discordbot|googlebot|bingbot/i;

export default function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  const isCrawler = SOCIAL_CRAWLERS.test(ua);

  if (isCrawler) {
    // Run intlMiddleware so it rewrites / → /[locale] (needed to serve the page, not 404).
    // Then strip Set-Cookie entirely so Next.js won't force Cache-Control: private.
    const response = intlMiddleware(request);
    response.headers.delete("set-cookie");
    response.headers.set("Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
    return response;
  }

  const response = intlMiddleware(request);
  const geo = getGeo(request);
  response.cookies.set("geo", geo, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
