const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


export type addItemToCartType = {
    type: typeof ADD_ITEM
    payload: number
}

export type deleteItemType = {
    type: typeof DELETE_ITEM
    payload: number
}

export let deleteItem = (itemId: number): deleteItemType => {
    return {
        type: DELETE_ITEM,
        payload: itemId
    }
}

export let addItemToCart = (itemId: number): addItemToCartType => {
    return {
        type: ADD_ITEM,
        payload: itemId
    }
}


export type CartStateType = {
    cart: Map<number, number>
}

let CartReducerInitialState: CartStateType = {
    cart: new Map<number, number>(),
}

type actionTypes = addItemToCartType & deleteItemType;

const CartReducer = (state = CartReducerInitialState, action: actionTypes): CartStateType => {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                // cart: state.cart.filter(item => item !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                cart: modifyMap(state.cart, action.payload)
            }
        default:
            return state
    }

}

let modifyMap = (map: Map<number, number>, value: number): Map<number, number> => {
    if (map.has(value)) {
        // @ts-ignore
        return map.set(value, map.get(value) + 1)
    }
    return map.set(value, 1)
}


export default CartReducer;