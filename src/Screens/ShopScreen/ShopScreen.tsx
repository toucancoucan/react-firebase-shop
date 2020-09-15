import React from "react";
import styles from "./ShopScreen.module.scss";
import HeaderSubHeader from "../../Components/Common/HeaderSubHeader/HeaderSubHeader";
import {shopItemType} from "../../Reducers/ShopReducer";
import ItemCard from "../../Components/Common/ItemCard/ItemCard";
import ImportantItems from "../../Components/Common/ImportantItems/ImportantItems";
import EmptySpace from "../../Components/Common/EmptySpace/EmptySpace";
import Sidebar from "../../Components/Shop Components/Sidebar/Sidebar";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";
import {itemsFilterSortReducerType, setFilterSort, SortType} from "../../Reducers/FilterSortReducer";
import {createSelector} from "reselect";
import SortDropdown from "../../Components/Shop Components/SortDropdown/SortDropdown";
import {countItemRating} from "../../Functions/countItemRating";

type mapStateToProps = {
    filteredShopItems: Array<shopItemType>,
    //  filter: ItemsFilterSortReducerType,
}

type mapDispatchToProps = {
    setFilterSort: (item: SortType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _ShopScreen: React.FC<propsType> = (props) => {

    let atLeastOneItemShowing = props.filteredShopItems.length > 0;

    return (
        <div className={styles.shopContainer}>
            <div className={styles.shopHeader}>
                <div className={styles.headerWrap}>
                    <HeaderSubHeader drawLine={false} mainText={"SHOP"}
                                     subText={`SHOWING ${props.filteredShopItems.length} RESULTS`}/>
                </div>
                <SortDropdown/>
            </div>
            <div className={styles.main}>
                {atLeastOneItemShowing ?
                    <div className={styles.itemsContainer}>
                        {props.filteredShopItems.map((value) => {
                            return <ItemCard key={value.id} saleTag={value.saleTag}
                                             category={value.category} name={value.name}
                                             oldPrice={value.oldPrice} photoUrl={value.photoUrl}
                                             price={value.price} id={value.id}
                            />
                        })
                        }
                    </div>
                    :
                    <div className={styles.noProducts}>
                        No products were found matching your selection.
                    </div>
                }
                <Sidebar className={styles.sideBar}/>
            </div>
            <EmptySpace height={"4rem"}/>
            {<ImportantItems/>}
            <EmptySpace height={"2rem"}/>
        </div>
    )
}

let getItems = (state: rootState): Array<shopItemType> => state.ShopReducer.items;
let getFilter = (state: rootState): itemsFilterSortReducerType => state.FilterSortReducer;


let getFiltered = createSelector([getItems, getFilter],
    (items: Array<shopItemType>, filter: itemsFilterSortReducerType): Array<shopItemType> =>
        filterItems(items, filter));

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        filteredShopItems: sortItems(getFiltered(state), getFilter(state).sortType)
    }
};

let filterItems = (items: Array<shopItemType>, filter: itemsFilterSortReducerType): Array<shopItemType> => {
    let matchesCategory = (item: shopItemType) => (item.category === filter.category) || (filter.category === false);
    let matchesName = (item: shopItemType) => item.name.toUpperCase().includes(filter.nameSearch?.toUpperCase());
    let matchesPrice = (item: shopItemType) => (item.price >= filter.priceFilter.min && item.price <= filter.priceFilter.max);

    let result: Array<shopItemType> = [];
    for (let i = 0; i < items.length; i++) {
        if (matchesCategory(items[i]) && matchesName(items[i]) && matchesPrice(items[i])) {
            result.push(items[i]);
        }
    }
    return result;
}

let sortItems = (items: Array<shopItemType>, sortType: SortType): Array<shopItemType> => {
    switch (sortType) {
        case SortType.Default:
            return items.sort((a, b) => a.name.localeCompare(b.name))
        case SortType.Rating:
            return items.sort((a, b) => countItemRating(a) - countItemRating(b))
        case SortType.PriceLowToHigh:
            return items.sort((a, b) => a.price - b.price)
        case SortType.PriceHighToLow:
            return items.sort((a, b) => b.price - a.price)
    }
}

let ShopScreen = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {setFilterSort})(_ShopScreen)


export default ShopScreen;
