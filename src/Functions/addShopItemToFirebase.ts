import app from 'firebase';
import CONSTANTS from "../Constants/CONSTANTS";
import {reviewType, shopItemType} from "../Reducers/ShopReducer";

const addShopItemToFirebase = () => {
    const reviews: Array<reviewType> = [
        // {
        //     email: "al@gmail.com",
        //     name: "Al",
        //     rating: 5,
        //     text: "Sit amet nulla facilisi morbi tempus iaculis. Arcu risus quis varius quam quisque."
        // },
        // {
        //     email: "jeremy@gmail.com",
        //     name: "Jeremy",
        //     rating: 3,
        //     text: "Amet cursus sit amet dictum sit amet justo donec. Libero id faucibus nisl tincidunt eget nullam non nisi est. Nunc faucibus a pellentesque sit amet porttitor eget."
        // },
        // {
        //     email: "alex@gmail.com",
        //     name: "Alex",
        //     rating: 4,
        //     text: "Interdum consectetur libero id faucibus nisl. Libero volutpat sed cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse."
        // }
    ]

    const shopItem: shopItemType = {
        photoUrl: "https://i.ibb.co/BgB30mx/fm-woman.jpg",
        additionalPhotosUrl: ["https://i.ibb.co/XtzPSXc/fm-woman-2.png",],
        name: "FORCE MAJEURE WOMAN",
        category: "WOMEN",
        price: 15,
        //oldPrice: 80,
        id: 208,
        description: "Tellus cras adipiscing enim eu turpis egestas pretium. Tempus quam pellentesque nec nam aliquam. Nunc vel risus commodo viverra maecenas accumsan. Diam donec adipiscing tristique risus nec feugiat in. Justo eget magna fermentum iaculis eu non diam. Justo donec enim diam vulputate ut pharetra. ",
        additionalInfo: {
            //COLOR: "BLUE, RED, GREEN, ORANGE",
            WASH: "HAND WASH",//HAND WASH MACHINE WASH,
            SIZE: "S, M, L, XL, XXL",
        },
        reviews: reviews,
        newTag: true,
        //saleTag: true,
    }
    app.firestore().collection(CONSTANTS.FIREBASE.COLLECTIONS_NAME.SHOP_ITEMS).add(shopItem).then(r => console.log("Done!"));
}

export default addShopItemToFirebase;