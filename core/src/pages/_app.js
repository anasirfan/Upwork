import { Fragment } from "react";
import Head from "next/head";
import { Work_Sans } from "@next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from "../store";
import Preloader from "../components/Preloader";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'swiper/swiper-bundle.min.css';
import "../assets/scss/styles.scss";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
})

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Fragment>
      <Head>
        <title>Lezada | React Next JS Multipurpose eCommerce Template</title>
        <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
      </Head>
      <style jsx global>{`
          :root {
            --ff-body: ${workSans.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader/>}>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
