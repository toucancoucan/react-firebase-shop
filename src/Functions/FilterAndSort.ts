import {itemCategoryType, shopItemType} from "../Reducers/ShopReducer";
import {countItemRating} from "./countItemRating";
import {SortType} from "../Reducers/FilterSortReducer";


//TODO: IMPORTANT, delete it all and replace with other methods (NOTHING IS WORKING)

export type filterFunctionType = {
    newTag?: boolean,
    saleTag?: boolean,
    category?: itemCategoryType | false,
    nameSearch?: string,
    sortType?: SortType
}


export let filterItems = (itemsArray: Array<shopItemType>, filter: filterFunctionType): Array<shopItemType> => {
    return itemsArray.filter((item) => {
        if (filter.newTag && !item.newTag) return false;
        if (filter.saleTag && !item.saleTag) return false;
        if (filter.category && item.category !== filter.category) return false;
        if (filter.nameSearch && !item.name.includes(filter.nameSearch)) return false;
        return true;
    })

}

export let sortItems = (itemsArray: Array<shopItemType>, sort: SortType): Array<shopItemType> => {
    return sort === SortType.Default ? itemsArray :
        itemsArray.sort((a, b) => {
            switch (sort) {
                case SortType.Rating:
                    return (countItemRating(a) - countItemRating(b))
                case SortType.PriceLowToHigh:
                    return a.price - b.price
                case SortType.PriceHighToLow:
                    return b.price - a.price
                default:
                    throw Error;
            }
        })
}

export let sliceItems = (itemsArray: Array<shopItemType>, quantity: number): Array<shopItemType> => {
    return itemsArray.slice(0, quantity);
}