const SET_USER = 'SET_USER';

export type setUserType = {
    type: typeof SET_USER
    payload: User
}

export let setUser = (user: User): setUserType => {
    return {
        type: SET_USER,
        payload: user
    }
}

type ShippingInformation = {
    firstName: string
    lastName: string
    companyName: string | null
    country: string
    streetAndHouse: string | null
    city: string
    postcode: number
    phone: number
}

export type User = {
    shippingInformation: ShippingInformation
    email: string
    password: string
}

export type UserReducerStateType = {
    user: User | null
}

let UserReducerInitialState: UserReducerStateType = {
    user: null
}

type actionTypes = setUserType;

const UserReducer = (state = UserReducerInitialState, action: actionTypes): UserReducerStateType => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }

}


export default UserReducer;