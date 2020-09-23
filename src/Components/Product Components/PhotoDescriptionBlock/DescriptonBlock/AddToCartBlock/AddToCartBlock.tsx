import React, {useState} from "react";
import styles from "./AddToCartBlock.module.scss";
import {IoMdAdd} from "react-icons/all";
import {rootState} from "../../../../../Reducers/store";
import {connect} from "react-redux";
import {addItemToCart} from "../../../../../Reducers/CartReducer";

type mapStateToProps = {
    id: number
}

type mapDispatchToProps = {
    addItemToCart: (id: number, quantity?: number) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _AddToCartBlock: React.FC<propsType> = (props) => {
    let [itemCounter, setItemCounter] = useState<number>(1);

    let setCounter = (i: number): void => {
        if (itemCounter + i > 0) {
            setItemCounter(itemCounter + i);
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.firstBlock}>
                <button onClick={() => setCounter(-1)}> -</button>
                <div>{itemCounter}</div>
                <button onClick={() => setCounter(1)}> +</button>
            </div>
            <div onClick={() => props.addItemToCart(props.id, itemCounter)} className={styles.secondBlock}>
                <IoMdAdd className={styles.icon}/> ADD TO CART
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        id: state.ProductReducer.item.id
    }
};


let AddToCartBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {addItemToCart})(_AddToCartBlock)

export default AddToCartBlock;
