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

        {/* Payment Icons */}
        <div className="flex justify-center gap-10">
          <Link href="/pay/razorpay">
            <Image
              src="/icons/razorpay.png"
              alt="Razorpay"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition"
            />
          </Link>
          <Link href="/pay/stripe">
            <Image
              src="/icons/stripe.png"
              alt="Stripe"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition"
            />
          </Link>
          <button onClick={() => setOpenBinance(!openBinance)}>
            <Image
              src="/icons/binance.png"
              alt="Binance"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition"
            />
          </button>
        </div>

        {/* Binance Options */}
        {openBinance && (
          <div className="mt-6 flex flex-col gap-2 items-center">
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
