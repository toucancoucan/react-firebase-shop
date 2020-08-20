const routes = {
    home: '/home',
    shop: '/shop',
    contact: '/contact',
    blog: '/blog',
    cart: '/cart',
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