import Link from 'next/link'
import { XCircleIcon } from '@heroicons/react/outline'
type Props = {
  setShow: (show: boolean) => void
}

export const Login = ({ setShow }: Props) => {
  return (
    <section className="max-w-md mx-auto px-8 py-8 mt-24 bg-primary-50 rounded-md">
      <div className="flex justify-end">
        <button className="w-10 h-10" onClick={() => setShow(false)}>
          <XCircleIcon />
        </button>
      </div>
      <h3 className="text-3xl font-semibold text-center">Iniciar Sesión</h3>
      <form className="space-y-4 py-8">
        <div>
          <input
            className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            placeholder="Correo electronico"
            type="text"
          />
          {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
        </div>
        <div>
          <input
            className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
            placeholder="Contraseña"
            type="password"
          />
        </div>
        <div>
          <span className="block text-center">
            No tienes cuenta
            <Link href="/">
              <a className="text-sky-600 hover:opacity-60"> Registrate</a>
            </Link>
          </span>
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-2 mt-2 border-2 transition-colors border-primary-800 rounded-sm hover:bg-primary-800 hover:text-primary-100">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </section>
  )
}
