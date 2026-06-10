'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function VPNAffiliate() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg my-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">🔓 Unrestricted Access to Any Betting Site</h3>
        <p className="text-lg mb-6">
          Your location restricts access to certain betting sites? Use a VPN to access any betting site from anywhere, plus protect your privacy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* NordVPN */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">🛡️ NordVPN</h4>
            <ul className="text-sm mb-4 space-y-2">
              <li>✅ 5000+ servers worldwide</li>
              <li>✅ Military-grade encryption</li>
              <li>✅ Works with all betting sites</li>
              <li>✅ 30-day money back guarantee</li>
            </ul>
            <a
              href="https://nordvpn.com?ref=worldcupbet26"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block w-full text-center"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'vpn_click', {
                    event_category: 'VPN Affiliate',
                    event_label: 'NordVPN',
                  });
                }
              }}
            >
              Get NordVPN →
            </a>
          </div>

          {/* ExpressVPN */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">⚡ ExpressVPN</h4>
            <ul className="text-sm mb-4 space-y-2">
              <li>✅ Fastest VPN available</li>
              <li>✅ 94 countries coverage</li>
              <li>✅ Zero logging policy</li>
              <li>✅ 24/7 live chat support</li>
            </ul>
            <a
              href="https://www.expressvpn.com?ref=worldcupbet26"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded inline-block w-full text-center"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'vpn_click', {
                    event_category: 'VPN Affiliate',
                    event_label: 'ExpressVPN',
                  });
                }
              }}
            >
              Get ExpressVPN →
            </a>
          </div>

          {/* Surfshark */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">🌊 Surfshark</h4>
            <ul className="text-sm mb-4 space-y-2">
              <li>✅ Cheapest option ($2.19/mo)</li>
              <li>✅ Unlimited simultaneous connections</li>
              <li>✅ Unblocks all betting sites</li>
              <li>✅ No-log verified</li>
            </ul>
            <a
              href="https://surfshark.com?ref=worldcupbet26"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-block w-full text-center"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'vpn_click', {
                    event_category: 'VPN Affiliate',
                    event_label: 'Surfshark',
                  });
                }
              }}
            >
              Get Surfshark →
            </a>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="font-bold mb-3">How it works:</h4>
          <ol className="space-y-2 text-sm">
            <li>1️⃣ Choose a VPN above and sign up</li>
            <li>2️⃣ Connect to a server in US, UK, Canada, or Ireland</li>
            <li>3️⃣ Now you can access ANY betting site without restrictions</li>
            <li>4️⃣ Place bets, earn winnings, withdraw freely</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
