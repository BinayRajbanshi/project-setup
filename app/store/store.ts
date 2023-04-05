import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cartSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch