export const metadata = {
  title: "Privacy Policy",
  description: "WorldCupBet26 privacy policy. Learn how we collect and use your data, our use of affiliate links, and third-party services.",
  alternates: {
    canonical: "https://www.worldcupbet26.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "WorldCupBet26 privacy policy — how we collect and use your data.",
    url: "https://www.worldcupbet26.com/privacy",
    siteName: "WorldCupBet26",
    type: "website" as const,
  },
  twitter: {
    card: "summary" as const,
    title: "Privacy Policy",
    description: "WorldCupBet26 privacy policy — how we collect and use your data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 2026</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Who We Are</h2>
      <p className="mb-4">WorldCupBet26 is a betting odds comparison website for the FIFA World Cup 2026. Our website address is https://worldcupbet26.com.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Data We Collect</h2>
      <p className="mb-4">We do not collect personal data directly. We use anonymous analytics to understand traffic patterns. We use cookies to detect your approximate location for showing relevant bookmakers.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Affiliate Links</h2>
      <p className="mb-4">This site contains affiliate links to bookmakers. When you click these links, the bookmaker may set their own cookies. We earn a commission if you register and deposit. This is how we fund the site.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Third Party Services</h2>
      <p className="mb-4">We use Vercel for hosting and The Odds API for live odds data. Please refer to their privacy policies for data handling information.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Contact</h2>
      <p className="mb-4">For privacy questions contact: contact@worldcupbet26.com</p>
    </div>
  );
}
