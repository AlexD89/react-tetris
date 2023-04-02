export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '33, 44, 55'
    },
    J: {
        shape: [
            [0, 'J', 0 ],
            [0, 'J', 0 ],
            ['J', 'J', 0],
        ],
        color: '33, 44, 55'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '33, 44, 55'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '33, 44, 55'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: '33, 44, 55'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0],
        ],
        color: '33, 44, 55'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: '33, 44, 55'
    },
};

export const randomTetromino = () => {
    const terominos = 'IJLOSTZ';
    const randTetromino = terominos[Math.floor(Math.random() * terominos.length)];

    return TETROMINOS[randTetromino]
};