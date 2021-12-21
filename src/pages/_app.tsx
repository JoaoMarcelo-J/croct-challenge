import { AppProps } from 'next/app'
import Head from 'next/head'
import { PreviewProvider } from '../contexts/previewContext'

import { ThemeContextProvider } from '../hooks/useTheme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Croct Front End - Challenge</title>
      </Head>
      <ThemeContextProvider>
        <PreviewProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </PreviewProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
