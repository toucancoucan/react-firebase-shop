import React, {useState} from "react";
import {connect} from "react-redux";
import {itemCategoryType} from "../../../Reducers/ShopReducer";
import {addItemToCart} from "../../../Reducers/CartReducer";
import styles from "./ItemCard.module.scss"
import {IconContext} from "react-icons";
import {IoIosAdd, IoIosCheckmark} from "react-icons/io";
import {rootState} from "../../../Reducers/store";
import {Link} from "react-router-dom";
import routes from "../../../Constants/Routes";
import beautifyPrice from "../../../Functions/beautifyPrice";
import combineClassNames from "../../../Functions/сombineClassNames";
import ProductNameLink from "../ProductNameLink/ProductNameLink";

type mapStateToPropsType = {
    photoUrl: string,
    name: string,
    category: itemCategoryType,
    price: number,
    id: number,
    oldPrice?: number,
    key?: number | string,
    saleTag?: boolean
}
type mapDispatchToPropsType = {
    addItemToCart: (itemId: number) => void,
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;
let _ItemCard: React.FC<propsType> = (props) => {

    const [isAdded, setIsAdded] = useState<boolean>(false);

    return (
        <div className={styles.wrapper} key={props.key}>
            <div className={combineClassNames(styles.circle, {"hidden": !props.saleTag})}>
                SALE
            </div>
            <img className={styles.photo} src={props.photoUrl} alt={props.name}/>
            <div className={styles.nameAddRow}>
                <ProductNameLink productName={props.name} fontSize={"1.1rem"}/>
                <button onClick={() => {
                    props.addItemToCart(props.id);
                    setIsAdded(true)
                }} className={styles.addButton}>
                    <IconContext.Provider value={{className: styles.icon}}>
                        {isAdded ?
                            <IoIosCheckmark className={styles.addedIcon} onAnimationEnd={() => {
                                setIsAdded(false)
                            }}/>
                            :
                            <IoIosAdd/>
                        }
                    </IconContext.Provider>
                    {!isAdded ?
                        <span className={styles.tooltip}>Add to cart</span>
                        :
                        <span
                            className={combineClassNames(styles.tooltip, styles.greenTooltip)}>Product added to cart</span>
                    }
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
                        {beautifyPrice(props.oldPrice)}
                    </div>
                })()}
                <div className={styles.price}>
                    {beautifyPrice(props.price)}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state: rootState, ownProps: mapStateToPropsType): mapStateToPropsType => {
    return ownProps
};

let ItemCard = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps, {addItemToCart})(_ItemCard)
export default ItemCard;