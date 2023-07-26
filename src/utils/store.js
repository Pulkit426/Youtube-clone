import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchCache: searchCacheSlice,
    liveChat: liveChatSlice,
  },
});

export default store;
