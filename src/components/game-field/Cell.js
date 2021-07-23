import React from 'react';

const Cell = ({x,y,owner}) => {

    if(!owner){
        return (
            <div className='cell'></div>
        )
    }

    return (
        <div className='cell'>
            {owner === 'firstPlayer' ? <div className="cross">
                <span className="cross__left"></span>
                <span className="cross__right"></span>
            </div> : <div className="zero">
                <span className="zero__ring"></span>
            </div>}
        </div>
    );
};

export default Cell;