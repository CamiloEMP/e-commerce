import Link from 'next/link'
import React from 'react'

import { NavItem } from './NavItem'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between py-6 mb-10">
      <Link href="/">
        <a className="text-3xl font-semibold">Tu tienda Online</a>
      </Link>
      <nav>
        <ul className="flex gap-6">
          <NavItem href="/products">Ver todo</NavItem>
          <NavItem href="/categories/clothes/men">Ropa hombre</NavItem>
          <NavItem href="/categories/clothes/woman">Ropa mujer</NavItem>
          <NavItem href="/categories/electrodomestics">Electrodomesticos</NavItem>
          <NavItem href="/categories/jawelery">Joyeria</NavItem>
          <li>
            <Link href="/">
              <a
                className="border border-primary-900 p-2 rounded-sm transition-colors hover:bg-primary-900 hover:text-primary-100"
                href=""
              >
                Iniciar sesión
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
