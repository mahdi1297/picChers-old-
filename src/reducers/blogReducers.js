import { GET_ALL_BLOGS, GET_BLOG_BY_SLUG } from "../actions/actionTypes";

export const getAllBlogsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOGS:
      return payload;
    default:
      return [];
  }
};

export const getBlogBySlugReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_BLOG_BY_SLUG:
      return payload;
    default:
      return [];
  }
};
