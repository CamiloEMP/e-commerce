import type { GetStaticProps } from 'next'

import React from 'react'

import { useCollection } from 'hook/useCollection'
import { Product } from 'interfaces/Products'
import { ListOfProducts } from 'container/ListOfProducts'
import { CardProduct } from 'components/CardProduct'
import { Categorys } from 'constants/Cetegorys'
import { getProductByCategory } from 'services/getProductByCategory'

interface Props {
  products: Product[]
}

const Men: React.FC<Props> = ({ products }) => {
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
  const products: Product[] = await getProductByCategory(Categorys.MEN)

  if (!products) {
    return { notFound: true }
  }

  return {
    props: { products },
  }
}

export default Men
