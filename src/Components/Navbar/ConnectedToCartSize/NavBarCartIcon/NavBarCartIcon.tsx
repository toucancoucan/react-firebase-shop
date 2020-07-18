import React from "react";
import NavBarIcon from "../../NavBarIcon/NavBarIcon";
import styles from "./NavBarCartIcon.module.scss";
import combineClassNames from "../../../../Utility/сombineClassNames";
import {ConnectedToCartSize,mapStateToPropsType} from "../ConnectedToCartSize";



export type mapDispatchToPropsType = {
    clickAction: (active: any) => any;
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;

let _NavBarCartIcon: React.FC<propsType> = (props) => {
    return (
        <div className={styles.badgeWrap}>
            <span className={combineClassNames(styles.badge, {"hidden":!(props.cartItems > 0)})}>{props.cartItems}</span>
            <NavBarIcon type={"cart"} clickAction={props.clickAction}/>
        </div>
    )

}

let NavBarCartIcon = ConnectedToCartSize(_NavBarCartIcon)

export default NavBarCartIcon;