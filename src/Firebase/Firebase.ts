import app from 'firebase';
import * as firebase from 'firebase/app';
import {CarouselItemType} from "../Reducers/CarouselReducer";
import {shopItemType} from "../Reducers/ShopReducer";
import CONSTANTS from "../Utility/CONSTANTS";

type docType = firebase.firestore.QueryDocumentSnapshot;

class FirebaseClass {
    constructor() {
        app.initializeApp(CONSTANTS.FIREBASE.CONFIG);
    }

    async getCarouselItems(): Promise<Array<CarouselItemType>> {
        return this.getFirebaseCollection<CarouselItemType>(CONSTANTS.FIREBASE.COLLECTIONS_NAME.ITEMS_CAROUSEL);
    }

    async getShopItems(): Promise<Array<shopItemType>> {
        return this.getFirebaseCollection<shopItemType>(CONSTANTS.FIREBASE.COLLECTIONS_NAME.SHOP_ITEMS);
    }

    async getFirebaseCollection<T>(collectionName: string, itemInsertFunc = async (doc: docType) => doc.data()): Promise<Array<T>> {
        const items: Array<T> = [];
        await app.firestore().collection(collectionName).get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach(async doc => {
                    // @ts-ignore
                    items.push(await itemInsertFunc(doc));
                });
            });
        return items;
    }
}

const Firebase = new FirebaseClass()


export default Firebase;



