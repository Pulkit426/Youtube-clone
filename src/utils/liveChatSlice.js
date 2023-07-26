import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
