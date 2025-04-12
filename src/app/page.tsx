"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#0B1120] text-white min-h-screen relative">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Master Forex Trading with Precision
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-8">
          AI-powered tools, real-time signals, and strategic insights to help you win every trade.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-green-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Get Started Now
        </a>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-[#0B1120]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose Forex Fusion?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Cards here */}
            <div className="bg-[#111827] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Accuracy</h3>
              <p className="text-gray-400 text-sm">
                Leverage cutting-edge AI to get high-precision trade signals and market predictions.
              </p>
            </div>
            <div className="bg-[#111827] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">24/7 Market Insights</h3>
              <p className="text-gray-400 text-sm">
                Stay updated with continuous analysis and insights around the clock.
              </p>
            </div>
            <div className="bg-[#111827] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-400 text-sm">
                Whether you're a beginner or pro, our intuitive interface makes trading simple.
              </p>
            </div>
            <div className="bg-[#111827] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-400 text-sm">
                Our expert team is here to help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟡 Pop-up with CTA */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-8 py-12 rounded-3xl shadow-2xl w-[95%] sm:w-[600px] md:w-[700px] text-center relative animate-fadeUp">
            <button
              className="absolute top-3 right-4 text-white text-2xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Your Gateway to Smart Trading
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-6">
              Join the revolution of intelligent forex strategies powered by AI, analytics, and expert support.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
