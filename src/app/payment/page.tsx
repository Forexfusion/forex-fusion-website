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

        <div className="flex justify-center gap-10">
          <Link href="/pay/razorpay">
            <Image src="/icons/razorpay.png" alt="Razorpay" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </Link>
          <Link href="/pay/stripe">
            <Image src="/icons/stripe.png" alt="Stripe" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </Link>
          <button onClick={() => setOpenBinance(!openBinance)}>
            <Image src="/icons/binance.png" alt="Binance" width={50} height={50} className="cursor-pointer hover:scale-110 transition" />
          </button>
        </div>

        {openBinance && (
          <div className="mt-6 flex flex-col gap-2 items-center">
            <Link href="/pay/crypto?network=bep20" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Pay via BEP-20
            </Link>
            <Link href="/pay/crypto?network=trc20" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Pay via TRC-20
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
