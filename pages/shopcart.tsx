import { MinusCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import { useCollection } from 'hook/useCollection'
import { ListOfProducts } from 'container/ListOfProducts'

const Shopcart = () => {
  const { collection, remove, moreQuantity, lessQuantity } = useCollection()
  const totalAccountBalance = collection.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <>
      {collection.length === 0 ? (
        <h2 className="text-center text-4xl font-semibold rounded-sm py-4">
          You don&apos;t have any items in your cart.
        </h2>
      ) : (
        <div className="space-y-8">
          <h2 className="text-center text-4xl font-semibold  rounded-sm py-4">
            Tú carrito de compras
          </h2>
          <p className="text-xl">Total de la compra ${Math.floor(totalAccountBalance)}</p>
          <ListOfProducts>
            {collection.map(product => (
              <div
                key={product.id}
                className="w-80 shadow-md py-4 px-8 flex flex-col justify-between gap-6"
              >
                <Image
                  alt={`${product.category} ${product.title} of Tu Tienda Online`}
                  height={260}
                  src={product.image}
                  width={200}
                />
                <p>{product.title}</p>
                <p>Precio por unidad: ${product.price}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => lessQuantity(product.id)}>
                      <MinusIcon className="w-6 h-6" />
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => moreQuantity(product.id)}>
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <div>
                    <button
                      className="flex items-center border-2 border-rose-700 p-1 text-rose-700 rounded-sm"
                      onClick={() => remove(product.id)}
                    >
                      <MinusCircleIcon className="w-6 h-6 mr-1" />
                      <span className="text-sm">Remove product</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ListOfProducts>
          <div className="flex justify-center">
            <button className="text-primary-100 flex items-center gap-2 p-2 px-6 justify-center rounded-sm font-semibold bg-primary-900 transition-opacity hover:opacity-80">
              Comprar todo
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Shopcart
