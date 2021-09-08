import { ThunkAction } from "redux-thunk";

import { configureStore , Action } from "@reduxjs/toolkit";

import launchReducer from './reducer/launcheSlice'

const store = configureStore({
  reducer: {
    launch: launchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
