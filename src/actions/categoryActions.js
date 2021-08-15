import { getCall } from "../api/methods";
import { GET_ALL_IMAGE_CATEGORIES } from "./actionTypes";

export const getAllImageCateogoriesAction = (path) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall("image-category/all");
      await dispatch({ type: GET_ALL_IMAGE_CATEGORIES, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
