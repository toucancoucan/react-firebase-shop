import React from "react";
import styles from "./ProductScreen.module.scss";
import {shopItemType} from "../../Reducers/ShopReducer";
import ProductNavigation from "../../Components/Product Components/ProductNavigation/ProductNavigation";
import PhotoDescriptionBlock from "../../Components/Product Components/PhotoDescriptionBlock/PhotoDescriptionBlock";
import {rootState} from "../../Reducers/store";
import {connect} from "react-redux";

type mapStateToProps = {
    item: shopItemType
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _ProductScreen: React.FC<propsType> = ({item}) => {
    return (
        <div className={styles.container}>
            <ProductNavigation name={item.name} category={item.category}/>
            <PhotoDescriptionBlock photoUrlArray={[item.photoUrl, ...item.additionalPhotosUrl]}/>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        item: state.ProductReducer.item,
    }
};


let ProductScreen = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_ProductScreen)

export default ProductScreen;
