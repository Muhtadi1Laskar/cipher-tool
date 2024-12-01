import axios from 'axios';

const BASEURL = 'https://gp-api-gamma.vercel.app/api';

export const postCall = async (endpoint, requestBody) => {
    const url = `${BASEURL}/${endpoint}`;
    return axios.post(url, requestBody);
}