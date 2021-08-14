import { combineReducers } from "redux";
import { modalReducer } from "./modalReducers";
import { pocketReducer } from "./pocketReducers";
import { loginReducer } from "./loginReducers";
import { applyThemeReducer } from "./themeReducers";
import { imagesReducer, imageByIdReducer } from "./imagesReducer";
import {
  usersReducer,
  getUserByIdAndUsernameReducer,
  getUsersReducer,
} from "./usersReducer";
import { getAllBlogsReducer, getBlogBySlugReducer } from "./blogReducers";
import { getAllImageCateogoriesReducer } from "./categoryReducers";

export const reducer = combineReducers({
  modal: modalReducer,
  pocket: pocketReducer,
  login: loginReducer,
  darkMode: applyThemeReducer,
  images: imagesReducer,
  imageById: imageByIdReducer,
  userById: usersReducer,
  usersById: getUsersReducer,
  userByUsernameAndId: getUserByIdAndUsernameReducer,
  allBlogs: getAllBlogsReducer,
  blogBySlug: getBlogBySlugReducer,
  allImageCategories: getAllImageCateogoriesReducer,
});
