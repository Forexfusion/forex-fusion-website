'use client';
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 text-center bg-[#0e0e0e] text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="text-lg text-gray-300 mb-10">
        Choose a plan that fits your trading style and experience level.
      </p>

      <div className="flex justify-center gap-10 flex-wrap max-w-6xl mx-auto">

        {/* Core Plan */}
        <div className="border border-white p-8 rounded-xl w-80 shadow-lg bg-[#111]">
          <h3 className="font-bold text-2xl mb-3">Core</h3>
          <p className="mb-3 text-gray-400 text-base">“Smart Start for Every Trader”</p>
          <ul className="text-sm text-left mb-6 space-y-1">
            <li><strong>350$</strong> / Monthly</li>
            <li><strong>900$</strong> / Three Month</li>
            <li><strong>1500$</strong> / Six Month</li>
            <li><strong>2800$</strong> / One Year</li>
          </ul>
          <Link href="/pay/crypto/core">
            <button className="bg-blue-600 text-white text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Core
            </button>
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="border border-white p-8 rounded-xl w-80 shadow-lg bg-[#111]">
          <h3 className="font-bold text-2xl mb-3">Pro</h3>
          <p className="mb-3 text-gray-400 text-base">“Power & Performance Combined”</p>
          <ul className="text-sm text-left mb-6 space-y-1">
            <li><strong>500$</strong> / Monthly</li>
            <li><strong>1200$</strong> / Three Month</li>
            <li><strong>2000$</strong> / Six Month</li>
            <li><strong>3500$</strong> / One Year</li>
          </ul>
          <Link href="/pay/crypto/pro">
            <button className="bg-yellow-400 text-black text-lg px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
              Get Pro
            </button>
          </Link>
        </div>

        {/* Apex Plan */}
        <div className="border border-white p-8 rounded-xl w-80 shadow-lg bg-[#111]">
          <h3 className="font-bold text-2xl mb-3">Apex</h3>
          <p className="mb-3 text-gray-400 text-base">“Unleash Elite Trading Mastery”</p>
          <ul className="text-sm text-left mb-6 space-y-1">
            <li><strong>1000$</strong> / Monthly</li>
            <li><strong>2200$</strong> / Three Month</li>
            <li><strong>3800$</strong> / Six Month</li>
            <li><strong>5500$</strong> / One Year</li>
          </ul>
          <Link href="/pay/crypto/apex">
            <button className="bg-green-600 text-white text-lg px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Get Apex
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
