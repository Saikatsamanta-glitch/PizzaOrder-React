// reducer ---> action

import { createSlice } from "@reduxjs/toolkit";


const cartShow = createSlice({
    name:"cartShow",
    initialState:false,
    reducers:{
        shows:(state,action)=>{
           return !state
        }
    }
});

const cartRed = cartShow.reducer;
export const {shows} = cartShow.actions;

export default cartRed;