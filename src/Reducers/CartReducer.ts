export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export type addItemACType = {
    type: typeof ADD_ITEM
    payload: Item
}

export type deleteItemACType = {
    type: typeof DELETE_ITEM
    payload: Item
}

export let deleteItemAC = (item: Item): deleteItemACType => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

export let addItemAC = (item: Item): addItemACType => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

type Item = {}


export type CartStateType = {
    cart: Array<Item>
}

let CartReducerInitialState: CartStateType = {
    cart: []
}

type actionTypes = addItemACType & deleteItemACType;

const CartReducer = (state = CartReducerInitialState, action: actionTypes): CartStateType => {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
            }
        case ADD_ITEM:
            return {
                ...state,
            }
        default:
            return state
    }

}


export default CartReducer;