import { APPLY_THEME } from "./actionTypes";

export const applyThemeAction = (theme) => ({
    type: APPLY_THEME,
    payload: theme
})