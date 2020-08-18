import React from "react";
import {connect} from "react-redux";
import {itemCategoryType} from "../../../Reducers/ShopReducer";
import {addItemToCart} from "../../../Reducers/CartReducer";
import styles from "./ItemCard.module.scss"
import {IconContext} from "react-icons";
import {IoIosAdd} from "react-icons/io";
import {rootState} from "../../../Reducers/store";
import {Link} from "react-router-dom";
import routes from "../../../Utility/Routes";

type mapStateToPropsType = {
    photoUrl: string,
    name: string,
    category: itemCategoryType,
    price: number,
    id: number,
    oldPrice?: number,
    key?: number | string
}
type mapDispatchToPropsType = {
    addItemToCart: (itemId: number) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;
let _ItemCard: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper} key={props.key}>
            <img className={styles.photo} src={props.photoUrl} alt={props.name}/>
            <div className={styles.nameAddRow}>
                <Link to={routes.product(props.name)}>
                    <div className={styles.name}>
                        {props.name}
                    </div>
                </Link>
                <button className={styles.addButton}>
                    <IconContext.Provider value={{className: styles.icon}}>
                        <IoIosAdd/>
                    </IconContext.Provider>
                </button>
            </div>
            <Link to={routes.product(props.category)}>
                <div className={styles.category}>
                    {props.category}
                </div>
            </Link>
            <div className={styles.priceRow}>
                {(() => {
                    if (props.oldPrice) return <div className={styles.oldPrice}>
                        {beautifyPrice(props.oldPrice)}$
                    </div>
                })()}
                <div className={styles.price}>
                    {beautifyPrice(props.price)}$
                </div>
            </div>
        </div>
    )
}

let beautifyPrice = (n: number | undefined): string | number => {
    if (n === undefined) return "";
    if (n === Math.round(n)) return `${n}.00`;
    return n;
}


const mapStateToProps = (state: rootState, ownProps: mapStateToPropsType): mapStateToPropsType => {
    return ownProps
};

let ItemCard = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps, {addItemToCart})(_ItemCard)
export default ItemCard;