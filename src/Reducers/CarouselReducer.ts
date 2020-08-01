import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import Firebase from "../Firebase/Firebase";

const CHANGE_ACTIVE_CAROUSEL_ITEM = 'CHANGE_ACTIVE_CAROUSEL_ITEM';
const SET_CAROUSEL_ITEMS = 'SET_CAROUSEL_ITEMS';


type setCarouselItemsType = {
    type: typeof SET_CAROUSEL_ITEMS
    payload: Array<CarouselItemType>
}

let setCarouselItems = (items: Array<CarouselItemType>): setCarouselItemsType => {
    return {
        type: SET_CAROUSEL_ITEMS,
        payload: items
    }
}

export let fetchAndSetCarouselItems = (): ThunkAction<Promise<void>, rootState, any, setCarouselItemsType> => {
    return async (dispatch) => {
        let data = await Firebase.getCarouselItems();
        dispatch(setCarouselItems(data))
    }
}

type changeActiveCarouselItemType = {
    type: typeof CHANGE_ACTIVE_CAROUSEL_ITEM
    payload: number
}

export let changeActiveCarouselItem = (value: number): changeActiveCarouselItemType => {
    return {
        type: CHANGE_ACTIVE_CAROUSEL_ITEM,
        payload: value
    }
}


export type CarouselItemType = {
    headlineString: string,
    subString: string,
    position: "left" | "center" | "right",
    photoUrl: string,
    altPhoto: string,
    stringColor: "white" | "black"
}

export type CarouselStateType = {
    fetchedItems: Array<CarouselItemType> | null,
    activeItemId: number,
    itemsQuantity: number
}

let CarouselReducerInitialState: CarouselStateType = {
    fetchedItems: null,
    activeItemId: 0,
    itemsQuantity: 0
}

type actionTypes = changeActiveCarouselItemType & setCarouselItemsType;

const CarouselReducer = (state = CarouselReducerInitialState, action: actionTypes): CarouselStateType => {
    switch (action.type) {
        case CHANGE_ACTIVE_CAROUSEL_ITEM:
            return {
                ...state,
                activeItemId: getActiveItemIndex(state.activeItemId, state.itemsQuantity, action.payload)
            }
        case SET_CAROUSEL_ITEMS:
            return {
                ...state,
                fetchedItems: action.payload,
                itemsQuantity: action.payload.length
            }
        default:
            return state
    }
}

const getActiveItemIndex = (active: number, length: number, value: number): number => {
    let res = active + value;
    if (res < 0) res = length - 1;
    else if (res === length) res = 0;
    return res;
}

export default CarouselReducer;