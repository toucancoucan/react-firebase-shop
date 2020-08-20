import React from "react";
import {rootState} from "../../../Reducers/store";
import {connect} from "react-redux";

export type mapStateToPropsType = {
    cartItems: number
}

export let ConnectedToCartSize = (Component: React.FC<any>) => {
    const mapStateToProps = (state: rootState): mapStateToPropsType => {
        return {
            cartItems: (() => {
                let res: number = 0;
                for (let val of state.CartReducer.cart.values()) {
                    res += val;
                }
                return res;
            })()
        }
    };
    return connect<mapStateToPropsType, any, any, any>(mapStateToProps)(Component)
}
