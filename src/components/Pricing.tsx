'use client';
import { useState } from 'react';

export default function Pricing() {
  const [popupPlan, setPopupPlan] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-[#0B1120] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-10 text-gray-300">Choose a plan that fits your trading style.</p>

      {/* PLAN CARDS */}
      <div className="flex flex-wrap justify-center gap-6">
        {['core', 'pro', 'apex'].map((plan) => (
          <div
            key={plan}
            onClick={() => setPopupPlan(plan)}
            className="cursor-pointer w-72 p-6 border border-gray-700 rounded-2xl neon-card hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 capitalize">{plan}</h3>
            <p className="text-sm text-gray-400 mb-4">
              {plan === 'core'
                ? 'Smart Start for Every Trader'
                : plan === 'pro'
                ? 'Power & Performance Combined'
                : 'Unleash Elite Trading Mastery'}
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>Monthly: {plan === 'core' ? '350$' : plan === 'pro' ? '500$' : '1000$'}</li>
              <li>3 Month: {plan === 'core' ? '900$' : plan === 'pro' ? '1200$' : '2200$'}</li>
              <li>6 Month: {plan === 'core' ? '1500$' : plan === 'pro' ? '2000$' : '3800$'}</li>
              <li>Yearly: {plan === 'core' ? '2800$' : plan === 'pro' ? '3500$' : '5500$'}</li>
            </ul>
            <div className="bg-gradient-to-r from-green-400 to-purple-500 py-2 px-4 rounded-lg">
              View Details
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {popupPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-400 to-purple-500 text-white p-8 rounded-2xl w-[90%] sm:w-[500px] relative">
            <button
              onClick={() => setPopupPlan(null)}
              className="absolute top-3 right-4 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 capitalize">{popupPlan} Plan</h2>
            <p className="mb-4">
              {popupPlan === 'core'
                ? '350$/mo, 900$/3mo, 1500$/6mo, 2800$/year'
                : popupPlan === 'pro'
                ? '500$/mo, 1200$/3mo, 2000$/6mo, 3500$/year'
                : '1000$/mo, 2200$/3mo, 3800$/6mo, 5500$/year'}
            </p>
            <a
              href={`/pay/crypto/${popupPlan}`}
              className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition"
            >
              Pay Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
