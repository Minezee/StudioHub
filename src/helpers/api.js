import axios from "axios";

const API_URL = "http://103.189.235.157:10002/api/v1";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;
