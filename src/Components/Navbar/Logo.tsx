import React from "react";
import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";
import combineClassNames from "../../Functions/сombineClassNames";

export type mapStateToPropsType = {
    url: string,
    isPaddingCollapsed: boolean
}
export type propsType = mapStateToPropsType;


let Logo: React.FC<propsType> = (props) => {

    return (
        <Link to={props.url}
              className={combineClassNames(styles.logo, `${!props.isPaddingCollapsed ? styles.NavBarPadding : styles.NavBarPaddingCollapsed}`)}>
            NO LABEL
        </Link>
    )
}

export default Logo;