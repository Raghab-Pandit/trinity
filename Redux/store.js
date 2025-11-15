
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slices/searchSlice"
import cartReducer from "./Slices/cartSlice"

export const store= configureStore({
    reducer:{
        search: searchReducer,
        cart: cartReducer
    }
})