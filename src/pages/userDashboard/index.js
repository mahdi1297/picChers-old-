import React from "react";
import { Body } from "./style";
import Head from "../../components/head";
import UserDashboardHome from "../../components/user-dashboard/home";
import UserNewPhoto from "../../components/user-dashboard/new-photo";
import { Route, Switch } from "react-router-dom";
import UserDashboardPhotos from "../../components/user-dashboard/photos";
import { Row } from "../../shared/elements/layout";

const UserDashboard = ({ currentUser }) => {
  document.getElementById("body").style.background = "#f8f8f8";

  return (
    <>
      <Head title="user dashboard | pickchers" />
      <Body>
        <Row justify="space-between">
          <Switch>
            <Route exact path="/user-dashboard/home">
              <UserDashboardHome currentUser={currentUser} />
            </Route>
            <Route exact path="/user-dashboard/posts">
              <UserDashboardPhotos currentUser={currentUser} />
            </Route>
            <Route exact path="/user-dashboard/new-photo">
              <UserNewPhoto id={currentUser._id} />
            </Route>
          </Switch>
        </Row>
      </Body>
    </>
  );
};

export default UserDashboard;
