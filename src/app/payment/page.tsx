"use client";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Make a Payment</h1>
        <p className="text-gray-400 mb-12 text-lg">
          We support Razorpay, Binance Pay, and Stripe for quick and secure payments.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Choose Your Plan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Core", price: "₹19,999", id: "core" },
            { name: "Pro", price: "₹24,999", id: "pro" },
            { name: "Apex", price: "₹49,999", id: "apex" },
          ].map((plan) => (
            <div key={plan.id} className="bg-[#111827] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">{plan.name} Plan</h3>
              <p className="text-2xl font-semibold mb-6">{plan.price}</p>

              <div className="flex flex-col gap-3">
                <Link
                  href={`/pay/razorpay/${plan.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
                >
                  Pay with Razorpay
                </Link>
                <Link
                  href={`/pay/stripe/${plan.id}`}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-medium transition"
                >
                  Pay with Stripe
                </Link>
                <Link
                  href={`/pay/crypto/${plan.id}`}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-medium transition"
                >
                  Pay with Binance
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
