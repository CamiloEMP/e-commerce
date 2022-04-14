import { MenuIcon, XCircleIcon } from '@heroicons/react/outline'

import { MenuItems } from 'components/MenuItems'

export const Sidebar = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (bool: boolean) => void
  isOpen: boolean
}) => {
  return (
    <>
      <div className="lg:hidden">
        {isOpen ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <XCircleIcon className="w-8 h-8" />
          </button>
        ) : (
          <button className="z-50" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="w-8 h-8" />
          </button>
        )}
      </div>
      <div
        className={`top-0 left-0 w-[40vw] bg-primary-900 p-10 pl-4 md:pl-12 text-primary-100 fixed h-full ease-in-out duration-200 z-40 lg:hidden ${
          isOpen ? ' translate-x-0' : 'translate-x-[-1000px] '
        }`}
      >
        <ul className="flex flex-col gap-5 mt-16 text-primary-100">
          <MenuItems colors="text-primary-100" setIsOpen={setIsOpen} />
        </ul>
      </div>
    </>
  )
}
