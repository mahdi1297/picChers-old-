import styled, { css } from "styled-components";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";

export const Body = styled.div`
  top: 80px;
  border-right: 1px solid ${colors.default.LIGNT_GRAY};
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  background: rgb(248, 248, 258);
  @media (min-width: 1000px) {
    position: fixed;
    width: 20%;
    height: 100vh;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  ${(props) =>
    props.theme === "yes" &&
    css`
      background: #404040;
    `}
`;
export const TopProfile = styled.div`
  width: 100%;
  height: auto;
  margin-top: -40px;
  @media (min-width: 1000px) {
    padding-top: 10px;
  }
  @media (min-width: 700px) {
    padding-top: 10px;
    margin-top: 0px;
  }

  & p {
    margin-top: 5px;
  }
  & span {
    margin-top: -10px;
    color: ${colors.default.GRAY};
    font-size: ${size.default.sm};
  }
  ${(props) =>
    props.theme === "yes" &&
    css`
      & p {
        color: ${colors.default.WHITE_THEME};
      }
      & span {
        margin-top: -10px;
        color: ${colors.default.WHITE_THEME};
      }
    `}
`;

export const Description = styled.p`
  width: 90%;
  text-align: center;
  margin-top: 5px;
  font-size: ${size.default.sm};
  color: ${colors.default.BLACK};
  padding-top: 10px;
`;
export const Scales = styled.div`
  width: 80%;
  height: 40px;
  ${(props) =>
    props.theme === "yes" &&
    css`
      & div {
        color: ${colors.default.WHITE_THEME}!important;
      }
      & svg {
        color: ${colors.default.WHITE_THEME}!important;
      }
    `}
`;
export const List = styled.div`
  width: 25%;
  height: 40px;
  font-size: ${size.default.xs};
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${colors.default.GRAY};
  & svg {
    position: relative;
    margin-bottom: 5px;
    color: ${colors.default.BLACK};
  }
`;
export const ButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -30px;
`;
