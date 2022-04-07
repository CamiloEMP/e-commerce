import type { GetStaticProps } from 'next'

import React from 'react'

import { getProductByCategory } from 'services/getProductByCategory'
import { Product } from 'interfaces/Products'
import { CardProduct } from 'components/CardProduct'
import { ListOfProducts } from 'container/ListOFProducts'
import { Categorys } from 'constants/Cetegorys'

interface Props {
  products: Product[]
}

const Woman: React.FC<Props> = ({ products }) => {
  return (
    <ListOfProducts>
      {products.map(product => (
        <CardProduct key={product.id} {...product} />
      ))}
    </ListOfProducts>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await getProductByCategory(Categorys.WOMAN)

  if (!products) {
    return { notFound: true }
  }

  return {
    props: { products },
  }
}

export default Woman
