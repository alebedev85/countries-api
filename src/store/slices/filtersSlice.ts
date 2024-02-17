import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { RegionOptionKeyType } from "../Types";


export type FiltersType = {
  region: RegionOptionKeyType,
  name: string,
}

const initialState: FiltersType = {
  region:'',
  name: '',
}

const filtersSlice = createSlice({
  name: '@@filters',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<RegionOptionKeyType>)=> {
      state.region = action.payload
    },
    setCountryName: (state, action: PayloadAction<string>)=> {
      state.name = action.payload
    },
    resetFilters: ()=> {
      return initialState
    },
  }

})

export default filtersSlice.reducer
export const { setRegion, setCountryName, resetFilters } = filtersSlice.actions;
export const selectFiltersName = (state: RootState) => state.filters.name;
export const selectFiltersRegion = (state: RootState) => state.filters.region;
export const selectAllFilters = (state: RootState) => state.filters;