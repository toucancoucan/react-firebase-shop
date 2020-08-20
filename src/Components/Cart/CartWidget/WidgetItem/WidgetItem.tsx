import React from "react";
import styles from "./WidgetItem.module.scss"
import beautifyPrice from "../../../../Utility/beautifyPrice";


export type mapStateToPropsType = {
    photoUrl: string,
    name: string,
    price: number,
    quantity: number
};


type propsType = mapStateToPropsType;

let WidgetItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.row}>
            <img className={styles.image} src={props.photoUrl} alt={props.name}/>
            <div className={styles.column}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div>
                    <span className={styles.subText}>
                        QUANTITY: {props.quantity} x
                    </span>
                    <span>
                        {beautifyPrice(props.price)}
                    </span>
                </div>
            </div>
            <div className={styles.price}>
                {beautifyPrice(props.price * props.quantity)}
            </div>
        </div>
    )
}

export default WidgetItem;