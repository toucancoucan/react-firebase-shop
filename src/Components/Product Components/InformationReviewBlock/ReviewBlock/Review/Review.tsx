import React from "react";
import styles from "./Review.module.scss";
import {reviewType} from "../../../../../Reducers/ShopReducer";

type mapStateToProps = reviewType

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Review: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>

        </div>
    )
}

export default Review;
