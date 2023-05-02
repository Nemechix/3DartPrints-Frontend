import api from "./config";

async function getDesignById(id) {
  const design = await api.get(`design/${id}`);
  return design;
}

export default getDesignById;