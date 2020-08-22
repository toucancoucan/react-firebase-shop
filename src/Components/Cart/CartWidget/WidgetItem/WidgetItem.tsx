import React from "react";
import styles from "./WidgetItem.module.scss"
import beautifyPrice from "../../../../Utility/beautifyPrice";
import ProductNameLink from "../../../Common/ProductNameLink/ProductNameLink";


export type mapStateToPropsType = {
    photoUrl: string,
    name: string,
    price: number,
    quantity: number,
    priceXquantity: number,
    closeCart: () => void
};


type propsType = mapStateToPropsType;

let WidgetItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.row}>
            <img className={styles.image} src={props.photoUrl} alt={props.name}/>
            <div className={styles.column}>
                <ProductNameLink onClick={props.closeCart} productName={props.name} fontSize={" 0.95rem"}/>
                <div className={styles.sub}>
                    <span className={styles.subText}>
                        QUANTITY: {props.quantity} x
                    </span>
                    <span>
                        {" " + beautifyPrice(props.price)}
                    </span>
                </div>
            </div>
            <div className={styles.price}>
                {beautifyPrice(props.priceXquantity)}
            </div>
        </div>
    )
}

export default WidgetItem;