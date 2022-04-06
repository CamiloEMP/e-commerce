import React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactChild
}

export const NavItem: React.FC<Props> = ({ href, children }: Props) => {
  return (
    <li className="font-medium text-primary-600 transition-transform hover:scale-110 hover:text-primary-900">
      <Link href={href}>{children}</Link>
    </li>
  )
}
