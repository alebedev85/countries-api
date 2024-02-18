import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as endPoints from '../../config';
import { api } from "../../api";
import { CountryDataType } from "../Types";
import { RootState } from "..";

type initialStateType = {
  status: string,
  details: CountryDataType | null,
  error: string | null,
  borders: string[]
}

const initialState: initialStateType = {
  status: 'idle',
  details: null,
  error: null,
  borders: []
}

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  async (name: string) => {
    try {
      return api.get(endPoints.searchByCountry(name))
    } catch {
      return 'Failed to fetch all todos.'
    }
  }
)

export const loadBordersCountries = createAsyncThunk(
  '@@details/load-borders-by-countries',
  async (countries: string[]) => {
    try {
      return api.get(endPoints.filterByCode(countries))
    } catch {
      return 'Failed to fetch borders'
    }
  }
)

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    resetCountry: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Something went wrong!';
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'received';
        state.details = action.payload[0];
      })
      .addCase(loadBordersCountries.fulfilled, (state, action: PayloadAction<CountryDataType[]>) => {
        state.borders = action.payload.map(c => c.name);
      })
  }
});

export default detailsSlice.reducer;
export const { resetCountry } = detailsSlice.actions
export const selectCountryByName = (state: RootState) => state.details.details;
export const selectBordersCountries = (state: RootState) => state.details.borders;
