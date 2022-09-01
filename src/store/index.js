import { configureStore } from '@reduxjs/toolkit'
import bottomNavReducer from './slices/bottomNavSlice'
import mapReducer from './slices/mapSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavReducer,
        map: mapReducer,
        cart: cartReducer
    }
})