import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Bank</title>
        <meta name="description" content="Collection of movie's information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeContent />
      </main>
    </div>
  );
}
