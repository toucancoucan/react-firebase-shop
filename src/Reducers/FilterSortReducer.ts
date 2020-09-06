import {itemCategoryType} from "./ShopReducer";

export enum SortType {
    Default,
    Rating,
    PriceLowToHigh,
    PriceHighToLow
}

export type itemsFilterSortReducerType = {
    newTag?: boolean,
    saleTag?: boolean,
    category: itemCategoryType | false,
    nameSearch: string,
    sortType: SortType
}


const SET_FILTER_NAME_SEARCH = 'SET_FILTER_NAME_SEARCH';

export type setFilterNameSearchType = {
    type: typeof SET_FILTER_NAME_SEARCH,
    payload: string
}

export let setFilterNameSearch = (item: string): setFilterNameSearchType => {
    return {
        type: SET_FILTER_NAME_SEARCH,
        payload: item
    }
}

const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY';

export type setFilterCategoryType = {
    type: typeof SET_FILTER_CATEGORY,
    payload: itemCategoryType | false
}

export let setFilterCategory = (item: itemCategoryType | false): setFilterCategoryType => {
    return {
        type: SET_FILTER_CATEGORY,
        payload: item
    }
}

const SET_FILTER_SORT_TYPE = 'SET_FILTER_SORT_TYPE';

export type setFilterSortTypeType = {
    type: typeof SET_FILTER_SORT_TYPE,
    payload: SortType
}

export let setFilterSortType = (item: SortType): setFilterSortTypeType => {
    return {
        type: SET_FILTER_SORT_TYPE,
        payload: item
    }
}


let ItemsFilterSortReducerInitialState: itemsFilterSortReducerType = {
    category: false,
    nameSearch: "",
    sortType: SortType.Default
}

type actionTypes = setFilterCategoryType & setFilterSortTypeType & setFilterNameSearchType;


const FilterSortReducer = (state = ItemsFilterSortReducerInitialState, action: actionTypes): itemsFilterSortReducerType => {
    switch (action.type) {
        case SET_FILTER_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case SET_FILTER_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload
            }
        case SET_FILTER_NAME_SEARCH:
            return {
                ...state,
                nameSearch: action.payload
            }
        default:
            return state
    }
}

export default FilterSortReducer;