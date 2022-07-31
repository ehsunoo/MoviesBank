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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <Sidebar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
