'use client';
import Image from "next/image";

export default function BEP20Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">BEP20 Payment Page</h1>
        <p className="text-lg mb-6">Please send USDT via BEP20 (BNB Smart Chain).</p>

        <Image
          src="/images/bep20-new.jpg"
          alt="BEP20 QR Code"
          width={300}
          height={300}
          unoptimized
          className="rounded-lg mx-auto mb-4"
        />

        <p className="text-sm break-words mb-2">
          <strong>Address:</strong><br />
          0x4be19a1a2ecb95cf7561815a0bdc3bc943c1712b
        </p>
        <p className="text-xs text-gray-400">
          ⚠️ Send only USDT via BEP20. Do not send NFTs or other tokens.
        </p>
      </div>
    </div>
  );
}
