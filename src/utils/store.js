import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchCacheSlice from "./searchCacheSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchCache: searchCacheSlice,
  },
});

export default store;
