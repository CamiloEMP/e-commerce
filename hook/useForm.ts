import { useState } from 'react'

export const useForm = (initialState: any = {}, callback: (form: {}) => void) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    callback(form)
    setForm(initialState)
  }

  return {
    form,
    handleChange,
    handleSubmit,
  }
}
