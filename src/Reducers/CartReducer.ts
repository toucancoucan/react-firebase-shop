const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


export type addItemToCartType = {
    type: typeof ADD_ITEM
    payload: number
}

export type deleteCartItemType = {
    type: typeof DELETE_ITEM
    payload: number
}

export let deleteCartItem = (itemId: number): deleteCartItemType => {
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

type actionTypes = addItemToCartType & deleteCartItemType;

const CartReducer = (state = CartReducerInitialState, action: actionTypes): CartStateType => {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                cart: new Map(deleteItemFromMap(state.cart, action.payload))
            }
        case ADD_ITEM:
            return {
                ...state,
                cart: new Map(addItemToMap(state.cart, action.payload))
            }
        default:
            return state
    }

}

let addItemToMap = (map: Map<number, number>, value: number): Map<number, number> => {
    if (map.has(value)) {
        // @ts-ignore
        return map.set(value, map.get(value) + 1)
    }
    return map.set(value, 1)
}

let deleteItemFromMap = (map: Map<number, number>, value: number): Map<number, number> => {
    map.delete(value);
    return map;
}


export default CartReducer;