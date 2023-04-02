import React from "react";

// Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

// Helpers
import { buildStage } from "../gameHelpers";

const Tetris = () => {
    return (
        <div>
            <Stage stage = { buildStage() } />
            <aside>
                <div>
                    <Display text = 'Score' />
                    <Display text = 'Rows' />
                    <Display text = 'Level' />
                </div>
                <StartButton />
            </aside>
            
        </div>
    )
};

export default Tetris;