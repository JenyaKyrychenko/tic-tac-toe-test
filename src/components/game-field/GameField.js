import React, {useState, useEffect} from 'react';
import Cell from "./Cell";
import {FIRST_PLAYER, SECOND_PLAYER} from "../../constants/constant";
import {useDispatch, useSelector} from "react-redux";
import {addFirstNameAction, firstPlayerStepAction, resetField} from "../../redux/reducers/firstPlayerReducer";
import {addSecondNameAction, secondPlayerStepAction} from "../../redux/reducers/secondPlayerReducer";

const GameField = () => {
    const dispatch = useDispatch()
    const gameField = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const [player, setPlayer] = useState(FIRST_PLAYER)

    const reset = useSelector(state=>state.firstPlayer.reset)


    const nexStep = (x, y, currentPlayer) => {
        if (currentPlayer === FIRST_PLAYER) {
            dispatch(firstPlayerStepAction({x, y}))
            setPlayer(SECOND_PLAYER)
        } else {
            dispatch(secondPlayerStepAction({x, y}))
            setPlayer(FIRST_PLAYER)
        }
    }

    const clearField = (setOwner) =>{
        dispatch(resetField())
        setOwner('')
    }

    useEffect(() => {
        dispatch(addFirstNameAction({name: 'Jenya'}))
        dispatch(addSecondNameAction({name: 'Nastya'}))
    }, [dispatch])


    return (
        <div className='game-field'>
            {gameField.map((_, x) => {
                return _.map((_, y) => {
                    return <Cell key={x + '' + y} player={player} reset={reset} clearField={clearField} nextStep={nexStep} x={x}
                                 y={y}/>
                })
            })}
            <span className="border-top"></span>
            <span className="border-left"></span>
            <span className="border-right"></span>
            <span className="border-bottom"></span>
            <span className="win"/>
        </div>

    );
};

export default GameField;