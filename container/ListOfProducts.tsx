import React from 'react'

type Props = {
  children: React.ReactNode
}

export const ListOfProducts: React.FC<Props> = ({ children }: Props) => {
  return <section className="flex flex-wrap gap-8 justify-center">{children}</section>
}
