import {combineReducers, createStore} from "redux";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";
import NavBarReducer from "./NavBarReducer";
import {reducer as formReducer} from 'redux-form'


export const rootReducer = combineReducers({
    UserReducer,
    CartReducer,
    NavBarReducer,
    form: formReducer
});

let store = createStore(rootReducer);

export type rootState = ReturnType<typeof rootReducer>
export type appDispatch = typeof store.dispatch
export default store;