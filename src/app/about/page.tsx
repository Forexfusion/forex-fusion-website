export default function AboutPage() {
  return (
    <main className="bg-[#0B1120] text-white min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ...existing sections... */}

        {/* ✅ Founder Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 border-t border-gray-700 pt-10">
          <img
            src="/founder.jpg"
            alt="Founder - Aryan Tagore"
            className="w-40 h-40 rounded-full border-2 border-yellow-500 object-top object-cover"
          />
          <div className="space-y-2 text-gray-300 text-center md:text-left">
            <p className="text-lg font-semibold">Aryan Tagore</p>
            <p>Founder, Forex Fusion</p>
            <p className="text-sm">
              Office 203, Floor 02, Al Zubara Tower, Salam Street,<br />
              Abu Dhabi, UAE
            </p>
          </div>
        </div>

        {/* ✅ Founder Message */}
        <div className="text-center mt-6 px-4">
          <p className="text-sm text-gray-400 italic max-w-2xl mx-auto">
            "At Forex Fusion, we don’t just guide your trades — we empower your decisions. Whether you're starting out or scaling up, your financial growth is our mission. Your growth isn't just a goal — it's our responsibility."
          </p>
          <span className="text-white font-semibold block mt-2">— Aryan Tagore, Founder</span>
        </div>

        {/* ✅ CTA Button */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 font-medium">
            Ready to take control of your financial future?
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-gradient-to-r from-green-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
