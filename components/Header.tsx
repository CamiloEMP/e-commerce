import Link from 'next/link'
import React from 'react'

import { useUser } from 'hook/useUser'

import { NavItem } from './NavItem'

type Props = {
  setShow: (show: boolean) => void
}

export const Header: React.FC<Props> = ({ setShow }: Props) => {
  const { isLogged } = useUser()

  console.log(isLogged)

  return (
    <header className="flex items-center justify-between py-6 mb-10">
      <Link href="/">
        <a className="text-3xl bg-primary-800 text-primary-100 py-4 px-6 font-semibold rounded-sm">
          Tu tienda Online
        </a>
      </Link>
      <nav>
        <ul className="flex gap-6 items-center">
          <NavItem href="/products">Ver todo</NavItem>
          <NavItem href="/products/categories/clothes/men">Ropa hombre</NavItem>
          <NavItem href="/products/categories/clothes/woman">Ropa mujer</NavItem>
          <NavItem href="/products/categories/electrodomestics">Electrodomesticos</NavItem>
          <NavItem href="/products/categories/jawelery">Joyeria</NavItem>
          <li>
            <button
              className="border border-primary-900 p-2 rounded-sm transition-colors hover:bg-primary-900 hover:text-primary-100"
              onClick={() => setShow(true)}
            >
              Iniciar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
