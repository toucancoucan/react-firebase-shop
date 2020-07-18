import React from "react";
import {rootState} from "../../../Reducers/store";
import {connect} from "react-redux";

export type mapStateToPropsType = {
    cartItems: number
}

export let ConnectedToCartSize = (Component: React.FC<any>) =>{
    const mapStateToProps = (state: rootState): mapStateToPropsType => {
        return {
            cartItems: state.CartReducer.cart.length
        }
    };
    return connect<mapStateToPropsType, any, any, any>(mapStateToProps)(Component)
}
