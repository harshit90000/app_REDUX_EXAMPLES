import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../redux/MyProductSlice"
import MyCartReducer from "../redux/MyCartSlice";

import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

let persistConfig = {
    key: 'root',
    storage
}

let rootReducer = combineReducers({
    product: MyProductReducer,
    cart: MyCartReducer,
})

let persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     product: MyProductReducer,
    //     cart: MyCartReducer,
    // }
    reducer: persistedReducer,
})