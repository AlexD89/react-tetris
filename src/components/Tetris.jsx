import React from "react";

// Styles
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

// Helpers
import { buildStage } from "../gameHelpers";

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={buildStage()} />
                <aside>
                    <div>
                        <Display text='Score' />
                        <Display text='Rows' />
                        <Display text='Level' />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
};

export default Tetris;