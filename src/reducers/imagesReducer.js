import {
  GET_ALL_IMAGES,
  GET_IMAGE_BY_ID,
  CLREAR_IMAGE,
} from "../actions/actionTypes";

export const imagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_IMAGES:
      return payload
    default:
      return state;
  }
};

export const imageByIdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_IMAGE_BY_ID:
      return payload;
    case CLREAR_IMAGE:
      return [];
    default:
      return state;
  }
};
