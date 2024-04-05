import axios from 'axios';

const baseURL: string = 'https://brapi.dev/api';

const apiBrapi  = axios.create({
    baseURL,
});

export default apiBrapi;