export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center bg-white text-black">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <p className="mb-6">Choose a plan that fits your trading style and experience level.</p>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="border p-6 rounded w-64 shadow">
          <h3 className="font-bold text-xl mb-2">Core</h3>
          <p className="mb-2">“Smart Start for Every Trader”</p>
          <span className="block font-semibold">₹1,000/month</span>
        </div>
        <div className="border-2 border-yellow-500 p-6 rounded w-64 shadow bg-yellow-50">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-2">“Power & Performance Combined”</p>
          <span className="block font-semibold">₹5,000/month</span>
        </div>
        <div className="border p-6 rounded w-64 shadow">
          <h3 className="font-bold text-xl mb-2">Apex</h3>
          <p className="mb-2"> “Unleash Elite Trading Mastery”</p>
          <span className="block font-semibold">₹10,000/month</span>
        </div>
      </div>
    </section>
  );
}
