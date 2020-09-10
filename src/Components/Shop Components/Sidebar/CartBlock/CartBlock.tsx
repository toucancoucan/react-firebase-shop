import React from "react";
import BlockWithHeader from "../../../Common/BlockWithHeader/BlockWithHeader";
import {ConnectedToCart, ConnectedToCartPropsType} from "../../../Cart/ConnectedToCart";
import {shopItemType} from "../../../../Reducers/ShopReducer";
import getItemById from "../../../../Functions/getItemById";
import CartBlockItem from "./CartBlockItem/CartBlockItem";
import styles from "./CartBlock.module.scss"
import beautifyPrice from "../../../../Functions/beautifyPrice";
import LinkButton from "../../../Common/LinkButton/LinkButton";
import routes from "../../../../Constants/Routes";


let _CartBlock: React.FC<ConnectedToCartPropsType> = (props) => {

    let result: Array<JSX.Element> = [];
    let sum: number = 0;
    for (let [key, value] of props.cartMap) {
        let item: shopItemType = getItemById(key, props.items);
        let itemSum = item.price * value;
        sum += itemSum;
        result.push(<CartBlockItem key={item.id} id={item.id} photoUrl={item.photoUrl} name={item.name}
                                   price={item.price}
                                   quantity={value}/>)
    }

    return (
        <BlockWithHeader header={"CART"}>
            {result.length > 0 ? <div>
                    {result}
                    <div className={styles.footer}>
                        <div className={styles.row}>
                            <div>
                                SUBTOTAL:
                            </div>
                            <div className={styles.price}>
                                {beautifyPrice(sum)}
                            </div>
                        </div>
                        <div className={styles.buttonWrap}>
                            <LinkButton url={routes.cart} text={"VIEW CART"} color={"dark"} className={styles.button}/>
                            <LinkButton url={routes.checkout} text={"CHECKOUT"} color={"dark"} className={styles.button}/>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.noProducts}>
                    No products in the cart.
                </div>
            }
        </BlockWithHeader>
    )
}

let CartBlock = ConnectedToCart(_CartBlock);

export default CartBlock;
