import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSearchSuggestions: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    setShowSearchSuggestions: (state, action) => {
      state.showSearchSuggestions = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setShowSearchSuggestions } =
  appSlice.actions;

export default appSlice.reducer;
