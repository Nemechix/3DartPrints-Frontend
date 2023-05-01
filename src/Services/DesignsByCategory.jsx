import api from './config'

async function getDesignsByCategoryName(name){
    const designs = await api.get(`/category/name/${name}/designs`);
    return designs
}

export default getDesignsByCategoryName
