"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RazorpayPayment({ params }: { params: { plan: string } }) {
  const router = useRouter();

  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // Replace this with your real key
          amount: getAmount(params.plan),
          currency: "INR",
          name: "Forex Fusion",
          description: `Purchase ${params.plan} plan`,
          handler: function (response: any) {
            alert("✅ Payment Successful: " + response.razorpay_payment_id);
            router.push("/");
          },
          prefill: {
            name: "User",
            email: "user@example.com",
          },
          theme: {
            color: "#0B1120",
          },
        };
        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
      };
      document.body.appendChild(script);
    };

    loadRazorpay();
  }, [params.plan, router]);

  const getAmount = (plan: string) => {
    switch (plan) {
      case "core":
        return 1999900;
      case "pro":
        return 2499900;
      case "apex":
        return 4999900;
      default:
        return 1999900;
    }
  };

  return (
    <div className="text-center py-32 text-white">
      <h1>Redirecting to Razorpay...</h1>
    </div>
  );
}
