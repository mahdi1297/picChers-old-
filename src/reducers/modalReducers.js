import { MODAL_OPEN, MODAL_CLOSE } from "../actions/actionTypes";

export const modalReducer = (state = false, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return payload;
    case MODAL_CLOSE:
      return payload;
    default:
      return state;
  }
};
