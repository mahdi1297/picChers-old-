import { postCall } from "../api/methods";
import { ADD_LOGIN, GET_LOGIN, GET_USER_LOGIN } from "./actionTypes";

export const getLoginUser = (info) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await postCall(info, "user/logintoken");

      if(data.status === 200){
         localStorage.setItem('token', JSON.stringify(data.token))
      }

      await dispatch({ type: GET_USER_LOGIN, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUserLoginAction = (user) => ({
  type: ADD_LOGIN,
  payload: user,
});

export const getUserLoginAction = (user) => ({
  type: GET_LOGIN,
  payload: user,
});
