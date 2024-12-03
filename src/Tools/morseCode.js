const morseCodes = {
    "A": '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
    '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '$': '...-..-', '@': '.--.-.', ' ': '/'
};

const morseToChar = Object.fromEntries(
    Object.entries(morseCodes).map(([key, value]) => [value, key])
);

const convertToMorse = (str) => {
    const result = [];

    for(const char of str.toUpperCase()) {
        result.push(morseCodes[char] || '[?]');
    }

    return result.join(' ');
}

const convertToChar = (code) => {
    const result = [];

    for(const char of code.trim().split(' ')) {
        result.push(morseToChar[char].toLowerCase() || '[?]');
    }
    return result.join('');
}


export {
    convertToMorse,
    convertToChar
};