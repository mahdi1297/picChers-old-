import { MODAL_OPEN, MODAL_CLOSE } from "./actionTypes";

export const modalOpenAction = (statue) => ({
  type: MODAL_OPEN,
  payload: statue,
});

export const modalCloseAction = (statue) => ({
  type: MODAL_CLOSE,
  payload: statue,
});
