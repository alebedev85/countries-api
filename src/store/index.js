import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import * as endPoints from '../config';

import themeReducer from './slices/themeSlice';
import countriesReducer from './slices/countriesSlice';
// import { filtersReducer } from './filters/filters-reducer';
// import { detailsReducer } from './details/details-reducer';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
        // filters: filtersReducer,
        // details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: endPoints
        }
    }).concat(logger)
}
)