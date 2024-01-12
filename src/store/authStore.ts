import { defineStore } from 'pinia'
import { login, register, getRefreshToken } from '@services/auth.service';
import { Registration } from '@components/Auth/interfaces/Registration';

export interface AuthState {
    token: string;
    isLoggedIn: boolean;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: '',
        isLoggedIn: localStorage.getItem('token') ? true : false,
    }),
    actions: {
        async login(email: string, password: string) {
            const response = await login(email, password);
            if (response.status === 201) {
                this.token = response.data.token;
                localStorage.setItem('token', this.token);
                this.isLoggedIn = true;
                return response;
            } else {
                return response;
            }
        },
        logout() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
        },
        async register(registration: Registration ) {
            const response = await register(registration);
            if (response.status === 200) {
                this.token = response.data.token;
                this.setLogIn();
                return response;
            } else {
                return response;
            }
        },
        async getRefreshToken() {
            const response = await getRefreshToken();
            if (response.status === 200) {
                this.token = response.data.token;
                localStorage.setItem('token', this.token);
                this.isLoggedIn = true;
                return true;
            } else {
                return false;
            }
        },

        setLogIn() {
            localStorage.setItem('token', this.token);
            this.isLoggedIn = true;
        }

    },
})