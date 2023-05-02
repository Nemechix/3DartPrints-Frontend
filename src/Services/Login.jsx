import  api  from "./config";

async function login(user) {
  const response = await api.post('/auth/login', user)
  response ? console.log(response) : console.log('NADA AQUI')
  response.hasOwnProperty('data') ? 
    console.log(response.data) 
    : response.hasOwnProperty('response') ?
      console.log(response)
      : console.log('Error desconocido.')
  return response
}

export {
  login,
}