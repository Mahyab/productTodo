import { configureStore } from "@reduxjs/toolkit";

import {productsReducer} from "./slices/productsSlice.js";
import {productFromReducer} from "./slices/productsFormSlice.js";

export const store = configureStore({
    reducer: {
        products:productsReducer,
        productsFrom:productFromReducer
    }
})
export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;