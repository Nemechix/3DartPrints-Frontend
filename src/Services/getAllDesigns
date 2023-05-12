import api from "./config"

async function getAllDesigns() {
  try {
    const { data } = await api.get('/design')
    return data
  } catch(error) {
    console.log(error)
    return []
  }
}

export default getAllDesigns