import React from "react";
import styles from "./InformationReviewBlock.module.scss";
import {connect} from "react-redux";
import {rootState} from "../../../Reducers/store";
import {changeIsFirstTabOpened} from "../../../Reducers/ProductReducer";
import InformationBlock from "./InformationBlock/InformationBlock";
import ReviewBlock from "./ReviewBlock/ReviewBlock";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    isFirstTabOpened: boolean,
    reviewsQuantity: number,
}

type mapDispatchToProps = {
    changeIsFirstTabOpened: (item: boolean) => void,
}

type propsType = mapStateToProps & mapDispatchToProps;

let _InformationReviewBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <button onClick={() => props.changeIsFirstTabOpened(true)}
                        className={combineClassNames(styles.button, props.isFirstTabOpened ? styles.active : '')}>Additional
                    information
                </button>
                <button onClick={() => props.changeIsFirstTabOpened(false)}
                        className={combineClassNames(styles.button, !props.isFirstTabOpened ? styles.active : '')}>Reviews
                    ({props.reviewsQuantity})
                </button>
                <button className={combineClassNames(styles.button, styles.dummy)}/>
            </div>
            {props.isFirstTabOpened ? <InformationBlock/> : <ReviewBlock/>}
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        isFirstTabOpened: state.ProductReducer.isFirstTabOpened,
        reviewsQuantity: state.ProductReducer.item.reviews.length,
    }
};


let InformationReviewBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {changeIsFirstTabOpened})(_InformationReviewBlock)

export default InformationReviewBlock;
