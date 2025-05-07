'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [duration, setDuration] = useState('monthly'); // ✅ Missing hook added
  const searchParams = useSearchParams();
  const scrollToPlan = searchParams.get('plan');

  useEffect(() => {
    if (scrollToPlan) {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollToPlan]);

  const pricing = {
    core: {
      monthly: '350 USD',
      threeMonth: '900 USD',
      sixMonth: '1500 USD',
      yearly: '2800 USD'
    },
    pro: {
      monthly: '500 USD',
      threeMonth: '1200 USD',
      sixMonth: '2000 USD',
      yearly: '3500 USD'
    },
    apex: {
      monthly: '1000 USD',
      threeMonth: '2200 USD',
      sixMonth: '3800 USD',
      yearly: '5500 USD'
    }
  };

  const colorClass = {
    core: 'bg-blue-600 hover:bg-blue-700',
    pro: 'bg-yellow-400 hover:bg-yellow-500 text-black',
    apex: 'bg-green-600 hover:bg-green-700'
  };

  const planTagline = {
    core: '“Smart Start for Every Trader”',
    pro: '“Power & Performance Combined”',
    apex: '“Unleash Elite Trading Mastery”'
  };

  const payLink = {
    core: '/pay/crypto/core',
    pro: '/pay/crypto/pro',
    apex: '/pay/crypto/apex'
  };

  return (
    <section id="pricing" className="py-24 px-4 text-center bg-[#0e0e0e] text-white relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="text-lg text-gray-300 mb-8">
        Choose a plan that fits your trading style and experience level.
      </p>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        {[ 
          { label: 'Monthly', key: 'monthly' },
          { label: '3 Month', key: 'threeMonth' },
          { label: '6 Month', key: 'sixMonth' },
          { label: '1 Year', key: 'yearly' }
        ].map((option) => (
          <button
            key={option.key}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition
              ${duration === option.key
                ? 'bg-white text-black'
                : 'border-white text-white hover:bg-white hover:text-black'}`}
            onClick={() => setDuration(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-center gap-10 flex-wrap max-w-6xl mx-auto">
        {[ 
          { name: 'Core', id: 'core' },
          { name: 'Pro', id: 'pro' },
          { name: 'Apex', id: 'apex' }
        ].map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan)} // ✅ Entire card clickable
            className={`cursor-pointer p-8 rounded-xl w-80 shadow-lg bg-[#111] border border-white transition-all duration-300
              ${
                plan.id === 'core'
                  ? 'hover:shadow-[0_0_25px_#00BFFF]'
                  : plan.id === 'pro'
                  ? 'hover:shadow-[0_0_25px_#FFD700]'
                  : 'hover:shadow-[0_0_25px_#00FF99]'
              }`}
          >
            <h3 className="font-bold text-2xl mb-3">{plan.name}</h3>
            <p className="mb-3 text-gray-400 text-base">{planTagline[plan.id]}</p>
            <span className="block text-xl font-semibold mb-6">
              {pricing[plan.id][duration]}{' '}
              <span className="text-base font-normal">
                / {duration === 'yearly' ? '1 Year' : duration === 'threeMonth' ? '3 Month' : duration === 'sixMonth' ? '6 Month' : 'Monthly'}
              </span>
            </span>
            <button
              className={`${colorClass[plan.id]} text-white text-lg px-6 py-2 rounded-lg transition pointer-events-none`}
            >
              Get {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Popup Section */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-8 py-12 rounded-3xl shadow-2xl w-[95%] sm:w-[600px] md:w-[700px] text-center relative animate-fadeUp">
            <button
              className="absolute top-3 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedPlan(null)}
            >
              ×
            </button>
            <h2 className="text-4xl font-extrabold mb-4">
              {selectedPlan.name} Plan
            </h2>
            <p className="text-xl font-medium mb-6">
              {pricing[selectedPlan.id][duration]} / {duration === 'yearly' ? '1 Year' : duration === 'threeMonth' ? '3 Month' : duration === 'sixMonth' ? '6 Month' : 'Monthly'}
            </p>
            <Link href={payLink[selectedPlan.id]}>
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition duration-200">
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
