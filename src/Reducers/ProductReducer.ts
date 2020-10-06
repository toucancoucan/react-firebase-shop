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

const CHANGE_SHOW_SUCCESS_BLOCK = 'CHANGE_SHOW_SUCCESS_BLOCK';

export type changeShowSuccessBlockType = {
    type: typeof CHANGE_SHOW_SUCCESS_BLOCK,
    payload: boolean
}

export let changeShowSuccessBlock = (item: boolean): changeShowSuccessBlockType => {
    return {
        type: CHANGE_SHOW_SUCCESS_BLOCK,
        payload: item
    }
}

const CHANGE_IS_FIRST_TAB_OPENED = 'CHANGE_IS_FIRST_TAB_OPENED';

export type changeIsFirstTabOpenedType = {
    type: typeof CHANGE_IS_FIRST_TAB_OPENED,
    payload: boolean
}

export let changeIsFirstTabOpened = (item: boolean): changeIsFirstTabOpenedType => {
    return {
        type: CHANGE_IS_FIRST_TAB_OPENED,
        payload: item
    }
}

export type ProductReducerType = {
    item: shopItemType,
    activePhotoIndex: number,
    showSuccessBlock: boolean,
    isFirstTabOpened: boolean,
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
        additionalPhotosUrl: [],
        additionalInfo: {},
    },
    activePhotoIndex: 0,
    showSuccessBlock: false,
    isFirstTabOpened: true,
}

const WIPE_VALUES = 'WIPE_VALUES';

export type wipeValuesType = {
    type: typeof WIPE_VALUES
}

export let wipeValues = (): wipeValuesType => {
    return {
        type: WIPE_VALUES
    }
}

type actionTypes =
    changeActivePhotoIndexType
    & setItemType
    & changeShowSuccessBlockType
    & wipeValuesType
    & changeIsFirstTabOpenedType;


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
        case CHANGE_SHOW_SUCCESS_BLOCK:
            return {
                ...state,
                showSuccessBlock: action.payload,
            }
        case WIPE_VALUES:
            return ProductReducerInitialState;
        case CHANGE_IS_FIRST_TAB_OPENED:
            return {
                ...state,
                isFirstTabOpened: action.payload
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