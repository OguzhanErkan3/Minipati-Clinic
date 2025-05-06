import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaDroplet, FaHeart, FaXRay, FaSyringe, FaCircleInfo, FaScissors, FaLungs, FaBandage } from 'react-icons/fa6';

const services = [
  { title: 'Kan Tahlili (Hemogram)', description: 'Evcil hayvanlarınızın sağlığını belirlemek için düzenli kan testleri büyük önem taşır. Hemogram, kan hücrelerinin sayımı ve fonksiyonları hakkında bilgiler sunar.', icon: FaDroplet, bgColor: 'bg-red-100' },
  { title: 'Ultrason ve Ekokardiyografi', description: 'İç organ ve kalp fonksiyonlarını detaylı incelemek için ultrason, doppler ve ekokardiyografi hizmeti sunuyoruz.', icon: FaHeart, bgColor: 'bg-blue-100' },
  { title: 'Röntgen (X-Ray)', description: 'Kemik kırıkları, çıkıklar ve tümör gibi durumları hızlıca tespit etmek için modern röntgen cihazlarımızla görüntüleme yapıyoruz.', icon: FaXRay, bgColor: 'bg-green-100' },
  { title: 'Aşılama & Mikroçip', description: 'Evcil hayvanlarınızın hastalıklardan korunması için aşı programları uyguluyor, mikroçip ile kimliklendirme yapıyoruz.', icon: FaSyringe, bgColor: 'bg-yellow-100' },
  { title: 'Muayene & Sağlık Kontrolü', description: 'Genel sağlık taramaları ile evcil dostlarınızın potansiyel sağlık sorunlarını erken dönemde tespit ediyoruz.', icon: FaCircleInfo, bgColor: 'bg-purple-100' },
  { title: 'Kısırlaştırma & Üreme Sağlığı', description: 'Kısırlaştırma işlemleri ve üreme sağlığı danışmanlığı ile hem birey hem de popülasyon sağlığını gözetiyoruz.', icon: FaScissors, bgColor: 'bg-orange-100' },
  { title: 'Dahiliye Hizmetleri', description: 'İç hastalıklar tanı ve tedavisinde en güncel tıbbi yöntemleri kullanıyoruz.', icon: FaLungs, bgColor: 'bg-indigo-100' },
  { title: 'Cerrahi Müdahale', description: 'Kırık onarımları, tümör çıkarma ve diğer cerrahi operasyonlar konusunda deneyimli ekibimizle hizmet veriyoruz.', icon: FaBandage, bgColor: 'bg-teal-100' },
];

export default function Services() {
  return (
    <>
      <Head>
        {/* Temel SEO */}
        <title>Hizmetler | MiniPati Veteriner Kliniği</title>
        <meta name="description" content="MiniPati Veteriner Kliniği hizmetleri: Kan tahlili, ultrason, röntgen, aşılama, muayene, cerrahi ve dahiliye hizmetleriyle evcil dostlarınıza şefkatli bakım sunuyoruz." />
        <meta name="keywords" content="veteriner hizmetleri, kan tahlili, ultrason, röntgen, aşılama, muayene, cerrahi, dahiliye" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:site_name" content="minipativeteriner.com" />
        <meta property="og:title" content="Hizmetler | MiniPati Veteriner Kliniği" />
        <meta property="og:description" content="MiniPati Veteriner Kliniği hizmetleri: Kan tahlili, ultrason, röntgen, aşılama ve cerrahi destek." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.minipativeteriner.com/services" />
        <meta property="og:image" content="/images/card.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minipativeteriner" />
        <meta name="twitter:title" content="Hizmetler | MiniPati Veteriner Kliniği" />
        <meta name="twitter:description" content="Kan tahlili, ultrason, röntgen, aşılama ve cerrahi müdahalelerle evcil dostlarınıza en iyi bakımı sağlıyoruz." />
        <meta name="twitter:image" content="/images/card.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.minipativeteriner.com/services" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": ["Kan Tahlili","Ultrason","Röntgen","Aşılama","Muayene","Cerrahi","Dahiliye"],
            "provider": {
              "@type": "VeterinaryCare",
              "name": "MiniPati Veteriner Kliniği",
              "url": "https://www.minipativeteriner.com",
              "logo": "https://www.minipativeteriner.com/images/logo.png"
            },
            "areaServed": { "@type": "City", "name": "Uşak Merkez" }
          }`}
        </script>
      </Head>

      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#8d010c] via-[#c8201e] to-[#44000b]">
        <section className="py-24">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-extrabold text-white text-center mb-12">Hizmetlerimiz</h1>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:scale-105 transition-transform">
                  <div className={`${service.bgColor} p-6 flex justify-center items-center`}>
                    <service.icon size={48} className="text-gray-800" />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
