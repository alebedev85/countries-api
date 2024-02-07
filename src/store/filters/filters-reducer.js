import { SET_REGION, SET_COUNTRY_NAME, RESET_FILTERS } from './filters-actions';

const initialState = {
    region: '',
    name: '',
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
                name: action.payload
            }
        }
        case RESET_FILTERS: {
            return initialState
        }
        default: {
            return state;
        }
    }
}