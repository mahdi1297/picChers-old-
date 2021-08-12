import { SEARCH_IMAGE } from "../actions/actionTypes";

export const searchImageReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_IMAGE:
      return payload;
    default:
      return [];
  }
};
