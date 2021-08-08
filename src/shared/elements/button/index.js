import React from "react";
import { ButtonContainer } from "./style";

export const Button = ({
  size,
  children,
  color,
  background,
  radius,
  type,
  block,
  to,
  onclick
}) => {
  let paddings;
  let fonrSize;
  switch (size) {
    case "lg":
      paddings = "10px 19px";
      fonrSize = "18px";
      break;
    case "md":
      paddings = "8px 16px";
      fonrSize = "14px";
      break;
    case "sm":
      paddings = "4px 8px";
      fonrSize = "14px";
      break;
    default:
      paddings = "4px 8px";
      fonrSize = "14px";
      break;
  }

  return (
    <ButtonContainer
      padding={paddings}
      color={color}
      fonrSize={fonrSize}
      background={background}
      radius={radius}
      type={type}
      block={block}
      to={to}
      onClick={onclick}
    >
      {children}
    </ButtonContainer>
  );
};
