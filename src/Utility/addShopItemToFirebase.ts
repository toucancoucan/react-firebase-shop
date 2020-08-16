import app from 'firebase';
import CONSTANTS from "./CONSTANTS";
import {reviewType, shopItemType} from "../Reducers/ShopReducer";

const addShopItemToFirebase = () => {
    const reviews: Array<reviewType> = [
        {
            email: "karl@gmail.com",
            name: "Karl",
            rating: 5,
            text: "In hac habitasse platea dictumst quisque sagittis purus. Eu mi bibendum neque egestas congue quisque egestas diam."
        },
        {
            email: "jack@gmail.com",
            name: "Jack",
            rating: 4,
            text: "Vivamus at augue eget arcu dictum varius duis at."
        },
        // {
        //     email: "anna@gmail.com",
        //     name: "Anna",
        //     rating: 2,
        //     text: "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed vulputate odio ut enim blandit. Nunc non blandit massa enim nec dui nunc mattis. Interdum varius sit amet mattis vulputate enim nulla aliquet."
        // }
    ]

    const shopItem: shopItemType = {
        photoUrl: "https://i.ibb.co/h86hrTC/glasses-rayban.png",
        additionalPhotosUrl: ["https://i.ibb.co/x7qjWTF/glasses-rayban-2.png",],
        name: "RAYBAN GLASSES",
        category: "ACCESSORIES",
        price: 15,
        //oldPrice: 90,
        description: "Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Tortor at auctor urna nunc id cursus metus. Justo laoreet sit amet cursus sit. Eget mauris pharetra et ultrices. Ornare lectus sit amet est. Nascetur ridiculus mus mauris vitae ultricies leo. Suspendisse in est ante in nibh. Sit amet cursus sit amet dictum sit.",
        id: 414,
        additionalInfo: {
            COLOR: "BLACK, WHITE",
            SIZE: "S, M, L, XL, XXL",
        },
        reviews: reviews
    }
    app.firestore().collection(CONSTANTS.FIREBASE.COLLECTIONS_NAME.SHOP_ITEMS).add(shopItem).then(r => console.log("Done!"));
}

export default addShopItemToFirebase;