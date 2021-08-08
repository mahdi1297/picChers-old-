import React from "react";
import { Link } from "react-router-dom";
import { SubList, List } from "./style";
import { Row } from "./../../../shared/elements/layout";

const PocketSubmenu = ({ showPocketWindow }) => {
  return (
    <SubList className={showPocketWindow ? "active" : "disactive"}>
      <ul>
        <List>
          <span>Last saved to pocket</span>
          <Row align={true} justify="space-between">
            <Link to="/">
              <img
                src="https://cdn01.zoomit.ir/2021/3/poco-x3-on-his-hands.jpg?w=768"
                alt="x"
                width="100%"
              />
            </Link>
            <Link to="/pockets">
              <img
                src="https://cdn01.zoomit.ir/2021/3/poco-x3-on-his-hands.jpg?w=768"
                alt="x"
                width="100%"
              />
            </Link>
          </Row>
        </List>
      </ul>
      <Link to="/">
        <p>See All Pockets...</p>
      </Link>
    </SubList>
  );
};

export default PocketSubmenu;