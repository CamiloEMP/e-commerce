import { baseURL } from 'api/config'
import { Product } from 'interfaces/Products'

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${baseURL}/products`)
  const data = await res.json()

  return data
}
