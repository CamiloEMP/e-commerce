import React, { createContext, useState } from 'react'

import { CollectionContext, CollectionObject } from 'interfaces/Collection'

const CollectionContext = createContext({} as CollectionContext)

export const CollectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [collection, setCollection] = useState<CollectionObject[]>([])

  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContext
