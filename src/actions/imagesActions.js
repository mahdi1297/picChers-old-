import { GET_ALL_IMAGES, GET_IMAGE_BY_ID, CLREAR_IMAGE } from "./actionTypes";
import { getCall } from "../api/methods";

export const getallImagesAction = (path) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall("images");
      await dispatch({ type: GET_ALL_IMAGES, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getImageById = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`images/${id}`);
      await dispatch({ type: GET_IMAGE_BY_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearImageAction = (clear) => ({
  type: CLREAR_IMAGE,
  payload: clear,
});
