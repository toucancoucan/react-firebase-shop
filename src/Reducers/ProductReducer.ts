import {shopItemType} from "./ShopReducer";


const CHANGE_ACTIVE_PHOTO = 'CHANGE_ACTIVE_PHOTO';

export type changeActivePhotoIndexType = {
    type: typeof CHANGE_ACTIVE_PHOTO,
    payload: number
}

export let changeActiveIndexPhoto = (item: number): changeActivePhotoIndexType => {
    return {
        type: CHANGE_ACTIVE_PHOTO,
        payload: item
    }
}

const SET_ITEM = 'SET_ITEM';

export type setItemType = {
    type: typeof SET_ITEM,
    payload: shopItemType
}

export let setItem = (item: shopItemType): setItemType => {
    return {
        type: SET_ITEM,
        payload: item
    }
}

export type ProductReducerType = {
    item: shopItemType,
    activePhotoIndex: number
}

let ProductReducerInitialState: ProductReducerType = {
    item: {
        photoUrl: "",
        name: "",
        category: "MEN",
        price: 0,
        description: "",
        id: 0,
        reviews: [],
        additionalPhotosUrl: []
    },
    activePhotoIndex: 0
}

type actionTypes = changeActivePhotoIndexType & setItemType;


const ProductReducer = (state = ProductReducerInitialState, action: actionTypes): ProductReducerType => {
    switch (action.type) {
        case CHANGE_ACTIVE_PHOTO:
            return {
                ...state,
                activePhotoIndex: getPhotoIndex(action.payload, state.item.additionalPhotosUrl?.length)
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return state
    }
}

let getPhotoIndex = (value: number, maxLength: number) => {
    if (value < 0) return maxLength;
    if (value > maxLength) return 0;
    return value
}

export default ProductReducer;