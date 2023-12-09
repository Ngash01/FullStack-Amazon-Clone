"use client"
import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice";


// The Global Store
export const store = configureStore({
    reducer:{
        cart: productSlice.reducer
    }
})




