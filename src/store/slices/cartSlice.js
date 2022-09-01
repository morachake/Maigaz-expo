import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: []
    },
    reducers: {
        addProductToCart: (state, action) => {
            const availableProduct = state.cartItems.filter(cartItem => cartItem.id === action.payload.id)
            if (availableProduct.length <= 0) {
                const newCart = [...state.cartItems, action.payload]
                state.cartItems = newCart
            } else {
                state.cartItems = state.cartItems
            }
        }
    }
})

export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer