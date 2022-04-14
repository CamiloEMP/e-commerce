import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { ArrowLeftIcon } from '@heroicons/react/solid'

import { Product } from 'interfaces/Products'
import { useCollection } from 'hook/useCollection'

export const ProductPage = ({ product }: { product: Product }) => {
  const { add, collection } = useCollection()
  const productToAdd = { ...product, quantity: 1 }
  const isInShopCart = collection.find(item => item.id === product.id)
  const router = useRouter()

  return (
    <article className="relative flex justify-center gap-16 max-w-5xl mt-12 mx-auto shadow-lg py-24">
      <button className="absolute top-4 left-4" type="button" onClick={() => router.back()}>
        <ArrowLeftIcon className="w-8 h-8" />
      </button>
      <aside>
        <Image
          alt={`product ${product.category} ${product.title} ${product.description}`}
          height={450}
          objectFit="contain"
          src={product.image}
          width={320}
        />
      </aside>
      <aside className="max-w-md space-y-10 mt-4">
        <span className="text-2xl font-medium">{product.title}</span>
        <p className="text-lg text-primary-700 opacity-90">{product.description}</p>
        <div className="flex gap-1">
          <button
            className="flex items-center max-w-max px-2 py-1 border-2 font-medium rounded-sm transition-colors text-primary-700 border-primary-700 hover:bg-primary-700 hover:text-primary-100 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!isInShopCart ? true : false}
            onClick={() => add(productToAdd)}
          >
            <ShoppingCartIcon className="w-8 h-8 mr-1" />
            <span>Comprar</span>
          </button>
        </div>
      </aside>
      <div className="absolute text-primary-100 bottom-[-45px] bg-primary-800 rounded-lg p-8">
        <span className="text-2xl">${product.price}</span>
      </div>
    </article>
  )
}
