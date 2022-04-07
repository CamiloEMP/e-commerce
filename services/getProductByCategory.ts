import { baseURL } from 'api/config'
import { Product } from 'interfaces/Products'

export const getProductByCategory = async (category: string): Promise<Product[]> => {
  const res = await fetch(`${baseURL}/products/category/${category}`)
  const data = await res.json()

  return data
}
