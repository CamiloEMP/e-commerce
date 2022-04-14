import React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactChild
  colors: string
  setIsOpen?: (bool: boolean) => void
}

export const NavItem: React.FC<Props> = ({ href, colors, children, setIsOpen }: Props) => {
  return (
    <li
      className={`font-medium  transition-transform hover:scale-110  ${colors}`}
      onClick={setIsOpen ? () => setIsOpen(false) : () => {}}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}
