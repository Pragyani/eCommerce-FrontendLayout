import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './inputStatesSlice';

export const store = configureStore({
    reducer: {
        input: inputReducer,
    },
})