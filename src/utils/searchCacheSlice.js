import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    addCacheData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addCacheData } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
