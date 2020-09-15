const titles = {
    home: 'NO LABEL - Home',
    notFound: 'NO LABEL - Not Found',
    shop: 'NO LABEL - Shop',
    item(str: string | undefined): string {
        return `NO LABEL - ${str}`
    }
}

export default titles;