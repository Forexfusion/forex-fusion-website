"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StripePayment({ params }: { params: { plan: string } }) {
  const router = useRouter();

  useEffect(() => {
    const amount = getAmount(params.plan);

    // Replace with your actual Stripe payment link or Stripe Checkout logic
    const stripeLink = `https://buy.stripe.com/test_xxx?amount=${amount}`;

    window.location.href = stripeLink;
  }, [params.plan]);

  const getAmount = (plan: string) => {
    switch (plan) {
      case "core":
        return 999;
      case "pro":
        return 2499;
      case "apex":
        return 4999;
      default:
        return 999;
    }
  };

  return (
    <div className="text-center py-32 text-white">
      <h1>Redirecting to Stripe...</h1>
    </div>
  );
}
