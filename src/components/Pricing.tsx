export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center bg-[#0B1120] text-white">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* Core Plan */}
        <div className="neon-card p-6 rounded-2xl w-64 text-center">
          <h3 className="font-bold text-xl mb-2">Core</h3>
          <p className="mb-2">“Smart Start for Every Trader”</p>
          <span className="block font-semibold text-2xl mb-4">350$ / One Year</span>
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 transition"
          >
            Get Core
          </a>
        </div>

        {/* Pro Plan */}
        <div className="neon-card p-6 rounded-2xl w-64 text-center">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-2">“Power & Performance Combined”</p>
          <span className="block font-semibold text-2xl mb-4">700$ / One Year</span>
          <a
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg mt-4 transition"
          >
            Get Pro
          </a>
        </div>

        {/* Apex Plan */}
        <div className="neon-card p-6 rounded-2xl w-64 text-center">
          <h3 className="font-bold text-xl mb-2">Apex</h3>
          <p className="mb-2">“Unleash Elite Trading Mastery”</p>
          <span className="block font-semibold text-2xl mb-4">1500$ / One Year</span>
          <a
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 transition"
          >
            Get Apex
          </a>
        </div>
      </div>
    </section>
  );
}
