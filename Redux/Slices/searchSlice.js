
import { createSlice } from "@reduxjs/toolkit";

 const initialState= {
    value: ''
 }

 export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        Searchparams : (state, action) => { state.value= action.payload }
    }
 })

 export const { Searchparams } = searchSlice.actions

 export default searchSlice.reducer