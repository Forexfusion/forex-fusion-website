'use client';
import { useState } from 'react';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricing = {
    core: {
      name: 'Core',
      tagline: '“Smart Start for Every Trader”',
      price: {
        monthly: '350$',
        threeMonth: '900$',
        sixMonth: '1500$',
        yearly: '2800$'
      }
    },
    pro: {
      name: 'Pro',
      tagline: '“Power & Performance Combined”',
      price: {
        monthly: '500$',
        threeMonth: '1200$',
        sixMonth: '2000$',
        yearly: '3500$'
      }
    },
    apex: {
      name: 'Apex',
      tagline: '“Unleash Elite Trading Mastery”',
      price: {
        monthly: '1000$',
        threeMonth: '2200$',
        sixMonth: '3800$',
        yearly: '5500$'
      }
    }
  };

  return (
    <section id="pricing" className="py-20 text-center bg-[#0B1120] text-white">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-8">

        {Object.entries(pricing).map(([key, plan]) => (
          <div
            key={key}
            onClick={() => setSelectedPlan(key)}
            className="neon-card cursor-pointer p-6 rounded-2xl w-72 text-center border border-gray-700 hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
            <p className="mb-4 text-sm">{plan.tagline}</p>
            <ul className="text-sm space-y-1 mb-4">
              <li><strong>{plan.price.monthly}</strong> / Monthly</li>
              <li><strong>{plan.price.threeMonth}</strong> / Three Month</li>
              <li><strong>{plan.price.sixMonth}</strong> / Six Month</li>
              <li><strong>{plan.price.yearly}</strong> / One Year</li>
            </ul>
            <span className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white px-4 py-2 rounded-lg transition">
              View Details
            </span>
          </div>
        ))}

      </div>

      {/* ✅ Popup */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-8 py-10 rounded-3xl shadow-2xl w-[95%] sm:w-[600px] md:w-[700px] text-center relative animate-fadeUp">
            <button
              className="absolute top-3 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedPlan(null)}
            >
              ×
            </button>
            <h2 className="text-3xl font-extrabold mb-4">
              {pricing[selectedPlan].name} Plan
            </h2>
            <p className="text-lg mb-2">{pricing[selectedPlan].tagline}</p>
            <div className="text-base leading-loose mt-4">
              <p><strong>{pricing[selectedPlan].price.monthly}</strong> / Monthly</p>
              <p><strong>{pricing[selectedPlan].price.threeMonth}</strong> / 3 Month</p>
              <p><strong>{pricing[selectedPlan].price.sixMonth}</strong> / 6 Month</p>
              <p><strong>{pricing[selectedPlan].price.yearly}</strong> / Yearly</p>
            </div>
            <a
              href={`/pay/crypto/${selectedPlan}`}
              className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Pay Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
