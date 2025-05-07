"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const triggerPopup = useCallback(() => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const brokers = [
    { name: "Binomo", logo: "/brokers/binomo.png" },
    { name: "Exness", logo: "/brokers/exness.png" },
    { name: "FBS", logo: "/brokers/fbs.png" },
    { name: "OctaFX", logo: "/brokers/octafx.png" },
    { name: "IQ Option", logo: "/brokers/iqoption.png" },
    { name: "Deriv", logo: "/brokers/deriv.png" },
    { name: "Quotex", logo: "/brokers/quotex.png" },
    { name: "Pocket Option", logo: "/brokers/pocketoption.png" },
    { name: "FXTM", logo: "/brokers/fxtm.png" },
    { name: "XM", logo: "/brokers/xm.png" },
    { name: "AvaTrade", logo: "/brokers/avatrade.png" },
  ];

  return (
    <main className="bg-[#0B1120] text-white min-h-screen relative">
      <Navbar onHomeClick={triggerPopup} />

      {/* ✅ Neon Glow Box pushed below Navbar */}
      <div className="pt-24 center-glow-box">

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

        {/* ✅ Trusted Platforms Section (gap-free scroll + bigger logos) */}
        <section className="py-12 px-6 text-center overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-8">
            Available on Trusted Platforms
          </h2>

          <motion.div
            className="flex gap-12 items-center w-max"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20, // 👌 Smooth speed
              ease: "linear",
            }}
          >
            {[...brokers, ...brokers].map((broker, index) => (
              <div key={index} className="flex flex-col items-center w-28 shrink-0">
                <img
                  src={broker.logo}
                  alt={broker.name}
                  className="w-14 h-14 object-contain mb-2" // ✅ Increased size
                />
                <span className="text-sm text-white">{broker.name}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Why Choose Forex Fusion?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-Powered Accuracy",
                  desc: "Leverage cutting-edge AI to get high-precision trade signals and market predictions.",
                },
                {
                  title: "24/7 Market Insights",
                  desc: "Stay updated with continuous analysis and insights around the clock.",
                },
                {
                  title: "Easy to Use",
                  desc: "Whether you're a beginner or pro, our intuitive interface makes trading simple.",
                },
                {
                  title: "Dedicated Support",
                  desc: "Our expert team is here to help you every step of the way.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Pop-up CTA */}
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
