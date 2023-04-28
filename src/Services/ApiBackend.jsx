import { api } from "./config";

async function login(user) {
  const { data } = await api.post('/auth/login', user)
  console.log(data)
  // return data.token
}

export {
  login,
}