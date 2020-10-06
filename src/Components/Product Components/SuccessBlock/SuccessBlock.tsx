import React from "react";
import styles from "./SuccessBlock.module.scss"
import LinkButton from "../../Common/LinkButton/LinkButton";
import routes from "../../../Constants/Routes";

type mapStateToProps = {
    productName: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let SuccessBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    "{props.productName}" has been added to your cart.
                </div>
                <LinkButton url={routes.cart} text={"View cart"} color={"dark"}/>
            </div>
        </div>
    )
}

export default SuccessBlock;
