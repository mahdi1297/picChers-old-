import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "./style";
import { colors } from "../../theme/color";

export const TitleH1 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H1
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize}
      align={align}
      border={border}
      theme={theme}
    >
      {children}
    </H1>
  );
};
export const TitleH2 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H2
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize ? fontSize : "22px"}
      theme={theme}
      align={align}
      border={border}
    >
      {children}
    </H2>
  );
};
export const TitleH3 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H3
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize}
      align={align}
      border={border}
      theme={theme}
    >
      {children}
    </H3>
  );
};
export const TitleH4 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H4
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize}
      align={align}
      border={border}
      theme={theme}
    >
      {children}
    </H4>
  );
};
export const TitleH5 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H5
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize}
      align={align}
      border={border}
      theme={theme}
    >
      {children}
    </H5>
  );
};
export const TitleH6 = ({
  color,
  fontSize,
  children,
  align,
  border,
  theme,
}) => {
  return (
    <H6
      color={color ? color : colors.default.BLACK}
      fontSize={fontSize}
      align={align}
      border={border}
      theme={theme}
    >
      {children}
    </H6>
  );
};
