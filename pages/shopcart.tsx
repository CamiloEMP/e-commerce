import { useState } from 'react'
import Image from 'next/image'
import { MinusCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'

import { useCollection } from 'hook/useCollection'
import { useUser } from 'hook/useUser'
import { ListOfProducts } from 'container/ListOfProducts'
import { ShowModal } from 'interfaces/Modal'
import { Modal } from 'components/Modal'
import { PurchaseSummary } from 'modals/PurchaseSummary'
import { Success } from 'modals/Success'

const Shopcart = ({ setShow }: ShowModal) => {
  const { isLogged } = useUser()
  const { collection, remove, moreQuantity, lessQuantity, reset } = useCollection()
  const [isVisible, setIsVisible] = useState({ checkout: false, buy: false })

  const totalAccountBalance = collection.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <>
      {collection.length === 0 ? (
        <h2 className="text-center text-4xl font-semibold rounded-sm py-4">
          No tienes productos en tu carrito
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
                      className="flex font-semibold items-center border-2 border-rose-700 p-1 text-rose-700 transition-colors hover:bg-rose-700 hover:text-primary-100 rounded-sm"
                      onClick={() => remove(product.id)}
                    >
                      <MinusCircleIcon className="w-6 h-6 mr-1" />
                      <span className="text-sm">Quitar producto</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ListOfProducts>
          <div className="flex justify-center">
            <button
              className="text-primary-900 border-2 border-primary-900 flex p-2 px-6 justify-center rounded-sm font-semibold transition-colors hover:bg-primary-900 hover:text-primary-100"
              onClick={() => {
                !isLogged ? setShow(true) : setIsVisible({ ...isVisible, checkout: true })
              }}
            >
              Chequear pedido
            </button>
          </div>
          {isVisible.checkout && (
            <Modal>
              <PurchaseSummary
                collection={collection}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </Modal>
          )}
          {!isVisible.checkout && isVisible.buy && (
            <Modal>
              <Success isVisible={isVisible} reset={reset} setIsVisible={setIsVisible} />
            </Modal>
          )}
        </div>
      )}
    </>
  )
}

export default Shopcart
