import {STEP_FIRST_PLAYER, ADD_FIRST_NAME} from "../../constants/constant";
import {isWin} from "./isWin";
import {whereClick} from "./whereClick";
import {isNobody} from "./isNobody";

const score = localStorage.getItem('firstPlayerScore')
const name = localStorage.getItem('firstPlayerName')

const defaultState = {
    name: name || 'X',
    score: score || 0,
    topX: [],
    middleX: [],
    bottomX: [],
    leftY: [],
    middleY: [],
    rightY: [],
    leftDiagonal: [],
    rightDiagonal: [],
};


export const firstPlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case STEP_FIRST_PLAYER:
            const updatedState = whereClick(action.payload.x, action.payload.y, state)
            const newState = isWin(updatedState);
            isNobody(newState)
            return newState
        case ADD_FIRST_NAME:
            return {...state, name: action.payload.name}
        default:
            return state
    }
}

export const firstPlayerStepAction = (payload) => ({type: STEP_FIRST_PLAYER, payload})
export const addFirstNameAction = (payload) => ({type: ADD_FIRST_NAME, payload})