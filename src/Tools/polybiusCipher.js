const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

const charToIndex = (char) => {
  const upperChar = char.toUpperCase();
  if (upperChar === 'J') return alphabet.indexOf('I');
  return alphabet.indexOf(upperChar);
};

const indexToChar = (index) => alphabet[index];

// Encrypt the message
const polybiusEncrypt = (message) => {
  return [...message.toUpperCase()]
    .map(char => {
      const index = charToIndex(char);
      if (index === -1) return char;
      const row = Math.floor(index / 5) + 1;
      const col = (index % 5) + 1;
      return `${row}${col}`;
    })
    .join(' ');
};

// Decrypt the ciphertext
const polybiusDecrypt = (cipherText) => {
  return cipherText
    .split(' ')
    .map(pair => {
      if (pair.length !== 2) return pair;
      const row = parseInt(pair[0], 10);
      const col = parseInt(pair[1], 10);
      const index = (row - 1) * 5 + (col - 1);
      return indexToChar(index);
    })
    .join('');
};

export {
    polybiusEncrypt,
    polybiusDecrypt
};