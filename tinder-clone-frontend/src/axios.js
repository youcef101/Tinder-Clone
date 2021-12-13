import axios from 'axios'
const baseURL = 'http://localhost:8001/';
const axiosinstance = axios.create({
    baseURL: baseURL,

})
export default axiosinstance;