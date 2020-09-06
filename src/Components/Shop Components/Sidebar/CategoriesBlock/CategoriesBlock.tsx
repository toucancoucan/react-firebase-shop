import React from "react";
import BlockWithHeader from "../../../Common/BlockWithHeader/BlockWithHeader";
import {connect} from "react-redux";
import {rootState} from "../../../../Reducers/store";
import CategoriesLink from "./CategoriesLink/CategoriesLink";
import {categoriesItemsLengthType} from "../../../../Reducers/ShopReducer";

type mapStateToProps = categoriesItemsLengthType;

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _CategoriesBlock: React.FC<propsType> = (props) => {
    return (
        <BlockWithHeader header={"CATEGORIES"}>
            <CategoriesLink category={"ALL"} quantity={props.all}/>
            <CategoriesLink category={"MEN"} quantity={props.men}/>
            <CategoriesLink category={"WOMEN"} quantity={props.women}/>
            <CategoriesLink category={"SHOES"} quantity={props.shoes}/>
            <CategoriesLink category={"ACCESSORIES"} quantity={props.accessories}/>
        </BlockWithHeader>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        accessories: state.ShopReducer.categoriesItemsLength.accessories,
        all: state.ShopReducer.categoriesItemsLength.all,
        men: state.ShopReducer.categoriesItemsLength.men,
        shoes: state.ShopReducer.categoriesItemsLength.shoes,
        women: state.ShopReducer.categoriesItemsLength.women,
    }
};


let CategoriesBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_CategoriesBlock);

export default CategoriesBlock;
