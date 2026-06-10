/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

const affiliateLink = 'https://www.betfair.com/exchange/football';

export default function AccessBetfair() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Betfair World Cup Betting</h1>
          <p className="text-xl text-gray-600">
            ✅ Works worldwide - UK licensed, EU authorized
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">✅ INSTANT ACCESS</h3>
          <p className="text-gray-700 mb-4">Betfair is UK licensed and authorized for EU/international players. Click below to access:</p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Access Betfair Now →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Why Betfair?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ UK licensed & regulated</li>
              <li>✅ Betting exchange (best odds)</li>
              <li>✅ Live World Cup betting</li>
              <li>✅ Works in most countries</li>
              <li>✅ Fast withdrawals</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Instant Access</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Click link directly above</li>
              <li>✅ No special setup needed</li>
              <li>✅ Works globally</li>
              <li>✅ Sign up in 5 minutes</li>
              <li>✅ Start betting immediately</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Betting?</h3>
          <p className="mb-6 text-lg">Click below to access Betfair betting exchange</p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg"
          >
            Open Betfair →
          </a>
        </div>
      </div>
    </div>
  );
}
