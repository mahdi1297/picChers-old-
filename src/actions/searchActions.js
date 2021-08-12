import { SEARCH_IMAGE } from "./actionTypes";
import { getCall } from "./../api/methods";

export const searchImageAction = (searchedValue) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(
        `image-category/${searchedValue}`
      );
      await dispatch({ type: SEARCH_IMAGE, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
