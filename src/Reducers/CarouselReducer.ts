const CHANGE_ACTIVE_CART_ITEM = 'CHANGE_ACTIVE_CART_ITEM';

export type changeActiveCartItemType = {
    type: typeof CHANGE_ACTIVE_CART_ITEM
    payload: number
}

export let changeActiveCartItem = (activeItemId: number): changeActiveCartItemType => {
    return {
        type: CHANGE_ACTIVE_CART_ITEM,
        payload: activeItemId
    }
}


export type CarouselItemType = {
    headlineString: string,
    subString: string,
    position: "left"| "center" | "right",
    buttonTheme: "filled" | "empty",
    photoUrl: string,
    altPhoto: string,
    stringColor: "white" | "black"
}

type CartStateType = {
    fetchedItems: Array<CarouselItemType> | null,
    activeItemId: number | null
}

let CarouselReducerInitialState: CartStateType = {
    fetchedItems: null,
    activeItemId: null
}

type actionTypes = changeActiveCartItemType;

const CarouselReducer = (state = CarouselReducerInitialState, action: actionTypes): CartStateType => {
    switch (action.type) {
        case CHANGE_ACTIVE_CART_ITEM:
            return {
                ...state,
                activeItemId: action.payload
            }
        default:
            return state
    }
}

export default CarouselReducer;