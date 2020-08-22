import React, {useEffect, useRef} from "react";
import {shopItemType} from "../../../Reducers/ShopReducer";
import {ConnectedToCart, ConnectedToCartPropsType} from "../ConnectedToCart";
import styles from "./CartWidget.module.scss"
import getItemById from "../../../Utility/getItemById";
import WidgetItem from "./WidgetItem/WidgetItem";
import LinkButton from "./LinkButton/LinkButton";
import routes from "../../../Utility/Routes";
import beautifyPrice from "../../../Utility/beautifyPrice";
import {connect} from "react-redux";
import {closeCart} from "../../../Reducers/NavBarReducer";

type mapDispatchToProps = {
    closeCart: () => void
}

type propsType = ConnectedToCartPropsType & mapDispatchToProps;


let _CartWidget: React.FC<propsType> = (props) => {

    let result: Array<JSX.Element> = [];
    let sum: number = 0;
    for (let [key, value] of props.cartMap) {
        let item: shopItemType = getItemById(key, props.items);
        let itemSum = item.price * value;
        sum += itemSum;
        result.push(<WidgetItem closeCart={props.closeCart} key={item.id} photoUrl={item.photoUrl} name={item.name}
                                price={item.price}
                                quantity={value} priceXquantity={itemSum}/>)
    }


    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: any) => {
            if (node.current?.contains(e.target))
                return;
            props.closeCart();
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [props]);


    return (
        <div className={styles.wrapper} ref={node}>
            <div>
                <div className={styles.content}>
                    {result}
                </div>
                <div className={styles.footer}>
                    {result.length > 0 ? <div>
                            <div className={styles.buttonWrap}>
                                <LinkButton url={routes.cart} text={"View Cart"} color={"violet"}
                                            onClick={props.closeCart}/>
                                <LinkButton url={routes.checkout} text={"Checkout"} color={"dark"}
                                            onClick={props.closeCart}/>
                            </div>
                            <div className={styles.subtotal}>
                                SUBTOTAL: <span className={styles.price}>{beautifyPrice(sum)}</span>
                            </div>
                        </div>
                        :
                        <div className={styles.sub}>
                            NO PRODUCTS IN THE CART.
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
// const mapStateToProps = (state: rootState, ownProps: mapDispatchToProps): mapStateToPropsType => {
//     return ownProps
// };

let CartWidgetWrapper = connect<null, mapDispatchToProps>(null, {closeCart})(_CartWidget)

let CartWidget = ConnectedToCart(CartWidgetWrapper);


export default CartWidget;