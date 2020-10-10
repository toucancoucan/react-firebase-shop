import React from "react";
import styles from "./RatingRadio.module.scss";
import {IoIosStar} from "react-icons/all";
import CONSTANTS from "../../../../../../Constants/CONSTANTS";

type mapStateToProps = {
    register: any
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let RatingRadio: React.FC<propsType> = ({register}) => {
    let content: Array<JSX.Element> = [];
    for (let i = 1; i <= CONSTANTS.PRODUCT_SCREEN.MAX_ITEM_RATING; i++) {
        content.push(createLabelWithIcon(i, register));
    }
    return (
        <div className={styles.rating}>
            {content}
        </div>
    )
}

let createLabelWithIcon = (quantity: number, ref: any): JSX.Element => {
    let starsContent: Array<JSX.Element> = [];
    for (let i = 0; i < quantity; i++) {
        starsContent.push(<span key={i} className={styles.icon}><IoIosStar/></span>);
    }
    return (
        <label key={quantity}>
            <input type="radio" name="rating" value={quantity} ref={ref}/>
            {starsContent}
        </label>
    )
}

export default RatingRadio;
