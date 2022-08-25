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
            console.log(action.payload)
        },
        setChoosenStateOrCity: (state, action) => {
            console.log(action.payload)
        },
        setIsLocationChoosen: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const { setChoosenStateOrCity, setIsLocationChoosen, setMapProductType } = mapSlice.actions
export default mapSlice.reducer