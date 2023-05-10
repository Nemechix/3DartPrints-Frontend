import api from './config'

async function getDesignsByCategoryName(name){
    const {data} = await api.get(`/category/name/${name}/designs`);
    return data
}

export default getDesignsByCategoryName
