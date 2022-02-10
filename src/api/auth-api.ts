import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
}
export type RegisterParamsType = {
    email: string
    password: string
}

export const authAPI = {
    login(payload: LoginParamsType) {
        return instance.post('auth/login', {...payload})
    },
    register(payload: RegisterParamsType) {
        return instance.post('auth/register', {...payload})
    },
    me() {
        return instance.post('auth/me')
    },
    logOut() {
        return instance.delete('auth/me')
    }

}