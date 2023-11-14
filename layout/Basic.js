import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from "next/script";

export default function Basic(props) {
  const height = props.height ? props.height : "";
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription} />
        <link rel="icon" href="/LOGO-PTZ.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11272063965"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11272063965');
        `}
      </Script>

      <Header />
      <main
        className={`w-full lg:flex lg:justify-between  max-w-[1250px] mx-auto relative flex-col ${height}`}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
