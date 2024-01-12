import { Registration } from "@components/Auth/interfaces/Registration";
import api from "@utils/api";

api.defaults.baseURL = `${api.defaults.baseURL}/auth`;

export const login = async (username: string, password: string) => {
    try {

        const response = await api.post("/login", { username, password });
        return response;
    } catch (error: any) {
        return error.response;
    }
};


export const register = async (registration: Registration) => {
    try {
        const response = await api.post("/register", registration);
        return response;    
    } catch (error: any) {
        return error.response;
    }
};

export const logout = async () => {
    try {
        const response = await api.post("/logout");
        return response;
    } catch (error: any) {
        return error.response;
    }
};

export const getRefreshToken = async () => {
    try {
        const response = await api.post("/refresh");
        return response;
    } catch (error: any) {
        return error.response;
    }
}