import React from 'react'
import { EmojiHappyIcon } from '@heroicons/react/outline/'
export const Spinner = () => {
  return (
    <button
      disabled
      className="flex items-center text-white bg-primary-700 px-6 py-2 rounded-md"
      type="button"
    >
      <EmojiHappyIcon className=" animate-spin h-7 w-7 mr-3" />
      <span className="font-semibold">Cargando...</span>
    </button>
  )
}
