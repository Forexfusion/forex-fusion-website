import React, { useState } from 'react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxI7FUwqXaneqQidi8A8zCr9sGRV7cieGNJBQq21i2ZRjXNQaWKTqMS0L7abeeBfiiOrg/exec", {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input type="text" name="Name" placeholder="Your Name" required className="w-full p-2 rounded bg-gray-800 text-white" />
      <input type="email" name="Email" placeholder="Your Email" required className="w-full p-2 rounded bg-gray-800 text-white" />
      <input type="text" name="Contact" placeholder="Your Contact Number" required className="w-full p-2 rounded bg-gray-800 text-white" />
      <textarea name="Message" placeholder="Your Message" required className="w-full p-2 rounded bg-gray-800 text-white"></textarea>

      {success && <p className="text-green-400">✅ Message sent successfully!</p>}

      <button type="submit" className="bg-gradient-to-r from-green-400 to-purple-500 p-2 rounded text-white w-full">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
