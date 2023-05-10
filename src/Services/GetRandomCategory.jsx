import api from './config'

async function getRandomCategory() {
  const { data } = await api.get(`/category/random`);
  return data;
}

export default getRandomCategory
