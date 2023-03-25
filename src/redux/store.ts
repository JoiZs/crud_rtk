import { configureStore } from "@reduxjs/toolkit";
import { sampleApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const storeConf = configureStore({
  reducer: {
    [sampleApi.reducerPath]: sampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sampleApi.middleware),
});

setupListeners(storeConf.dispatch);

export type RootState = ReturnType<typeof storeConf.getState>;

export type AppDispatch = typeof storeConf.dispatch;
