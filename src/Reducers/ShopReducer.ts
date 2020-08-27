import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import Firebase from "../Firebase/Firebase";

const SET_FETCHED_ITEMS = 'SET_FETCHED_ITEMS';


export type setFetchedItemsType = {
    type: typeof SET_FETCHED_ITEMS
    payload: Array<shopItemType>
}

let setFetchedItems = (items: Array<shopItemType>): setFetchedItemsType => {
    return {
        type: SET_FETCHED_ITEMS,
        payload: items
    }
}

export let fetchAndSetShopItems = (): ThunkAction<Promise<void>, rootState, any, setFetchedItemsType> => {
    return async (dispatch) => {
        let data = await Firebase.getShopItems();
        console.log(data)
        dispatch(setFetchedItems(data))
    }
}


export type shopItemType = {
    photoUrl: string,
    additionalPhotosUrl?: Array<string>,
    name: string,
    category: itemCategoryType,
    price: number,
    oldPrice?: number,
    description: string,
    id: number,
    additionalInfo?: Object,
    reviews: Array<reviewType>,
    newTag?: boolean,
    saleTag?: boolean,
}

export type itemCategoryType = "ACCESSORIES" | "MEN" | "SHOES" | "WOMEN";

export type reviewType = {
    rating: 1 | 2 | 3 | 4 | 5
    text: string
    name: string
    email: string
}


export type ShopStateType = {
    items: Array<shopItemType>
}

let CartReducerInitialState: ShopStateType = {
    items: [],
}

type actionTypes = setFetchedItemsType;

const ShopReducer = (state = CartReducerInitialState, action: actionTypes): ShopStateType => {
    switch (action.type) {
        case SET_FETCHED_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }

}


export default ShopReducer;