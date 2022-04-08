import type { GetStaticProps } from 'next'

import React from 'react'

import { getProductByCategory } from 'services/getProductByCategory'
import { Product } from 'interfaces/Products'
import { CardProduct } from 'components/CardProduct'
import { Categorys } from 'constants/Cetegorys'
import { ListOfProducts } from 'container/ListOfProducts'

interface Props {
  products: Product[]
}

const Electrodomestics: React.FC<Props> = ({ products }) => {
  return (
    <ListOfProducts>
      {products.map(product => (
        <CardProduct key={product.id} {...product} />
      ))}
    </ListOfProducts>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await getProductByCategory(Categorys.ELECTRONICS)

  if (!products) {
    return { notFound: true }
  }

  return {
    props: { products },
  }
}

export default Electrodomestics
