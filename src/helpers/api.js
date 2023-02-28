import axios from "axios";

const API_URL = "https://taskmates-api.vercel.app";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;
