import { GET_CATEGORY_DATA } from "../actions/actionTypes";

export const getAllImageCateogoriesReducer = (
  state = [],
  { type, payload }
) => {
  switch (type) {
    case GET_CATEGORY_DATA:
      return payload;
    default:
      return state;
  }
};
