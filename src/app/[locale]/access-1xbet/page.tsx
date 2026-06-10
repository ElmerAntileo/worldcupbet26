/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const affiliateLink1xBet = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function Access1xBet() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [showTorGuide, setShowTorGuide] = useState(false);

  useEffect(() => {
    // Check if user is in a restricted country by testing access
    const checkAccess = async () => {
      try {
        await fetch('https://1xlite-24510.bar/en/', { mode: 'no-cors' });
        // If it loads, user might have access
        setIsBlocked(false);
      } catch {
        // If it fails, user is likely blocked
        setIsBlocked(true);
      }
    };

    checkAccess();
  }, []);

  const handleClickDirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Try direct access first
    const popup = window.open(affiliateLink1xBet, '_blank', 'width=800,height=600');

    // After 3 seconds, if user is likely blocked, show Tor guide
    setTimeout(() => {
      if (isBlocked) {
        popup?.close();
        setShowTorGuide(true);
      }
    }, 3000);
  };

  const handleClickPinnacle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLinkPinnacle, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🎯 World Cup 2026 Betting - INSTANT ACCESS</h1>
          <p className="text-xl text-gray-600">
            ⚡ Get access NOW - Multiple working options below
          </p>
        </div>

        {/* OPTION 1: Try Direct 1xBet */}
        <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">✅ OPTION 1: 1xBet Direct Access (Fastest)</h3>
          <p className="text-gray-700 mb-4">Click below to access 1xBet directly. Works in most locations:</p>
          <a
            href={affiliateLink1xBet}
            onClick={handleClickDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            💰 Sign Up at 1xBet Now →
          </a>
        </div>

        {/* OPTION 2: Pinnacle (No Geo-Blocking) */}
        <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-3">✅ OPTION 2: Pinnacle (Works EVERYWHERE - 180+ Countries)</h3>
          <p className="text-gray-700 mb-4">
            🌍 <strong>If 1xBet is blocked in your country</strong>, use Pinnacle instead:
          </p>
          <ul className="text-gray-700 mb-4">
            <li>✅ Works in 180+ countries (including all restricted regions)</li>
            <li>✅ NO VPN/Tor needed</li>
            <li>✅ Great odds on World Cup matches</li>
            <li>✅ Fast payouts</li>
          </ul>
          <a
            href={affiliateLinkPinnacle}
            onClick={handleClickPinnacle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            🌟 Access Pinnacle Now (Works Everywhere) →
          </a>
        </div>

        {/* OPTION 3: Tor for 1xBet if Blocked */}
        {showTorGuide && (
          <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-6 my-8">
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">⚠️ OPTION 3: 1xBet via Tor Browser (If Blocked)</h3>
            <p className="text-gray-700 mb-4">If 1xBet is blocked in your location, use Tor Browser (100% free & legal):</p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-lg mb-2">📥 Step 1: Download Tor Browser</h4>
                <p className="text-gray-700 mb-2">Go to: <strong>torproject.org</strong></p>
                <a href="https://www.torproject.org" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-bold">Download Tor Browser →</a>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-lg mb-2">⚙️ Step 2: Install & Launch</h4>
                <p className="text-gray-700">Install Tor Browser and launch it. Wait for connection to complete.</p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-lg mb-2">🌍 Step 3: Select Exit Node Location</h4>
                <p className="text-gray-700 mb-2">In Tor Browser settings, choose exit node from:</p>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>🇺🇸 United States</li>
                  <li>🇬🇧 United Kingdom</li>
                  <li>🇨🇦 Canada</li>
                  <li>🇮🇪 Ireland</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-600">
                <h4 className="font-bold text-lg mb-2">✅ Step 4: Sign Up</h4>
                <p className="text-gray-700 mb-3">Once Tor is running with correct location, click below:</p>
                <a
                  href={affiliateLink1xBet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
                >
                  Sign Up at 1xBet (With Tor) →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Why 1xBet vs Pinnacle Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">1xBet Advantages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 200+ World Cup match markets</li>
              <li>✅ Live betting during matches</li>
              <li>✅ Best odds in the market</li>
              <li>✅ Fast payouts</li>
              <li>✅ Mobile app available</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
            <h3 className="text-xl font-bold mb-3">Pinnacle Advantages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Works in 180+ countries</li>
              <li>✅ NO VPN/Tor needed</li>
              <li>✅ Instant access everywhere</li>
              <li>✅ Great World Cup odds</li>
              <li>✅ Fast withdrawals</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Quick FAQs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-2">❓ Can I use Tor with mobile?</h4>
              <p className="text-gray-700">Yes, Tor Browser works on iOS and Android. Search &quot;Tor Browser&quot; in your app store.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">❓ Is Tor slow?</h4>
              <p className="text-gray-700">Slightly slower, but only needed for signup (5-10 mins). After that, use normally.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">❓ Which option will work for me?</h4>
              <p className="text-gray-700"><strong>Try Option 1 first</strong> (1xBet direct). If blocked → Use <strong>Option 2</strong> (Pinnacle, works everywhere). Need 1xBet specifically? → Use <strong>Option 3</strong> (Tor).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
