import { defineStore } from 'pinia'


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
        setIsLoggedIn(isLoggedIn: boolean) {
            if (isLoggedIn) localStorage.setItem('token', 'dummy')
            else localStorage.removeItem('token')
            this.isLoggedIn = isLoggedIn
        }
    },
})