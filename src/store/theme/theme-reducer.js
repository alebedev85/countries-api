import { THEME_LIGHT, THEME_DARK } from './theme-actions'

const initialState = {
    theme: 'light',
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_LIGHT:
            console.log('light');
            return {
                theme: 'light',
            }
        case THEME_DARK:
            console.log('dark');
            return {
                theme: 'dark',
            }
        default:
            return state
    }
}