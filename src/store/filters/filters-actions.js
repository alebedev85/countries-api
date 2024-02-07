const SET_REGION = 'filters/SET_REGION';
const SET_COUNTRY_NAME = 'filters/SET_COUNTRY_NAME';

const setRegion = (region) => ({
    type: SET_REGION,
    payload: region,
})

const setCountryName = (name) => ({
    type: SET_COUNTRY_NAME,
    payload: name,
})

export {SET_REGION, SET_COUNTRY_NAME, setRegion, setCountryName}