import React, { useState } from "react";
import { SidebarBody } from "./style";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from "react-share";
import { FiFacebook, FiHeart, FiLinkedin, FiSend } from "react-icons/fi";
import { colors } from "../../../shared/theme/color";
import { useSelector } from "react-redux";
import "./style.css";

const url = `${window.location.origin}${window.location.pathname}`;

const Sidebar = ({ title, theme }) => {
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(0);

  const currentUser = useSelector((state) => state.login);

  const tooltipMouseEnterHandler = (item) => {
    setHoverItem(item);
    setHover(true);
  };
  const tooltipMouseLeaveHandler = () => {
    setHover(false);
  };

  const likeHandler = () => {
    const user = currentUser[0].username;
    if (user) {
      console.log(user);
      
    }
  };

  return (
    <SidebarBody theme={theme}>
      <FacebookShareButton
        url={url}
        onMouseEnter={() => tooltipMouseEnterHandler(1)}
        onMouseLeave={tooltipMouseLeaveHandler}
      >
        <FiFacebook size={22} />
        <span
          className={`tooltip ${
            hover && hoverItem === 1 ? "active-tooltip" : "deactive-tooltip"
          }`}
        >
          share in facebook
        </span>
      </FacebookShareButton>
      <LinkedinShareButton
        title={title}
        url={url}
        onMouseEnter={() => tooltipMouseEnterHandler(2)}
        onMouseLeave={tooltipMouseLeaveHandler}
      >
        <FiLinkedin size={22} />
        <span
          className={`tooltip ${
            hover && hoverItem === 2 ? "active-tooltip" : "deactive-tooltip"
          }`}
        >
          share in linkedin
        </span>
      </LinkedinShareButton>
      <TelegramShareButton
        title={title}
        separator=":: "
        url={url}
        onMouseEnter={() => tooltipMouseEnterHandler(3)}
        onMouseLeave={tooltipMouseLeaveHandler}
      >
        <FiSend size={22} />
        <span
          className={`tooltip ${
            hover && hoverItem === 3 ? "active-tooltip" : "deactive-tooltip"
          }`}
        >
          share in telegtam
        </span>
      </TelegramShareButton>
      <div
        onMouseEnter={() => tooltipMouseEnterHandler(4)}
        onMouseLeave={tooltipMouseLeaveHandler}
        style={{ marginLeft: "5px" }}
        onClick={likeHandler}
      >
        <FiHeart size={22} color={colors.bg.PRIMARY} />
        <span
          className={`tooltip ${
            hover && hoverItem === 4 ? "active-tooltip" : "deactive-tooltip"
          }`}
        >
          tap to like
        </span>
      </div>
    </SidebarBody>
  );
};

export default Sidebar;
