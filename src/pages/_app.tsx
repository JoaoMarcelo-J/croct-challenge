import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeContextProvider } from '../hooks/useTheme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Croct Front End - Challenge</title>
      </Head>
      <ThemeContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default App
