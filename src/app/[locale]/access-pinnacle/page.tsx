/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import AccessGuide from '@/components/AccessGuide';

const affiliateLink = 'https://www.pinnacle.com';

export default function AccessPinnacle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Pinnacle World Cup Betting</h1>
          <p className="text-xl text-gray-600">
            ✅ Works in 180+ countries including Germany, UK, US, Canada & Ireland
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">✅ NO GEO-BLOCKING</h3>
          <p className="text-gray-700 mb-4">Pinnacle accepts players from almost every country in the world. Click below to access immediately:</p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Access Pinnacle Now →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Why Pinnacle?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 180+ countries accepted (NO GEO-BLOCKING)</li>
              <li>✅ Best odds on the market</li>
              <li>✅ Live betting on World Cup</li>
              <li>✅ Fast payouts</li>
              <li>✅ No account limits</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Instant Access</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Click link directly above</li>
              <li>✅ No VPN/Tor needed</li>
              <li>✅ Works from anywhere</li>
              <li>✅ Sign up in 2 minutes</li>
              <li>✅ Start betting immediately</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Bet on World Cup 2026?</h3>
          <p className="mb-6 text-lg">No restrictions. No geo-blocking. Works everywhere.</p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg"
          >
            Open Pinnacle →
          </a>
        </div>
      </div>
    </div>
  );
}
