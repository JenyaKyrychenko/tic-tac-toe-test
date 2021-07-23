import {STEP_SECOND_PLAYER, ADD_SECOND_NAME} from "../../constants/constant";

const defaultState = {
    name: "O",
    score: 0,
    topX: [],
    middleX: [],
    bottomX: [],
    leftY: [],
    middleY: [],
    rightY: [],
    leftDiagonal: [],
    rightDiagonal: []
};

const isWin = (player) =>{
    for (let key in player) {
        if (player[key].length === 3 && key !== player.name ) {
            player.score = player.score + 1
            console.log("Win " + key + " " + player.name);
            return {
                name: player.name,
                score: player.score,
                topX: [],
                middleX: [],
                bottomX: [],
                leftY: [],
                middleY: [],
                rightY: [],
                leftDiagonal: [],
                rightDiagonal: []
            }
        }
    }
    return player
}

const whereClick = (x,y,state) =>{
    // X
    if(x === 0){
        state.topX.push(x)
    }
    if (x === 1) {
        state.middleX.push(x);
    }
    if (x === 2) {
        state.bottomX.push(x);
    }
    // Y
    if (y === 0) {
        state.leftY.push(y);
    }
    if (y === 1) {
        state.middleY.push(y);
    }
    if (y === 2) {
        state.rightY.push(y);
    }
    if ((x === 0 && y === 0) || (x === 1 && y === 1) || (x === 2 && y === 2)) {
        state.leftDiagonal.push("x");
    }

    if ((x === 0 && y === 2) || (x === 1 && y === 1) || (x === 2 && y === 0)) {
        state.rightDiagonal.push("x");
    }
    return state
}

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

