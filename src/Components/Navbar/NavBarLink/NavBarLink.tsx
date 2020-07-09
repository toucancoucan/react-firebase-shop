import React from "react";
import styles from "./NavBarLink.module.scss"
import {NavLink} from "react-router-dom";

export type mapStateToPropsType = {
    url: string,
    title: string,
}
export type propsType = mapStateToPropsType;


let NavBarLink: React.FC<propsType> = (props) => {
    return (
        <NavLink activeClassName={styles.selected}to={props.url} className={styles.link}>
            <div className={styles.activeLink}>{
                props.title}
            </div>
        </NavLink>
    )
}


export default NavBarLink;