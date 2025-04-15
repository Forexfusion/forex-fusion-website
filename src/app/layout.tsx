import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forex Fusion',
  description: 'Smart Trading for Every Trader',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B1120] text-white`}>
        <Navbar />
        <div className="pt-20">{children}</div>

        {/* ✅ Footer Section */}
        <footer className="bg-[#0B1120] text-gray-300 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* ✅ Left: Brand Info + Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">Forex Fusion</h3>
                <p className="mb-3">
                  Empowering traders with precision tools, strategic insights, and real-time AI signals.
                </p>
                <p className="text-sm text-gray-500">
                  © 2027 Forex Fusion. All rights reserved..
                </p>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-2">Policies</h4>
                <ul className="space-y-1 text-gray-400 text-sm">          
                  <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
                  <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
                  <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/refund" className="hover:underline">Refund Policy</a></li>
                  <li><a href="/forex-benefits" className="hover:underline">Benefits of Forex</a></li>
                  <li><a href="/comex-benefits" className="hover:underline">Benefits of Comex</a></li>
                  <li><a href="/FAQ" className="hover:underline">FAQ</a></li>
                </ul>
              </div>
            </div>

            {/* ✅ Right: Feature Details */}
            <div className="md:text-right space-y-4">
              <p className="md:text-right text-xl font-bold text-white">Reach out to us at:</p>

              {[
                {
                  icon: "/location.png",
                  alt: "Location",
                  content: "Forexfusion, Office 203, Floor 02, Al Zubara Tower, Salam Street, Abu Dhabi, UAE"
                },
                {
                  icon: "/office.png",
                  alt: "Office",
                  content: "Virtual office (Flexi-desk)"
                },
                {
                  icon: "/license.png",
                  alt: "License",
                  content: "License: Management consultancy / IT / Trading platform"
                },
                {
                  icon: "/business.png",
                  alt: "Business",
                  content: "Forex education, strategy tools, signal advisory, AI trading tools"
                },
                {
                  icon: "/email.png",
                  alt: "Email",
                  content: (
                    <a href="mailto:businesssolutions@forexfusion.in" className="hover:underline">
                      businesssolutions@forexfusion.in
                    </a>
                  )
                },
                {
                  icon: "/whatsapp.png",
                  alt: "WhatsApp",
                  content: (
                    <a
                      href="https://wa.me/9730998637"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  )
                }
              ].map(({ icon, alt, content }, idx) => (
                <div key={idx} className="flex md:justify-end items-start gap-3">
                  <img src={icon} alt={alt} className="w-5 h-5 pt-[2px]" />
                  <p className="max-w-md">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
