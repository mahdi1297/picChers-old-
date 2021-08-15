import { getCall } from "../api/methods";
import { GET_CATEGORY_DATA } from "./actionTypes";

export const getAllImageCateogoriesAction = (slug) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`images/category/${slug}`);
      if(data.length !== 0 ){
        await dispatch({ type: GET_CATEGORY_DATA, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
