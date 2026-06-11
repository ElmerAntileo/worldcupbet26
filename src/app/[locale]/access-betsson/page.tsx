/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import AccessGuide from '@/components/AccessGuide';

const affiliateLink = '/choose-betting';

export default function AccessBetsson() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Betsson World Cup Betting</h1>
          <p className="text-xl text-gray-600">
            Get instant access to Betsson betting markets for World Cup 2026
          </p>
        </div>

        {/* Access Guide */}
        <AccessGuide program="betsson" affiliateLink={affiliateLink} />

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Why Betsson?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 150+ World Cup markets</li>
              <li>✅ Live streaming of matches</li>
              <li>✅ Competitive odds</li>
              <li>✅ Licensed & regulated</li>
              <li>✅ Great customer support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">About Tor Browser</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 100% Free & Open Source</li>
              <li>✅ Completely Anonymous</li>
              <li>✅ Used by millions worldwide</li>
              <li>✅ No logs or tracking</li>
              <li>✅ Works on Windows, Mac, Linux</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Is Tor Browser legal?</h4>
              <p className="text-gray-700">
                Absolutely. Tor is used by journalists, activists, and millions of people worldwide for privacy and freedom.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Can Betsson detect Tor?</h4>
              <p className="text-gray-700">
                During signup, Tor allows you to appear as if you&apos;re from an allowed country. Once verified, your account is linked to your identity.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">What if my account gets closed?</h4>
              <p className="text-gray-700">
                If you follow the signup correctly and verify your real details, your account is protected. Betsson respects verified accounts.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">How fast is payout from Betsson?</h4>
              <p className="text-gray-700">
                Withdrawals typically process within 1-3 business days depending on your payment method.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Do I need Tor after signup?</h4>
              <p className="text-gray-700">
                No. Tor is only needed for signup. Once your account is created and verified, you can close Tor and use the normal website.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Betting?</h3>
          <p className="mb-6 text-lg">Follow the guide above and get access to Betsson in under 5 minutes</p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg"
          >
            Sign Up at Betsson →
          </a>
        </div>
      </div>
    </div>
  );
}
