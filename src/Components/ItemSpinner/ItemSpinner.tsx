import React from "react";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";
import {shopItemType} from "../../Reducers/ShopReducer";
import CONSTANTS from "../../Utility/CONSTANTS";
import styles from "./ItemSpinner.module.scss"
import ItemCard from "../Common/ItemCard/ItemCard";

type mapStateToPropsType = {
    items: Array<shopItemType>
}
type mapDispatchToPropsType = {}

type propsType = mapStateToPropsType & mapDispatchToPropsType;

let _ItemSpinner: React.FC<propsType> = (props) => {


    let insertedShopItems = getRandomItems(props.items).map((value, index) => {
        return <ItemCard category={value.category} name={value.name}
                         oldPrice={value.oldPrice} photoUrl={value.photoUrl}
                         price={value.price} id={value.id}
                         key={index}/>
    })
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>{insertedShopItems}</div>
        </div>
    )
}

let getRandomItems = (items: Array<shopItemType>) => items.sort(() => 0.5 - Math.random()).slice(0, CONSTANTS.ITEMS_SPINNER.ITEMS_QUANTITY);


const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        items: state.ShopReducer.items
    }
};

let ItemSpinner = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps, {},)(_ItemSpinner);

export default ItemSpinner;