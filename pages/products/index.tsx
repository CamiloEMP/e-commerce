import type { GetStaticProps } from 'next'

import React from 'react'

import { useCollection } from 'hook/useCollection'
import { Product } from 'interfaces/Products'
import { ListOfProducts } from 'container/ListOfProducts'
import { CardProduct } from 'components/CardProduct'
import { getAllProducts } from 'services/getAllProducts'

interface Props {
  products: Product[]
}

const AllProducts: React.FC<Props> = ({ products }) => {
  const { add, collection } = useCollection()

  return (
    <ListOfProducts>
      {products.map(product => (
        <CardProduct key={product.id} add={add} product={product} shopCart={collection} />
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
