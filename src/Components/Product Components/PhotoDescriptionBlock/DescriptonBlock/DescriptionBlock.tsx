import React from "react";
import styles from "./DescriptionBlock.module.scss";
import combineClassNames from "../../../../Functions/сombineClassNames";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import {itemCategoryType} from "../../../../Reducers/ShopReducer";
import {countItemRating} from "../../../../Functions/countItemRating";
import RatingBlock from "./RatingBlock/RatingBlock";
import beautifyPrice from "../../../../Functions/beautifyPrice";
import AddToCartBlock from "./AddToCartBlock/AddToCartBlock";

type ownProps = {
    className?: string,
}

type mapStateToProps = {
    productName: string,
    category: itemCategoryType,
    rating: number,
    reviewNumber: number,
    description: string,
    price: number,
    oldPrice?: number,
    id: number,
} & ownProps;
type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _DescriptionBlock: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, props.className)}>
            <div className={styles.name}>
                {props.productName}
            </div>
            <div className={styles.category}>
                {props.category}
            </div>
            <RatingBlock rating={props.rating} quantityOfReviews={props.reviewNumber}/>
            <div className={styles.description}>
                {props.description}
            </div>
            <div className={styles.priceBlock}>
                <div className={styles.price}>
                    {beautifyPrice(props.price)}
                </div>
                <div className={styles.oldPrice}>
                    {beautifyPrice(props.oldPrice)}
                </div>
            </div>
            <AddToCartBlock/>
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState, ownProps: ownProps): mapStateToProps => {
    const item = state.ProductReducer.item;
    return {
        category: item.category,
        className: ownProps.className,
        description: item.description,
        id: item.id,
        oldPrice: item.oldPrice,
        price: item.price,
        productName: item.name,
        rating: countItemRating(item),
        reviewNumber: item.reviews.length
    }
};


let DescriptionBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_DescriptionBlock)

export default DescriptionBlock;
