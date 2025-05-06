import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

const Footer: React.FC = () => (
  <footer className="bg-black text-white shadow-xl">
    <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-sm">
      {/* Sol: Logo */}
      <div className="flex justify-center md:justify-start">
        <Link href="/" className="block">
          <Image
            src="/logo.png"
            alt="MiniPati Veteriner Kliniği Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
        </Link>
      </div>
      {/* Orta: İletişim */}
      <div className="text-center space-y-1">
        <p>Kerem Apart, Ünalan, 1. Bostancı Sk. No:7 B, Uşak</p>
        <p>
          <a href="tel:+905411236464" className="hover:underline">
            +90 541 123 64 64
          </a>
        </p>
      </div>
      {/* Sağ: Sosyal */}
      <div className="flex justify-center md:justify-end space-x-4">
        <a
          href="https://www.facebook.com/p/Minipati-Veteriner-Klini%C4%9Fi-61555272961477"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a
          href="https://wa.me/905411236464"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a
          href="https://www.instagram.com/minipativeteriner/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-2 pt-2 text-center text-xs">
      © {new Date().getFullYear()} MiniPati Veteriner Kliniği. Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer;
