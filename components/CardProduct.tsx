import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/solid'

import { Product } from 'interfaces/Products'
import { CollectionObject } from 'interfaces/Collection'
import { getColorByRating } from 'utils/getColorByRating'

interface Props {
  product: Product
  add: (product: CollectionObject) => void
  shopCart: CollectionObject[]
}

export const CardProduct = ({ add, product, shopCart }: Props) => {
  const { title, price, rating, image, category, id } = product
  const productToAdd = { ...product, quantity: 1 }
  const colorRating = getColorByRating(rating.rate)
  const isInShopCart = shopCart.find(item => item.id === id)

  return (
    <div className="flex flex-col justify-self-center">
      <Link href={`/products/${id}`}>
        <a className="w-80 h-[430px] flex flex-col justify-between border border-transparent py-2 px-4 shadow-md rounded-sm transition-colors hover:border-x-primary-600 hover:border-t-primary-600">
          <p className="truncate text-center text-lg font-medium text-primary-900">{title}</p>
          <div className="w-full flex justify-center mt-6">
            <Image
              alt={`product ${title} category ${category}`}
              height={250}
              loading="lazy"
              src={image}
              width={250}
            />
          </div>
          <div className="mt-4">
            <span className="text-lg">Precio por unidad: ${price}</span>
            <div className="flex justify-between">
              <div className="flex items-center text-lg">
                <span>Valoración: </span>
                <span className="ml-2 pt-[1px]" style={{ color: colorRating }}>
                  {rating.rate}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div className="mt-[-1px]">
        <button
          className="w-full max-w-xs text-white flex items-center border-2 gap-2 p-2 justify-center rounded-sm font-semibold bg-primary-900 transition-opacity hover:opacity-80 disabled:opacity-75 disabled:cursor-not-allowed"
          disabled={!!isInShopCart ? true : false}
          onClick={() => add(productToAdd)}
        >
          <ShoppingCartIcon className="w-8 h-8" />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  )
}
