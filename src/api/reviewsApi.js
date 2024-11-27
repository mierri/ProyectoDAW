import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const reviewsApi = axios.create({
    baseURL: VITE_API_URL,
});

reviewsApi.interceptors.request.use((config) => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'), //interceptar el jwt
    }

    return config;
});

export default reviewsApi;