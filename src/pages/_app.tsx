import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@/contexts/AuthContext";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Head>
        <title>All time high</title>
      </Head>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
