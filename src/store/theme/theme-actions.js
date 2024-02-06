const THEME_LIGHT = 'theme/THEME_LIGHT';
const THEME_DARK = 'theme/THEME_DARK';

const themeLight = () => ({
    type: THEME_LIGHT
});

const themeDark = () => ({
    type: THEME_DARK
});

export { THEME_LIGHT, THEME_DARK, themeLight, themeDark}