import { GET_ALL_IMAGE_CATEGORIES } from "../actions/actionTypes";

export const getAllImageCateogoriesReducer = (
  state = [],
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_IMAGE_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
