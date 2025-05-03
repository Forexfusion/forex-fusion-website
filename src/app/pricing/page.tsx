'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [duration, setDuration] = useState('monthly');

  const pricing = {
    core: {
      monthly: '350 USD',
      threeMonth: '900 USD',
      sixMonth: '1500 USD',
      yearly: '2800 USD'
    },
    pro: {
      monthly: '500$ USD',
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

  // ✅ Static color map for Tailwind compatibility
  const colorClass = {
    core: 'bg-blue-600 hover:bg-blue-700',
    pro: 'bg-yellow-400 hover:bg-yellow-500 text-black',
    apex: 'bg-green-600 hover:bg-green-700'
  };

  return (
    <section className="py-24 px-4 text-center bg-[#0e0e0e] text-white">
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

      {/* Plan Cards */}
      <div className="flex justify-center gap-10 flex-wrap max-w-6xl mx-auto">
        {[
          { name: 'Core', id: 'core', link: '/pay/crypto/core' },
          { name: 'Pro', id: 'pro', link: '/pay/crypto/pro' },
          { name: 'Apex', id: 'apex', link: '/pay/crypto/apex' }
        ].map((plan) => (
          <div key={plan.id} className="border border-white p-8 rounded-xl w-80 shadow-lg bg-[#111]">
            <h3 className="font-bold text-2xl mb-3">{plan.name}</h3>
            <p className="mb-3 text-gray-400 text-base">
              {plan.name === 'Core'
                ? '“Smart Start for Every Trader”'
                : plan.name === 'Pro'
                ? '“Power & Performance Combined”'
                : '“Unleash Elite Trading Mastery”'}
            </p>
            <span className="block text-xl font-semibold mb-6">
              {pricing[plan.id][duration]} <span className="text-base font-normal">/ {duration === 'yearly' ? '1 Year' : duration === 'threeMonth' ? '3 Month' : duration === 'sixMonth' ? '6 Month' : 'Monthly'}</span>
            </span>
            <Link href={plan.link}>
              <button
                className={`${colorClass[plan.id]} text-white text-lg px-6 py-2 rounded-lg transition`}
              >
                Get {plan.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
