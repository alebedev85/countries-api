import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from './countries-actions';

const initialState = {
    status: 'idle',
    list: [],
    error: null,
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                list: action.payload,
                status: 'received'
            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            }

        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                errors: action.payload,
            }
        default:
            return state;
    }
}