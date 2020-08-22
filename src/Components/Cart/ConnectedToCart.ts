import React from "react";
import {rootState} from "../../Reducers/store";
import {connect} from "react-redux";
import {shopItemType} from "../../Reducers/ShopReducer";

export type ConnectedToCartPropsType = {
    cartMap: Map<number, number>,
    items: Array<shopItemType>
}

export let ConnectedToCart = (Component: React.FC<ConnectedToCartPropsType>) => {
    const mapStateToProps = (state: rootState): ConnectedToCartPropsType => {
        return {
            cartMap: state.CartReducer.cart,
            items: state.ShopReducer.items
        }
    };
    return connect<ConnectedToCartPropsType, any, any, any>(mapStateToProps)(Component)
}