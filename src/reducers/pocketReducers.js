import {
  ADD_TO_POCKET,
  REMOVE_FROM_POCKET,
  GET_ALL_POCKETS,
} from "./../actions/actionTypes";

export const pocketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_POCKETS:
      return [state];
    case ADD_TO_POCKET:
        return [...state, payload];
    case REMOVE_FROM_POCKET:
      return [...state.filter((x) => x.id !== payload.id)];
    default:
      return state;
  }
};
