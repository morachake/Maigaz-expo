import { createSlice } from "@reduxjs/toolkit";

export const bottomNavReducer = createSlice({
  name: "bottomNavSlice",
  initialState: {
    bottomNavOptions: [
      {
        iconName: "home",
        activeIconColor: "#3F38CB",
        inactiveIconColor: "#7C76F0",
        navName: "Home",
        screen: "HomeComponent",
        isActive: true,
      },
      {
        iconName: "basket",
        activeIconColor: "#3F38CB",
        inactiveIconColor: "#7C76F0",
        navName: "Cart",
        screen: "CartView",
        isActive: false,
      },
      {
        iconName: "cards-heart-outline",
        activeIconColor: "#3F38CB",
        inactiveIconColor: "#7C76F0",
        navName: "Favorites",
        screen: "FavoriteView",
        isActive: false,
      },
      {
        iconName: "account",
        activeIconColor: "#3F38CB",
        inactiveIconColor: "#7C76F0",
        navName: "Profile",
        screen: "ProfileView",
        isActive: false,
      },
    ],
  },
  reducers: {
    setActiveNav: (state, action) => {
      state.bottomNavOptions = state.bottomNavOptions.map(option => {
        if (option.isActive === true) {
            option.isActive = false
        }
        if (option.iconName === action.payload.iconName) {
            option.isActive = true
        }
        return option
      })
    },
  },
});

export const { setActiveNav } = bottomNavReducer.actions;
export default bottomNavReducer.reducer;
