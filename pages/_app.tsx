import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../shared/theme";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Header } from "../components/Header/Header";
import { Center } from "../components/Center";
import { Footer } from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What&apos;s Next?!</title>
      </Head>

      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
