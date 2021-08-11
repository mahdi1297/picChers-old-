import {
  GET_USER_BY_ID,
  GET_USERS_BY_ID,
  GET_USER_BY_USERNAME_AND_ID,
} from "../actions/actionTypes";

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USER_BY_ID:
      return payload;
    default:
      return [];
  }
};
export const getUsersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USERS_BY_ID:
      return payload;
    default:
      return [];
  }
};

export const getUserByIdAndUsernameReducer = (
  state = [],
  { type, payload }
) => {
  switch (type) {
    case GET_USER_BY_USERNAME_AND_ID:
      return payload;
    default:
      return state;
  }
};
