import api from './config'

async function getAllUsers(){
    const users = await api.get("/user");
    return users
}

export default getAllUsers