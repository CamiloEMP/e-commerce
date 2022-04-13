import { ShoppingCartIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import { ShowModal } from 'interfaces/Modal'
import { useCollection } from 'hook/useCollection'

interface NavUSer extends ShowModal {
  isLogged: boolean
  logout: () => void
}

export const NavUser = ({ isLogged, setShow, logout }: NavUSer) => {
  const { collection } = useCollection()
  const shopCardLenght = collection.length

  return (
    <>
      <Link href="/shopcart">
        <a className="relative  cursor-pointer text-primary-600 transition-transform hover:text-primary-800 hover:scale-110">
          <ShoppingCartIcon className="w-10 h-10" />
          {shopCardLenght > 0 && (
            <span className="absolute text-xs font-medium top-6 left-6 z-50 text-primary-100 bg-primary-700 rounded-full py-1 px-2">
              {shopCardLenght}
            </span>
          )}
        </a>
      </Link>
      {!isLogged ? (
        <button
          className="border border-primary-900 p-2 px-4 rounded-sm transition-colors hover:bg-primary-900 hover:text-primary-100"
          onClick={() => setShow(true)}
        >
          Iniciar sesión
        </button>
      ) : (
        <button
          className="border border-primary-900 p-2 px-4 rounded-sm transition-colors hover:bg-primary-900 hover:text-primary-100"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      )}
    </>
  )
}
