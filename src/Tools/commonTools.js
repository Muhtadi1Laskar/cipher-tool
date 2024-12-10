import { convertToChar, convertToMorse } from "./morseCode";
import { VernumCipher } from "./vernumCipher";
import { encryptToDNA, decryptToText } from "./DNACode";
import { polybiusDecrypt, polybiusEncrypt } from "./polybiusCipher";
import { toBinary, toDecimal, toHexadecimal, toOctal } from "./numberConverter";

const morseCode = {
    encrypt: (message) => convertToMorse(message),
    decrypt: (message) => convertToChar(message)
};

const vernamCipher = {
    encrypt: (message, key) => VernumCipher(message, key),
    decrypt: (message, key) => VernumCipher(message, key),
};

const cipherDNA = {
    encrypt: (message) => encryptToDNA(message),
    decrypt: (message) => decryptToText(message)
};

const polybiusCipher = {
    encrypt: (message) => polybiusEncrypt(message),
    decrypt: (message) => polybiusDecrypt(message)
};

const cipherRegistry = {
    morse: morseCode,
    vernam: vernamCipher,
    dna: cipherDNA,
    polybius: polybiusCipher,
    binary: toBinary,
    decimal: toDecimal,
    octal: toOctal,
    hexadecimal: toHexadecimal
};

export default cipherRegistry;