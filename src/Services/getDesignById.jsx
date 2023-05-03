import api from "./config";

async function getDesignById(id) {
  console.log(id)
  console.log("hola")
  const design = await api.get(`design/${id}`);
  return design;
}

export default getDesignById;