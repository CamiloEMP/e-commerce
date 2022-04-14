import type { GetStaticProps, GetStaticPaths } from 'next'

import { Product } from 'interfaces/Products'
import { getAllProducts } from 'services/getAllProducts'
import { getProductById } from 'services/getProductById'
import { ProductPage } from 'components/Product'

const ProductId = ({ product }: { product: Product }) => {
  return <ProductPage product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await getAllProducts()

  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

interface Props {
  params: { id: string }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const params = ctx.params as Props['params']
  const product = await getProductById(params.id)

  return { props: { product } }
}

export default ProductId
