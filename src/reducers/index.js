import { combineReducers } from "redux";
import { modalReducer } from "./modalReducers";
import { pocketReducer } from "./pocketReducers";
import { loginReducer } from "./loginReducers";
import { applyThemeReducer } from "./themeReducers";

export const reducer = combineReducers({
    modal: modalReducer,
    pocket: pocketReducer,
    login: loginReducer,
    darkMode: applyThemeReducer
})