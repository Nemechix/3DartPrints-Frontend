import api from './config'

async function getRandomCategory(){
    const {data} = await api.get(`/category/random`);
    console.log(data)
    return data
}

export default getRandomCategory
