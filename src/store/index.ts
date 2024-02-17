import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import logger from "redux-logger";
// import * as endPoints from '../config';

import themeReducer from './slices/themeSlice';
import countriesReducer from './slices/countriesSlice';
import filtersReducer from './slices/filtersSlice';
import detailsReducer from './slices/detailsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    filters: filtersReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}
)

export default store;
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;