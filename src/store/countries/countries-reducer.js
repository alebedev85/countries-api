import { SET_COUNTRIES, SET_LOADING, SET_ERROR, SET_COUNTRY, RESET_COUNTRY } from './countries-actions';

const initialState = {
    status: 'idle',
    list: [],
    country: null,
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

        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload,
                status: 'received'
            }
        case RESET_COUNTRY:
            return {
                ...state,
                country: null,
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