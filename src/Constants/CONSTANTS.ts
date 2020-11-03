const CONSTANTS = {
    CAROUSEL: {
        ITEM_CHANGE_SPEED: 10000 //ms
    },
    ITEMS_SPINNER: {
        ITEMS_QUANTITY: 5,
    },
    PRODUCT_SCREEN: {
        MAX_ITEM_RATING: 5,
        REVIEW: {
            NAME_REGEX: /^[A-Za-z]+$/i,
            EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    },
    MAP: {
        CENTER: {lat: 50.027753, lng: 36.278702},
        ZOOM: 11,
        SHOPS_COORDINATES:
            [{lat: 50.014696, lng: 36.228632}, {lat: 50.018356, lng: 36.322185}, {lat: 50.042658, lng: 36.285276}]
    },
    FIREBASE: {
        CONFIG: {
            apiKey: "AIzaSyBLPCceCKqyMyMGR7KkS5YiuYJNToaZc6A",
            authDomain: "react-firebase-shop-8428c.firebaseapp.com",
            databaseURL: "https://react-firebase-shop-8428c.firebaseio.com",
            projectId: "react-firebase-shop-8428c",
            storageBucket: "react-firebase-shop-8428c.appspot.com",
            messagingSenderId: "159466976622",
            appId: "1:159466976622:web:387ad47923db32b007fd7f",
            measurementId: "G-8ZLB2Z719X"
        },
        COLLECTIONS_NAME: {
            ITEMS_CAROUSEL: "ItemsCarousel",
            SHOP_ITEMS: "ShopItems",
            REVIEWS: "reviews",
            HOME_CATEGORIES_ITEMS: "HomeCategories",
        }
    }
}

export default CONSTANTS;