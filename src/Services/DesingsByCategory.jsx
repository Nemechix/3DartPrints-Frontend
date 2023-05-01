import api from './config'

async function getDesignsByCategory(categoria){
    const designs = await api.get(`/category/2/designs?categoria=${categoria}`);
    return designs
}

export default getDesignsByCategory
