import {
  GET_USER_BY_ID,
  GET_USERS_BY_ID,
  GET_USER_BY_USERNAME_AND_ID,
  GET_USER_DATA,
} from "../actions/actionTypes";

export const getUserDataReducer = (state = [], { type, payload }) => {
  console.log(payload);

  switch (type) {
    case GET_USER_DATA:
      return payload;
    default:
      return state;
  }
};

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USER_BY_ID:
      return payload;
    default:
      return state;
  }
};
export const getUsersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USERS_BY_ID:
      return payload;
    default:
      return state;
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
