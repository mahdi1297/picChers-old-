import { GET_ALL_BLOGS, GET_BLOG_BY_SLUG } from "./actionTypes";
import { getCall } from "../api/methods";

export const getAllBlogsActions = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall("blog/all-blogs");
      await dispatch({ type: GET_ALL_BLOGS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getBlogBySlugAction = (slug) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCall(`blog/${slug}`);
      await dispatch({ type: GET_BLOG_BY_SLUG, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
