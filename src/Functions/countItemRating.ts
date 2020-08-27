import {shopItemType} from "../Reducers/ShopReducer";

export let countItemRating = (item: shopItemType, round: boolean = false): number => {
    let averageRating: number =
        item.reviews.reduce((accumulator, value) => accumulator + value.rating, 0)
        / item.reviews.length;
    return round ? Math.round(averageRating) : averageRating;
}