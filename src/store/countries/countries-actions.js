import { api } from "../../api"

const SET_COUNTRIES = 'countries/SET_COUNTRIES';
const SET_LOADING = 'countries/SET_LOADING';
const SET_ERROR = 'countries/SET_ERROR';

const addCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
})

const setLoading = () => ({
    type: SET_LOADING
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

const loadCountries = () => (dispatch, _, { endPoints }) => {
    dispatch(setLoading())
    api.get(endPoints.ALL_COUNTRIES)
        .then(data => dispatch(addCountries(data)))
        .catch(err => dispatch(setError(err)))
}

export { SET_COUNTRIES, SET_LOADING, SET_ERROR, loadCountries }