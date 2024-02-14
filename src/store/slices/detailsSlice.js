import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api"

const initialState = {
  status: 'idle',
  details: null,
  error: null,
  borders: []
}

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  async (name, { extra: endPoints }) => {
    try {
      return api.get(endPoints.searchByCountry(name))
    } catch {
      return 'Failed to fetch all todos.'
    }
  }
)

export const loadBordersCountries = createAsyncThunk(
  '@@details/load-borders-by-countries',
  async (countries, { extra: endPoints }) => {
    try {
      return api.get(endPoints.filterByCode(countries))
        .then(data => data.map(c => c.name))
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
      .addCase(loadCountryByName.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'idle';
        state.error = 'Something went wrong!';
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'received';
        state.details = action.payload[0];
      })
      .addCase(loadBordersCountries.fulfilled, (state, action) => {
        state.borders = action.payload;
      })
  }
});

export default detailsSlice.reducer;
export const { resetCountry } = detailsSlice.actions
export const selectCountryByName = (state) => state.details.details;
export const selectBordersCountries = (state) => state.details.borders;
