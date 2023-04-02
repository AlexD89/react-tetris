export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '255, 255, 0'
    },
    J: {
        shape: [
            [0, 'J', 0 ],
            [0, 'J', 0 ],
            ['J', 'J', 0],
        ],
        color: '255, 255, 0'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '255, 255, 0'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '255, 255, 0'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: '255, 255, 0'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0],
        ],
        color: '255, 255, 0'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: '255, 255, 0'
    },
};

export const randomTetromino = () => {
    const terominos = 'IJLOSTZ';
    const randTetromino = terominos[Math.floor(Math.random() * terominos.length)];

    return TETROMINOS[randTetromino]
};