import type { AppProps } from 'next/app'

import { Header } from 'components/Header'
import { Layout } from 'container/Layout'

import '../styles/globals.css'
import { useState } from 'react'

import { Modal } from 'components/Modal'
import { Login } from 'components/Login'

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Layout>
        <Header setShow={setShow} />
        <Component {...pageProps} />
      </Layout>
      {show ? (
        <Modal>
          <Login setShow={setShow} />
        </Modal>
      ) : null}
    </>
  )
}

export default MyApp
