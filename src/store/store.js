import { configureStore } from "@reduxjs/toolkit";
import { authSlice, maestrosSlice } from "./";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        maestros: maestrosSlice.reducer,
    },
});