import { SET_REGION, SET_COUNTRY_NAME } from './filters-actions';

const initialState = {
    region: '',
    countryName: '',
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION: {
            return {
                ...state,
                region: action.payload
            }
        }
        case SET_COUNTRY_NAME: {
            return {
                ...state,
                countryName: action.payload
            }
        }
        default: {
            return state;
        }
    }
}