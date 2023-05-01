import axios from 'axios'

const api = axios.create({
  baseURL: "https://threedartprints-2yqk.onrender.com/api",
});

export default api