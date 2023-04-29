import api from "./config";

async function getUserById(id) {
  const user = await api.get(`/user/${id}`);
  return user;
}

export default getUserById;