import api from "./config"

async function GetMyProfile( token ) {
  try {
    const { data } = await api.get('/user/me', {
      headers: {
        'token': token
      }
    })
    return data.user

  } catch(error) {
    console.log(error)
    return ''
  }
}

export default GetMyProfile