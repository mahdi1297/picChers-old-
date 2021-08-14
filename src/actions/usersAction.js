import { getCall } from "../api/methods";
import {
  GET_USER_BY_ID,
  GET_USER_BY_USERNAME_AND_ID,
  GET_USERS_BY_ID,
} from "./actionTypes";

export const getUserByIdAction = (path) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`user/${path}`);
      await dispatch({ type: GET_USER_BY_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getUsersByIdAction = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`user/${id}`);
      console.log(data)
      await dispatch({ type: GET_USERS_BY_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getUserByIdAndUsernameAction = (username, id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`user/${username}/${id}`);
      await dispatch({ type: GET_USER_BY_USERNAME_AND_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

