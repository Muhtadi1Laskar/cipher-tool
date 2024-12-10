const toBinary = (n) => (n >> 0).toString(2);

const toDecimal = (n) => parseInt(n, 2);

const toOctal = (n) => {
    n = +n;
    return n.toString(8);
}

export {
    toBinary,
    toDecimal,
    toOctal
};