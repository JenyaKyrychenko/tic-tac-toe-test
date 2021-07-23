import React from 'react';

const Score = () => {
    return (
        <div className='score'>
            <h2 className="score__title">Score</h2>
            <div className="first-player">
                <h3 className="first-player__score">Player: 1</h3>
            </div>
            <div className="second-player">
                <h3 className="second-player__score">Player: 2</h3>
            </div>
        </div>
    );
};

export default Score;