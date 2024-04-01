import axios from 'axios';

const baseURL: string = 'https://brapi.dev/api';

const api  = axios.create({
    baseURL,
});

export default api;