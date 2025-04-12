export default function AboutPage() {
  return (
    <main className="bg-[#0B1120] text-white min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto space-y-12">

        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Forex Fusion</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Forex Fusion, we are dedicated to helping individuals and businesses achieve their financial goals
            through cutting-edge algorithmic trading. Built with high-frequency, low-latency tech on secure AWS servers,
            our Python-based algorithms offer 100% automation with brokers worldwide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-400">What We Do</h2>
          <p className="text-gray-400">
            Our team of experienced financial consultants specializes in Forex, Comex, and investment planning. We customize
            strategies to meet your personal financial goals—short and long term. From consultation to coaching, education,
            and investment reviews, we cover it all.
          </p>
          <p className="text-gray-400">
            Transparency is our priority — we’re not tied to any specific financial products, so we focus entirely on what’s best for you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-400">Our Mission</h2>
          <p className="text-gray-400">
            To empower individuals and businesses with personalized solutions, cutting-edge trading tech, and transparent guidance,
            helping them build a solid financial foundation and make informed decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-400">Our Vision</h2>
          <p className="text-gray-400">
            To become the most trusted financial consulting firm — known for integrity, education, and innovation.
            We aim to equip our clients with the tools and confidence to navigate an ever-evolving financial landscape.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li><strong>Expertise:</strong> Experienced consultants, always updated on market trends and laws.</li>
            <li><strong>Personalized Approach:</strong> Every client gets a tailored financial plan.</li>
            <li><strong>Comprehensive Services:</strong> Forex, Comex, and US stocks consulting all in one place.</li>
            <li><strong>Transparent & Honest:</strong> Clear reasoning and honest recommendations.</li>
            <li><strong>Performance Tracking:</strong> Regular reporting to show real-time progress.</li>
            <li><strong>Availability:</strong> Monday–Saturday, 9:00 AM – 7:30 PM IST.</li>
            <li><strong>Cost-Effective:</strong> Affordable plans to match every budget.</li>
            <li><strong>Support:</strong> Online & offline help whenever you need us.</li>
          </ul>
        </section>

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
