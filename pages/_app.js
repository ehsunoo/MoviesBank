import React from "react";
import Head from "next/head";

// Styles
import "../styles/globals.scss";
import styles from "../styles/_app.module.scss";

// Components
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Redux
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movies Bank</title>
        <meta name="description" content="Collection of movie's information." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.component}>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
