import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSearchSuggestions: false,
    currentVideoCategory: "Home",
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

    setCurrentVideoCategory: (state, action) => {
      state.currentVideoCategory = action.payload;
      console.log("Current category - " + state.currentVideoCategory);
    },

    setShowSearchSuggestions: (state, action) => {
      state.showSearchSuggestions = action.payload;
    },
  },
});

export const {
  toggleMenu,
  showMenu,
  closeMenu,
  setCurrentVideoCategory,
  setShowSearchSuggestions,
} = appSlice.actions;

export default appSlice.reducer;
