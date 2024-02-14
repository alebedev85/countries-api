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

export const { setRegion, setCountryName, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer