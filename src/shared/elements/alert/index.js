import React from "react";
import { colors } from "../../theme/color";
import { Body } from "./style";
import { FiActivity, FiAlertTriangle, FiCheck } from "react-icons/fi";

const Alert = ({ type, children }) => {
  let background;
  let icon;
  let color;
  switch (type) {
    case "warning":
      background = 'rgba(255,229,100,.3)';
      icon = <FiActivity size={14} />;
      color = colors.default.BLACK;
      break;
    case "danger":
      background = colors.bg.DANGER;
      icon = <FiAlertTriangle size={14} />;
      color = colors.default.WHITE_THEME;
      break;
    case "success":
      background = colors.bg.SUCCESS;
      icon = <FiCheck size={14} />;
      color = colors.default.WHITE_THEME;
      break;
    default:
      break;
  }

  return (
    <Body background={background} color={color}>
      {icon}
      {children}
    </Body>
  );
};
export default Alert;
