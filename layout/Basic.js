import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Basic(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full px-5 lg:flex lg:justify-between  max-w-[1250px] mx-auto relative">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
