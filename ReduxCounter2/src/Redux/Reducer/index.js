import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
const mainFile = combineReducers({
    counter : counterReducer,
})
export default mainFile;