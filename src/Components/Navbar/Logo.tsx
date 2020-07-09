import React from "react";
import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";

export type mapStateToPropsType = {
    url: string,
}
export type propsType = mapStateToPropsType;

let Logo: React.FC<propsType> = (props) => {
    return (
        <Link to={props.url} className={styles.logo}>NO LABEL</Link>
    )
}

export default Logo;