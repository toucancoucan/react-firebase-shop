import {shopItemType} from "../Reducers/ShopReducer";

export let getRandomItems = (items: Array<shopItemType>, quantity: number) => {
    return items.sort(() => 0.5 - Math.random()).slice(0, quantity);
}