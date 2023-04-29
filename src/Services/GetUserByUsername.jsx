import api from "./config";

async function getUserByUsername(username) {
  const user = await api.get(`/user/${username}`);
  return user;
}

export default getUserByUsername;