'use client';

// Declare the global Window.gtag signature to avoid using `any`
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SocialMediaButton from '@/components/SocialMediaButton';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6';

export default function Contact() {
  const router = useRouter();

  // Sayfa görüntüleme takibi
  useEffect(() => {
    const gtagFunc = window.gtag;
    if (typeof gtagFunc === 'function') {
      gtagFunc('config', 'G-RZ7BT6E143', {
        page_path: router.asPath,
      });
    }
  }, [router.asPath]);

  // Event takibi fonksiyonu
  const trackEvent = (category: string, label: string): void => {
    const gtagFunc = window.gtag;
    if (typeof gtagFunc === 'function') {
      gtagFunc('event', 'click', {
        event_category: category,
        event_label: label,
      });
    }
  };

  return (
    <>
      <Head>
        {/* Temel SEO */}
        <title>İletişim | MiniPati Veteriner Kliniği</title>
        <meta
          name="description"
          content="MiniPati Veteriner Kliniği ile 7/24 acil veteriner hizmeti, randevu ve bilgi almak için iletişime geçin. Uşak Merkez adresimize kolayca ulaşın."
        />
        <meta
          name="keywords"
          content="MiniPati, veteriner iletişim, Uşak veteriner, 24 saat veteriner, randevu veteriner, acil veteriner iletişim"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:site_name" content="minipativeteriner.com" />
        <meta property="og:title" content="İletişim | MiniPati Veteriner Kliniği" />
        <meta
          property="og:description"
          content="MiniPati Veteriner Kliniği ile 7/24 acil veteriner hizmeti ve randevu için iletişime geçin."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.minipativeteriner.com/contact" />
        <meta property="og:image" content="/images/card.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minipativeteriner" />
        <meta name="twitter:title" content="İletişim | MiniPati Veteriner Kliniği" />
        <meta
          name="twitter:description"
          content="MiniPati Veteriner Kliniği ile 7/24 acil veteriner hizmeti ve randevu için iletişime geçin."
        />
        <meta name="twitter:image" content="/images/card.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.minipativeteriner.com/contact" />

        {/* JSON-LD Yapılandırması */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "MiniPati Veteriner Kliniği",
            "url": "https://www.minipativeteriner.com/contact",
            "logo": "https://www.minipativeteriner.com/images/logo.png",
            "image": "https://www.minipativeteriner.com/images/card.png",
            "description": "MiniPati Veteriner Kliniği ile 7/24 acil veteriner hizmeti ve randevu için iletişime geçin.",
            "telephone": "+905411236464",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1. Bostancı Sk. No:7 B",
              "addressLocality": "Uşak Merkez",
              "postalCode": "64000",
              "addressCountry": "TR"
            },
            "sameAs": [
              "https://www.facebook.com/p/Minipati-Veteriner-Klini%C4%9Fi-61555272961477",
              "https://www.instagram.com/minipativeteriner/",
              "https://api.whatsapp.com/send?phone=905411236464"
            ]
          }`}
        </script>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-[#8d010c] via-[#c8201e] to-[#44000b]">
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <p className="mt-20 text-lg md:text-xl text-white text-center mb-8">
            Randevu oluşturmak, bilgi almak veya acil durumlar için bizimle iletişime geçebilirsiniz.
            <br />
            <span className="font-semibold">7/24 hizmetinizdeyiz.</span>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto px-2">
            <a
              href="tel:+905411236464"
              onClick={() => trackEvent('Contact', 'Phone Call')}
              className="block"
            >
              <SocialMediaButton
                icon={FaPhone}
                bgColor="bg-red-500"
                title="Bize Ulaşın"
                link="tel:+905411236464"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=905411236464"
              onClick={() => trackEvent('Contact', 'WhatsApp Chat')}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SocialMediaButton
                icon={FaWhatsapp}
                bgColor="bg-green-500"
                title="Whatsapp"
                link="https://api.whatsapp.com/send?phone=905411236464"
              />
            </a>
            <a
              href="https://www.instagram.com/minipativeteriner/"
              onClick={() => trackEvent('Contact', 'Instagram Visit')}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SocialMediaButton
                icon={FaInstagram}
                bgColor="bg-pink-500"
                title="Instagram"
                link="https://www.instagram.com/minipativeteriner/"
              />
            </a>
            <a
              href="https://www.facebook.com/p/Minipati-Veteriner-Klini%C4%9Fi-61555272961477"
              onClick={() => trackEvent('Contact', 'Facebook Visit')}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SocialMediaButton
                icon={FaFacebook}
                bgColor="bg-blue-500"
                title="Facebook"
                link="https://www.facebook.com/p/Minipati-Veteriner-Klini%C4%9Fi-61555272961477"
              />
            </a>
          </div>
        </div>

        <section className="w-full">
          <div className="container mx-auto px-5 py-10 text-center">
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.9886039846697!2d29.397486575120478!3d38.67212995996584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87f5c2bf7e55b%3A0x2048a0ab5425ed20!2sU%C5%9Fak%20Minipati%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1746444904101!5m2!1str!2str"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MiniPati Konum Haritası"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
