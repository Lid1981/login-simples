import axios from 'axios';
import config from '../../postcss.config.mjs';
const instance = axios.create({
    baseURL:'http://localhost:4000'
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if(token){
        config.headers.Authorization = token
    }
    return config
})

export default instance;
