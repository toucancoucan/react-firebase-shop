import React, {useEffect} from "react";
import {useParams} from "react-router";
import ShopScreen from "./ShopScreen";
import {rootState} from "../../Reducers/store";
import {connect} from "react-redux";
import {itemCategoryType, shopItemType} from "../../Reducers/ShopReducer";
import {setFilterCategory, setFilterNameSearch, setFilterSortType, SortType} from "../../Reducers/FilterSortReducer";
import {getCategoryFromUrl} from "../../Constants/Routes";
import withTitleChange from "../../Components/Common/HOC/withTitleChange";
import titles from "../../Constants/Titles";

type mapStateToProps = {
    allShopItems: Array<shopItemType>,
}

type mapDispatchToProps = {
    setFilterNameSearch: (item: string) => void,
    setFilterCategory: (item: itemCategoryType | false) => void,
    setFilterSortType: (item: SortType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let ShopScreenContainer: React.FC<propsType> = (props) => {
    let params = useParams<{ selector: string, value: string }>();
    useEffect(() => {
        props.setFilterCategory(getCategoryFromUrl(params.value))
    }, [props, params.value])

    return (
        <ShopScreen/>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        allShopItems: state.ShopReducer.items,
    }
};

ShopScreenContainer = withTitleChange(ShopScreenContainer, titles.shop)

export default connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {setFilterNameSearch, setFilterCategory, setFilterSortType})(ShopScreenContainer);
