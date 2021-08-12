import styled from "styled-components";
import { colors } from "./../../shared/theme/color";

export const Body = styled.div`
  width: 100%;
  height: auto;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  with: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  margin-top: -5px;
  width: 100%;
  height: auto;
  padding: 0;
`;

export const TagItem = styled.span`
  padding: 3px 5px;
  background: ${colors.default.WHITE_THEME};
  width: auto !important;
  border: 1px solid ${colors.default.LIGNT_GRAY}!important;
  border-radius: 10px;
  margin: 5px !important;
  display: inline-block;
  & a {
    color: ${colors.default.BLACK};
    font-size: 14px;
  }
  &:hover {
    background: ${colors.default.LIGHT_BLUE_THEME}!important;
  }
  &:hover a {
    color: ${colors.default.WHITE_THEME};
  }
`;