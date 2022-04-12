import type { AppProps } from 'next/app'

import { useState } from 'react'

import { Layout } from 'container/Layout'
import { Header } from 'components/Header'
import { Modal } from 'components/Modal'
import { Login } from 'components/Login'

import '../styles/globals.css'
import { UserContext } from 'context/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <UserContext>
      <Layout>
        <Header setShow={setShow} />
        <Component {...pageProps} />
      </Layout>
      {show ? (
        <Modal>
          <Login setShow={setShow} />
        </Modal>
      ) : null}
    </UserContext>
  )
}

export default MyApp
