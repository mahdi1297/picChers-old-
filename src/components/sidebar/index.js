import React, { useState } from "react";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";
import { Body, Logo, Ul, Sub } from "./style";
import { FiChevronRight, FiSlack } from "react-icons/fi";
import { Col, Row } from "./../../shared/elements/layout";
import "./style.css";
import { Link } from "react-router-dom";
import { menuRout } from "../header/menu/routes";

const Sidebar = ({ statue }) => {
  const [subMenuOpen , setSubMenuOpen] = useState(false);
  const openSubMneuHandler = () => setSubMenuOpen(!subMenuOpen)
  return (
    <>
      <Body className={statue ? "deactive" : "active"}>
        {/* <BodyStepTwo
          className={statue ? "deactive-step-two" : "active-step-two"}
        > */}
          <PerfectScrollbar>
            <Logo>
              <Row justify="space-between" align={true}>
                <div>
                  <Link to="/">
                    <FiSlack size={25} />
                    <span>picChers</span>
                  </Link>
                </div>
                <div>
                  <FiChevronRight />
                </div>
              </Row>
              <Col>
                <Ul>
                  <li>
                    <Link to="/user-dashboard/home">mahdi Alipour</Link>
                  </li>
                </Ul>
                <Ul>
                  {menuRout.map((item, i) => (
                    <div key={i}>
                      {item.path.length === 0 ? (
                        <li key={i} onClick={openSubMneuHandler}>
                          <span>{item.name}</span>
                          <ul className={subMenuOpen ? 'open': 'close'}>
                            {item.subMenus.map((li, key) => (
                              <Sub key={key}>
                                <Link to={li.path}>{li.name}</Link>
                              </Sub>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={i}>
                          <Link to={item.path}>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </Ul>
              </Col>
            </Logo>
          </PerfectScrollbar>
        {/* </BodyStepTwo> */}
      </Body>
    </>
  );
};

export default Sidebar;
