import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import Firebase from "../Firebase/Firebase";
import {getCategoriesId} from "../Functions/getCategoriesId";

const SET_FETCHED_ITEMS = 'SET_FETCHED_ITEMS';
const SET_CATEGORIES_ITEMS = "SET_CATEGORIES_ITEMS";

export type setFetchedItemsType = {
    type: typeof SET_FETCHED_ITEMS
    payload: Array<shopItemType>
}

export type setCategoriesItemsLengthType = {
    type: typeof SET_CATEGORIES_ITEMS;
    payload: categoriesItemsLengthType;
}


let setFetchedItems = (items: Array<shopItemType>): setFetchedItemsType => {
    return {
        type: SET_FETCHED_ITEMS,
        payload: items
    }
}

let setCategoriesItemsLength = (items: categoriesItemsLengthType): setCategoriesItemsLengthType => {
    return {
        type: SET_CATEGORIES_ITEMS,
        payload: items
    }
}

export let fetchAndSetShopItems = (): ThunkAction<Promise<void>, rootState, any, setFetchedItemsType | setCategoriesItemsLengthType> => {
    return async (dispatch) => {
        let data = await Firebase.getShopItems();
        dispatch(setFetchedItems(data))
        dispatch(setCategoriesItemsLength(getCategoriesId(data)))
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
    items: Array<shopItemType>,
    categoriesItemsLength: categoriesItemsLengthType,
}

export type categoriesItemsLengthType = {
    all: number,
    accessories: number,
    men: number,
    shoes: number,
    women: number,
}

let ShopItemsInitialState: ShopStateType = {
    items: [],
    categoriesItemsLength: {
        all: 0,
        accessories: 0,
        men: 0,
        shoes: 0,
        women: 0,
    }
}

type actionTypes = setFetchedItemsType & setCategoriesItemsLengthType;

const ShopReducer = (state = ShopItemsInitialState, action: actionTypes): ShopStateType => {
    switch (action.type) {
        case SET_FETCHED_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case SET_CATEGORIES_ITEMS:
            return {
                ...state,
                categoriesItemsLength: action.payload
            }
        default:
            return state
    }

}


export default ShopReducer;