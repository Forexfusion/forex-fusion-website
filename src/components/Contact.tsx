import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyyX7KMYLjTKu7vENMhyxxauwPELz4sCkkNMqIYMHbNjypBLEC9VbCwO6-FEC0jwVgTQw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          contact: form.contact,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', contact: '', message: '' });
      } else {
        throw new Error('Response not OK');
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact"
        placeholder="Your Contact Number"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.contact}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.message}
        onChange={handleChange}
      ></textarea>

      {success && <p className="text-green-400">✅ Message sent successfully!</p>}
      {error && <p className="text-red-400">❌ Failed to send message. Try again later.</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-green-400 to-purple-500 p-2 rounded text-white w-full"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
