"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
  "https://script.google.com/macros/library/d/1uzvKcibI_Iom-YpmmNSrAfsPC-CekHUO-vOIdKKZoqoFW0OWrMG5fusC/5",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
);

      const result = await response.json();
      if (result.result === "Success") {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", contact: "", message: "" });
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-[#1F2937] border border-gray-700"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[#1F2937] border border-gray-700"
          />
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            placeholder="Your Contact Number"
            required
            className="w-full p-3 rounded bg-[#1F2937] border border-gray-700"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-[#1F2937] border border-gray-700 h-32"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-6 py-3 rounded font-semibold shadow hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
