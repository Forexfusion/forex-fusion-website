'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0b0f19] text-white py-4 px-6 flex justify-between items-center fixed top-0 z-50 shadow-lg">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Forex Fusion Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold text-white">Forex Fusion</span>
        </Link>
      </div>

      <ul className="flex space-x-6 text-base font-medium">
        <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li> {/* ✅ Home added here */}
        <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
        <li><Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link></li>
        <li><Link href="/payment" className="hover:text-yellow-400 transition">Payment</Link></li>
        <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}
