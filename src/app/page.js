import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Video from "./components/Video";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gen Synth</title>
        <meta name="description" content="Gen Synth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Video />
      </main>
    </div>
  );
}
