import { ADD_LOGIN, GET_LOGIN } from "./actionTypes";


export const addUserLoginAction = user => ({
    type: ADD_LOGIN,
    payload: user
})
export const getUserLoginAction = user => ({
    type: GET_LOGIN,
    payload: user
})