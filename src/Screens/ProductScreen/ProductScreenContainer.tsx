import React from "react";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";
import {shopItemType} from "../../Reducers/ShopReducer";
import {useParams} from "react-router";
import routes, {replaceWhitespaceInStringAndToLower} from "../../Constants/Routes";
import ProductScreen from "./ProductScreen";
import {Redirect} from 'react-router-dom';
import useTitleChange from "../../Components/Common/Hooks/useTitleChange";
import titles from "../../Constants/Titles";
import {setItem} from "../../Reducers/ProductReducer";


type mapStateToProps = {
    allItems: Array<shopItemType>
}

type mapDispatchToProps = {
    setItem: (item: shopItemType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _ProductScreenContainer: React.FC<propsType> = (props) => {
    let params = useParams<{ id: string, }>();
    let itemName = params.id;
    let resultItem: shopItemType | undefined = props.allItems.find((e) => {
        return replaceWhitespaceInStringAndToLower(e.name) === itemName;
    })
    useTitleChange(titles.item(resultItem?.name))
    if (resultItem) {
        props.setItem(resultItem)
        return <ProductScreen item={resultItem}/>
    } else {
        return <Redirect to={routes.notFound}/>
    }
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        allItems: state.ShopReducer.items
    }
};


let ProductScreenContainer = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {setItem})(_ProductScreenContainer)

export default ProductScreenContainer;
