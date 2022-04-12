import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { IShowModal } from 'interfaces/Modal'
import { useUser } from 'hook/useUser'

const Favorites = ({ setShow }: IShowModal) => {
  const { isLogged } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLogged) {
      router.push('/')
      setShow(true)
    }
  }, [isLogged, router, setShow])

  return (
    <div>
      <p>asads</p>
    </div>
  )
}

export default Favorites
