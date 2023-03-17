import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import ApiReducer from "./ApiReducer";

const store = configureStore({
    reducer: {
        apiReducer: ApiReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store;