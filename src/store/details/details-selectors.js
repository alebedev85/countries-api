export const selectDetailsStatus = (state) => ({
    status: state.details.status,
    error: state.details.error,
})

export const selectCountryByName = (state) => state.details.details
export const selectBordersCountries = (state) => state.details.borders