import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: '',
  name: '',
}

const filtersSlice = createSlice({
  name: '@@filters',
  initialState,
  reducers: {
    setRegion: (state, action)=> {
      state.region = action.payload
    },
    setCountryName: (state, action)=> {
      state.name = action.payload
    },
    resetFilters: ()=> {
      return initialState
    },
  }

})

export default filtersSlice.reducer
export const { setRegion, setCountryName, resetFilters } = filtersSlice.actions;
export const selectFiltersName = (state) => state.filters.name;
export const selectFiltersRegion = (state) => state.filters.region;
export const selectAllFilters = (state) => state.filters;