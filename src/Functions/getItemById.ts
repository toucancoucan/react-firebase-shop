import {shopItemType} from "../Reducers/ShopReducer";

let getItemById = (id: number, array: Array<shopItemType>): shopItemType => {
    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) return array[i];
    }
    throw new Error("Cant find such id in array");
}

export default getItemById;