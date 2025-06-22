import type { CartItem, CartState } from "./cartTypes";
import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // action.payload will be of type CartItem
        addToCart: (state, action: PayloadAction<CartItem>)=>{
            const existing = state.items.find(
                item => item.id === action.payload.id)
            if (existing){
                existing.quantity += action.payload.quantity
            }else{
                state.items.push(action.payload)
            }

        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
        },

        clearCart: (state) => {
            state.items = [];
        },

        updateQuantity: (
            state,
            action: PayloadAction<{id: string ; quantity: number}>) => {
                const item = state.items.find(item => item.id === action.payload.id)

                if(item){
                    item.quantity = action.payload.quantity
                }
        },
    },

});

export const {addToCart,removeFromCart,updateQuantity,clearCart} = cartSlice.actions ;

export default cartSlice.reducer;