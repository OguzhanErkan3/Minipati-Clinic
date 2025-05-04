import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkımızda | MiniPati Veteriner Kliniği</title>
        <meta
          name="description"
          content="Uşak Merkez’de 7/24 hizmet veren MiniPati Veteriner Kliniği hakkında bilgi alın. Uzman hekimlerimizle tanışın, vizyon ve misyonumuzu keşfedin."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Hakkımızda | MiniPati Veteriner Kliniği" />
        <meta
          property="og:description"
          content="Uşak Merkez’de 7/24 hizmet veren MiniPati Veteriner Kliniği hakkında bilgi alın. Uzman hekimlerimizle tanışın, vizyon ve misyonumuzu keşfedin."
        />
        <meta property="og:url" content="https://www.minipativeteriner.com/hakkinda" />
        <meta property="og:image" content="https://www.minipativeteriner.com/images/Card.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | MiniPati Veteriner Kliniği" />
        <meta
          name="twitter:description"
          content="Uşak Merkez’de 7/24 hizmet veren MiniPati Veteriner Kliniği hakkında bilgi alın. Uzman hekimlerimizle tanışın, vizyon ve misyonumuzu keşfedin."
        />
        <meta name="twitter:image" content="https://www.minipativeteriner.com/images/Card.png" />
      </Head>
      

      <div className="min-h-screen bg-gradient-to-r from-[#8d010c] via-[#c8201e] to-[#44000b] flex flex-col justify-between">
        <main className="flex-grow">
          <section className="text-gray-600 body-font pt-20 pb-10">
            <div className="container px-5 mx-auto mt-20">
              {/* Hakkımızda Başlığı ve Metni */}
              <div className="text-center mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium mt-24 title-font text-gray-100 mb-4">
                  Hakkımızda
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200">
                  Minipati Veteriner Kliniği olarak, minik dostlarınızın sağlığı için yıllardır en iyi
                  hizmeti sunmayı hedefliyoruz. Her bir hayvan dostumuza gösterdiğimiz özeni, işimizi
                  sevgiyle yaparak sizlere sunuyoruz.
                </p>
              </div>

              {/* Vizyon ve Misyon Kartları */}
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-8 rounded-lg shadow-xl text-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Vizyonumuz</h2>
                    <p>
                      Minik dostlarımızın sağlığını en üst düzeyde tutmak, yaşam kalitelerini
                      artırmak ve bilimsel tedavi yöntemlerini uygulamak temel hedefimizdir.
                    </p>
                  </div>
                </div>

                <div className="p-4 md:w-1/2 w-full">
                  <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 p-8 rounded-lg shadow-xl text-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Misyonumuz</h2>
                    <p>
                      Evcil dostlarınıza uzun ve sağlıklı bir yaşam sunmak, sahipleriyle güçlü bağlar
                      kurmak ve en kaliteli hizmeti sağlamak misyonumuzdur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hekim Bilgisi */}
              <div className="flex justify-center items-center mt-16 px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center">
                  <div className=" h-100 mx-auto mb-4 overflow-hidden ">
                    <Image
                      width={300}
                      height={300}
                      src="/images/vet2.png"
                      alt="Veteriner Hekim Dr. Enes Turan Seval"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Dr. Enes Turan Seval
                  </h2>
                  <p className="text-red-500 text-m font-medium mt-1 mb-3">Veteriner Hekim</p>
                  <p className="text-gray-600 text-m">
                    Uşak Merkez’de 7/24 acil veterinerlik, tedavi ve cerrahi hizmetleriyle dostlarınıza
                    en iyi bakımı sunan kliniğimizin kurucusu.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Bileşeni */}
        <Footer />
      </div>
    </>
  );
}
