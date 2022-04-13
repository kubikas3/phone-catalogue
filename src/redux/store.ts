import favoriteReducer from "./favoriteSlice";
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import brandsReducer from "./brandsSlice";
import phonesReducer from "./phoneSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  favorite: favoriteReducer,
  brands: brandsReducer,
  phones: phonesReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["favorite"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
