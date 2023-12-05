import axios from "axios";

export const authHeader = () => {
    const token = localStorage.getItem('token');
    if (token)
        return {
            'Content-type': 'application/json',
            Authorization: token
        }
    else return {}
}

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: authHeader()
});

export default api;
