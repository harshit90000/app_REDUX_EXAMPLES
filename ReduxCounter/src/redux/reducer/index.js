import { combineReducers } from "redux";
import counterReduce from "./CounterReduce/CounterReduce";

const mainReducer = combineReducers({
    counter: counterReduce,
})

export default mainReducer