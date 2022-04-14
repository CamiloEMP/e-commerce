import { baseURL } from 'api/config'
import { Product } from 'interfaces/Products'

export const getProductById = async (id: number | string): Promise<Product> => {
  id.toString()
  const res = await fetch(`${baseURL}/products/${id}`)
  const data = await res.json()

  return data
}
