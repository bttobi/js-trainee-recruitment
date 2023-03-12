import type { AppProps } from "next/app";
import styles from "../styles/index.module.css";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={styles.app}>
    <Component {...pageProps} />
  </div>);
}
