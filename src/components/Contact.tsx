import React, { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxl7FUwqXaneqQidi8A8zCr9sGRV7cieGNJBQq21i2ZRjKNQaWKTqMS0L7abeecKfD2D/exec", {
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
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <input type="text" name="contact" placeholder="Your Contact Number" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-4 py-2 rounded w-full">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
