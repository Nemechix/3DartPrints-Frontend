import api from "./config"

async function addFavorite(designId, userId) {
  try {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem("token");
      const { data } = await api.post('/user/favorites', {designId, userId }, {
        headers: {
          'token': token
        }
      })
      return data
    } else {
      throw new Error('You should Log In first')
    }
  } catch(error) {
    return new Error(error)
  }
}

async function removeFavorite(designId, userId) {
  try {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      const { data } = await api.delete('/user/favorites', {
        headers: {
          'token': token
        }, 
        data: {designId, userId }
      })
      return data
    } else {
      throw new Error('You should Log In first')
    }
  } catch(error) {
    return new Error(error)
  }
}

export {
  addFavorite,
  removeFavorite
}