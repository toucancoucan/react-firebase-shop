import React from "react";
import styles from "./BlockItem.module.scss";
import beautifyPrice from "../../../../Functions/beautifyPrice";
import ProductNameLink from "../../../Common/ProductNameLink/ProductNameLink";


export type BlockItemPropsType = {
    photoUrl: string,
    name: string,
    price: number,
    oldPrice?: number
};

let BlockItem: React.FC<BlockItemPropsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <img src={props.photoUrl} alt={props.name} className={styles.img}/>
            <div className={styles.textWrap}>
                <div className={styles.flexGrow}>
                    <ProductNameLink productName={props.name} fontSize={"0.915rem"} className={styles.link}/>
                </div>
                <div className={styles.priceWrap}>
                    {props.oldPrice && <div className={styles.oldPrice}>{beautifyPrice(props.oldPrice)}</div>}
                    {beautifyPrice(props.price)}
                </div>
            </div>
        </div>
    )
}

export default BlockItem;
