import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CountryDataType } from "../Types";
import { api } from "../../api"

const initialState = {
  status: 'idle',
  list: [],
  error: null,
}

export const loadCountries = createAsyncThunk(
  '@@countries/load-all',
  async (_, { extra: endPoints }) => {
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
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'received';
        state.list = action.payload;

      })
  }
})

export default countriesSlice.reducer;
export const selectFilteredCountries = (state, filter) => state.countries.list.filter(c =>
  c.name.toLowerCase().includes(filter.name.toLowerCase()) && c.region.includes(filter.region)
)