import app from 'firebase';
import 'firebase/firestore';
import {CarouselItemType} from "../Reducers/CarouselReducer";

export const ItemsCarousel = "ItemsCarousel";

const firebaseConfig = {
    apiKey: "AIzaSyBLPCceCKqyMyMGR7KkS5YiuYJNToaZc6A",
    authDomain: "react-firebase-shop-8428c.firebaseapp.com",
    databaseURL: "https://react-firebase-shop-8428c.firebaseio.com",
    projectId: "react-firebase-shop-8428c",
    storageBucket: "react-firebase-shop-8428c.appspot.com",
    messagingSenderId: "159466976622",
    appId: "1:159466976622:web:387ad47923db32b007fd7f",
    measurementId: "G-8ZLB2Z719X"
};

class FirebaseClass {
    constructor() {
        this.app = app.initializeApp(firebaseConfig);
    }

    app: any

    async getCarouselItems(): Promise<Array<CarouselItemType>> {
        const carouselItems: Array<CarouselItemType> = [];
        await app.firestore().collection(ItemsCarousel).get()
            .then((querySnapshot: any) => {
                querySnapshot.docs.forEach((doc: any) => {
                    carouselItems.push(doc.data());
                });
            });
        return carouselItems;
    }

}

// let Firebase = app.initializeApp(firebaseConfig);

const Firebase = new FirebaseClass()


export default Firebase;



