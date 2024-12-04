import { convertToChar, convertToMorse } from "./morseCode";
import { VernumCipher } from "./vernumCipher";

const morseCode = {
    encrypt: (message) => convertToMorse(message),
    decrypt: (message) => convertToChar(message)
};

const vernamCipher = {
    encrypt: (message, key) => VernumCipher(message, key),
    decrypt: (message, key) => VernumCipher(message, key),
}

const cipherRegistry = {
    morse: morseCode,
    vernam: vernamCipher
}

export default cipherRegistry;