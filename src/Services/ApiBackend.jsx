import { api } from "./config";

async function login(user) {
  const { data } = await api.post(user)
  console.log(data)
  // return data.token
}

export {
  login,
}