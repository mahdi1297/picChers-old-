import { APPLY_THEME } from "../actions/actionTypes";

export const applyThemeReducer = (state = 'no', { type, payload }) => {
  switch (type) {
    case APPLY_THEME:
      return payload
    default:
      return state;
  }
};
