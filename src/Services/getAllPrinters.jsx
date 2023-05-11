import api from './config'

async function getAllPrinters(){
    const {data} = await api.get("/printer");
    return data
}

export default getAllPrinters