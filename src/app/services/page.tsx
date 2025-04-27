export default function ServicesPage() {
  const services = [
    {
      title: "Core (Entry-Level)",
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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition-all flex flex-col justify-between"
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
<a
  href="/contact"
  className="mt-auto inline-block text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-2 px-4 rounded-xl shadow-lg hover:scale-105 transition"
>
  Get Now
</a>
          </div>
        ))}
      </div>
    </div>
  );
}
