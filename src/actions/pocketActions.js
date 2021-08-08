import {
  ADD_TO_POCKET,
  REMOVE_FROM_POCKET,
  GET_ALL_POCKETS,
} from "./actionTypes";

export const getAllPocketsAction = (pockets) => ({
  type: GET_ALL_POCKETS,
  payload: pockets,
});

export const addToPocketAction = (pocket) => ({
  type: ADD_TO_POCKET,
  payload: pocket,
});

export const removeFromPocketAction = (pocket) => ({
  type: REMOVE_FROM_POCKET,
  payload: pocket,
});
