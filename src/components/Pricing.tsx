export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center bg-[#0B1120] text-white">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>

      <div className="flex justify-center gap-8 flex-wrap">
        
        {/* Core Plan */}
        <div className="neon-card p-6 w-64">
          <h3 className="font-bold text-xl mb-2">Core</h3>
          <p className="mb-2">“Smart Start for Every Trader”</p>
          <span className="block font-semibold text-lg">350$/One Year</span>
        </div>

        {/* Pro Plan */}
        <div className="neon-card p-6 w-64">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-2">“Power & Performance Combined”</p>
          <span className="block font-semibold text-lg">7000$/One Year</span>
        </div>

        {/* Apex Plan */}
        <div className="neon-card p-6 w-64">
          <h3 className="font-bold text-xl mb-2">Apex</h3>
          <p className="mb-2">“Unleash Elite Trading Mastery”</p>
          <span className="block font-semibold text-lg">1500$/One Year</span>
        </div>

      </div>
    </section>
  );
}
