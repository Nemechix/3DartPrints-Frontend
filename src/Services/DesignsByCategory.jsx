import api from './config'

async function getDesignsByCategoryId(name){
    const designs = await api.get(`/category/${name}/designs`);
    return designs
}

export default getDesignsByCategoryId
