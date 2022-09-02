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
                const product = { ...action.payload, quantity: 1 }
                const newCart = [...state.cartItems, product]
                state.cartItems = newCart
                console.log(state.cartItems)
            } else {
                state.cartItems = state.cartItems
                console.log(state.cartItems)
            }
        }
    }
})

export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer