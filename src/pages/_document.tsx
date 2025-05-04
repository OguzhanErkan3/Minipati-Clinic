import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          {/* Sayfa açıklaması */}
          <meta name="description" content="MiniPati Veteriner Kliniği - Sağlık, bakım ve tedavi hizmetleri." />
          
          {/* Favicon */}
          <link rel="icon" href="/logo.ico" />
          
          {/* Yazı tipinin pürüzsüz görünmesini sağlıyor */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
