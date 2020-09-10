import React from "react";
import styles from "./CartBlockItem.module.scss"
import beautifyPrice from "../../../../../Functions/beautifyPrice";
import ProductNameLink from "../../../../Common/ProductNameLink/ProductNameLink";
import {AiFillCloseCircle} from "react-icons/all";
import {deleteCartItem} from "../../../../../Reducers/CartReducer";
import {rootState} from "../../../../../Reducers/store";
import {connect} from "react-redux";

type mapStateToProps = {
    name: string,
    photoUrl: string,
    price: number,
    quantity: number,
    id: number
}

type mapDispatchToProps = {
    deleteCartItem: (itemId: number) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _CartBlockItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <img className={styles.photo} src={props.photoUrl} alt={props.photoUrl}/>
            <div className={styles.textContainer}>
                <ProductNameLink productName={props.name} className={styles.name}/>
                <div className={styles.price}>
                    {props.quantity} x {beautifyPrice(props.price)}
                </div>
            </div>
            <button className={styles.icon} onClick={() => props.deleteCartItem(props.id)}>
                <AiFillCloseCircle className={styles.icon}/>
            </button>
        </div>
    )
}

const mapStateToProps = (state: rootState, ownProps: mapStateToProps): mapStateToProps => {
    return ownProps;
};


let CartBlockItem = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {deleteCartItem})(_CartBlockItem)

export default CartBlockItem;
