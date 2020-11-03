export type coordinates = { lat: number, lng: number }

export type ContactReducerType = {
    shopsCoordinates: Array<coordinates>,
    mapCenter: coordinates,
    address: string,
    city: string,
    district: string,
    index: string,
    number: string,
    email: string
}


let ContactReducerInitialState: ContactReducerType = {
    address: "", city: "", district: "", email: "", index: "", mapCenter: {lat: 0, lng: 0}, number: "",
    shopsCoordinates: []
}

type actionTypes = null;

const ContactReducer = (state = ContactReducerInitialState, action: actionTypes): ContactReducerType => {
    // switch (action.type) {
    //     case CONST_1:
    //         return {
    //             ...state,
    //         }
    //     case CONST_2:
    //         return {
    //             ...state,
    //         }
    //     default:
    //         return state
    // }

}

export default ContactReducer;