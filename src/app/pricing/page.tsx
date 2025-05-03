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
          <ul className="text-base text-white text-center mb-6 space-y-1 font-medium">
            <li>350$ / <span className="text-gray-300">Monthly</span></li>
            <li>900$ / <span className="text-gray-300">Three Month</span></li>
            <li>1500$ / <span className="text-gray-300">Six Month</span></li>
            <li>2800$ / <span className="text-gray-300">One Year</span></li>
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
          <ul className="text-base text-white text-center mb-6 space-y-1 font-medium">
            <li>500$ / <span className="text-gray-300">Monthly</span></li>
            <li>1200$ / <span className="text-gray-300">Three Month</span></li>
            <li>2000$ / <span className="text-gray-300">Six Month</span></li>
            <li>3500$ / <span className="text-gray-300">One Year</span></li>
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
          <ul className="text-base text-white text-center mb-6 space-y-1 font-medium">
            <li>1000$ / <span className="text-gray-300">Monthly</span></li>
            <li>2200$ / <span className="text-gray-300">Three Month</span></li>
            <li>3800$ / <span className="text-gray-300">Six Month</span></li>
            <li>5500$ / <span className="text-gray-300">One Year</span></li>
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
