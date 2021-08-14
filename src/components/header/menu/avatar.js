import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarMenu, AvatarList } from "./style";
import { FiSettings, FiFeather, FiLogOut, FiPocket } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addUserLoginAction } from "../../../actions/loginActions";
import PropTypes from "prop-types";

const HeaderAvatar = ({ currentUser, theme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const setShowMenuTrueHandler = () => setShowMenu(true);
  const setShowMenuFasleHandler = () => setShowMenu(false);

  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(addUserLoginAction(""));
    localStorage.clear();
    window.location.href = "/";
  };

  const redirectHandler = () => {
    window.location.href = "/account";
  };

  return (
    <>
      {currentUser && (
        <Avatar
          onMouseEnter={setShowMenuTrueHandler}
          onMouseLeave={setShowMenuFasleHandler}
        >
          <img
            width="40"
            height="40"
            src={currentUser.profileimage}
            alt={"x"}
          />
          <AvatarMenu
            theme={theme && theme}
            className={showMenu ? "active" : "disactive"}
          >
            <AvatarList className="main_avatar-list">
              {currentUser && currentUser.name}{" "}
              {currentUser && currentUser.lastname}
            </AvatarList>
            <AvatarList>
              <Link to="/user-dashboard/home">
                Profile
                <FiFeather />
              </Link>
            </AvatarList>
            <AvatarList>
              <Link to="/pockets">
                Pockets
                <FiPocket />
              </Link>
            </AvatarList>
            <AvatarList onClick={redirectHandler}>
              <span>
                Settings
                <FiSettings />
              </span>
            </AvatarList>
            <AvatarList onClick={signOutHandler}>
              <Link to="/">
                Log Out
                <FiLogOut />
              </Link>
            </AvatarList>
          </AvatarMenu>
        </Avatar>
      )}
    </>
  );
};

HeaderAvatar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default HeaderAvatar;
