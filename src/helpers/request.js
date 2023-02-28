import axios from 'axios';

const API_URL = 'https://taskmates-api.vercel.app';
const token = sessionStorage.getItem('token');

const getRequest = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const postRequest = (endpoint, data) => {
    axios.post(`${API_URL}/${endpoint}`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data
        })
};

export { getRequest, postRequest };