import { ADD_LOGIN, GET_LOGIN, GET_USER_LOGIN } from "./../actions/actionTypes";

export const loginReducer = (state = '', { type, payload }) => {
  switch (type) {
    case GET_USER_LOGIN:
      return {...payload};
    case ADD_LOGIN:
      return {...payload};
    case GET_LOGIN:
      return [state];
    default:
      return state;
  }
};
