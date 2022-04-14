import { useState } from 'react'

import { useUser } from 'hook/useUser'
import { NavUser } from 'components/NavUser'
import { Sidebar } from 'components/Sidebar'
import { MenuItems } from 'components/MenuItems'
import { ShowModal } from 'interfaces/Modal'

export const Header = ({ setShow }: ShowModal) => {
  const { isLogged, logout } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex flex-col items-center justify-around lg:flex-row lg:justify-between py-6 mb-10">
      <h1 className="w-full text-center lg:max-w-fit text-3xl bg-primary-800 text-primary-100 py-4 px-6 font-semibold rounded-sm">
        Tu tienda Online
      </h1>
      <nav className="flex mt-4 justify-between w-full">
        <div>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <ul className="hidden lg:flex lg:gap-5 lg:items-center">
          <MenuItems colors="text-primary-600 hover:text-primary-900" />
        </ul>
        <div className="flex items-center gap-5">
          <NavUser isLogged={isLogged} logout={logout} setShow={setShow} />
        </div>
      </nav>
    </header>
  )
}
