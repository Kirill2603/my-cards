import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {AuthReducer} from "./reducers/auth-reducer";

const rootReducer = combineReducers({
    auth: AuthReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;