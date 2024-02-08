import { api } from "../../api";

const SET_LOADING = 'details/SET_LOADING';
const SET_ERROR = 'details/SET_ERROR';
const SET_COUNTRY = 'details/SET_COUNTRY';
const RESET_COUNTRY = 'details/RESET_COUNTRY';
const SET_BORDERS_COUNTRIES = 'details/SET_BORDERS_COUNTRIES';
const RESET_BORDERS_COUNTRIES = 'details/RESET_BORDERS_COUNTRIES';


const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
})

const setBordersCountries = (countries) => ({
    type: SET_BORDERS_COUNTRIES,
    payload: countries,
})

const resetCountry = () => ({
    type: RESET_COUNTRY,
})

const setLoading = () => ({
    type: SET_LOADING
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

const loadCountryByName = (name) => (dispatch, _, { endPoints }) => {
    dispatch(setLoading())
    api.get(endPoints.searchByCountry(name))
        .then(data => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err)))
}

const loadBordersCountries = (countries) => (dispatch, _, { endPoints }) => {
    dispatch(setLoading())
    api.get(endPoints.filterByCode(countries))
        .then(data => dispatch(setBordersCountries(data.map(c => c.name))))
        .catch(err => console.error)
}

export { SET_LOADING, SET_ERROR, SET_COUNTRY, RESET_COUNTRY, SET_BORDERS_COUNTRIES, loadCountryByName, resetCountry, loadBordersCountries }