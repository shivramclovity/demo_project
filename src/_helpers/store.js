import rootReducer from "../_reducers";
import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";bvbby5yyhy

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
  //   preloadedState,
  //   enhancers: [reduxBatch],
});
