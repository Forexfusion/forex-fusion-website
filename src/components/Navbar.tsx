'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  onHomeClick?: () => void;
};

export default function Navbar({ onHomeClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0b0f19] text-white py-4 px-6 fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" onClick={onHomeClick}>
          <Image src="/logo.png" alt="Forex Fusion" width={36} height={36} priority />
          <span className="text-xl font-bold">Forex Fusion</span>
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition" onClick={onHomeClick}>
              Home
            </Link>
          </li>
          <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
          <li><Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link></li>
          <li><Link href="/payment" className="hover:text-yellow-400 transition">Payment</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-center text-base font-medium">
          <li>
            <Link href="/" onClick={() => { onHomeClick?.(); setIsOpen(false); }}>
              Home
            </Link>
          </li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link href="/payment" onClick={() => setIsOpen(false)}>Payment</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
