// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/CartSlice";

// export const store = configureStore({
//     reducer:{
//         cart: CartSlice.reducer,
//     }
// });

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Slices/CartSlice";


export const store = configureStore({
    reducer: rootReducer,
});


