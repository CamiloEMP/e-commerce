import { XCircleIcon } from '@heroicons/react/outline'

interface Props {
  isVisible: { buy: boolean; checkout: boolean }
  setIsVisible: (isVisible: { buy: boolean; checkout: boolean }) => void
  reset: () => void
}

export const Success = ({ setIsVisible, isVisible, reset }: Props) => {
  return (
    <div className="max-w-md mx-auto px-8 py-8 mt-24 bg-primary-50 rounded-md relative">
      <button
        className="absolute right-4 top-4"
        onClick={() => {
          reset()
          setIsVisible({ ...isVisible, buy: false })
        }}
      >
        <XCircleIcon className="w-8 h-8" />
      </button>
      <h3 className="text-xl font-semibold text-center mb-4">Compra realizada</h3>
    </div>
  )
}
