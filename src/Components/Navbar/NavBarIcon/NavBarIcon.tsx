import React from "react";
import {IoIosCart, IoIosMenu, IoIosSearch} from "react-icons/io";
import {IconContext} from "react-icons";
import styles from "./NavBarIcon.module.scss"

export type mapStateToPropsType = {
    type: "menu" | "search" | "cart",
}

export type mapDispatchToPropsType = {
    clickAction: (active: any) => any;
}
export type propsType = mapStateToPropsType & mapDispatchToPropsType;

let NavBarIcon: React.FC<propsType> = (props) => {
    let contentIcon: any;
    switch (props.type) {
        case "menu":
            contentIcon = <IoIosMenu/>
            break;
        case "search":
            contentIcon = <IoIosSearch/>
            break;
        case "cart":
            contentIcon = <IoIosCart/>
            break;
    }
    return (
        <button className={styles.wrap} onClick={props.clickAction}>
            <IconContext.Provider value={{className: styles.icon}}>
                {contentIcon}
            </IconContext.Provider>
        </button>

    )
}

export default NavBarIcon;