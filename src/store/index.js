import { configureStore } from '@reduxjs/toolkit'
import bottomNavReducer from './slices/bottomNavSlice'

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavReducer
    }
})