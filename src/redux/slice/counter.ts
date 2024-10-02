import { createSlice } from "@reduxjs/toolkit";

export interface ICount {
    value : number,

}

interface IPayLoad {
    payload : number,
}

const initialState = {
    value : 0,
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        incre : (state : ICount) => {
            state.value += 1;
        },

        decre : (state : ICount) => {
            state.value -= 1;
        },

        increByAmount : (state : ICount, action : IPayLoad) => {
            state.value += action.payload;
        },
    },
    
});

export const {
    incre,
    decre,
    increByAmount
} = counterSlice.actions;

export default counterSlice.reducer;