import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import {FIRST_PLAYER, SECOND_PLAYER} from "../../constants/constant";
import {useDispatch, useSelector} from "react-redux";
import {addFirstNameAction, firstPlayerStepAction} from "../../redux/reducers/firstPlayerReducer";
import {addSecondNameAction, secondPlayerStepAction} from "../../redux/reducers/secondPlayerReducer";

const GameField = ({gameField}) => {
    const dispatch = useDispatch()
    const [player, setPlayer] = useState(FIRST_PLAYER)
    const [steps, setSteps] = useState(0)
    const firstPlayer = useSelector(state => state.firstPlayer)
    const secondPlayer = useSelector(state => state.secondPlayer)

    // Если победа
    if (firstPlayer.win || secondPlayer.win) {
        window.location.reload()
        localStorage.setItem('firstPlayerScore', firstPlayer.score)
        localStorage.setItem('secondPlayerScore', secondPlayer.score)
    }


    const nexStep = (x, y, currentPlayer) => {
        if (currentPlayer === FIRST_PLAYER) {
            dispatch(firstPlayerStepAction({x, y}))
            setPlayer(SECOND_PLAYER)
        } else {
            dispatch(secondPlayerStepAction({x, y}))
            setPlayer(FIRST_PLAYER)
        }
        setSteps(steps+1)
    }

    // Если ничья
    if(steps === 9 && !firstPlayer.win && !secondPlayer.win){
        window.location.reload()
        localStorage.setItem('firstPlayerScore', firstPlayer.score)
        localStorage.setItem('secondPlayerScore', secondPlayer.score)
        alert('Ничья!')
    }


    useEffect(() => {
        const name = localStorage.getItem('firstPlayerScore')
        if(!name){
            const firstName = prompt('Введите имя первого игрока:')
            const secondName = prompt('Введите имя второго игрока:')
            localStorage.setItem('firstPlayerName',firstName)
            localStorage.setItem('secondPlayerName',secondName)
            dispatch(addFirstNameAction({name: firstName || 'X'}))
            dispatch(addSecondNameAction({name: secondName || 'O'}))
        }
    }, [dispatch])


    return (
        <>
            <div className='game-field'>
                {gameField.map((_, x) => {
                    return _.map((_, y) => {
                        return <Cell key={x + '' + y} player={player} nextStep={nexStep} x={x} y={y}/>
                    })
                })}
                <span className="border-top"></span>
                <span className="border-left"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className={`win ${firstPlayer.win} ${secondPlayer.win}`}/>
            </div>
        </>
    );
};

export default GameField;