// /src/app/pricing/page.tsx
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white pt-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Core Plan */}
        <div className="bg-[#121826] p-6 rounded-2xl shadow-lg text-center border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Core</h2>
          <p className="text-gray-400 mb-6">“Smart Start for Every Trader”.</p>
          <p className="text-3xl font-bold mb-6">₹19999/mo</p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>✓ Real-time alerts</li>
            <li>✓ Basic AI strategies</li>
            <li>✓ Email support</li>
          </ul>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full hover:scale-105 transition">
            Get Core
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#121826] p-6 rounded-2xl shadow-lg text-center border-2 border-purple-500">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-gray-400 mb-6">“Power & Precision in One Package”.</p>
          <p className="text-3xl font-bold mb-6">₹24999/mo</p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>✓ Everything in Core</li>
            <li>✓ Advanced AI signals</li>
            <li>✓ Telegram Alerts</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full hover:scale-105 transition">
            Get Pro
          </button>
        </div>

        {/* Apex Plan */}
        <div className="bg-[#121826] p-6 rounded-2xl shadow-lg text-center border border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4">Apex</h2>
          <p className="text-gray-400 mb-6">“Unleash Elite Trading Mastery”.</p>
          <p className="text-3xl font-bold mb-6">₹49999/mo</p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>✓ Everything in Pro</li>
            <li>✓ Auto trade execution</li>
            <li>✓ Dedicated manager</li>
            <li>✓ 24/7 premium support</li>
          </ul>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded-full hover:scale-105 transition">
            Get Apex
          </button>
        </div>
      </div>
    </div>
  );
}
