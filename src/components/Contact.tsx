import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Contact: '',
    Message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyyX7KMYLjTKu7vENMhyxxauwPELz4sCkkNMqIYMHbNjypBLEC9VbCwO6-FEC0jwVgTQw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          Name: form.Name,
          Email: form.Email,
          Contact: form.Contact,
          Message: form.Message,
        }).toString(),
      });

      const result = await response.text();
      console.log("Google Sheet Response:", result);

      setSuccess(true);
      setForm({ Name: '', Email: '', Contact: '', Message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.Name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.Email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Contact"
        placeholder="Your Contact Number"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.Contact}
        onChange={handleChange}
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={form.Message}
        onChange={handleChange}
      ></textarea>

      {success && <p className="text-green-400">✅ Message sent successfully!</p>}

      <button
        type="submit"
        className="bg-gradient-to-r from-green-400 to-purple-500 p-2 rounded text-white w-full"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
