import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import axios from 'axios';
import logger from "redux-logger";

import { rootReducer } from './root-reducer'
import * as endPoints from '../config';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({
                client: axios,
                endPoints
            }),
            logger
        ),
    )
)

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunk.withExtraArgument(),
//         logger
//         ),
// )