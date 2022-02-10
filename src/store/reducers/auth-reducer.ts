import {authAPI, LoginParamsType} from "../../api/auth-api";
import {Dispatch} from "redux";

export type initAuthStateType = {
    isLoggedIn: boolean
    loggedInError: boolean
    userName: string
    userMail: string
}

const initAuthState = {
    isLoggedIn: false,
    loggedInError: false,
    userName: "",
    userMail: "",
}

export const AuthReducer = (state: initAuthStateType = initAuthState, action: ActionsType): initAuthStateType => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, isLoggedIn: action.isLoggedIn}
        }
        case "LOGIN-ERROR": {
            return {...state, loggedInError: action.loggedInError}
        }
        case "SET-USER-NAME": {
            return {...state, userName: action.name}
        }
        case "SET-USER-MAIL": {
            return {...state, userMail: action.mail}
        }
        default:
            return state
    }
}

export type ActionsType =
    | ReturnType<typeof LoginAction>
    | ReturnType<typeof LoginErrorAction>
    | ReturnType<typeof SetUserNameAction>
    | ReturnType<typeof SetUserMailAction>

export const LoginAction = (isLoggedIn: boolean) =>
    ({type: "LOGIN", isLoggedIn} as const)

export const LoginErrorAction = (loggedInError: boolean) =>
    ({type: "LOGIN-ERROR", loggedInError} as const)

export const SetUserNameAction = (name: string) =>
    ({type: "SET-USER-NAME", name} as const)

export const SetUserMailAction = (mail: string) =>
    ({type: "SET-USER-MAIL", mail} as const)

export const LoginThunk = (payload: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(payload)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                dispatch(LoginAction(true))
            } else return
        })
        .catch(err => {
            console.log(err.response.data.error)
        })
}

export const LogOutThunk = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then(res => {
            dispatch(LoginAction(false))
        })
}

export const UserInfoThunk = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            console.log(res)
            dispatch(SetUserNameAction(res.data.name))
            dispatch(SetUserMailAction(res.data.email))
        })
}