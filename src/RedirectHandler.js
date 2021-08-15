/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboardSidebar from "./admin/components/sidebar";
import UserDashboardSidebar from "./components/user-dashboard/sidebar";
import SmallSpinner from "./shared/elements/loaders/small-spinner";
import Navigation from "./components/navigation";
import Header from "./components/header";
import BlogSingle from "./components/blog/blog-single";
import { useSelector, useDispatch } from "react-redux";
import AccountSettings from "./pages/account-settings";
import { postCall } from "./api/methods";
import { getUserTokenDataAction } from "./actions/loginActions";
import jwt from "jsonwebtoken";

const Admin = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/admin"));
  });
});
const UserDashboard = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/userDashboard"));
  });
});
const Container = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/container/container"));
  });
});
const ImagePage = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/imagePage"));
  });
});
const UserProfile = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/userProfile"));
  });
});
const Auth = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/auth"));
  });
});
const Blog = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/blog"));
  });
});

const Pockets = lazy(() => {
  return new Promise((resolve, rejcet) => {
    resolve(import("./components/pocket-view"));
  });
});

const RedirectHandler = () => {
  const userToken = localStorage.getItem("token");
  const decode = jwt.decode(JSON.parse(userToken));
  const dispatch = useDispatch();

  console.log("sd;lfkgjnsdlfkjhnsdfkkgj");

  useEffect(() => {
    const fetchUserData = async () => {
      if (decode !== null) {
        const request = await postCall(
          {
            username: decode.username,
            email: decode.email,
          },
          "user/user-validation"
        );
        dispatch(getUserTokenDataAction(request.data.userData));
      }
    };
    fetchUserData();
  }, []);

  const currentUser = useSelector((store) => store.token);

  return (
    <Router>
      <Header />
      {/* <Banner /> */}
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<SmallSpinner />}>
            <Container />
          </Suspense>
        </Route>
        <Route exact path="/blog">
          <Suspense fallback={<SmallSpinner />}>
            <Blog />
          </Suspense>
        </Route>
        <Route exact path="/auth">
          <Suspense fallback={<SmallSpinner />}>
            <Auth />
          </Suspense>
        </Route>
        <Route exact path={`/photos/:id`}>
          <Suspense fallback={<SmallSpinner />}>
            <ImagePage />
          </Suspense>
        </Route>
        <Route exact path="/user-profile/:id">
          <Suspense fallback={<SmallSpinner />}>
            <UserProfile />
          </Suspense>
        </Route>

        <Route exact path="/blog/:slug">
          <Suspense fallback={<SmallSpinner />}>
            <BlogSingle />
          </Suspense>
        </Route>
        <Route exact path="/pockets">
          <Suspense fallback={<SmallSpinner />}>
            <Pockets />
          </Suspense>
        </Route>
        <Route exact path="/account">
          <Suspense fallback={<SmallSpinner />}>
            <AccountSettings />
          </Suspense>
        </Route>

        <Route
          path="/user-dashboard/:layout"
          render={() => (
            <>
              <UserDashboardSidebar currentUser={currentUser} />
              <Suspense fallback={<SmallSpinner />}>
                <UserDashboard currentUser={currentUser} />
              </Suspense>
            </>
          )}
        />
        <Route
          path="/admin-panel/:layout"
          render={() =>
            currentUser && currentUser.permission === "Admin" ? (
              <>
                <AdminDashboardSidebar currentUser={currentUser} />
                <Suspense fallback={<SmallSpinner />}>
                  <Admin />
                </Suspense>
              </>
            ) : null
          }
        />
        {/* 404 route */}
        <Route path="*" exact>
          <br />
          <br />
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default RedirectHandler;
