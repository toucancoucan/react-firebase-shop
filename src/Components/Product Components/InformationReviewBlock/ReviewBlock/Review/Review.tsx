import React from "react";
import styles from "./Review.module.scss";
import {reviewType} from "../../../../../Reducers/ShopReducer";
import RatingBlock from "../../../../Common/RatingBlock/RatingBlock";

type mapStateToProps = reviewType

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Review: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <RatingBlock rating={props.rating} quantityOfReviews={1} doNotShowQuantity/>
            </div>
            <div className={styles.mail}>
                {props.email}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}

export default Review;
