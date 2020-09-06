import React from "react";
import styles from "./SaleBlock.module.scss";
import HeaderSubHeader from "../../Common/HeaderSubHeader/HeaderSubHeader";
import {getMonth} from "../../../Functions/getDateString";
import LinkButton from "../../Common/LinkButton/LinkButton";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let SaleBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <HeaderSubHeader mainText={`${getMonth()} SALE`} subText={`FREE SHIPPING FOR INTERNATIONAL ORDERS`}
                             drawLine={false}/>
            <LinkButton url={"/shop"} text={"Shop Now"} color={"dark"}/>
        </div>
    )
}

export default SaleBlock;
