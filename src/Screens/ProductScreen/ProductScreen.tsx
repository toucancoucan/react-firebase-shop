import React from "react";
import styles from "./ProductScreen.module.scss";
import {itemCategoryType, shopItemType} from "../../Reducers/ShopReducer";
import ProductNavigation from "../../Components/Product Components/ProductNavigation/ProductNavigation";
import PhotoDescriptionBlock from "../../Components/Product Components/PhotoDescriptionBlock/PhotoDescriptionBlock";
import {rootState} from "../../Reducers/store";
import {connect} from "react-redux";
import ItemAddedSuccessBlock from "../../Components/Common/ActionBlock/ItemAddedSuccessBlock";
import InformationReviewBlock from "../../Components/Product Components/InformationReviewBlock/InformationReviewBlock";
import {_ItemSpinner} from "../../Components/Home Components/ItemSpinner/ItemSpinner";
import {createSelector} from "reselect";
import HeaderSubHeader from "../../Components/Common/HeaderSubHeader/HeaderSubHeader";

type mapStateToProps = {
    item: shopItemType,
    showSuccessBlock: boolean,
    similarItems: Array<shopItemType>
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _ProductScreen: React.FC<propsType> = ({item, showSuccessBlock, similarItems}) => {
    return (
        <div className={styles.container}>
            <ProductNavigation name={item.name} category={item.category}/>
            {showSuccessBlock && <ItemAddedSuccessBlock productName={item.name}/>}
            <PhotoDescriptionBlock/>
            <InformationReviewBlock/>
            <div className={styles.header}>
                <HeaderSubHeader mainText={"RELATED PRODUCTS"} subText={""}/>
            </div>
            <div className={styles.similar}>
                <_ItemSpinner items={similarItems}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        item: state.ProductReducer.item,
        showSuccessBlock: state.ProductReducer.showSuccessBlock,
        similarItems: getSimilarItems(state)
    }
};
let getItems = (state: rootState): Array<shopItemType> => state.ShopReducer.items;
let getMainCategory = (state: rootState): itemCategoryType => state.ProductReducer.item.category;
let getMainId = (state: rootState): number => state.ProductReducer.item.id;


let getSimilarItems = createSelector([getItems, getMainCategory, getMainId],
    (items: Array<shopItemType>, mainCategory: "ACCESSORIES" | "MEN" | "SHOES" | "WOMEN", id: number): Array<shopItemType> =>
        items.filter((e) => e.category === mainCategory && e.id !== id));

let ProductScreen = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_ProductScreen)

export default ProductScreen;
