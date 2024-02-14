import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    themeLight: () => {
      return {
        theme: 'light',
      }
    },
    themeDark: () => {
      return {
        theme: 'dark',
      }
    }
  }
});

export default themeSlice.reducer
export const { themeLight, themeDark } = themeSlice.actions;
export const selectTheme = (state) => state.theme
