import { useContext, useCallback, useState } from 'react'

import { loginService } from 'services/login'
import Context from 'context/UserContext'

export const useUser = () => {
  const { token, setToken } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true)
      loginService({ username, password })
        .then(token => {
          setLoading(false)
          setToken(token)
        })
        .catch(() => {
          setLoading(false)
          setError('Usuario o contraseña invalidos')
        })
    },
    [setToken],
  )

  const logout = useCallback(() => {
    window.localStorage.removeItem('user-ecommerce')
    setToken('')
  }, [setToken])

  return {
    isLogged: !!token,
    login,
    logout,
    loading,
    error,
  }
}
