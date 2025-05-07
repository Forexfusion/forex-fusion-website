'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Core (Entry-Level)",
      slug: "core",
      color: "cyan",
      description:
        "For entry-level traders with basic features and limited tools. This plan is for beginners who want basic features such as a demo account, basic charting tools, and limited leverage to understand the Forex market.",
      features: [
        "Basic trading tools",
        "Demo accounts for practice",
        "Limited leverage (1:50 or 1:100)",
        "Basic charting tools",
        "Minimal spread or commission",
      ],
    },
    {
      title: "Pro",
      slug: "pro",
      color: "yellow",
      description:
        "Advanced Tools: Real-time charts, better execution speeds, advanced technical indicators, and risk management tools. This plan is for mid-level traders who want more tools and strategies, along with margin trading and risk management.",
      features: [
        "Advanced charting tools (like MetaTrader 4 or 5)",
        "Real-time market data",
        "Medium leverage (1:200 or 1:500)",
      ],
    },
    {
      title: "Apex",
      slug: "apex",
      color: "green",
      description:
        "Exclusive Features: AI-based trading, daily/weekly market analysis, professional tools and VIP services. This is for full-time experienced traders who need powerful tools, signals, webinars, and premium support.",
      features: [
        "AI-driven trading signals",
        "High leverage (1:1000 or more)",
        "Personalized account manager and support",
        "Advanced research and daily market analysis",
        "Exclusive webinars and training sessions",
        "Low spread or zero commission per trade",
        "VIP access to copy & algorithmic trading",
        "Moderate spread (1–2 pips) + commission",
        "Weekly trade recommendations",
        "Support for technical strategies",
      ],
    },
  ];

  const glowShadow = {
    cyan: 'hover:shadow-[0_0_25px_#00FFFF]',
    yellow: 'hover:shadow-[0_0_25px_#FFD700]',
    green: 'hover:shadow-[0_0_25px_#00FF99]',
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 relative">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
         <div
  key={index}
  onClick={() => setSelectedService(service)} // ✅ Click entire card
  className={`cursor-pointer bg-[#111827] border border-gray-700 rounded-2xl p-6 shadow-md transition-all duration-300 flex flex-col justify-between ${glowShadow[service.color]} hover:scale-105`}
>
            <div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedService(service)}
              className={`mt-auto inline-block text-center text-white font-medium py-2 px-4 rounded-xl shadow-lg hover:scale-105 transition 
              ${
                service.slug === 'core'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : service.slug === 'pro'
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              Get Now
            </button>
          </div>
        ))}
      </div>

      {/* ✅ POPUP SECTION */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-8 py-12 rounded-3xl shadow-2xl w-[95%] sm:w-[600px] md:w-[700px] text-center relative animate-fadeUp">
            <button
              className="absolute top-3 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {selectedService.title}
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-6">
              Ready to get started with the {selectedService.slug} plan? Contact our team to activate it.
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
    </div>
  );
}
