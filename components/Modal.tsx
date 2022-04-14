import React from 'react'
import ReactDOM from 'react-dom'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal')

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-30 bg-[#0000007f]">{children}</div>,
    modalRoot as HTMLElement,
  )
}
