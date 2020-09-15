import {itemCategoryType} from "../Reducers/ShopReducer";

const routes = {
    home: '/home',
    shop: '/shop/category/all',
    shopPath: '/shop/:selector/:value',
    productPath: `/product/:id`,
    contact: '/contact',
    blog: '/blog',
    cart: '/cart',
    checkout: '/checkout',
    faq: '/faq',
    shipping: '/shipping',
    privacy: '/privacy',
    me: '/me',
    loremPage: '/lorem',
    notFound: '/404-page-not-found',
    socialLinks: {
        instagram: 'https://www.instagram.com/',
        pinterest: 'https://www.pinterest.com/',
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        youtube: 'https://www.youtube.com/',
        vimeo: 'https://vimeo.com/',
    },
    telegram: "https://t.me/toucancoucan",
    product(productName: string) {
        return `/product/${replaceWhitespaceInStringAndToLower(productName)}`
    },
    category(categoryName: string) {
        return `/shop/category/${replaceWhitespaceInStringAndToLower(categoryName)}`
    }
}

export let replaceWhitespaceInStringAndToLower = (str: string) => {
    return str.split(' ').join('-').toLowerCase();
}

export let getCategoryFromUrl = (str: string): itemCategoryType | false => {
    switch (str) {
        case "MEN".toLowerCase():
            return "MEN";
        case "women":
            return "WOMEN";
        case "accessories":
            return "ACCESSORIES";
        case "shoes":
            return "SHOES";
        default:
            return false;
    }
}

export default routes;