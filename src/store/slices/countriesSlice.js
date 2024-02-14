import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
      return 'Failed to fetch all todos.'
    }
  }

)

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'idle';
        state.error = 'Something went wrong!';
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'received';
        state.list = action.payload;

      })
  }
})

export default countriesSlice.reducer;