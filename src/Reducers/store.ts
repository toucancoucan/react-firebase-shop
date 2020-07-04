import {combineReducers, createStore} from "redux";
import UserReducer from "./UserReducer";

export const rootReducer = combineReducers({
    UserReducer,
});

let store = createStore(rootReducer);
export type rootState = ReturnType<typeof rootReducer>
export type appDispatch = typeof store.dispatch
export default store;