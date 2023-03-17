import { createStore } from "redux" ;
import mainFile from "./Reducer";

const store = createStore(mainFile)

export default store;