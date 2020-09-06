import {categoriesItemsLengthType, shopItemType} from "../Reducers/ShopReducer";

export let getCategoriesId = (items: Array<shopItemType>): categoriesItemsLengthType => {
    let result: categoriesItemsLengthType = {
        all: items.length,
        accessories: 0,
        men: 0,
        shoes: 0,
        women: 0,
    }
    for (let i = 0; i < items.length; i++) {
        switch (items[i].category) {
            case "ACCESSORIES":
                result.accessories++;
                break;
            case "MEN":
                result.men++;
                break;
            case "SHOES":
                result.shoes++;
                break;
            case "WOMEN":
                result.women++;
                break;
        }
    }
    return result;
}