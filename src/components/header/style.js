import styled, { css } from "styled-components";
import { colors } from "../../shared/theme/color";

export const Body = styled.div`
  width: 100%;
  height: 70px;
  display: none;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999999999999999999;
  background: #fff;
  flex-direction: column;
  box-shadow: 0 0 20px rgb(8, 21, 66, 12%);
  @media (min-width: 710px) {
    display: flex !important;
  }
  max-width: 100% !important;
  ${(props) =>
    props.theme === "yes" &&
    css`
      background: #606060;
    `}
`;
export const Container = styled.div`
  width: 100%;
  height: 70px;
  margin: auto;
  max-width: 1700px;
`;
export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  padding-top: 5px;
`;

export const Logo = styled.div`
  & h1 {
    font-size: 17px;
    margin-left: 10px;
    color: ${colors.default.MAIN_THEME};
  }
`;
export const HeaderMenu = styled.nav`
  width: auto;
  height: 55px;
`;
