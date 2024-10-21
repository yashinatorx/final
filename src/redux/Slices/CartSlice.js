// import { createSlice } from "@reduxjs/toolkit";


// export const CartSlice = createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         add:(state,action) => {
//             state.push(action.payload);
//         },
//         remove:(state,action) => {
//             return state.filter((item) => item.id !== action.payload);
//         },
       
//     }
// });

// export const {add, remove} = CartSlice.actions;
// export default CartSlice.reducer;

import { createSlice, combineReducers } from "@reduxjs/toolkit";

// CartSlice
export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload); // Adds the item to the cart
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload); // Removes the item by id
        },
    },
});

export const { add, remove } = CartSlice.actions;

// CounterSlice
const initialState = {
    value: 0, // Initial state value for the counter
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Increment the counter by 1
        },
        decrement: (state) => {
            state.value -= 1; // Decrement the counter by 1
        },
    },
});

export const { increment, decrement } = CounterSlice.actions;

// Combine reducers
const rootReducer = combineReducers({
    cart: CartSlice.reducer,
    counter: CounterSlice.reducer,
});

export default rootReducer;
