import React from 'react'

export const Footer = () => {
  return (
    <footer className="fixed bottom-0">
      <div className="flex items-center justify-center p-6">
        <p className="text-primary-500">&copy; {new Date().getFullYear()} - Tu tienda online</p>
      </div>
    </footer>
  )
}
