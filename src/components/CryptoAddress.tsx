'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react'; // Make sure this is installed via `npm install lucide-react`

const CryptoAddress = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(''), 2000);
  };

  const AddressBox = ({ network, address }: { network: string; address: string }) => (
    <div className="bg-[#0e1117] rounded-xl p-4 w-full max-w-md shadow-md">
      <div className="text-white text-sm font-semibold mb-2">Address ({network}):</div>
      <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-md">
        <span className="text-white text-sm break-all">{address}</span>
        <button
          onClick={() => handleCopy(address)}
          className="ml-2 text-white hover:text-green-400 transition-colors"
        >
          {copied === address ? (
            <span className="text-green-400 text-xs font-medium">Copied!</span>
          ) : (
            <Copy size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>
      <p className="text-xs text-gray-400 text-center mt-2">
        Send only USDT via {network}. Do not send NFTs.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">USDT Payment Addresses</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <AddressBox
          network="TRC20"
          address="TRzoMKLaCoGCZroxUddGg7QJ27irmdpzsg"
        />
        <AddressBox
          network="BEP20"
          address="0x4be19a1a2ecb95cf7561815a0bdc3bc943c1712b"
        />
      </div>
    </div>
  );
};

export default CryptoAddress;
