export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center bg-[#0B1120] text-white">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* Core Plan */}
        <div className="neon-card p-6 rounded-2xl w-72 text-center border border-gray-700">
          <h3 className="font-bold text-xl mb-2">Core</h3>
          <p className="mb-4 text-sm">“Smart Start for Every Trader”</p>
          <ul className="text-sm space-y-1 mb-4">
            <li><strong>350$</strong> / Monthly</li>
            <li><strong>900$</strong> / Three Month</li>
            <li><strong>1500$</strong> / Six Month</li>
            <li><strong>2800$</strong> / One Year</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Get Core
          </a>
        </div>

        {/* Pro Plan */}
        <div className="neon-card p-6 rounded-2xl w-72 text-center border border-gray-700">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-4 text-sm">“Power & Performance Combined”</p>
          <ul className="text-sm space-y-1 mb-4">
            <li><strong>500$</strong> / Monthly</li>
            <li><strong>1200$</strong> / Three Month</li>
            <li><strong>2000$</strong> / Six Month</li>
            <li><strong>3500$</strong> / One Year</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition"
          >
            Get Pro
          </a>
        </div>

        {/* Apex Plan */}
        <div className="neon-card p-6 rounded-2xl w-72 text-center border border-gray-700">
          <h3 className="font-bold text-xl mb-2">Apex</h3>
          <p className="mb-4 text-sm">“Unleash Elite Trading Mastery”</p>
          <ul className="text-sm space-y-1 mb-4">
            <li><strong>1000$</strong> / Monthly</li>
            <li><strong>2200$</strong> / Three Month</li>
            <li><strong>3800$</strong> / Six Month</li>
            <li><strong>5500$</strong> / One Year</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Get Apex
          </a>
        </div>
      </div>
    </section>
  );
}
