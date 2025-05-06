'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGlobe, FaHandshake, FaUsers, FaHeartPulse } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import Image from 'next/image';              // ← eklendi
import Link from 'next/link';                // ← eklendi, eğer Footer veya Navbar içinde <a> kullandıysan onlar da buradan gelmeli

export default function About() {
  const router = useRouter();

  // Sayfa görüntüleme takibi
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtagFunc = (window as any).gtag;
    if (typeof gtagFunc === 'function') {
      gtagFunc('config', 'G-RZ7BT6E143', { page_path: router.asPath });
    }
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#8d010c] via-[#f74b35] to-[#44000b]">
      <Head>
        {/* Temel SEO */}
        <title>Hakkımızda | MiniPati Veteriner Kliniği</title>
        <meta
          name="description"
          content="MiniPati Veteriner Kliniği: Uşak Merkez’de 7/24 acil veterinerlik, cerrahi ve tedavi hizmetleri sunan güvenilir adres."
        />
        <meta
          name="keywords"
          content="MiniPati, veteriner klinik, Uşak, 24 saat veteriner, acil veterinerlik, evcil hayvan bakımı, hayvan sağlığı"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:site_name" content="minipativeteriner.com" />
        <meta property="og:title" content="Hakkımızda | MiniPati Veteriner Kliniği" />
        <meta
          property="og:description"
          content="MiniPati Veteriner Kliniği olarak, minik dostlarınıza 7/24 kesintisiz veteriner hizmeti sunuyoruz. Hakkımızda detaylı bilgi alın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.minipativeteriner.com/hakkinda" />
        <meta property="og:image" content="/images/card.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minipativeteriner" />
        <meta name="twitter:title" content="Hakkımızda | MiniPati Veteriner Kliniği" />
        <meta
          name="twitter:description"
          content="MiniPati Veteriner Kliniği: 7/24 acil veterinerlik ve konforlu tedavi seçenekleriyle yanınızda."
        />
        <meta name="twitter:image" content="/images/card.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.minipativeteriner.com/hakkinda" />

        {/* JSON-LD Yapılandırması */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "MiniPati Veteriner Kliniği",
            "url": "https://www.minipativeteriner.com",
            "logo": "https://www.minipativeteriner.com/images/logo.png",
            "image": "https://www.minipativeteriner.com/images/card.png",
            "description": "MiniPati Veteriner Kliniği: Uşak Merkez’de 7/24 veteriner hizmeti.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1. Bostancı Sk. No:7 B",
              "addressLocality": "Uşak Merkez",
              "postalCode": "64000",
              "addressCountry": "TR"
            }
          }`}
        </script>
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Vizyon & Misyon Bölümü */}
        <section className="py-16 mt-20 rounded-t-3xl -mt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Vizyon Kartı */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-95 transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative p-10 text-white flex flex-col justify-between h-full">
                  <FaGlobe className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                  <p className="leading-relaxed">
                    Minik dostlarımızın fiziksel ve duygusal bütünlüğünü koruyarak, veteriner hekimlik
                    alanında ulusal ve uluslararası alanda referans gösterilen, yenilikçi araştırma ve
                    tedavi protokolleri geliştiren bir merkez olmak. Sürekli yatırımlarımızla teknoloji
                    ve uzmanlığımızı birleştirerek, sağlıkta mükemmelliği hedefliyoruz.
                  </p>
                  <FaHeartPulse className="w-6 h-6 mt-6 opacity-70 self-end" />
                </div>
              </div>

              {/* Misyon Kartı */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-400 opacity-95 transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative p-10 text-white flex flex-col justify-between h-full">
                  <FaHandshake className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                  <p className="leading-relaxed">
                    Topluma, evcil hayvan sahiplerine güven veren, şeffaf ve samimi bir veterinerlik deneyimi
                    sunmak. Acil müdahale, rutin kontrol, cerrahi ve rehabilitasyon süreçlerinde etik
                    değerlerimizi koruyarak, eğitim ve bilinçlendirme projeleriyle hayvan sağlığı farkındalığını
                    artırmak.
                  </p>
                  <FaUsers className="w-6 h-6 mt-6 opacity-70 self-end" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hekim Bilgisi */}
        <section className="-mt-8 mb-8 px-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-blue-400 opacity-95 transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative p-10 text-white flex flex-col justify-between h-full items-center">
              <div className="w-64 h-64 mb-6 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                {/* <img> yerine Image */}
                <Image
                  src="/images/vet2.jpeg"
                  alt="Veteriner Hekim Dr. Enes Turan Seval"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Dr. Enes Turan Seval</h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-pink-100 mb-4">
                Veteriner Hekim & Kurucu
              </p>
              <p className="text-center leading-relaxed max-w-md">
                Minipati Veteriner Kliniği’nin kurucusu Dr. Enes Turan Seval, 7/24 acil veterinerlik,
                cerrahi ve tedavi hizmetleriyle minik dostlarınıza en üst düzeyde bakım sunar.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
