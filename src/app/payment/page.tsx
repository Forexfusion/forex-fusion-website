"use client";
import { useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const [duration, setDuration] = useState("monthly");

  const pricingData = {
    core: {
      monthly: "350$",
      threeMonth: "900$",
      sixMonth: "1500$",
      yearly: "2800$"
    },
    pro: {
      monthly: "500$",
      threeMonth: "1200$",
      sixMonth: "2000$",
      yearly: "3500$"
    },
    apex: {
      monthly: "1000$",
      threeMonth: "2200$",
      sixMonth: "3800$",
      yearly: "5500$"
    }
  };

  return (
    <div className="bg-[#0B1120] text-white min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Make a Payment</h1>
        <p className="text-gray-400 mb-12 text-lg">
          We support Razorpay, Binance Pay, and Stripe for quick and secure payments.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Plan</h2>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { label: "Monthly", key: "monthly" },
            { label: "3 Month", key: "threeMonth" },
            { label: "6 Month", key: "sixMonth" },
            { label: "One Year", key: "yearly" }
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setDuration(opt.key)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${duration === opt.key
                  ? "bg-white text-black"
                  : "border-white text-white hover:bg-white hover:text-black"}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Core", id: "core" },
            { name: "Pro", id: "pro" },
            { name: "Apex", id: "apex" }
          ].map((plan) => (
            <div
              key={plan.id}
              className="bg-[#111827] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name} Plan</h3>
              <p className="text-2xl font-semibold mb-6">
                {pricingData[plan.id][duration]}{" "}
                <span className="text-base font-normal text-gray-300">
                  / {duration === "threeMonth"
                    ? "3 Month"
                    : duration === "sixMonth"
                    ? "6 Month"
                    : duration === "yearly"
                    ? "One Year"
                    : "Monthly"}
                </span>
              </p>

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
