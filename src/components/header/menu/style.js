import styled, { css } from "styled-components";
import { colors } from "../../../shared/theme/color";

export const MenuBody = styled.ul`
  width: auto;
  height: 40px;
  margin-top: 5px;
  display: none;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 710px) {
    display: flex !important;
  }
  ${(props) =>
    props.theme === "yes" &&
    css`
      & svg,
      a,
      p {
        color: #fff !important;
      }
    `}
`;

export const List = styled.div`
  cursor: pointer;
  padding: 9px 5px;
  & a {
    padding: 9px 10px;
    font-size: 15px;
    color: ${colors.default.BLACK};
  }
  & p {
    padding: 9px 10px;
    font-size: 15px;
    color: ${colors.default.BLACK};
    cursor: pointer;
  }
  & svg {
    color: ${colors.default.BLACK};
    margin-top: 5px;
    margin-left: 10px;
  }
`;
export const Button = styled.button`
  border: none;
  background: ${colors.default.LIGHT_BLUE_THEME};
  margin-top: 3px;
  padding: 5px 10px;
  border-radius: 3px;
  & a {
    color: ${colors.default.MAIN_THEME};
  }
  &:hover a {
    color: ${colors.default.BLACK};
  }
`;
export const SumMenu = styled.ul`
  width: 250px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  box-shadow: 1px 2px 18px #eee;
  z-index: 9999999999999999999;
  background: #fff;
  & li {
    color: ${colors.default.BLACK};
  }
`;

export const Avatar = styled.li`
  width: 40px;
  height: 100%;
  & img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const AvatarMenu = styled.ul`
  width: 150px;
  height: 200px;
  position: absolute;
  z-index: 999999999999;
  background: ${colors.bg.WHITE};
  right: 0;
  top: 60px;
  box-shadow: 1px 2px 18px #eee;
  border-radius: 5px;
  flex-dirction: column;
  padding: 0;
  flex-wrap: wrap;
  ${(props) =>
    props.theme === "yes" &&
    css`
      background: ${colors.default.BLACK}!important;
      & li{
          color: ${colors.bg.WHITE};
      }
      & li:hover a{
          color: ${colors.default.BLACK}!important;
      }
    `}
`;
export const AvatarList = styled.li`
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${colors.default.BLACK};
  & a, span {
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    font-size: 14px;
    color: ${colors.default.BLACK};
  }
  &:hover {
    background: ${colors.default.SUPPORT_THEME};
  }
  & span{
    margin: 0; 
  }
`;
