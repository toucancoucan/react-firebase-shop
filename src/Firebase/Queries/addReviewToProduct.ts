import {reviewType} from "../../Reducers/ShopReducer";
import app, {firestore} from "firebase";
import CONSTANTS from "../../Constants/CONSTANTS";

export type addReviewToProduct = (review: reviewType, productId: number) => void;

export let addReviewToProduct: addReviewToProduct = async (review, productId) => {
    let path: string = "";
    await app.firestore().collection(CONSTANTS.FIREBASE.COLLECTIONS_NAME.SHOP_ITEMS).where("id", "==", productId)
        .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                path = doc.id;
            });
        })


    await app.firestore().collection(CONSTANTS.FIREBASE.COLLECTIONS_NAME.SHOP_ITEMS).doc(path).set({
        reviews: firestore.FieldValue.arrayUnion(review)
    }, {merge: true});
}