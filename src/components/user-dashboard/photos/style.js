import styled from "styled-components";
import { colors } from "../../../shared/theme/color";

export const Sidebar = styled.div`
  width: 23%;
  height: auto;
  height: fit-content;
  background: #fff;
  position: sticky;
  top: 80px;
  box-shadow: 0 0 20px rgb(8, 21, 66, 5%);
  border-radius: 10px;
  padding: 10px;
  & ul {
    width: 100%;
    height: auto;
    margin-top: -5px;
    padding: 0;
  }
`;
export const P = styled.p`
  width: 100%;
  padding: 0 12px;
  font-size: 16px;
  color: ${colors.default.BLACK};
  font-weight: 600;
`;
export const List = styled.li`
  width: 100%;
  padding: 5px 0;
  padding-left: 25px;
  font-size: 14px;
  color: #606060;
  &:hover {
    cursor: pointer;
    background: ${colors.default.LIGHT_BLUE_THEME};
    border-radius: 5px;
  }
`;

export const Body = styled.div`
  width: 72%;
  height: auto;
  box-shadow: 0 0 20px rgb(8, 21, 66, 5%);
  border-radius: 10px;
  background: #fff;
  padding: 10px;
`;
