import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer