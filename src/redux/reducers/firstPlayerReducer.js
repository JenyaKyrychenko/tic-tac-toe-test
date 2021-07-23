import {STEP_FIRST_PLAYER, ADD_FIRST_NAME} from "../../constants/constant";
import {isWin} from "./isWin";
import {whereClick} from "./whereClick";

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
    steps:0
};

export const firstPlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case STEP_FIRST_PLAYER:
            state.steps = state.steps + 1
            const x = action.payload.x
            const y = action.payload.y
            const updatedState = whereClick(x, y, state)
            const newState = isWin(updatedState);
            return newState
        case ADD_FIRST_NAME:
            return {...state, name: action.payload.name}
        default:
            return state
    }
}

export const firstPlayerStepAction = (payload) => ({type: STEP_FIRST_PLAYER, payload})
export const addFirstNameAction = (payload) => ({type: ADD_FIRST_NAME, payload})