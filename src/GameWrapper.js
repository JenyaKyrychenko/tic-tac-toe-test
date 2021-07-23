import React from 'react';
import GameField from "./components/game-field/GameField";
import Score from "./components/score/Score";

const GameWrapper = () => {
    const resetScore = () =>{
        window.location.reload()
        localStorage.clear()
    }
    return (
        <>
            <button onClick={resetScore}>Reset Score</button>
            <div className='container'>
                <GameField/>
                <Score/>
            </div>
        </>
    );
};

export default GameWrapper;