export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Contact number" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
