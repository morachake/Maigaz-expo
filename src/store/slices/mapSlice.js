import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: {
        mapProductType: '',
        choosenStateOrCity: '',
        isLocationChoosen: false
    },
    reducers: {
        setMapProductType: (state, action) => {
            state.mapProductType = action.payload
        },
        setChoosenStateOrCity: (state, action) => {
            console.log(action.payload)
        },
        setIsLocationChoosen: (state, action) => {
            state.isLocationChoosen = action.payload
        }
    }
})

export const { setChoosenStateOrCity, setIsLocationChoosen, setMapProductType } = mapSlice.actions
export default mapSlice.reducer