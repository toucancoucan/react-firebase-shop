import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import Firebase from "../Firebase/Firebase";

const SET_FETCHED_CATEGORIES_ITEMS = 'SET_FETCHED_CATEGORIES_ITEMS';

export type setFetchedCategoriesItemsType = {
    type: typeof SET_FETCHED_CATEGORIES_ITEMS
    payload: Array<homeCategoryItemType>
}

let setFetchedCategoriesItems = (items: Array<homeCategoryItemType>): setFetchedCategoriesItemsType => {
    return {
        type: SET_FETCHED_CATEGORIES_ITEMS,
        payload: items
    }
}

export type homeCategoryItemType = {
    photoUrl: string,
    category: string
}

export let fetchAndSetHomeCategoryItems = (): ThunkAction<Promise<void>, rootState, any, setFetchedCategoriesItemsType> => {
    return async (dispatch) => {
        let data = await Firebase.getHomeCategoriesItems();
        dispatch(setFetchedCategoriesItems(data))
    }
}

export type HomeCategoriesType = {
    categoryItems: Array<homeCategoryItemType> | null
}

let HomeCategoriesInitialState: HomeCategoriesType = {
    categoryItems: null
}

type actionTypes = setFetchedCategoriesItemsType;

const HomeCategoriesReducer = (state = HomeCategoriesInitialState, action: actionTypes): HomeCategoriesType => {
    switch (action.type) {
        case SET_FETCHED_CATEGORIES_ITEMS:
            return {
                ...state,
                categoryItems: action.payload
            }
        default:
            return state
    }

}

export default HomeCategoriesReducer;