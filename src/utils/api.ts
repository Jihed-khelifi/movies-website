import axios from "axios";

export const authHeader = () => {
    const token = localStorage.getItem('token');
    if (token)
        return {
            'Content-type': 'application/json',
            Authorization: token
        }
    else return { 'Content-type': 'application/json', }
}

const api = axios.create({
    baseURL: "http://localhost:5555/api/v1",
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}
);

export default api;
