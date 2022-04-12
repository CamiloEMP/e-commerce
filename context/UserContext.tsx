import React, { createContext, useState } from 'react'

interface JWT {
  token: string
  setToken: (token: string) => void
}

const Context = createContext({} as JWT)

type Props = {
  children: React.ReactNode
}

export const UserContext: React.FC<Props> = ({ children }: Props) => {
  const [token, setToken] = useState('')

  return <Context.Provider value={{ token, setToken } as JWT}>{children}</Context.Provider>
}

export default Context
