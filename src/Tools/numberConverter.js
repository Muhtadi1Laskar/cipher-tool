const toBinary = (n) => (n >> 0).toString(2);

const toDecimal = (n) => parseInt(n, 2);

const toOctal = (n) => {
    n = +n;
    return parseInt(n, 10).toString(8);
}

const toHexadecimal = (n) => parseInt(n, 10).toString(16);

export {
    toBinary,
    toDecimal,
    toOctal,
    toHexadecimal
};