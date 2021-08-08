import React from "react";
import { Body } from "./style";
import { colors } from "../../theme/color";
import { FiActivity, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const AlertField = ({ type, message }) => {
  let background;
  let Icon;
  let color;
  switch (type) {
    case "success":
      background = colors.bg.SUCCESS;
      color = colors.bg.WHITE;
      Icon = FiCheckCircle;
      break;
    case "warning":
      background = "rgba(255,229,100,.3)";
      color = colors.default.BLACK;
      Icon = FiActivity;
      break;
    case "danger":
      background = colors.bg.SECENDORY;
      color = colors.bg.WHITE;
      Icon = FiAlertCircle;
      break;
    default:
      break;
  }

  return (
    <Body color={color} background={background}>
      <Icon size={14} />
      {message}
    </Body>
  );
};

export default AlertField;
