import React from "react";
import styles from "./MobileCartButton.module.css"
import {NavLink} from "react-router-dom";
import {ConnectedToCartSize, mapStateToPropsType} from "../ConnectedToCartSize";
import combineClassNames from "../../../../Functions/сombineClassNames";

type propsType = {
    url: string,
} & mapStateToPropsType

let _MobileCartButton: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, {"hidden": !(props.cartItems > 0)})}>
            <NavLink to={props.url} className={styles.link}>
                Cart
                <sub className={styles.sub}>{props.cartItems}</sub>
            </NavLink>
        </div>
    )
}


let MobileCartButton = ConnectedToCartSize(_MobileCartButton);


export default MobileCartButton
