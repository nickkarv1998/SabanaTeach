import axios from 'axios';

const instance = axios.create({
    baseURL: "http://sabana-teach-rest.herokuapp.com"
});

export default instance;