import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "@/store/store";
// import dotenv from 'dotenv'

export default function App({ Component, pageProps }: AppProps) {
  // dotenv.config()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
