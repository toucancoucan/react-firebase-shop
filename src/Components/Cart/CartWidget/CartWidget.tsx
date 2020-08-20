import React from "react";
import {shopItemType} from "../../../Reducers/ShopReducer";
import {ConnectedToCart} from "../ConnectedToCart";
import styles from "./CartWidget.module.scss"
import getItemById from "../../../Utility/getItemById";
import WidgetItem from "./WidgetItem/WidgetItem";

type mapStateToPropsType = {
    cartMap: Map<number, number>,
    items: Array<shopItemType>
}

type propsType = mapStateToPropsType;

let _CartWidget: React.FC<propsType> = (props) => {

    let result = [];
    for (let [key, value] of props.cartMap) {
        let item: shopItemType = getItemById(key, props.items);
        result.push(<WidgetItem photoUrl={item.photoUrl} name={item.name} price={item.price} quantity={value}/>)
    }


    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.content}>
                    {result}
                </div>
                <div className={styles.footer}>
                    {result.length > 0 ? <div>
                            <button>View cart</button>
                            <button>Checkout</button>
                        </div>
                        :
                        <div className={styles.footer}>
                            NO PRODUCTS IN THE CART
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

let CartWidget = ConnectedToCart(_CartWidget);

export default CartWidget;