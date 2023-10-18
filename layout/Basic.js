import Head from "next/head";

export default function Basic(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full px-5 lg:flex lg:justify-between  max-w-[1250px] mx-auto mt-20 min-h-[700px] rounded-lg relative bg-blue-500">
        {props.children}
      </main>
      <footer></footer>
    </div>
  );
}
