import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
html,
body,
textarea{
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
*{
  box-sizing: border-box;
}
a{
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #000;
}
ol,ul{
  list-style: none;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
