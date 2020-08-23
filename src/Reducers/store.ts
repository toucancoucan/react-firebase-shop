import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";
import NavBarReducer from "./NavBarReducer";
import CarouselReducer from "./CarouselReducer";
import ShopReducer from "./ShopReducer";
import {reducer as formReducer} from 'redux-form'
import HomeCategoriesReducer from "./HomeCategoriesReducer";


export const rootReducer = combineReducers({
    UserReducer,
    CartReducer,
    NavBarReducer,
    CarouselReducer,
    ShopReducer,
    HomeCategoriesReducer,
    form: formReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export type rootState = ReturnType<typeof rootReducer>
export type appDispatch = typeof store.dispatch
export default store;