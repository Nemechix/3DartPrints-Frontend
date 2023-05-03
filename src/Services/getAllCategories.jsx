import api from "./config"

async function getAllCategories() {
  try {
    const { data } = await api.get('/category')
    return data
  } catch(error) {
    console.log(error.message)
    return []
  }
}

export default getAllCategories