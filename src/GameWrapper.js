import React from 'react';
import GameField from "./components/game-field/GameField";
import Score from "./components/score/Score";

const GameWrapper = () => {
    return (
        <div className='container'>
            <GameField/>
            <Score/>
        </div>
    );
};

export default GameWrapper;