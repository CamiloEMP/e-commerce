import { baseURL } from 'api/config'

interface ILoginService {
  username: string
  password: string
}

export const loginService = ({ username, password }: ILoginService): Promise<string> => {
  return fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.token) return res.token
    })
}
