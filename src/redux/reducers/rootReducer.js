import {firstPlayerReducer} from "./firstPlayerReducer";
import {secondPlayerReducer} from "./secondPlayerReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    firstPlayer: firstPlayerReducer,
    secondPlayer: secondPlayerReducer
})

export default rootReducer