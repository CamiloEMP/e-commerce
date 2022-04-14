import type { AppProps } from 'next/app'

import { useState } from 'react'

import { Layout } from 'container/Layout'
import { Header } from 'components/Header'
import { Modal } from 'components/Modal'
import { Footer } from 'components/Footer'
import { UserProvider } from 'context/UserContext'
import { CollectionProvider } from 'context/CollectionContext'

import { Login } from '../modals/Login'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <CollectionProvider>
      <UserProvider>
        <Layout>
          <Header setShow={setShow} />
          <Component setShow={setShow} {...pageProps} />
        </Layout>
        <Footer />
        {show ? (
          <Modal>
            <Login setShow={setShow} />
          </Modal>
        ) : null}
      </UserProvider>
    </CollectionProvider>
  )
}

export default MyApp
