export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})

export const selectCountries = (state) => state.countries.list

export const selectFilteredCountries = (state, filter) => state.countries.list.filter(c =>
    c.name.toLowerCase().includes(filter.name.toLowerCase()) && c.region.includes(filter.region)

)