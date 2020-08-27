import {itemCategoryType, shopItemType} from "../Reducers/ShopReducer";
import {countItemRating} from "./countItemRating";

export type filterType = {
    newTag?: boolean,
    saleTag?: boolean,
    category?: itemCategoryType | false,
    nameSearch?: string,
    priceLow?: number,
    priceHigh?: number
}


export let filterItems = (itemsArray: Array<shopItemType>, filter: filterType): Array<shopItemType> => {
    return itemsArray.filter((item) => {
        if (filter.newTag && !item.newTag) return false;
        if (filter.saleTag && !item.saleTag) return false;
        if (filter.category && item.category !== filter.category) return false;
        if (filter.nameSearch && !item.name.includes(filter.nameSearch)) return false;
        if (filter.priceLow && filter.priceLow > item.price) return false;
        if (filter.priceHigh && filter.priceHigh < item.price) return false;

        return true;
    })

}

export enum SortType {
    Default,
    Rating,
    PriceLowToHigh,
    PriceHighToLow
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