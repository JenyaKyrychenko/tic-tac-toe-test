import React, {useState} from 'react';
import {FIRST_PLAYER} from "../../constants/constant";

const Cell = ({x,y, player, nextStep, clearField}) => {
    const [owner, setOwner] = useState('')

    const assignOwner = ()=>{
        setOwner(player)
        nextStep(x,y,player)
    }

    const reset = () =>{
        clearField(setOwner)
    }


    if(!owner){
        return (
            <div onClick={assignOwner} className='cell'></div>
        )
    }

    return (
        <div onClick={reset} className='cell'>
            {owner === FIRST_PLAYER ? <div className="cross">
                <span className="cross__left"></span>
                <span className="cross__right"></span>
            </div> : <div className="zero">
                <span className="zero__ring"></span>
            </div>}
        </div>
    );
};

export default Cell;