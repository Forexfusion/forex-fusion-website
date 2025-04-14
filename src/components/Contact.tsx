import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxI7FUwqXaneqQidi8A8zCr9sGRV7cieGNJBQq21i2ZRjXNQaWKTqMS0L7abeeBfiiOrg/exec", {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form),
      });

      alert("Message Sent Successfully!");
      form.reset();
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input name="name" type="text" placeholder="Name" required className="w-full p-2 border rounded" />
        <input name="contact" type="text" placeholder="Contact number" required className="w-full p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Message" required className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
