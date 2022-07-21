// Styles
import "../styles/globals.scss";
import styles from "../styles/_app.module.scss";
import "antd/dist/antd.css";

// Components
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <Sidebar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;
