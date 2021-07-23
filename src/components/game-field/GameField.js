import React from 'react';
import Cell from "./Cell";

const GameField = () => {
    const FIRST_PLAYER = 'firstPlayer'
    const SECOND_PLAYER = 'secondPlayer'
    return (
        <div className='game-field'>
            <span className="border-top"></span>
            <span className="border-left"></span>
            <span className="border-right"></span>
            <span className="border-bottom"></span>
            <Cell owner={FIRST_PLAYER}/>
            <Cell owner={FIRST_PLAYER}/>
            <Cell owner={SECOND_PLAYER}/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell owner={FIRST_PLAYER}/>
            <span className="win leftDiagonal"></span>
        </div>
    );
};

export default GameField;