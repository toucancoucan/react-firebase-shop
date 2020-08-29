const routes = {
    home: '/home',
    shop: '/shop',
    contact: '/contact',
    blog: '/blog',
    cart: '/cart',
    checkout: '/checkout',
    faq: '/faq',
    shipping: '/shipping',
    privacy: '/privacy',
    me: '/me',
    loremPage: '/lorem',
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
        return `/shop/product/${replaceWhitespaceInStringAndToLower(productName)}`
    },
    category(categoryName: string) {
        return `/shop/category/${replaceWhitespaceInStringAndToLower(categoryName)}`
    }
}

let replaceWhitespaceInStringAndToLower = (str: string) => {
    return str.split(' ').join('-').toLowerCase();
}

export default routes;