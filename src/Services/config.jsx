import axios from "axios";

export const api = axios.create({
  // baseURL: import.meta.env.VITE_TEST
  baseURL: 'https://threedartprints-2yqk.onrender.com/api'
})
