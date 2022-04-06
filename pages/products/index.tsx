import type { GetStaticProps } from 'next'

import React from 'react'

import { getAllProducts } from 'services/getAllProducts'
import { Product } from 'interfaces/Products'
import { CardProduct } from 'components/CardProduct'

interface Props {
  products: Product[]
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <section className="flex flex-wrap gap-8 justify-center">
      {products.map(product => (
        <CardProduct key={product.id} {...product} />
      ))}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await getAllProducts()

  if (!products) {
    return { notFound: true }
  }

  return {
    props: { products },
  }
}

export default AllProducts
