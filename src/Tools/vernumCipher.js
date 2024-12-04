const VernumCipher = (message, key) => {
    let cleanedKey = key.toLowerCase().replaceAll(' ', '');
    let result = '';

    for(let i = 0; i < message.length; i++) {
        const xor = message[i].toUpperCase().charCodeAt(0) ^ cleanedKey[i % cleanedKey.length].charCodeAt(0);
        result += String.fromCharCode(xor);
    }
    return result;
} 

export {
    VernumCipher
};