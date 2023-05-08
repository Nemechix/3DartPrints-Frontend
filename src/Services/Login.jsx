import  api  from "./config";

async function login(user) {
  try {
    const { data } = await api.post('/auth/login', user)
    
    return data
  } catch(error) {
    return ''
  }
}

export {
  login,
}