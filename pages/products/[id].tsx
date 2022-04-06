import type { GetStaticProps, GetStaticPaths } from 'next'

import { useRouter } from 'next/router'

import { Product } from 'interfaces/Products'
import { getAllProducts } from 'services/getAllProducts'
import { getProductById } from 'services/getProductById'

const ProductId = ({ product }: { product: Product }) => {
  const router = useRouter()

  console.log(router.query.id)

  if (router.isFallback) return <p>Loading...</p>

  return <div>ProductId</div>
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const products: Product[] = await getAllProducts()

//   const paths = products.map(product => ({
//     params: { id: product.id },
//   }))

//   return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   console.log(params)
//   const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
//   const product = await res.json()

//   console.log(product)

//   return { props: { product } }
// }

export default ProductId
