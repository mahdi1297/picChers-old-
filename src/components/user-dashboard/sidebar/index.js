import React from "react";
import { Body, Head, Ul } from "./style";
import { userDashboardSidebar } from "../../../data/user-dashboard-sidebar";
import { Link } from "react-router-dom";
import { Row } from "./../../../shared/elements/style";

const UserDashboardSidebar = ({ currentUser }) => {
  return (
    <Body>
      <Head>
        <img alt="x" width="60" height="60" src={currentUser && currentUser.profileimage} />
        <span>{currentUser &&  currentUser.name} {" "}
        {currentUser &&  currentUser.lastname}</span>
      </Head>
      <Ul>
        {userDashboardSidebar &&
          userDashboardSidebar.map((Item) => (
            <li key={Item.id}>
              <Link to={Item.path}>
                <Row align={true}>
                  <Item.icon size={15} />
                  {Item.title}
                </Row>
              </Link>
            </li>
          ))}
      </Ul>
    </Body>
  );
};

export default React.memo(UserDashboardSidebar);
