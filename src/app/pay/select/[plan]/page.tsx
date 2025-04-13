interface PlanPageProps {
  params: { plan: string };
}

const pricing: Record<string, { name: string; amount: string }> = {
  core: { name: "Core Plan", amount: "₹19999" },
  pro: { name: "Pro Plan", amount: "₹24999" },
  apex: { name: "Apex Plan", amount: "₹49999" },
};

export default function PlanPage({ params }: PlanPageProps) {
  const { plan } = params;
  const planData = pricing[plan.toLowerCase()] || { name: "Unknown Plan", amount: "N/A" };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl font-bold mb-2">{planData.name}</h1>
      <p className="text-lg text-gray-300 mb-1">You are about to purchase the {planData.name.toLowerCase()}.</p>
      <p className="text-2xl font-semibold text-green-400 mb-8">Amount: {planData.amount}</p>

      <div className="space-y-4 w-full max-w-xs">
        <a
          href={`/pay/razorpay/${plan}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl block text-center"
        >
          Pay with Razorpay
        </a>
        <a
          href={`/pay/stripe/${plan}`}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl block text-center"
        >
          Pay with Stripe
        </a>
        <a
          href={`/pay/crypto/${plan}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl block text-center"
        >
          Pay with Crypto (Binance)
        </a>
      </div>
    </div>
  );
}
