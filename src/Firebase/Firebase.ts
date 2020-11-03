import app from 'firebase';
import * as firebase from 'firebase/app';
import {CarouselItemType} from "../Reducers/CarouselReducer";
import {shopItemType} from "../Reducers/ShopReducer";
import CONSTANTS from "../Constants/CONSTANTS";
import {homeCategoryItemType} from "../Reducers/HomeCategoriesReducer";
import {contactInformation} from "../Reducers/ContactReducer";

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

    async getHomeCategoriesItems(): Promise<Array<homeCategoryItemType>> {
        return this.getFirebaseCollection<homeCategoryItemType>(CONSTANTS.FIREBASE.COLLECTIONS_NAME.HOME_CATEGORIES_ITEMS);
    }

    async getContactInformation(): Promise<contactInformation> {
        return this.getFirebaseDocument<contactInformation>(CONSTANTS.FIREBASE.COLLECTIONS_NAME.UTILITY,
            CONSTANTS.FIREBASE.DOCUMENTS_NAME.CONTACT)
    }


    private async getFirebaseCollection<T>(collectionName: string, itemInsertFunc = async (doc: docType) => doc.data()): Promise<Array<T>> {
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

    private async getFirebaseDocument<T>(collectionName: string, documentName: string): Promise<T> {
        let res: T | unknown = null;
        await app.firestore().collection(collectionName).doc(documentName).get()
            .then(doc => {
                // @ts-ignore
                res = doc.data();
            })
        return res as T;
    }

}

const Firebase = new FirebaseClass()


export default Firebase;



