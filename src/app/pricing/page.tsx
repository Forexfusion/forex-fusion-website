'use client';
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center bg-[#0e0e0e] text-white">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>
      <div className="flex justify-center gap-8 flex-wrap">

        {/* Core Plan */}
        <div className="border p-6 rounded w-64 shadow">
          <h3 className="font-bold text-xl mb-2">Core</h3>
          <p className="mb-2">“Smart Start for Every Trader”</p>
          <span className="block font-semibold mb-4">₹1,000/month</span>
          <Link href="/pay/crypto/core">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get Core
            </button>
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="border-2 border-yellow-500 p-6 rounded w-64 shadow bg-yellow-50">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-2">“Power & Performance Combined”</p>
          <span className="block font-semibold mb-4">₹5,000/month</span>
          <Link href="/pay/crypto/pro">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
              Get Pro
            </button>
          </Link>
        </div>

        {/* Apex Plan */}
        <div className="border p-6 rounded w-64 shadow">
          <h3 className="font-bold text-xl mb-2">Apex</h3>
          <p className="mb-2">“Unleash Elite Trading Mastery”</p>
          <span className="block font-semibold mb-4">₹10,000/month</span>
          <Link href="/pay/crypto/apex">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Get Apex
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
