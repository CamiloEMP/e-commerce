import React from 'react'
import Image from 'next/image'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'

import { Product } from 'interfaces/Products'

export const ProductPage: React.FC<Product> = ({
  title,
  description,
  price,
  category,
  image,
}: Product) => {
  return (
    <article className="relative flex justify-center gap-16 max-w-5xl mt-12 mx-auto shadow-lg py-24">
      <aside className="">
        <Image
          alt={`product ${category} ${title} ${description}`}
          height={320}
          objectFit="contain"
          src={image}
          width={320}
        />
      </aside>
      <aside className="max-w-md space-y-10 mt-4">
        <span className="text-2xl font-medium">{title}</span>
        <p className="text-lg text-primary-700 opacity-90">{description}</p>
        <div className="flex gap-1">
          <button className="flex items-center max-w-max px-2 py-1 border-2 font-medium rounded-sm transition-colors text-rose-700 border-rose-700 hover:bg-rose-700 hover:text-primary-100">
            <HeartIcon className="w-8 h-8 mr-1" />
            <span>Añadir a favoritos</span>
          </button>
          <button className="flex items-center max-w-max px-2 py-1 border-2 font-medium rounded-sm transition-colors text-sky-700 border-sky-700 hover:bg-sky-700 hover:text-primary-100">
            <ShoppingCartIcon className="w-8 h-8 mr-1" />
            <span>Comprar</span>
          </button>
        </div>
      </aside>
      <div className="absolute text-primary-100 bottom-[-45px] bg-primary-800 rounded-lg p-8">
        <span className="text-2xl">${price}</span>
      </div>
    </article>
  )
}
