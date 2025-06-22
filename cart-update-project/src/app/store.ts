import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

// Inferred types for global state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch