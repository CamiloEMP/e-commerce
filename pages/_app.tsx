import type { AppProps } from 'next/app'

import { useState } from 'react'

import { Layout } from 'container/Layout'
import { Header } from 'components/Header'
import { Login } from 'components/Login'
import { Modal } from 'components/Modal'
import { UserProvider } from 'context/UserContext'
import { CollectionProvider } from 'context/CollectionContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <CollectionProvider>
      <UserProvider>
        <Layout>
          <Header setShow={setShow} />
          <Component setShow={setShow} show={show} {...pageProps} />
        </Layout>
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
