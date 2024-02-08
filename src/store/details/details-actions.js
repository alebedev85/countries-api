import { api } from "../../api";

const SET_LOADING = 'details/SET_LOADING';
const SET_ERROR = 'details/SET_ERROR';
const SET_COUNTRY = 'details/SET_COUNTRY';
const RESET_COUNTRY = 'details/RESET_COUNTRY';

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
})

const resetCountry = () => ({
    type: RESET_COUNTRY,
})

const setLoading = () => ({
    type: SET_LOADING
})

const setError= (err) => ({
    type: SET_ERROR,
    payload: err,
})

const loadCountryByName = (name) => (dispatch, _, {endPoints}) => {
    dispatch(setLoading())
    api.get(endPoints.searchByCountry(name))
        .then(data => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err)))
}

export { SET_LOADING, SET_ERROR, SET_COUNTRY, RESET_COUNTRY, loadCountryByName, resetCountry}