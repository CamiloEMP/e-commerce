import { Product } from 'interfaces/Products'

export interface CollectionObject extends Product {
  quantity: number
}

export interface CollectionContext {
  collection: CollectionObject[]
  setCollection: (collection: CollectionObject[]) => void
}
