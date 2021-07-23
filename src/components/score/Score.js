import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Score = () => {
    const [reset, setReset] = useState(true)
    const firstPlayer = useSelector(state=> state.firstPlayer)
    const secondPlayer = useSelector(state=> state.secondPlayer)

    const resetScore = () =>{
        if(reset){
            setReset(false)
        } else {
            setReset(true)
        }
    }

    return (
        <div className='score'>
            <h2 onClick={resetScore} className="score__title">Score</h2>
            <div className="first-player">
                <h3 className="first-player__score">{firstPlayer.name}: {firstPlayer.score}</h3>
            </div>
            <div className="second-player">
                <h3 className="second-player__score">{secondPlayer.name}: {secondPlayer.score}</h3>
            </div>
        </div>
    );
};

export default Score;