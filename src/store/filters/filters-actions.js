const SET_REGION = 'filters/SET_REGION';
const SET_COUNTRY_NAME = 'filters/SET_COUNTRY_NAME';
const RESET_FILTERS = 'filters/RESET_FILTERS';

const setRegion = (region) => ({
    type: SET_REGION,
    payload: region,
})

const setCountryName = (name) => ({
    type: SET_COUNTRY_NAME,
    payload: name,
})

const resetFilters = () => ({
    type: RESET_FILTERS,
})

export {SET_REGION, SET_COUNTRY_NAME, RESET_FILTERS, setRegion, setCountryName, resetFilters}