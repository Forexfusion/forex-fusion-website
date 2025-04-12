import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Forex Fusion",
  description: "Get in touch with Forex Fusion's sales team.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0f172a] min-h-screen px-4 py-10 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Our Sales Team</h1>
        <p className="text-center text-gray-600 mb-8">
          We're here to answer your questions. Fill out the form and we'll get back to you shortly.
        </p>
        <iframe
          aria-label="Contact Us"
          frameBorder="0"
          style={{ height: "500px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.in/businesssolutionsforex1/form/ContactUs/formperma/w81DthuFRlwvRSz2C8ojka5a6vpKDF3mANb4HrU5qEA"
        ></iframe>
      </div>
    </main>
  );
}
