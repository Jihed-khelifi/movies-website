import { defineStore } from 'pinia'


export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'Evan You',
        age: 18,
    }),
    getters: {
        doubleAge: (state) => state.age * 2,
    },
    actions: {
        setName(name: string) {
            this.name = name
        },
    },
})