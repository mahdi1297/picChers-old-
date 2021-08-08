import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogCategoryList from "./components/blog-categories-list";
import BlogsList from "./components/blog-list";
import OperateBlogCategory from "./components/create-blog-category";
import OperateImageCategory from "./components/create-image-category";
import EditBlog from "./components/edit-blog";
import ImageCategoryList from "./components/image-categories-list";
import NewBlog from "./components/new-blog";
import UsersList from "./components/user";
import UsersComments from "./components/users-comments";

const AdminDashboard = () => {
  return (
    <Switch>
      <Route exact path="/admin-panel/home">
        this is Admin Dashboard
      </Route>
      <Route exact path="/admin-panel/new-blog">
        <NewBlog />
      </Route>
      <Route exact path="/admin-panel/blogs-categories-list">
        <BlogCategoryList />
      </Route>
      <Route exact path="/admin-panel/operate-blog-category">
        <OperateBlogCategory />
      </Route>
      <Route exact path="/admin-panel/blog-list">
        <BlogsList />
      </Route>
      <Route exact path="/admin-panel/edit-blog/:slug">
        <EditBlog />
      </Route>
      <Route exact path="/admin-panel/users-comments">
        <UsersComments />
      </Route>
      <Route exact path="/admin-panel/users">
        <UsersList />
      </Route>
      <Route exact path="/admin-panel/image-category-list">
        <ImageCategoryList />
      </Route>
      <Route exact path="/admin-panel/image-catgegories">
        <OperateImageCategory />
      </Route>
    </Switch>
  );
};

export default AdminDashboard;
