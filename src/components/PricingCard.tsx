'use client';
import { useRouter } from "next/navigation";

const PricingCard = ({ plan }: { plan: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/pay/select/${plan.toLowerCase()}`)}
      className={`py-2 px-4 rounded-full text-white hover:scale-105 transition
        bg-gradient-to-r
        ${
          plan === 'Core' ? 'from-green-400 to-blue-500' :
          plan === 'Pro' ? 'from-purple-500 to-pink-500' :
          'from-yellow-400 to-orange-500'
        }`}
    >
      {`Get ${plan}`}
    </button>
  );
};

export default PricingCard;
