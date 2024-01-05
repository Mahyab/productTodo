import { configureStore } from "@reduxjs/toolkit";

import {productsReducer} from "./store/slices/products/productsSlice.js";
import {productFromReducer} from "./store/slices/products/productsFormSlice.js";
import { usersSliceReducer  } from "./store/slices/users/userSlice.js";
export const store = configureStore({
    reducer: {
        products:productsReducer,
        productsFrom:productFromReducer,
        users:usersSliceReducer
    }
})
export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;