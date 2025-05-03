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
            {
              name: "Core",
              id: "core",
              pricing: [
                { label: "Monthly", amount: "350$" },
                { label: "Three Month", amount: "900$" },
                { label: "Six Month", amount: "1500$" },
                { label: "One Year", amount: "2800$" },
              ],
            },
            {
              name: "Pro",
              id: "pro",
              pricing: [
                { label: "Monthly", amount: "500$" },
                { label: "Three Month", amount: "1200$" },
                { label: "Six Month", amount: "2000$" },
                { label: "One Year", amount: "3500$" },
              ],
            },
            {
              name: "Apex",
              id: "apex",
              pricing: [
                { label: "Monthly", amount: "1000$" },
                { label: "Three Month", amount: "2200$" },
                { label: "Six Month", amount: "3800$" },
                { label: "One Year", amount: "5500$" },
              ],
            },
          ].map((plan) => (
            <div
              key={plan.id}
              className="bg-[#111827] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name} Plan</h3>
              <ul className="text-sm text-center mb-6 space-y-1 font-medium">
                {plan.pricing.map((item, index) => (
                  <li key={index}>
                    {item.amount} / <span className="text-gray-300">{item.label}</span>
                  </li>
                ))}
              </ul>

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
