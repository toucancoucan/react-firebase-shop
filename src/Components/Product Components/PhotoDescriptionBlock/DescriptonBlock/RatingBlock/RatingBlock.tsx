import React from "react";
import styles from "./RatingBlock.module.scss";
import {IoIosStar} from "react-icons/all";
import {IconContext} from "react-icons";
import CONSTANTS from "../../../../../Constants/CONSTANTS";
import Tooltip from "../../../../Common/Tooltip/Tooltip";

type mapStateToProps = {
    rating: number,
    quantityOfReviews: number
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let RatingBlock: React.FC<propsType> = (props) => {
    let ratingContent: Array<JSX.Element> = [];
    for (let i = 0; i < CONSTANTS.PRODUCT_SCREEN.MAX_ITEM_RATING; i++) {
        ratingContent.push(i < props.rating ? <IoIosStar className={styles.yellowIcon}/> : <IoIosStar/>);
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.tooltipWrap}>
                <IconContext.Provider value={{className: styles.starIcon}}>
                    {ratingContent}
                </IconContext.Provider>
                <Tooltip className={styles.tooltip}
                         text={`${props.rating.toFixed(2)} OUT OF ${CONSTANTS.PRODUCT_SCREEN.MAX_ITEM_RATING}`}/>
            </div>
            <div
                className={styles.text}>({props.quantityOfReviews} customer {props.quantityOfReviews === 1 ? "review" : "reviews"})
            </div>
        </div>
    )
}

export default RatingBlock;
