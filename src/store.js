import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartdata";
import cartRed from "./Slice/cartShow";
const store = configureStore({
    reducer:{
        cartRed:cartRed,
        cartData:cartReducer
    }
})
export default store;