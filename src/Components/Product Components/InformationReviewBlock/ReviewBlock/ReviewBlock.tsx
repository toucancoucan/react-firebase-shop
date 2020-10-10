import React from "react";
import styles from "./ReviewBlock.module.scss";
import {reviewType} from "../../../../Reducers/ShopReducer";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import Review from "./Review/Review";
import AddReviewBlock from "./AddReviewBlock/AddReviewBlock";


type mapStateToProps = {
    reviews: Array<reviewType>,
    productName: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _ReviewBlock: React.FC<propsType> = (props) => {
    let length = props.reviews.length;
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {length} REVIEW{length !== 1 ? "S" : ""} FOR {props.productName}
            </div>
            <div>
                {props.reviews.map((e, i) => {
                    return (
                        <Review {...e} key={i}/>
                    )
                })}
            </div>
            <AddReviewBlock/>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        reviews: state.ProductReducer.item.reviews,
        productName: state.ProductReducer.item.name
    }
};


let ReviewBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_ReviewBlock)

export default ReviewBlock;
