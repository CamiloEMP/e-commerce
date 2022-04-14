import { useContext, useCallback } from 'react'

import CollectionContext from 'context/CollectionContext'
import { CollectionObject } from 'interfaces/Collection'

export const useCollection = () => {
  const { collection, setCollection } = useContext(CollectionContext)

  const add = useCallback(
    (product: CollectionObject) => {
      setCollection(collection.concat(product))
    },
    [collection, setCollection],
  )

  const remove = useCallback(
    (id: number) => {
      const newCollection = collection.filter(
        (collectionItem: CollectionObject) => collectionItem.id !== id,
      )

      setCollection(newCollection)
    },
    [collection, setCollection],
  )

  const moreQuantity = useCallback(
    (id: number) => {
      const productId = collection.filter(product => product.id === id)
      const index = collection.indexOf(productId[0])
      const newCollection = [...collection]

      newCollection[index].quantity += 1
      setCollection(newCollection)
    },
    [collection, setCollection],
  )

  const lessQuantity = useCallback(
    (id: number) => {
      const productId = collection.filter(product => product.id === id)
      const index = collection.indexOf(productId[0])
      const newCollection = [...collection]

      if (newCollection[index].quantity > 1) {
        newCollection[index].quantity -= 1
        setCollection(newCollection)
      }
    },
    [collection, setCollection],
  )

  const reset = useCallback(() => {
    setCollection([])
  }, [setCollection])

  return { collection, add, remove, moreQuantity, lessQuantity, reset }
}
