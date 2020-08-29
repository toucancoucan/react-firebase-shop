import React from "react";
import styles from "./FooterLogo.module.scss";
import {IconContext} from "react-icons";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let FooterLogo: React.FC<propsType> = (props) => {
    return (
        <div>
            <IconContext.Provider value={{className: styles.icon}}>
                {props.children}
            </IconContext.Provider>
        </div>
    )
}

export default FooterLogo;
