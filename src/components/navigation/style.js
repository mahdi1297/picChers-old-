import styled from "styled-components";
import { colors } from "./../../shared/theme/color";

export const Body = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 999999999999999999999999999999;
  background: ${colors.default.WHITE_THEME};
  box-shadow: 5px -3px 14px rgba(0, 0, 0, 0.197);
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 710px) {
    display: none;
  }
  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }
  & p {
    color: ${colors.default.BLACK};
    font-size: 12px;
    margin: 0;
  }
  & svg {
    color: ${colors.default.BLACK};
  }
  & a:hover {
    background: ${colors.default.LIGHT_BLUE_THEME};
  }
  & span:hover {
    background: ${colors.default.LIGHT_BLUE_THEME};
  }
`;
