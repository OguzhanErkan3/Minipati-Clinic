import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Script from 'next/script';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
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

      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RZ7BT6E143"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZ7BT6E143', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <div className="min-h-screen flex flex-col items-center">
        <div className="w-full">
          <Navbar />
        </div>

        <main className="flex-grow w-full">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
