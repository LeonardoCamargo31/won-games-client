/**
 * App => componente para inicializar páginas
 * ref: https://nextjs.org/docs/advanced-features/custom-app
 */

/**
 * Theme Provider => injeta o tema em todos os componentes estilizados em qualquer lugar abaixo dele na árvore de componentes
 * o theme provider, deve ficar na camada mais alta, no caso _app
 * https://styled-components.com/docs/api#themeprovider
 */

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
