import React from "react";
import styles from "./ImportantItems.module.scss";
import {rootState} from "../../../Reducers/store";
import {connect} from "react-redux";
import ImportantBlock from "./ImportantBlock/ImportantBlock";
import {shopItemType} from "../../../Reducers/ShopReducer";
import {filterItems, sliceItems, sortItems} from "../../../Functions/FilterAndSort";
import {getRandomItems} from "../../../Functions/getRandomItems";
import {createSelector} from 'reselect'
import {SortType} from "../../../Reducers/FilterSortReducer";


type mapStateToProps = {
    featured: Array<shopItemType>,
    newTag: Array<shopItemType>,
    saleTag: Array<shopItemType>,
    topRated: Array<shopItemType>
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let ImportantItems: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <ImportantBlock header={"FEATURED"} items={props.featured}/>
            <ImportantBlock header={"NEW PRODUCTS"} items={props.newTag}/>
            <ImportantBlock header={"ON-SALE"} items={props.saleTag}/>
            <ImportantBlock header={"TOP RATED"} items={props.topRated}/>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        featured: getFeatured(state),
        newTag: getNewTag(state),
        saleTag: getSaleTag(state),
        topRated: getTopRated(state)
    }
};

let getItems = (state: rootState): Array<shopItemType> => state.ShopReducer.items;

let getFeatured = createSelector([getItems], (items: Array<shopItemType>): Array<shopItemType> =>
    getRandomItems(items, 3));

let getTopRated = createSelector([getItems], (items: Array<shopItemType>): Array<shopItemType> =>
    sliceItems(sortItems(items, SortType.Rating), 3));

let getSaleTag = createSelector([getItems], (items: Array<shopItemType>): Array<shopItemType> =>
    sliceItems(filterItems(items, {saleTag: true}), 3));

let getNewTag = createSelector([getItems], (items: Array<shopItemType>): Array<shopItemType> =>
    sliceItems(filterItems(items, {newTag: true}), 3));


export default connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {})(ImportantItems);
