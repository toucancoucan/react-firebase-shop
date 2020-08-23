let beautifyPrice = (n: number | undefined): string | number => {
    if (n === undefined) return "";
    if (n === Math.round(n)) return `${n}.00$`;
    return n;
}

export default beautifyPrice;