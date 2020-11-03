import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import Firebase from "../Firebase/Firebase";

export type coordinates = { lat: number, lng: number }

export type contactInformation = {
    shopsCoordinates: Array<coordinates>,
    mapCenter: coordinates,
    address: string,
    city: string,
    district: string,
    index: string,
    number: string,
    email: string
}


const SET_RETRIEVED_CONTACT_INFORMATION = 'SET_RETRIEVED_CONTACT_INFORMATION';

export type setContactInformationType = {
    type: typeof SET_RETRIEVED_CONTACT_INFORMATION,
    payload: contactInformation
}

let setContactInformation = (item: contactInformation): setContactInformationType => {
    return {
        type: SET_RETRIEVED_CONTACT_INFORMATION,
        payload: item
    }
}

export let fetchAndSetContactInformation = (): ThunkAction<Promise<void>, rootState, any, setContactInformationType> => {
    return async (dispatch) => {
        let data = await Firebase.getContactInformation();
        dispatch(setContactInformation(data))
    }
}

export type ContactReducerType = {
    contact: contactInformation | null
}

let ContactReducerInitialState: ContactReducerType = {
    contact: null
}

type actionTypes = setContactInformationType;

const ContactReducer = (state = ContactReducerInitialState, action: actionTypes): ContactReducerType => {
    switch (action.type) {
        case SET_RETRIEVED_CONTACT_INFORMATION:
            return {
                ...state,
                contact: action.payload
            }
        default:
            return state
    }
}

export default ContactReducer;