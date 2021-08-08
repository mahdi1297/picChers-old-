import styled, { css } from "styled-components";
import { colors } from "./../../../shared/theme/color";

export const Body = styled.div`
  width: 17%;
  height: 100vh;
  box-shadow: 0 0 20px rgb(8, 21, 66, 15%);
  position: fixed;
  top: 70px;
  background: #fff;
  padding-bottom: 100px;
  & svg {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
`;
export const Head = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  & span {
    font-size: 14px;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  height: auto;
  padding: 0;
  & li {
    height: auto;
  }
  & a {
    padding: 15px 30px;
    display: block;
    color: ${colors.default.BLACK};
    font-size: 14px;
  }
  & a:hover,
  p:hover {
    color: ${colors.default.SUPPORT_THEME};
  }
  & p {
    width: 100%;
    padding: 15px 30px;
    margin: 0;
    display: block;
    color: ${colors.default.BLACK};
    font-size: 14px;
    cursor: pointer;
  }
`;

export const SubUl = styled.ul`
  width: 100%;
  width: 100%;
  margin-left: 0px;
  height: 0;
  overflow: hidden;
  & a {
    padding: 10px;
    display: flex;
    align-items: center;
    color: #909090;
  }
  ${(props) =>
    props.open === "open" &&
    css`
      height: auto;
    `}
  ${(props) =>
    props.open === "close" &&
    css`
      height: 0;
    `}
`;
