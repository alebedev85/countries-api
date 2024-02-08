import { SET_LOADING, SET_ERROR, SET_COUNTRY, RESET_COUNTRY, SET_BORDERS_COUNTRIES } from './details-actions';

const initialState = {
    status: 'idle',
    details: null,
    error: null,
    borders: []
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                details: action.payload,
                status: 'received'
            }
        case SET_BORDERS_COUNTRIES:
            return {
                ...state,
                borders: action.payload,
                status: 'received'
            }
        case RESET_COUNTRY:
            return {
                ...state,
                details: null,
                borders: [],
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