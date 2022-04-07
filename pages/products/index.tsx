import type { GetStaticProps } from 'next'

import React from 'react'

import { getAllProducts } from 'services/getAllProducts'
import { Product } from 'interfaces/Products'
import { CardProduct } from 'components/CardProduct'
import { ListOfProducts } from 'container/ListOFProducts'

interface Props {
  products: Product[]
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <ListOfProducts>
      {products.map(product => (
        <CardProduct key={product.id} {...product} />
      ))}
    </ListOfProducts>
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
