import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { FiltersType } from "./filtersSlice";
import { CountryDataType } from "../Types";
import * as endPoints from '../../config';
import { api } from "../../api"

type initialStateType = {
  status: string,
  list: CountryDataType[],
  error: string | null,
}


const initialState: initialStateType = {
  status: 'idle',
  list: [],
  error: null,
}

export const loadCountries = createAsyncThunk(
  '@@countries/load-all',
  async () => {
    try {
      return api.get(endPoints.ALL_COUNTRIES)
    } catch {
      return 'Failed to fetch all countries.'
    }
  }
)

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Faild to load countries';
      })
      .addCase(loadCountries.fulfilled, (state, action: PayloadAction<CountryDataType[]>) => {
        state.error = null;
        state.status = 'received';
        state.list = action.payload;

      })
  }
})

export default countriesSlice.reducer;
export const selectFilteredCountries = (state: RootState, filter: FiltersType) => state.countries.list.filter(c =>
  c.name.toLowerCase().includes(filter.name.toLowerCase()) && c.region.includes(filter.region)
)