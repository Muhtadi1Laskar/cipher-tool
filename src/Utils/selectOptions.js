const hashOptions = [
    { value: 'md5', text: 'MD5' },
    { value: 'sha256', text: 'Sha-256' },
    { value: 'md4', text: 'MD4' },
    { value: 'sha3_224', text: 'SHA3-224' },
    { value: 'sha3_256', text: 'SHA3-256' },
    { value: 'blake2s_256', text: 'Blake2s-256' },
    { value: 'blake2b_384', text: 'Blake2b-384' },
    { value: 'sha1', text: 'SHA1' },
    { value: 'sha512_224', text: 'SHA512-224' },
    { value: 'ripemd160', text: 'RIPEMD-160' },
    { value: 'sha3_384', text: 'SHA3-384' },
    { value: 'sha384', text: 'SHA384' },
    { value: 'sha512_256', text: 'SHA512-256' },
    { value: 'sha224', text: 'SHA-224' },
    { value: 'sha512', text: 'SHA-512' },
    { value: 'sha3_512', text: 'SHA3-512' },
    { value: 'blake2b_256', text: 'BLAKE2B-256' },
    { value: 'blake2b_512', text: 'BLAKE2B-512' },
];


const cipherOptions = [
    { value: 'aesCipher', text: 'AES' },
    { value: 'atbashCipher', text: 'Atbash Cipher' },
    { value: 'baconCipher', text: 'Bacon Cipher' },
    { value: 'rot13Cipher', text: 'ROT13 Cipher' },
    { value: 'ceaserCipher', text: 'Caeser Cipher' },
    { value: 'vignereCipher', text: 'Vignere Cipher' },
    { value: 'xorCipher', text: 'xor' },
    { value: 'binaryEncoder', text: 'Binary' },
    { value: 'morse', text: 'Morse Code' },
    { value: 'vernam', text: 'Vernam Code' },
    { value: 'dna', text: 'DNA Cipher' },
    { value: 'polybius', text: 'Polybius Cipher' },
];

const encoderOptions = [
    { value: 'base32', text: 'Base 32' },
    { value: 'base64', text: 'Base 64' },
];

export {
    hashOptions,
    cipherOptions,
    encoderOptions
}