import { XCircleIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'

import { useForm } from 'hook/useForm'
import { useUser } from 'hook/useUser'
import { Spinner } from 'components/Spinner'

type Props = {
  setShow: (show: boolean) => void
}

export const Login = ({ setShow }: Props) => {
  const { login, error, loading, isLogged } = useUser()
  const { form, handleChange, handleSubmit } = useForm({ username: '', password: '' }, login)

  useEffect((): void => {
    if (isLogged) {
      setShow(false)
    }
  }, [isLogged, setShow])

  return (
    <section className="max-w-md mx-auto px-8 py-8 mt-24 bg-primary-50 rounded-md">
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex justify-end">
            <button className="w-10 h-10" onClick={() => setShow(false)}>
              <XCircleIcon />
            </button>
          </div>
          <h3 className="text-3xl font-semibold text-center">Iniciar Sesión</h3>
          <form className="space-y-4 py-8">
            <div>
              <input
                autoComplete="true"
                className="w-full px-4 py-2 mt-2 border rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                name="username"
                placeholder="Usuario"
                type="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-2 mt-2 border rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                name="password"
                placeholder="Contraseña"
                type="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex justify-center">
              <button
                className="px-6 py-2 mt-2 border-2 transition-colors border-primary-800 rounded-sm hover:bg-primary-800 hover:text-primary-100"
                type="submit"
                onClick={handleSubmit}
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  )
}
