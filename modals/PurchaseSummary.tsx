import { XCircleIcon } from '@heroicons/react/outline'

import { CollectionObject } from 'interfaces/Collection'

interface Props {
  isVisible: { buy: boolean; checkout: boolean }
  setIsVisible: (isVisible: { buy: boolean; checkout: boolean }) => void
  collection: CollectionObject[]
}

export const PurchaseSummary = ({ setIsVisible, isVisible, collection }: Props) => {
  const total = collection.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="max-w-md mx-auto px-8 py-8 mt-24 bg-primary-50 rounded-md relative">
      <button
        className="absolute right-4 top-4"
        onClick={() => setIsVisible({ ...isVisible, checkout: false })}
      >
        <XCircleIcon className="w-8 h-8" />
      </button>
      <h3 className="text-xl font-semibold text-center mb-4">Resumen de compra</h3>
      <div className="grid grid-cols-3 gap-8">
        <p>Producto</p>
        <p>Precio</p>
        <p>Cantidad</p>
      </div>
      {collection.map(item => (
        <div key={item.id} className="grid grid-cols-3 gap-8 mt-4">
          <p className="truncate">{item.title}</p>
          <p className="m-0">${item.price}</p>
          <p className="px-6">{item.quantity}</p>
        </div>
      ))}
      <div className="grid grid-cols-3 mt-4 text-lg">
        <p className="font-semibold border-t-2 border-primary-700">Total</p>
        <p className="pl-2 border-t-2 border-primary-700">${Math.floor(total)}</p>
        <p>&nbsp;</p>
      </div>
      <div className="mt-4">
        <button
          className="w-full text-primary-900 border-2 border-primary-900 flex p-2 px-6 justify-center rounded-sm font-semibold transition-colors hover:bg-primary-900 hover:text-primary-100"
          onClick={() => setIsVisible({ buy: true, checkout: false })}
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
