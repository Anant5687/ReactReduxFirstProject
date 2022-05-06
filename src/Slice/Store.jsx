import { configureStore } from "@reduxjs/toolkit";
import Slice  from "../conterSlice/counterSlice";

export  const Store = configureStore({
    reducer:{
        slice:Slice
    }
})
