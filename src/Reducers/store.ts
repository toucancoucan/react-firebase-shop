import {combineReducers, createStore} from "redux";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";

export const rootReducer = combineReducers({
    UserReducer,
    CartReducer
});

let store = createStore(rootReducer);
export type rootState = ReturnType<typeof rootReducer>
export type appDispatch = typeof store.dispatch
export default store;