import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Temel Başlık ve Açıklama */}
        <title>MiniPati Veteriner Kliniği</title>
        <meta
          name="description"
          content="MiniPati Veteriner Kliniği: Uşak'ta 7/24 acil veteriner hizmetleri, cerrahi, tedavi, mama ve ilaç desteği."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon ve Simge Dosyaları */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Tema rengi ve uyum */}
        <meta name="theme-color" content="#8d010c" />

        {/* Open Graph Varsayılanları */}
        <meta property="og:site_name" content="minipativeteriner.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card.png" />

        {/* Twitter Varsayılanları */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/card.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
