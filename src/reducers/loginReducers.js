import {
  ADD_LOGIN,
  GET_LOGIN,
  GET_USER_LOGIN,
  GET_USER_DATA,
} from "./../actions/actionTypes";

export const loginReducer = (state = "", { type, payload }) => {
  switch (type) {
    case GET_USER_LOGIN:
      return { ...payload };
    case ADD_LOGIN:
      return { ...payload };
    case GET_LOGIN:
      return [state];
    default:
      return state;
  }
};

export const getTokenDataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USER_DATA:
      return payload;
    default:
      return state;
  }
};
