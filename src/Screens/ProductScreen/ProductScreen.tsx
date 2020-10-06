import React from "react";
import styles from "./ProductScreen.module.scss";
import {shopItemType} from "../../Reducers/ShopReducer";
import ProductNavigation from "../../Components/Product Components/ProductNavigation/ProductNavigation";
import PhotoDescriptionBlock from "../../Components/Product Components/PhotoDescriptionBlock/PhotoDescriptionBlock";
import {rootState} from "../../Reducers/store";
import {connect} from "react-redux";
import SuccessBlock from "../../Components/Product Components/SuccessBlock/SuccessBlock";
import InformationReviewBlock from "../../Components/Product Components/InformationReviewBlock/InformationReviewBlock";

type mapStateToProps = {
    item: shopItemType,
    showSuccessBlock: boolean,
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _ProductScreen: React.FC<propsType> = ({item, showSuccessBlock}) => {
    return (
        <div className={styles.container}>
            <ProductNavigation name={item.name} category={item.category}/>
            {showSuccessBlock && <SuccessBlock productName={item.name}/>}
            <PhotoDescriptionBlock/>
            <InformationReviewBlock/>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        item: state.ProductReducer.item,
        showSuccessBlock: state.ProductReducer.showSuccessBlock
    }
};


let ProductScreen = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_ProductScreen)

export default ProductScreen;
