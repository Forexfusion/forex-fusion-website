import Image from "next/image";

export default function CryptoPaymentPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Crypto Payment (USDT)</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* TRC20 Option */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">TRC20 (Tron Network)</h2>
          <Image
            src="/images/trc20-new.jpg" // ✅ Rename image file
            alt="TRC20 QR"
            width={300}
            height={300}
            unoptimized // ✅ Disable next/image optimization
            className="rounded-lg mx-auto mb-4"
          />
          <p className="text-sm break-words text-center mb-2">
            <strong>Address:</strong><br />
            TRzoMKLaCoGCZroxUddGg7QJ27irmdpzsg
          </p>
          <p className="text-xs text-gray-400 text-center">
            Send only USDT via TRC20. Do not send NFTs.
          </p>
        </div>

        {/* BEP20 Option */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">BEP20 (BNB Smart Chain)</h2>
          <Image
            src="/images/bep20-new.jpg" // ✅ Rename image file
            alt="BEP20 QR"
            width={300}
            height={300}
            unoptimized // ✅ Disable next/image optimization
            className="rounded-lg mx-auto mb-4"
          />
          <p className="text-sm break-words text-center mb-2">
            <strong>Address:</strong><br />
            0x4be19a1a2ecb95cf7561815a0bdc3bc943c1712b
          </p>
          <p className="text-xs text-gray-400 text-center">
            Send only USDT via BEP20. Do not send NFTs.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm text-center text-gray-500 max-w-2xl">
        After sending the payment, please take a screenshot of the transaction and share it with our support team for confirmation.
      </p>
    </div>
  );
}
