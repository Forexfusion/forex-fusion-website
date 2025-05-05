'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PaymentPage() {
  const [openBinance, setOpenBinance] = useState(false);

  return (
    <div className="bg-[#0B1120] text-white min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Make a Payment</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Choose your preferred payment gateway to continue.
        </p>

        {/* Payment Icons in Box with Neon Light */}
        <div className="flex justify-center gap-10">
          {[
            { name: "razorpay", src: "/icons/razorpay.png", href: "/pay/razorpay", glow: "shadow-blue-500" },
            { name: "stripe", src: "/icons/stripe.png", href: "/pay/stripe", glow: "shadow-purple-500" },
            { name: "binance", src: "/icons/binance.png", href: "#", glow: "shadow-yellow-400", onClick: true }
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-[#111827] p-6 rounded-2xl shadow-lg ${item.glow} hover:scale-105 transition-all`}
            >
              {item.onClick ? (
                <button onClick={() => setOpenBinance(!openBinance)}>
                  <Image src={item.src} alt={item.name} width={75} height={75} />
                </button>
              ) : (
                <Link href={item.href}>
                  <Image src={item.src} alt={item.name} width={75} height={75} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Binance Options */}
        {openBinance && (
          <div className="mt-6 flex flex-col gap-3 items-center">
            <Link href="/pay/crypto/bep20">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition">
                Pay via BEP-20
              </button>
            </Link>
            <Link href="/pay/crypto/trc20">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition">
                Pay via TRC-20
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
