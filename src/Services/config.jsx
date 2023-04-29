import axios from 'axios'

const api = axios.create({
  baseURL: "https://threedartprints-api-daniel.onrender.com/api",
});

export default api