import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuBody, List, Button, SumMenu } from "./style";
import { FiSearch, FiMoon, FiPocket } from "react-icons/fi";
import { menuRout } from "./routes";
import HeaderAvatar from "./avatar";
import PocketSubmenu from "../subMenu/pocketSubmenu";
import { useDispatch, useSelector } from "react-redux";
import { applyThemeAction } from "../../../actions/themActions";
import "./animation.css";

const HeaderMenuNav = () => {
  const [routes, setRoutes] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPocketWindow, setShowPocketWindow] = useState(false);
  const [themVal, setThemeVal] = useState(false);
  const theme = useSelector((store) => store.darkMode);
  const currentUser = useSelector((store) => store.token);

  const dispatch = useDispatch();

  useEffect(() => {
    setRoutes(menuRout);
  }, []);

  const themeHandler = () => {
    setThemeVal(!themVal);
    if (themVal) dispatch(applyThemeAction("yes"));
    if (!themVal) dispatch(applyThemeAction("no"));
  };

  const onMouseEnterPocketHandler = () => {
    setShowPocketWindow(true);
  };
  const onMouseLeavePocketHandler = () => {
    setShowPocketWindow(false);
  };
  const setShowSidebarTrueHandler = () => {
    setShowSidebar(true);
  };
  const setShowSidebarFalseHandler = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <MenuBody theme={theme}>
        <List>
          <FiSearch size={16} />
        </List>
        <List onClick={themeHandler}>
          <FiMoon size={16} />
        </List>
        <List
          onMouseEnter={onMouseEnterPocketHandler}
          onMouseLeave={onMouseLeavePocketHandler}
        >
          <FiPocket size={16} />
          <PocketSubmenu
            showPocketWindow={showPocketWindow}
            className={showPocketWindow ? "active" : "disactive"}
          />
        </List>
        {currentUser !== null &&
          currentUser.length !== 0 &&
          currentUser.permission === "Admin" && (
            <List>
              <Link to="/admin-panel/home">Admin</Link>
            </List>
          )}
        {routes.map((item, i) =>
          item.path === "" ? (
            <List
              key={i}
              onMouseEnter={setShowSidebarTrueHandler}
              onMouseLeave={setShowSidebarFalseHandler}
            >
              <p>{item.name}</p>
              <SumMenu className={showSidebar ? "active" : "disactive"}>
                {item.subMenus.map((mn, i) => (
                  <li key={i}>{mn.name}</li>
                ))}
              </SumMenu>
            </List>
          ) : (
            <List key={i}>
              <Link to={item.path}>{item.name}</Link>
            </List>
          )
        )}
        {(currentUser.length === 0) | (currentUser === null) ? (
          <List>
            <Button>
              <Link to="/auth">Login</Link>
            </Button>
          </List>
        ) : (
          <List>
            <HeaderAvatar theme={theme} currentUser={currentUser} />
          </List>
        )}
      </MenuBody>
    </>
  );
};

export default HeaderMenuNav;
