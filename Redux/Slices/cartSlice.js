import { createSlice } from "@reduxjs/toolkit";

const initialValue= {
    value: []
}

export const cartSlice= createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers:{
        addToCart: (state, action) => { state.value.push(action.payload) },
        changeQuantity: (state, action) => { state.value.forEach((item) => {
            if(item.id === action.payload.id){
                item.quantity= action.payload.quantity;
            }
        })},
        removeFromCart: (state, action) => { state.value= state.value.filter(item => item.id !== action.payload) }
    }
})

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions

export default cartSlice.reducer