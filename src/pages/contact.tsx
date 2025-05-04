import React from 'react';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import SocialMediaLink from '../components/SocialMediaButton';
import Footer from '../components/Footer';
import Head from 'next/head';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>İletişim | MiniPati Veteriner Kliniği</title>
        <meta name="description" content="Uşak Merkez’de bulunan MiniPati Veteriner Kliniği ile iletişime geçin. 7/24 veteriner hizmeti, acil müdahale ve randevu için bize ulaşın." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="İletişim | MiniPati Veteriner Kliniği" />
        <meta property="og:description" content="Uşak Merkez’de bulunan MiniPati Veteriner Kliniği ile iletişime geçin. 7/24 veteriner hizmeti, acil müdahale ve randevu için bize ulaşın." />
        <meta property="og:url" content="https://www.minipativeteriner.com/iletisim" />
        <meta property="og:image" content="https://www.minipativeteriner.com/images/Card.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | MiniPati Veteriner Kliniği" />
        <meta name="twitter:description" content="Uşak Merkez’de bulunan MiniPati Veteriner Kliniği ile iletişime geçin. 7/24 veteriner hizmeti, acil müdahale ve randevu için bize ulaşın." />
        <meta name="twitter:image" content="https://www.minipativeteriner.com/images/Card.png" />
      </Head>

      <div className="min-h-screen w-full bg-gradient-to-r from-[#8d010c] via-[#c8201e] to-[#44000b]">
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <section className="text-white text-center max-w-3xl">
            <h1 className="text-4xl font-bold mt-24 mb-4 drop-shadow-lg">İletişim</h1>
            <p className="text-lg md:text-xl font-light mb-8">
              Randevu oluşturmak, bilgi almak veya acil durumlar için bizimle iletişime geçebilirsiniz.<br />
              <span className="font-semibold">7/24 hizmetinizdeyiz.</span>
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <SocialMediaLink icon={faPhone} bgColor="bg-red-600" link="tel:+905411236464" title="Bize Ulaşın" />
              <SocialMediaLink icon={faWhatsapp} bgColor="bg-green-600" link="https://api.whatsapp.com/send/?phone=05411236464&text&type=phone_number&app_absent=0" title="Whatsapp" />
              <SocialMediaLink icon={faInstagram} bgColor="bg-pink-500" link="https://www.instagram.com/minipativeteriner/" title="Instagram" />
              <SocialMediaLink icon={faFacebook} bgColor="bg-blue-600" link="https://www.facebook.com/people/Minipati-Veteriner-Klini%C4%9Fi/pfbid09fvG4AB25MaKq6ByCNMyz96DqnvFSykVRFCDb2cdVetxadF1FuZo4ABrWWRJJxqYl/?ref=xav_ig_profile_web" title="Facebook" />
            </div>
          </section>

          <section className="w-full max-w-5xl mt-16">
            <div className="text-white text-center mb-6">
              <h2 className="text-3xl font-semibold mb-2">Konum</h2>
              <p className="text-lg">Kliniğimize kolayca ulaşabilirsiniz. Aşağıdaki haritadan konumumuzu inceleyin.</p>
            </div>

            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.9886039846633!2d29.39748657512047!3d38.672129959965815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87f5c2bf7e55b%3A0x2048a0ab5425ed20!2sU%C5%9Fak%20Minipati%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1728384424359!5m2!1str!2str"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MiniPati Konum Haritası"
              ></iframe>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
