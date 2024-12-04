import { convertToChar, convertToMorse } from "./morseCode";
import { VernumCipher } from "./vernumCipher";
import { encryptToDNA, decryptToText } from "./DNACode";

const morseCode = {
    encrypt: (message) => convertToMorse(message),
    decrypt: (message) => convertToChar(message)
};

const vernamCipher = {
    encrypt: (message, key) => VernumCipher(message, key),
    decrypt: (message, key) => VernumCipher(message, key),
}

const cipherDNA = {
    encrypt: (message) => encryptToDNA(message),
    decrypt: (message) => decryptToText(message)
}

const cipherRegistry = {
    morse: morseCode,
    vernam: vernamCipher,
    dna: cipherDNA
};

export default cipherRegistry;