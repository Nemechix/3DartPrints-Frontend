import api from './config'

async function getAllUsers(){
    const {data} = await api.get("/user");
    return data
}

export default getAllUsers