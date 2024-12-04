const DNACODES = {
    "A": "A", "B": "TA", "C": "CG", "D": "GC",
    "E": "GA", "F": "AG", "G": "TC", "H": "CT",
    "I": "TG", "J": "GT", "K": "CA", "L": "AC",
    "M": "TG", "N": "GT", "O": "CA", "P": "AC",
    "Q": "TA", "R": "CG", "S": "GC", "T": "GA",
    "U": "AG", "V": "TC", "W": "CT", "X": "TG",
    "Y": "GT", "Z": "CA", " ": "AA"
};

const codesToChar = Object.fromEntries(
    Object.entries(DNACODES).map(([key, value]) => [value, key])
);

const encryptToDNA = (message) => {
    const result = [];

    for (const char of message.toUpperCase()) {
        result.push(DNACODES[char] || '[?]');
    }
    return result.join(' ');
};

const decryptToText = (codes) => {
    const result = [];

    for (const c of codes.trim().split(/\s+/)) {
        if (codesToChar[c]) {
            result.push(codesToChar[c]); 
        } else {
            result.push('[?]');
        }
    }

    return result.join('');
};

export {
    encryptToDNA,
    decryptToText
};