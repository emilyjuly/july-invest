import axios from 'axios';

const baseURL: string = 'https://www.googleapis.com/customsearch';

const apiGoogle = axios.create({
    baseURL,
});

export default apiGoogle;