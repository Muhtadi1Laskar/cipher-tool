const grid = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'], // J is often combined with I
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
];

const charToCoordinates = {};
const coordinatesToChar = {};

for(let row = 0; row < 5; row++) {
    for(let col = 0; col < 5; col++) {
        const char = grid[row][col];
        charToCoordinates[char] = `${row+1}${col+1}`;
        coordinatesToChar[`${row+1}${col+1}`] = char;
    }
}

const polybiusEncrypt = (message) => {
    const upperMessage = message.toUpperCase().replace(/J/g, 'I');
    return [...upperMessage]
            .map(char => charToCoordinates[char] || char)
            .join(' ');
}

const polybiusDecrypt = (message) => {
    return message
            .split(' ')
            .map(pair => coordinatesToChar[pair] || pair)
            .join('');
}

export {
    polybiusEncrypt,
    polybiusDecrypt
};