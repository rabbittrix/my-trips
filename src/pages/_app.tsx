import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>my trips</title>
        <link rel="shortcut icon" href="/img/wellaLogo.png" />
        <link rel="apple-touch-icon" href="/img/wellaLogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="-webkit-linear-gradient #06092b, #cccccc"
        />
        <meta
          name="description"
          content="A simple project to show my trips in the world."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
