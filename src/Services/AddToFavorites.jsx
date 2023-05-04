import api from "./config"

async function addToFavorites(designId, userId) {
  const response = await api.post(`design/designs/${designId}/favorites`, { userId });
  return response.data.favorite;
}

export default addToFavorites;