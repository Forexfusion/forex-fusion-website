// /app/pay/crypto/[plan]/page.tsx
'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const CryptoAddress = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mt-4">
      <p className="text-white font-semibold">Address:</p>
      <p className="text-sm text-gray-300 break-words">{address}</p>
      <button
        onClick={handleCopy}
        className="mt-2 px-3 py-1 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default function CryptoPaymentPage() {
  const { plan } = useParams();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">Pay with Crypto - {plan} Plan</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* TRC20 Option */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">TRC20 (Tron Network)</h2>
          <Image
            src="/images/trc20.jpg"
            alt="TRC20 QR"
            width={300}
            height={300}
            className="rounded-lg mx-auto mb-4"
          />
          <CryptoAddress address="TRzoMKLaCoGCZroxUddGg7QJ27irmdpzsg" />
        </div>

        {/* BEP20 Option */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">BEP20 (BNB Smart Chain)</h2>
          <Image
            src="/images/bep20.jpg"
            alt="BEP20 QR"
            width={300}
            height={300}
            className="rounded-lg mx-auto mb-4"
          />
          <CryptoAddress address="0x4be19a1a2ecb95cf7561815a0bdc3bc943c1712b" />
        </div>
      </div>

      <p className="mt-8 text-sm text-center text-gray-400 max-w-2xl">
        After sending the payment, please take a screenshot and contact support for confirmation.
      </p>
    </div>
  );
}
