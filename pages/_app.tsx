import type { AppProps } from 'next/app'

import { Header } from 'components/Header'
import { Layout } from 'container/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
