"use client"
import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    items: []
}


 export const productSlice = createSlice({
    name: "cart",
    initialState:InitialState,
    reducers:{
        addToCart: ((state, action)=> {
            state.items = [...state.items, action.payload]
        }),
        removeFromCart: ((state, action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload.id)
        })
    }
})

export const {addToCart, removeFromCart} = productSlice.actions;


// export const selectItems = (state)=>state.cart.items

// export default productSlice.reducer;