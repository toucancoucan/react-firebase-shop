import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../../../../../Constants/Routes";
import styles from "./CategoriesLink.module.scss"
import {itemCategoryType} from "../../../../../Reducers/ShopReducer";

type mapStateToProps = {
    category: itemCategoryType | "ALL",
    quantity: number
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let CategoriesLink: React.FC<propsType> = (props) => {
    return (
        <NavLink activeClassName={styles.active} to={routes.category(props.category)} className={styles.link}>
            <div className={styles.activeLine}/>
            <span className={styles.underline}>{props.category}</span>
            <span className={styles.sub}>({props.quantity})</span>
        </NavLink>
    )
}

export default CategoriesLink;
