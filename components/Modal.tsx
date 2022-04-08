import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-[#0000007f]">{children}</div>,
    document.getElementById('modal-login'),
  )
}
