import "@/styles/globals.css";
import "@/styles/dashboard.css";
import "@/styles/item.css";
import "@/styles/robot.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
