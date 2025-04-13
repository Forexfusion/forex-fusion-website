"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function RazorpayPaymentPage() {
  const router = useRouter();
  const params = useParams<{ plan: string }>();
  const plan = params.plan;

  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // ✅ Replace with your actual Razorpay Key ID
          amount: getAmount(plan),
          currency: "INR",
          name: "Forex Fusion",
          description: `Purchase ${plan} plan`,
          handler: function (response: any) {
            alert("✅ Payment Successful! ID: " + response.razorpay_payment_id);
            router.push("/");
          },
          prefill: {
            name: "User",
            email: "user@example.com",
          },
          theme: {
            color: "#10B981", // Green
          },
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      };
      script.onerror = () => {
        alert("❌ Failed to load Razorpay SDK.");
      };
      document.body.appendChild(script);
    };

    if (plan) {
      loadRazorpay();
    }
  }, [plan, router]);

  const getAmount = (plan: string) => {
    switch (plan) {
      case "core":
        return 99900; // ₹999 * 100
      case "pro":
        return 249900;
      case "apex":
        return 499900;
      default:
        return 99900;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Redirecting to Razorpay...</h1>
      <p className="text-gray-400">Please wait while we prepare your payment...</p>
    </div>
  );
}
