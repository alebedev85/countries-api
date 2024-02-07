import { api } from "../../api"

const SET_COUNTRIES = 'countries/SET_COUNTRIES';
const SET_LOADING = 'countries/SET_LOADING';
const SET_ERROR = 'countries/SET_ERROR';
const SET_COUNTRY = 'countries/SET_COUNTRY';
const RESET_COUNTRY = 'countries/RESET_COUNTRY';

const addCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
})

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

const loadCountries = () => (dispatch, _, {endPoints}) => {
    dispatch(setLoading())
    api.get(endPoints.ALL_COUNTRIES)
        .then(data => dispatch(addCountries(data)))
        .catch(err => dispatch(setError(err)))
}

const loadOneCountry = (name) => (dispatch, _, {endPoints}) => {
    dispatch(setLoading())
    api.get(endPoints.searchByCountry(name))
        .then(data => dispatch(setCountry(data)))
        .catch(err => dispatch(setError(err)))
}

export { SET_COUNTRIES, SET_LOADING, SET_ERROR, SET_COUNTRY, RESET_COUNTRY, loadCountries, loadOneCountry, resetCountry}