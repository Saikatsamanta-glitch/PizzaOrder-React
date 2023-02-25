import { createSlice } from "@reduxjs/toolkit";



const cartData = createSlice({
    name:'cartData',
    initialState:[],
    reducers:{
        cartFun:function(state,action){
            return [...state,action.payload  ]
        },
        cardDel:function(state,action){
            const data = [...state];
            data.splice(action.payload,1)
            return data
        }
    }
})
const cartReducer =  cartData.reducer;
export default cartReducer;
export const {cartFun,cardDel} = cartData.actions;
