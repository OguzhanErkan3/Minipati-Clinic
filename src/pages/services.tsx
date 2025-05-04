import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDroplet, faHeart, faBandage, faLungs,
  faHandScissors, faSyringe, faCircleInfo, faXRay
} from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Footer'; // Yolunu projenin yapısına göre ayarla

const services = [
  {
    title: 'Kan Tahlili (Hemogram)',
    description: 'Kan hücrelerinin durumu hakkında bilgi veren testlerle evcil hayvan sağlığı kontrol edilir. Uşak’ta veteriner hizmeti alabileceğiniz güvenilir klinik.',
    icon: faDroplet,
    color: 'text-red-500',
    bg: 'bg-red-100'
  },
  {
    title: 'Ultrason, Doppler, Ekokardiyografi',
    description: 'İç organ fonksiyonlarını görüntülemek için gelişmiş görüntüleme yöntemleri sunuyoruz. Uşak’taki evcil hayvanlarınız için güvenilir bir çözüm.',
    icon: faHeart,
    color: 'text-blue-500',
    bg: 'bg-blue-100'
  },
  {
    title: 'Röntgen (X-Ray)',
    description: 'Kemik kırıkları, çıkıklar, tümörler gibi durumları hızlıca tespit edebilmek için röntgen hizmeti sunuyoruz. Uşak’ta profesyonel röntgen hizmeti.',
    icon: faXRay,
    color: 'text-green-500',
    bg: 'bg-green-100'
  },
  {
    title: 'Aşılama ve Mikroçip Uygulamaları',
    description: 'Aşı ve mikroçip ile dostlarınızın sağlığı ve güvenliği korunur. Uşak’ta kaliteli veteriner hizmeti.',
    icon: faSyringe,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100'
  },
  {
    title: 'Muayene ve Sağlık Kontrolleri',
    description: 'Genel sağlık durumunun düzenli kontrolü için muayene hizmetleri. Uşak’ta evcil hayvanlarınız için güvenilir sağlık desteği.',
    icon: faCircleInfo,
    color: 'text-purple-500',
    bg: 'bg-purple-100'
  },
  {
    title: 'Kısırlaştırma ve Üreme Sağlığı',
    description: 'Sağlıklı ve dengeli bir yaşam için kısırlaştırma ve üreme sağlığı hizmetleri. Uşak’ta uzman veteriner kadromuz hizmetinizde.',
    icon: faHandScissors,
    color: 'text-orange-500',
    bg: 'bg-orange-100'
  },
  {
    title: 'Veteriner Dahiliye Hizmetleri',
    description: 'İç hastalıkların teşhis ve tedavisinde uzman çözümler sunuyoruz. Uşak’ta doğru tanı ve tedavi için yanınızdayız.',
    icon: faLungs,
    color: 'text-indigo-500',
    bg: 'bg-indigo-100'
  },
  {
    title: 'Cerrahi Müdahaleler',
    description: 'Kırık onarımı, tümör alma gibi cerrahi işlemler uzman veterinerlerimizle gerçekleştirilir. Uşak’ta cerrahi hizmette güvenilir adresiniz.',
    icon: faBandage,
    color: 'text-teal-500',
    bg: 'bg-teal-100'
  }
];

const VeterinaryServices: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hizmetlerimiz | MiniPati Veteriner Kliniği</title>
        <meta
          name="description"
          content="Minipati Veteriner Kliniği hizmetlerimiz: Kan tahlili, ultrason, röntgen, aşı, muayene, kısırlaştırma, cerrahi ve dahiliye hizmetleri. 7/24 veteriner desteği Uşak’ta."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Hizmetlerimiz | MiniPati Veteriner Kliniği" />
        <meta
          property="og:description"
          content="Kan tahlili, ultrason, röntgen, aşı, muayene, kısırlaştırma, cerrahi ve dahiliye hizmetlerimizle Uşak’ta 7/24 veteriner desteği sunuyoruz."
        />
        <meta property="og:url" content="https://www.minipativeteriner.com/hizmetler" />
        <meta property="og:image" content="https://www.minipativeteriner.com/images/Card.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz | MiniPati Veteriner Kliniği" />
        <meta
          name="twitter:description"
          content="Kan tahlili, ultrason, röntgen, aşı, muayene, kısırlaştırma, cerrahi ve dahiliye hizmetleriyle Uşak’ta 7/24 veteriner desteği."
        />
        <meta name="twitter:image" content="https://www.minipativeteriner.com/images/Card.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <section className="text-white bg-gradient-to-r from-[#8d010c] via-[#c8201e] to-[#44000b]">
          <div className="container mx-auto px-5 py-32">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-semibold"
                aria-label="Veteriner Hekimlik Hizmetlerimiz"
              >
                Veteriner Hekimlik Hizmetlerimiz
              </h2>
              <p
                className="mt-4 text-lg"
                aria-label="Dostlarınızın sağlığı bizim önceliğimiz. Modern ekipmanlarla geniş bir hizmet yelpazesi sunuyoruz."
              >
                Sevimli dostlarınızın sağlığı bizim önceliğimiz. Modern ekipmanlarla geniş bir hizmet yelpazesi sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                  role="article"
                  aria-labelledby={`service-${i}`}
                >
                  <div className={`p-6 flex justify-center items-center ${s.bg}`}>
                    <FontAwesomeIcon icon={s.icon} size="3x" className={s.color} />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3
                      id={`service-${i}`}
                      className="text-xl font-bold text-gray-900"
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-gray-700">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default VeterinaryServices;
