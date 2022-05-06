import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:20000
}

export const Slice = createSlice({
name:"Bank",
initialState,
reducers:{
    creditMoney:(state)=>{
            state.value +=  10000
    }, 
    debitMoney:(state)=>{
        state.value -= 10000
}
}
})

export const {creditMoney, debitMoney} = Slice.actions
 export default Slice.reducer