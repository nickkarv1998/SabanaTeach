import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://sabana-teach-rest.herokuapp.com/"
});

export default axiosInstance;