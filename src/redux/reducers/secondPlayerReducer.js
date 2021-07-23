import {STEP_SECOND_PLAYER, ADD_SECOND_NAME} from "../../constants/constant";
import {whereClick} from "./whereClick";
import {isWin} from "./isWin";

const score = localStorage.getItem('secondPlayerScore')
const name = localStorage.getItem('secondPlayerName')
const defaultState = {
    name: name || 'O',
    score: score || 0,
    topX: [],
    middleX: [],
    bottomX: [],
    leftY: [],
    middleY: [],
    rightY: [],
    leftDiagonal: [],
    rightDiagonal: []
};

export const secondPlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case STEP_SECOND_PLAYER:
            const x = action.payload.x
            const y = action.payload.y
            const updatedState = whereClick(x,y,state)
            const newState = isWin(updatedState);
            return newState
        case ADD_SECOND_NAME:
            return {...state, name: action.payload.name}
        default:
            return state
    }
}

export const secondPlayerStepAction = (payload) => ({type: STEP_SECOND_PLAYER, payload})
export const addSecondNameAction = (payload) => ({type: ADD_SECOND_NAME, payload})

