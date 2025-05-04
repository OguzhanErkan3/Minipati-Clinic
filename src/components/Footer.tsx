import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white shadow-xl">
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-sm">
        {/* Sol: Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <Image
              width={64}
              height={64}
              src="/logo.png"
              alt="Minipati Veteriner Kliniği Logo"
              className=" rounded-full"
            />
          </Link>
        </div>

        {/* Orta: İletişim Bilgileri */}
        <div className="text-center space-y-1">
          <p><strong>Adres:</strong> Kerem Apart, Ünalan, 1. Bostancı Sk. No:7 B, Uşak</p>
          <p><strong>Telefon:</strong> <a href="tel:+905411236464" className="hover:underline">0541 123 64 64</a></p>
          <p><strong>Acil Durumlar:</strong><br/>7/24 Hizmet</p>
        </div>

        {/* Sağ: Sosyal Medya */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/Minipati-Veteriner-Kliniği" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://wa.me/905411236464" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://www.instagram.com/minipativeteriner/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-2 pt-2 text-center text-xs">
        © {new Date().getFullYear()} Minipati Veteriner Kliniği. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
