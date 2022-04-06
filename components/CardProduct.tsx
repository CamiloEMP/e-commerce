import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'

import { Product } from 'interfaces/Products'
import { getColorByRating } from 'utils/getColorByRating'

export const CardProduct: React.FC<Product> = ({
  id,
  title,
  price,
  category,
  image,
  rating,
}: Product) => {
  const colorRating = getColorByRating(rating.rate)

  return (
    <Link href={`/products/${id}`}>
      <a className="w-80 flex flex-col justify-between py-2 px-4 shadow-md transition-transform hover:scale-105">
        <p className="text-center text-lg font-medium text-primary-900">{title}</p>
        <div className="w-full flex justify-center mt-6">
          <Image
            alt={`product ${title} category ${category}`}
            height={250}
            src={image}
            width={250}
          />
        </div>
        <div className="mt-4">
          <span className="text-lg">Price: {price}</span>
          <div className="flex justify-between">
            <div className="flex items-center text-lg">
              <span>Rating: </span>
              <span className="ml-2 pt-[1px]" style={{ color: colorRating }}>
                {rating.rate}
              </span>
            </div>
            <div className="flex gap-2">
              <button>
                <HeartIcon className="bg-primary-100 text-red-500 w-12 h-12 p-2 rounded-full transition-colors hover:bg-primary-300" />
              </button>
              <button>
                <ShoppingCartIcon className="bg-primary-100 w-12 h-12 p-2 rounded-full transition-colors hover:bg-primary-300" />
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
