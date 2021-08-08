import { ADD_LOGIN, GET_LOGIN } from "./../actions/actionTypes";

export const loginReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ADD_LOGIN:
      return {...payload};
    case GET_LOGIN:
      return [state];
    default:
      return state;
  }
};
