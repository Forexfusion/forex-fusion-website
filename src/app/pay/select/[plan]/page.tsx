// app/pay/[plan]/page.tsx
'use client';
import { useParams } from 'next/navigation';

export default function SelectPlanPage() {
  const { plan } = useParams();

  const pricing = {
    core: "₹19999/month",
    pro: "₹24999/month",
    apex: "₹49999/month"
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 capitalize">{plan} Plan</h1>
      <p className="text-lg text-gray-300 mb-4">
        You are about to purchase the <strong>{plan}</strong> plan.
      </p>
      <p className="text-2xl text-yellow-400 font-bold mb-8">{pricing[plan as keyof typeof pricing]}</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a
          href={`/pay/razorpay/${plan}`}
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
        >
          Pay with Razorpay
        </a>
        <a
          href={`/pay/stripe/${plan}`}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-medium transition"
        >
          Pay with Stripe
        </a>
        <a
          href={`/pay/crypto/${plan}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-medium transition"
        >
          Pay with Crypto
        </a>
      </div>
    </div>
  );
}
