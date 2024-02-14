import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light',
}

const themeSlice = createSlice({
    name: '@@theme',
    initialState,
    reducers: {
        themeLight: (() => {
            return {
                theme: 'light',
            }
        }),
        themeDark: (() => {
            return {
                theme: 'dark',
            }
        })
    }
});

export const {themeLight, themeDark} = themeSlice.actions;
export default themeSlice.reducer