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
import {itemsFilterSortReducerType, setFilterSortType, SortType} from "../../Reducers/FilterSortReducer";
import {createSelector} from "reselect";

type mapStateToProps = {
    filteredShopItems: Array<shopItemType>,
    //  filter: ItemsFilterSortReducerType,
}

type mapDispatchToProps = {
    setFilterSortType: (item: SortType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _ShopScreen: React.FC<propsType> = (props) => {
    return (
        <div className={styles.shopContainer}>
            <HeaderSubHeader mainText={"SHOP"} subText={`SHOWING ${props.filteredShopItems.length} RESULTS`}/>
            <div className={styles.main}>
                <div className={styles.itemsContainer}>
                    {props.filteredShopItems.map((value,) => {
                        return <ItemCard key={value.id} saleTag={value.saleTag}
                                         category={value.category} name={value.name}
                                         oldPrice={value.oldPrice} photoUrl={value.photoUrl}
                                         price={value.price} id={value.id}
                        />
                    })}
                </div>
                <Sidebar/>
            </div>
            <EmptySpace height={"4rem"}/>
            <ImportantItems/>
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
        filteredShopItems: getFiltered(state)
    }
};

let filterItems = (items: Array<shopItemType>, filter: itemsFilterSortReducerType): Array<shopItemType> => {
    let matchesCategory = (item: shopItemType) => (item.category === filter.category) || (filter.category === false);
    let matchesName = (item: shopItemType) => item.name.toUpperCase().includes(filter.nameSearch?.toUpperCase());

    let result: Array<shopItemType> = [];
    for (let i = 0; i < items.length; i++) {
        if (matchesCategory(items[i]) && matchesName(items[i])) {
            result.push(items[i]);
        }
    }
    return result;
}

let ShopScreen = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {setFilterSortType})(_ShopScreen)


export default ShopScreen;
