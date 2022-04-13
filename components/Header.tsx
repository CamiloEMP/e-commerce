import Link from 'next/link'
import React from 'react'

import { useUser } from 'hook/useUser'
import { NavItem } from 'components/NavItem'
import { NavUser } from 'components/NavUser'
import { ShowModal } from 'interfaces/Modal'

export const Header: React.FC<ShowModal> = ({ setShow }: ShowModal) => {
  const { isLogged, logout } = useUser()

  return (
    <header className="flex items-center justify-between py-6 mb-10">
      <Link href="/">
        <a className="text-3xl bg-primary-800 text-primary-100 py-4 px-6 font-semibold rounded-sm">
          Tu tienda Online
        </a>
      </Link>
      <nav>
        <ul className="flex gap-5 items-center">
          <NavItem href="/products">Ver todo</NavItem>
          <NavItem href="/products/categories/clothes/men">Ropa hombre</NavItem>
          <NavItem href="/products/categories/clothes/woman">Ropa mujer</NavItem>
          <NavItem href="/products/categories/electrodomestics">Electrodomesticos</NavItem>
          <NavItem href="/products/categories/jawelery">Joyeria</NavItem>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <NavUser isLogged={isLogged} logout={logout} setShow={setShow} />
      </div>
    </header>
  )
}
