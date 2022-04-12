import React from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import { IShowModal } from 'interfaces/Modal'
interface INavUSer extends IShowModal {
  isLogged: boolean
  logout: () => void
}

export const NavUser: React.FC<INavUSer> = ({ isLogged, setShow, logout }: INavUSer) => {
  return (
    <>
      <Link href="/favorites">
        <a>
          <HeartIcon className=" w-8 h-8 cursor-pointer" />
        </a>
      </Link>
      <Link href="/shopcart">
        <a>
          <ShoppingCartIcon className=" w-8 h-8 cursor-pointer" />
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
