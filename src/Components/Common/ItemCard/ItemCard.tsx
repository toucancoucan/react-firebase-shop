import React from "react";
import {connect} from "react-redux";
import {itemCategoryType} from "../../../Reducers/ShopReducer";
import {addItemToCart} from "../../../Reducers/CartReducer";
import styles from "./ItemCard.module.scss"
import {IconContext} from "react-icons";
import {IoIosAdd} from "react-icons/io";
import {rootState} from "../../../Reducers/store";

type mapStateToPropsType = {
    photoUrl: string,
    name: string,
    category: itemCategoryType,
    price: number,
    id: number,
    oldPrice?: number
}
type mapDispatchToPropsType = {
    addItemToCart: (itemId: number) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;
let _ItemCard: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.photo} src={props.photoUrl} alt={props.name}/>
            <div className={styles.row}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <button className={styles.addButton}>
                    <IconContext.Provider value={{className: styles.icon}}>
                        <IoIosAdd/>
                    </IconContext.Provider>
                </button>
            </div>
            <div className={styles.category}>
                {props.category}
            </div>
            <div className={styles.oldPrice}>
                {props.oldPrice}
            </div>
            <div className={styles.price}>
                {props.price}
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState, ownProps: mapStateToPropsType): mapStateToPropsType => {
    return ownProps
};

let ItemCard = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps, {addItemToCart})(_ItemCard)
export default ItemCard;