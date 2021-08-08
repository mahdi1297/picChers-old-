import styled from "styled-components";
import { colors } from "./../../shared/theme/color";
import { size } from "./../../shared/theme/size";

export const Body = styled.div`
  width: 274px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999999999999999999999;
  background: #f9f9f9;
  background: ${colors.default.WHITE_THEME};
  box-shadow: 1px 5px 8px #ccc;
  @media (min-width: 710px) {
    display: none;
  }
`;
export const BodyStepTwo = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999999999999999999;
  background: #fff;
  @media (min-width: 710px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 80px;
  font-size: ${size.default.lg};
  font-weight: 100;
  padding: 10px;
  & a {
    color: ${colors.default.MAIN_THEME};
  }
  & svg {
    position: relative;
    top: 5px;
    margin-right: 5px;
  }
  & svg {
    position: relative;
    top: 5px;
    margin-right: 5px;
  }
`;

export const Ul = styled.div`
  width: 100%;
  margin-top: 20px;
  height: auto;
  padding: 0;
  list-style: none;
  padding-left: 20px;
  & li{
    color: ${colors.default.BLACK};
    font-size: 16px;
    padding: 5px;
  }
  & a{
    color: ${colors.default.BLACK};
    font-size: 16px;
  }
  & span{
    color: ${colors.default.BLACK};
    display: block;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
  }
  & span:hover{
    color: ${colors.default.SUPPORT_THEME};
  }
  & a{
    color: ${colors.default.BLACK};
    font-size: 16px;
  }
`
export const Sub = styled.li`
  &:hover a{
    color: ${colors.default.SUPPORT_THEME}
  }
`