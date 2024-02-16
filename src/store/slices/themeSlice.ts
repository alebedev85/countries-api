import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type initialStateType = {
  theme: 'light' | 'dark'
}

const initialState : initialStateType = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    themeLight: (state) => {
      state.theme ='light'
    },
    themeDark: (state) => {
      state.theme ='dark'
    }
  }
});

export default themeSlice.reducer
export const { themeLight, themeDark } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme
