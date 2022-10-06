import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FoodApi } from "services/FoodService";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
  value: userReducer,
  [FoodApi.reducerPath]: FoodApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FoodApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
