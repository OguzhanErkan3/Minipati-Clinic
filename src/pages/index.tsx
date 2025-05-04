import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog, faPaw, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export default function Home() {
  return (
    <>
<Head>
  {/* Temel Meta */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#8d010c" />

  {/* Başlık & Açıklama */}
  <title>MiniPati Veteriner Kliniği</title>
  <meta
    name="description"
    content="Uşak Merkez’de 7/24 veteriner hizmeti, acil durum müdahalesi, ameliyatlar, ilaç ve mama temini."
  />

  {/* Favicon & PWA */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />

  {/* Open Graph */}
  <meta property="og:site_name" content="MiniPati Veteriner Kliniği" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="MiniPati Veteriner Kliniği" />
  <meta
    property="og:description"
    content="Uşak Merkez’de 7/24 veteriner hizmeti, acil durum müdahalesi, ameliyatlar, ilaç ve mama temini."
  />
  <meta property="og:image" content="https://www.minipativeteriner.com/images/Card.png" />
  <meta property="og:url" content="https://www.minipativeteriner.com" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="MiniPati Veteriner Kliniği" />
  <meta
    name="twitter:description"
    content="Uşak Merkez’de 7/24 veteriner hizmeti, acil durum müdahalesi, ameliyatlar, ilaç ve mama temini."
  />
  <meta name="twitter:image" content="https://www.minipativeteriner.com/images/Card.png" />
</Head>



      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/Hero.jpg')]">
        <Navbar />

        <div className="w-[90%] mx-auto h-full flex flex-col justify-between py-4">
          {/* Slogan */}
          <div className="mt-28 sm:mt-12 lg:mt-20 lg:mb-20 flex-grow flex items-start sm:items-center">
            <div className="lg:w-fit w-full">
              <div className="mt-2 text-white font-serif font-extrabold text-left space-y-1">
                {['Onların', 'Sağlığı', 'Bizim', 'Önceliğimiz.'].map((text, i) => (
                  <h1 key={i} className="text-4xl xs:text-3xl sm:text-5xl md:text-6xl">{text}</h1>
                ))}
                <div className="mt-4 text-white bg-black/30 rounded-sm px-2 py-1 shadow-sm shadow-white/50 w-fit text-sm sm:text-lg font-semibold">
                  <h1 className="text-center">MİNİPATİ VETERİNER KLİNİĞİ</h1>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-start gap-2 transform -translate-y-10 sm:translate-y-0">
            <a
              href="tel:+905411236464"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 rounded-sm py-4 px-4 cursor-pointer"
              aria-label="Bizi arayın, veteriner hizmeti almak için"
            >
              <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              <h3 className="text-lg font-semibold text-white">Bizi Arayın.</h3>
            </a>
            <p className="blink text-md sm:text-lg text-white bg-black/30 font-semibold rounded-lg px-3 py-1">
  7/24 hizmetinizdeyiz.
</p>
          </div>

          {/* Sosyal Medya */}
          <div className="flex gap-4 items-center justify-center text-white text-2xl relative z-10">
            <SocialButton icon={faWhatsapp} color="bg-green-600" link="https://api.whatsapp.com/send/?phone=05411236464" ariaLabel="WhatsApp üzerinden bize ulaşın" />
            <SocialButton icon={faInstagram} color="bg-pink-600" link="https://www.instagram.com/minipativeteriner/" ariaLabel="Instagram sayfamıza göz atın" />
            <SocialButton icon={faFacebook} color="bg-blue-600" link="https://www.facebook.com/people/Minipati-Veteriner-Klini%C4%9Fi/pfbid09fvG4AB25MaKq6ByCNMyz96DqnvFSykVRFCDb2cdVetxadF1FuZo4ABrWWRJJxqYl" ariaLabel="Facebook sayfamıza göz atın" />
          </div>
        </div>

        {/* Alt Geçiş Gradienti */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#8d010c] pointer-events-none"></div>
      </div>

      {/* Neden Bizi Tercih Etmelisiniz? */}
      <SectionWrapper title='NedenBiz'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard icon={faCat} title="Gelişmiş Teşhis ve Tedavi" text="Modern teknolojiyle donatılmış cihazlarımızla, evcil hayvanlarınızın sağlık sorunlarını hızlı ve doğru şekilde teşhis ediyoruz." />
          <ServiceCard icon={faDog} title="Kapsamlı Sağlık Hizmetleri" text="İç organlardan cerrahi müdahalelere kadar geniş bir hizmet yelpazesi sunuyoruz." />
          <ServiceCard icon={faPaw} title="Uzman Veteriner Hekim" text="Alanında uzman hekimle en iyi tedavi ve bakım hizmetlerini sunuyoruz." />
        </div>
      </SectionWrapper>

      {/* Hakkımızda */}
      <section className="py-20 px-6 bg-gradient-to-t from-[#8d010c] to-[#f74b35] ">
        <div className="container mx-auto bg-white rounded-xl overflow-hidden shadow-xl px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image src="/images/Vet.jpeg" alt="Veteriner Enes Turan Seval" width={400} height={300} className="rounded-lg shadow-xl w-full max-w-md mx-auto transform hover:scale-105 transition duration-300" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Enes Turan SEVAL</h2>
            <p className="text-lg text-gray-600 mb-6 font-light tracking-wide">
              &quot;2023’te kurulan kliniğimiz; tedavi ve ameliyatlardaki başarısı ile kısa sürede ön plana çıkmıştır. Bu başarı sizlerin güveniyle mümkün olmuştur.&quot;
            </p>
            <p className="text-lg text-gray-600 font-light tracking-wide">
              &quot; Ekokardiyografi, endoskopi gibi birçok gelişmiş cihazı bünyemizde barındırıyoruz.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="py-3 w-full h-screen bg-gradient-to-b from-[#8d010c] to-[#f74b35]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Konum</h2>
          <p className="text-lg text-white mb-8">Kliniğimize kolayca ulaşabilirsiniz. Haritadan konumumuzu inceleyin.</p>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.9886039846633!2d29.39748657512047!3d38.672129959965815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87f5c2bf7e55b%3A0x2048a0ab5425ed20!2sU%C5%9Fak%20Minipati%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1728384424359!5m2!1str!2str"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Kliniğin harita üzerindeki konumu"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const SectionWrapper = ({ children }: { title: string; children: React.ReactNode }) => (
  <section className="py-2 px-6 bg-gradient-to-b from-[#8d010c] to-[#f74b35]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16"></div>
      {children}
    </div>
  </section>
);

const ServiceCard = ({ icon, title, text }: { icon: IconDefinition; title: string; text: string }) => (
  <div className="rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-8 text-center bg-white">
    <div className="w-24 h-24 bg-gradient-to-b from-[#8d010c] to-[#f74b35] rounded-full flex items-center justify-center mx-auto mb-6">
      <FontAwesomeIcon icon={icon} className="text-white text-4xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{text}</p>
  </div>
);
const SocialButton = ({ icon, color, link, ariaLabel }: { icon: IconDefinition; color: string; link: string; ariaLabel: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full ${color} hover:brightness-110 flex justify-center items-center`}
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);
