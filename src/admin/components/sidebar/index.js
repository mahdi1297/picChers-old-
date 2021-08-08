import React, { useState } from "react";
import { Body, Head, Ul, SubUl } from "./style";
import { Link } from "react-router-dom";
import { Row } from "./../../../shared/elements/style";
import { adminRoute } from "./../../routes";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";

const AdminDashboardSidebar = ({ currentUser }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(0);

  const openSubMenuHandler = (id) => {
    setOpenSubmenu(!openSubmenu);
    setSubmenuIndex(id);

  };

  return (
    <>
      <Body style={{overflow: 'auto'}}>
          <PerfectScrollbar>
        <Head>
          <img
            alt="x"
            width="60"
            height="60"
            src={currentUser && currentUser.profileimage}
          />
          <span>
            {currentUser && currentUser.name}{" "}
            {currentUser && currentUser.lastname}
          </span>
        </Head>
          <Ul>
            {adminRoute &&
              adminRoute.map((Item) => (
                <li key={Item.id}>
                  {Item.path === "" ? (
                    <Row align={true}>
                      <p onClick={() => openSubMenuHandler(Item.id)}>
                        <Item.icon size={15} />
                        {Item.title}
                      </p>
                      <SubUl open={submenuIndex === Item.id && "open"}>
                        {Item.subMenu &&
                          Item.subMenu.map((item) => (
                            <Link key={item.id} to={item.path}>
                              <item.icon size={15} />
                              {item.title}
                            </Link>
                          ))}
                      </SubUl>
                    </Row>
                  ) : (
                    <Link to={Item.path}>
                      <Row align={true}>
                        <Item.icon size={15} />
                        {Item.title}
                      </Row>
                    </Link>
                  )}
                </li>
              ))}
          </Ul>
        </PerfectScrollbar>
      </Body>
    </>
  );
};

export default React.memo(AdminDashboardSidebar);
