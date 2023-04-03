import { useCallback, useState } from "react";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../gameHelpers";

import { randomTetromino, TETROMINOS } from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer({
            pos: { x: player.pos.x += x, y: player.pos.y += y },
            tetromino: player.tetromino,
            collided: collided,
        })
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}