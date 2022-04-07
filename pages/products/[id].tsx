import type { GetStaticProps, GetStaticPaths } from 'next'

import { Product } from 'interfaces/Products'
import { getAllProducts } from 'services/getAllProducts'
import { getProductById } from 'services/getProductById'
import { ProductPage } from 'components/Product'

const ProductId = ({ product }: { product: Product }) => {
  return <ProductPage {...product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await getAllProducts()

  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProductById(params.id)

  return { props: { product } }
}

export default ProductId
