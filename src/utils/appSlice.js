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

    showMenu: (state) => {
      state.isMenuOpen = true;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    setShowSearchSuggestions: (state, action) => {
      state.showSearchSuggestions = action.payload;
    },
  },
});

export const { toggleMenu, showMenu, closeMenu, setShowSearchSuggestions } =
  appSlice.actions;

export default appSlice.reducer;
