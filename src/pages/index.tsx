'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCat, FaDog, FaPaw, FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Uşak Minipati Veteriner Kliniği – 7/24 Veteriner Hizmeti ve Acil Müdahale</title>
        <meta
          name="description"
          content="Minipati Veteriner Kliniği, Uşak'ta 7/24 veteriner hizmeti, acil müdahale, ameliyat, tedavi, ilaç ve mama temini sunar."
        />
        <meta
          name="keywords"
          content="MiniPati, veteriner klinik, Uşak veteriner, 24 saat veteriner, acil veterinerlik, evcil hayvan bakımı, hayvan sağlığı"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.minipativeteriner.com" />
        {/* Open Graph */}
        <meta property="og:site_name" content="minipativeteriner.com" />
        <meta
          property="og:title"
          content="Uşak Minipati Veteriner Kliniği – 7/24 Veteriner Hizmeti ve Acil Müdahale"
        />
        <meta
          property="og:description"
          content="7/24 acil durum müdahalesi, ameliyatlar, muayene ve mama hizmetleri sunan Uşak'ın güvenilir veteriner kliniği."
        />
        <meta property="og:url" content="https://www.minipativeteriner.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minipativeteriner" />
        <meta
          name="twitter:title"
          content="Uşak Minipati Veteriner Kliniği – 7/24 Veteriner Hizmeti ve Acil Müdahale"
        />
        <meta
          name="twitter:description"
          content="7/24 acil müdahale, ameliyat, tedavi ve mama temini sunan Uşak'ın güvenilir veteriner kliniği."
        />
        <meta name="twitter:image" content="/images/card.png" />
      </Head>

      {/* Hero */}
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/Hero.jpg')]">
        <Navbar />
        <div className="w-[90%] mx-auto h-full flex flex-col justify-between py-4">
          <div className="mt-28 lg:mt-20 flex-grow flex items-start sm:items-center">
            <div className="lg:w-fit w-full text-white font-serif font-extrabold space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl">Onların</h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl">Sağlığı</h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl">Bizim</h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl">Önceliğimiz.</h1>
              <div className="mt-4 bg-black/30 rounded-sm px-2 py-1 shadow-sm shadow-white/50 w-fit text-sm sm:text-lg font-semibold">
                MİNİPATİ VETERİNER KLİNİĞİ
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 -translate-y-10 sm:translate-y-0">
            <a
              href="tel:+905411236464"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 rounded-sm py-4 px-4"
              aria-label="Bizi arayın"
            >
              <FaPhone className="text-white text-xl" />
              <h3 className="text-lg font-semibold text-white">Bizi Arayın</h3>
            </a>
            <p className="blink text-md sm:text-lg text-white bg-black/30 font-semibold rounded-lg px-3 py-1">
              7/24 hizmetinizdeyiz.
            </p>

            <style jsx>{`
              .blink {
                animation: blinkGlow 3s ease-in-out infinite;
              }
              @keyframes blinkGlow {
                0%, 100% {
                  opacity: 1;
                  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
                }
                50% {
                  opacity: 0;
                  text-shadow: none;
                }
              }
            `}</style>
          </div>

          <div className="flex gap-4 items-center justify-center text-white text-2xl relative z-10">
            <a href="https://api.whatsapp.com/send/?phone=05411236464" aria-label="WhatsApp">
              <FaWhatsapp className="w-8 h-8 hover:brightness-110 transition" />
            </a>
            <a href="https://www.instagram.com/minipativeteriner/" aria-label="Instagram">
              <FaInstagram className="w-8 h-8 hover:brightness-110 transition" />
            </a>
            <a href="https://www.facebook.com/p/Minipati-Veteriner-Klini%C4%9Fi-61555272961477" aria-label="Facebook">
              <FaFacebook className="w-8 h-8 hover:brightness-110 transition" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#8d010c]" />
      </div>

      {/* Why Us */}
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FaCat}
            title="Gelişmiş Teşhis ve Tedavi"
            text="Modern teknolojiyle donatılmış cihazlarımızla, evcil hayvanlarınızın sağlık sorunlarını hızlı ve doğru şekilde teşhis ediyoruz."
          />
          <ServiceCard
            icon={FaDog}
            title="Kapsamlı Sağlık Hizmetleri"
            text="İç organlardan cerrahi müdahalelere kadar geniş bir hizmet yelpazesi sunuyoruz."
          />
          <ServiceCard
            icon={FaPaw}
            title="Uzman Veteriner Hekim"
            text="Alanında uzman hekimle en iyi tedavi ve bakım hizmetlerini sunuyoruz."
          />
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper>
        <div className="container mx-auto bg-white rounded-xl overflow-hidden shadow-xl px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/images/Vet.jpeg"
              alt="Veteriner Enes Turan Seval"
              width={400}
              height={300}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto transform hover:scale-105 transition duration-300"
              priority
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vet. Hek. Enes Turan Seval
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-light tracking-wide">
              2023’te kurulan kliniğimiz; tedavi ve ameliyatlardaki başarısı ile kısa sürede
              ön plana çıkmıştır. Bu başarı sizlerin güveniyle mümkün olmuştur.
            </p>
            <p className="text-lg text-gray-600 font-light tracking-wide">
              Ekokardiyografi, endoskopi gibi birçok gelişmiş cihazı bünyemizde barındırıyoruz.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Map */}
      <section className="w-full py-20 px-6 bg-gradient-to-t from-[#f74b35] to-[#8d010c]">
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
    </>
  );
}
